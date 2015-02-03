Ext.define('flipCard.view.Main', {
    extend: 'Ext.Container',
    requires: ['Ext.dataview.List'],
    xtype: 'main',

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'list',
                flex: 1,
                cls: 'cardList',
                data: [
                    {
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmutKZEdPbmECsx6UfPCyEcOUdQIUxQpLrzsFZT8f92EP9P_SW',
                        value: '1'
                    },
                    {
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmutKZEdPbmECsx6UfPCyEcOUdQIUxQpLrzsFZT8f92EP9P_SW',
                        value: '1'
                    },
                    {
                        src: 'http://img.teapic.com/thumbs/201210/23/141801svogawknnrosurpm.jpg.middle.jpg',
                        value: '2'
                    },
                    {
                        src: 'http://img.teapic.com/thumbs/201210/23/141801svogawknnrosurpm.jpg.middle.jpg',
                        value: '2'
                    },
                    {
                        src: 'http://pic.nipic.com/2007-10-16/20071016115846744_2.jpg',
                        value: '3'
                    },
                    {
                        src: 'http://pic.nipic.com/2007-10-16/20071016115846744_2.jpg',
                        value: '3'
                    },
                    {
                        src: 'http://www.yooyoo360.com/photo/2009-1-3/20090113193625738.jpg',
                        value: '4'
                    },
                    {
                        src: 'http://www.yooyoo360.com/photo/2009-1-3/20090113193625738.jpg',
                        value: '4'
                    }
                ],
                itemTpl: [
                    '<div class="turn180">' +
                        '<div class="flipper">' +
                            '<div>' +
                                '<img src="http://wcc723.github.io/images/2013-winter/cd1.jpg">' +
                            '</div>' +
                            '<div>' +
                                '<img src={src} data-value={value}>' +
                            '</div>' +
                        '</div>' +
                    '</div>'
                ]
            }
        ]
    }
});
