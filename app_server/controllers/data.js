var m_data = [

    {  "name": "Latte",
        "OS": "$1.99",
    },

    {
         "name": "Ice Coffee",
        "OS": "$0.99",
    },

    {
        "name": "Caramel Latte",
        "OS": "$2.49",
    },

    {
        "name": "Frappuccino",
        "OS": "$2.99",
    },

    {
        "name": "Dark Roast",
        "OS": "$1.49",
    },

    {
        "name": "Hot Coffee",
        "OS": "$0.79",
    },
    

    {
        "name": "White Hot Chocolate",
        "OS": "$1.79",
    }]

module.exports.m_list = function (req, res) {
    res.render('list-display.pug', {
        coffee: m_data
    });
};

module.exports.index = function (req, res) {
    res.render('index', {
        name: 'Coffee Shop'
    });
};
