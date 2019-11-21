const brewerSchema = new mongoose.Schema({
    coffee_name: {
        type: String,
        required: true,
    }
    
});

const coffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength : 5,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        minlength : 10,
        maxlength: 100
    },
    price: {
        type: String,
        required: true,
        maxlength: 20
    }
});

mongoose.model('coffee', coffeeSchema);