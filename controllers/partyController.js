
const express = require('express')

const partyApi = require('../models/lootModel.js')

const partyRouter = express.Router()


partyRouter.post('/addparty', (req, res) => {
  partyApi.addParty(req.body).then((newParty) => {
    partyApi.addBag(newParty).then((newBag) => {
      partyApi.addWallet(newBag).then(() => {
        res.redirect('/homepage')
      })
    })
  })
})

partyRouter.get('/getallparty', (req, res) => {
  partyApi.getAllParty().then(allParty => {
    res.send(allParty)
  })
})

partyRouter.get('/getsingleparty/:partyID', (req, res) => {
  partyApi.getSingleParty(req.params.partyID).then(singleParty => {
    res.send(singleParty)
  })
})


partyRouter.get('/getbag/:partyID', (req, res) => {
  partyApi.getBag(req.params.partyID).then(partyBag => {
    res.send(partyBag)
  })
})

partyRouter.delete('/deleteparty/:partyID', (req, res) => {
  partyApi.deleteParty(req.params.partyID).then((partyID) => {
    res.redirect(`/homepage`)
  })
})



module.exports = {
  partyRouter
}
