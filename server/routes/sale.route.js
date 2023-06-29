const SaleRoute = require('express').Router();
const SaleModel = require('../models/sale');


SaleRoute.get('/', async (req,res) => {
    try {
        let data = await SaleModel.FindAllSale();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
})

SaleRoute.get('/byMax/:max', async (req,res) => {
    try {
        let {max} = req.params 
        console.log(typeof(max));
        let data = await SaleModel.FindMaxPrice(Number(max));
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
})

SaleRoute.get('/byPrice/:byPrice', async (req,res) => {
    try {
        let {byPrice} = req.params 
        console.log(byPrice);
        let data = await SaleModel.FindByPrice(Number(byPrice));
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
})
SaleRoute.put('/:id', async (req,res) => {
    try {
        let {id} = req.params 
        let {price} = req.body;
        console.log(typeof(id));
        let data = await SaleModel.UpdateItemPrice(id ,{price});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
})

module.exports = SaleRoute;