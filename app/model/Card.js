Ext.define("flipCard.model.Card", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'cardId',
        fields: [
            { name: 'cardId', type: 'string' },
            { name: 'src', type: 'string'},
            { name: 'value', type: 'auto'}
        ]
    }
});