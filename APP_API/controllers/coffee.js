const getCoffee = (req,res) => {
    res
    .status(200)
    .json({'status': 'success'});
};

const createCoffee = (req,res) => {
    res
    .status(200)
    .json({'status': 'success'});
};

const getSingleCoffee = (req,res) => {
    res
    .status(200)
    .json({'status': 'success'});
};

const updateCoffee = (req,res) => {
    res
    .status(200)
    .json({'status': 'success'});
};

const deleteCoffee = (req,res) => {
    res
    .status(200)
    .json({'status': 'success'});
};

module.exports = {
    getCoffee,
    createCoffee,
    getSingleCoffee,
    updateCoffee,
    deleteCoffee
};