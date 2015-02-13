Ext.define('flipCard.store.Cards', {
    extend: 'Ext.data.Store',
    requires: 'flipCard.model.Card',

    config: {
        model: 'flipCard.model.Card',
        data: []
    },
    loadList: function() {
        console.log('Store Cards ==> loadList - remove all cards');
        this.removeAll();

        var items = [
            {
                cardId: '1',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmutKZEdPbmECsx6UfPCyEcOUdQIUxQpLrzsFZT8f92EP9P_SW',
                value: '1'
            },
            {
                cardId: '2',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmutKZEdPbmECsx6UfPCyEcOUdQIUxQpLrzsFZT8f92EP9P_SW',
                value: '1'
            },
            {
                cardId: '3',
                src: 'http://img.teapic.com/thumbs/201210/23/141801svogawknnrosurpm.jpg.middle.jpg',
                value: '2'
            },
            {
                cardId: '4',
                src: 'http://img.teapic.com/thumbs/201210/23/141801svogawknnrosurpm.jpg.middle.jpg',
                value: '2'
            },
            {
                cardId: '5',
                src: 'http://pic.nipic.com/2007-10-16/20071016115846744_2.jpg',
                value: '3'
            },
            {
                cardId: '6',
                src: 'http://pic.nipic.com/2007-10-16/20071016115846744_2.jpg',
                value: '3'
            },
            {
                cardId: '7',
                src: 'http://www.yooyoo360.com/photo/2009-1-3/20090113193625738.jpg',
                value: '4'
            },
            {
                cardId: '8',
                src: 'http://www.yooyoo360.com/photo/2009-1-3/20090113193625738.jpg',
                value: '4'
            }
        ];

        for (var i=0, len=items.length; i<len; i++) {
            this.add({'text': items[i].text});
            this.sync();
        }
    }
});