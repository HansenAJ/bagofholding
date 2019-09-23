/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const lootApi = require('../models/lootModel.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const lootRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
lootRouter.get('/helloworld', (req, res) => {
  res.json(lootApi.getHelloWorldString())
})

lootRouter.post('/addparty', (req, res) => {
  lootApi.addParty(req.body).then((newParty) => {
    lootApi.addBag(newParty).then((newBag) => {
      lootApi.addWallet(newBag).then(() => {
        res.redirect('/homepage')
      })
    })
  })
})

lootRouter.get('/getallparty', (req, res) => {
  lootApi.getAllParty().then(allParty => {
    res.send(allParty)
  })
})

lootRouter.get('/getsingleparty/:partyID', (req, res) => {
  lootApi.getSingleParty(req.params.partyID).then(singleParty => {
    res.send(singleParty)
  })
})

lootRouter.get('/getwallet/:playerID', (req, res) => {
  lootApi.getWallet(req.params.playerID).then(wallet => {
    res.send(wallet)
  })
})


lootRouter.post('/addplayer', (req, res) => {
  lootApi.addPlayer(req.body).then((newPlayer) => {
    lootApi.addWallet(newPlayer).then(() => {
      //res.send(newPlayer)
      res.redirect(`/playerpage/${newPlayer._id}`)
    })
  })
})

lootRouter.get('/getallplayers/:partyID', (req, res) => {
  lootApi.getAllPlayer(req.params.partyID).then(allPlayer => {
    res.send(allPlayer)
  })
})

lootRouter.get('/getsingleplayer/:playerID', (req, res) => {
  lootApi.getSinglePlayer(req.params.playerID).then(singlePlayer => {
    res.send(singlePlayer)
  })
})

lootRouter.post('/additem', (req, res) => {
  lootApi.addItem(req.body).then(newItem => {
    res.send(newItem)
    //res.redirect(`/playerpage/${newItem.ownBagID}`)
  })
})

lootRouter.get('/getbag/:partyID', (req, res) => {
  lootApi.getBag(req.params.partyID).then(partyBag => {
    res.send(partyBag)
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

lootRouter.delete('/deleteitem/:itemID/:playerID', (req, res) => {
  lootApi.deleteItem(req.params.itemID).then((itemID) => {
    //res.send(itemID)
    res.redirect(`/playerpage/${req.params.playerID}`)
  })
})



/* Step 6
 *
 * Export the router from the file.
 *
 */

module.exports = {
  lootRouter
}
