
const express = require('express')

const playerApi = require('../models/lootModel.js')

const playerRouter = express.Router()


playerRouter.post('/addplayer', (req, res) => {
  playerApi.addPlayer(req.body).then((newPlayer) => {
    playerApi.addWallet(newPlayer).then(() => {
      //res.send(newPlayer)
      res.redirect(`/playerpage/${newPlayer._id}/${newPlayer.partyID}`)
    })
  })
})

playerRouter.get('/getallplayers/:partyID', (req, res) => {
  playerApi.getAllPlayer(req.params.partyID).then(allPlayer => {
    res.send(allPlayer)
  })
})

playerRouter.get('/getsingleplayer/:playerID', (req, res) => {
  playerApi.getSinglePlayer(req.params.playerID).then(singlePlayer => {
    res.send(singlePlayer)
  })
})


playerRouter.delete('/deleteplayer/:playerID/:partyID', (req, res) => {
  playerApi.deletePlayer(req.params.playerID).then((partyID) => {
    res.redirect(`/partylist/${req.params.partyID}`)
  })
})


module.exports = {
  playerRouter
}
