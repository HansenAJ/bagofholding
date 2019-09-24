
const express = require('express')

const lootApi = require('../models/lootModel.js')

const lootRouter = express.Router()

lootRouter.get('/helloworld', (req, res) => {
  res.json(lootApi.getHelloWorldString())
})

lootRouter.get('/getwallet/:playerID', (req, res) => {
  lootApi.getWallet(req.params.playerID).then(wallet => {
    res.send(wallet)
  })
})

lootRouter.post('/additem', (req, res) => {
  lootApi.addItem(req.body).then(newItem => {
    res.send(newItem)
    //res.redirect(`/playerpage/${newItem.ownBagID}`)
  })
})

lootRouter.get('/getitem/:itemID', (req, res) => {
  lootApi.getItem(req.params.itemID).then(itemID => {
    res.send(itemID)
  })
})

lootRouter.get('/getallitems/:ownBagID', (req, res) => {
  lootApi.getAllItems(req.params.ownBagID).then(singleItem => {
    res.send(singleItem)
  })
})

lootRouter.put('/updateitem', (req, res) => {
  lootApi.updateItem(req.body).then(updatedItem => {
    console.log(updatedItem)
    res.send(updatedItem)
  })
})

lootRouter.put('/updatewallet', (req, res) => {
  lootApi.updateWallet(req.body).then(updatedWallet => {
    console.log("Controller Wallet: " + updatedWallet)
    res.send("req.body : " + req.body)
  })
})

lootRouter.delete('/deleteitem/:itemID/:playerID/:partyID', (req, res) => {
  lootApi.deleteItem(req.params.itemID).then((itemID) => {
    //res.send(itemID)
    res.redirect(`/playerpage/${req.params.playerID}/${req.params.partyID}`)
  })
})


module.exports = {
  lootRouter
}
