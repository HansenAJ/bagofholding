
const mongoose = require('./connection.js')

//global.sampleModel = [];


const PartySchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Default Party'
  },
  picture:{
    type: String,
    default: 'image.jpg'
  }
})

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'PlayerName'
  },
  picture:{
    type: String,
    default: 'Player.jpg'
  },
  partyID : String
})

//Research ObjectID for schema

const BagSchema = new mongoose.Schema({
  partyID: String,
  name: {
    type: String,
    default: 'Bag Name'
  },
  picture:{
    type: String,
    default: 'Bag.jpg'
  }
})

const ItemSchema = new mongoose.Schema({
  ownBagID: String,
  name: {
    type: String,
    default: 'Item Name'
  },
  weight: Number,
  quantity: Number,
  value: String,
  notes: String,
  bookRef: String
 })

 const WealthSchema = new mongoose.Schema({
   ownBagID: String,
   plat: {
     type: Number,
     default: 1
   },
   gold: {
    type: Number,
    default: 2
  },
   elec: {
    type: Number,
    default: 3
  },
   silv: {
    type: Number,
    default: 4
  },
   copp: {
    type: Number,
    default: 5
  }
 })

const PartyCollection = mongoose.model('Party', PartySchema)
const PlayerCollection = mongoose.model('Player', PlayerSchema)
const BagCollection = mongoose.model('Bag', BagSchema)
const ItemCollection = mongoose.model('Item', ItemSchema)
const WealthCollection = mongoose.model('Wealth', WealthSchema)


function getHelloWorldString() {
  return ['hello world edited again','another hello string']
}

const getAllParty = () => { return PartyCollection.find() }
const getSingleParty = (partyID) => { return PartyCollection.findById(partyID)}
const getAllPlayer = (partyID) => { return PlayerCollection.find({partyID: partyID})}
const getSinglePlayer = (playerID) => { return PlayerCollection.findById(playerID)}
const getBag = (partyID) => { return BagCollection.find({partyID: partyID})}
const getItem = (itemID) => { return ItemCollection.findById(itemID)}
const getAllItems = (ownBagID) => { return ItemCollection.find({ownBagID: ownBagID})}
const getWealth = (ownBagID) => { return WealthCollection.find({ownBagID: ownBagID})}

const addParty = (newParty) => { return PartyCollection.create(newParty)}
const addPlayer = (newPlayer) => { return PlayerCollection.create(newPlayer)}
const addItem = (newItem) => { return ItemCollection.create(newItem)}
const addWallet= (newWallet) => { return WealthCollection.create( {ownBagID: newWallet._id}) }
const addBag = (newBag) => { return BagCollection.create( {partyID: newBag._id}) }

const updateItem = (updatedItem) => { return ItemCollection.findByIdAndUpdate(updatedItem._id, {ownBagID : updatedItem.newID})}
const deleteItem = (deleteItem => { return ItemCollection.findByIdAndDelete(deleteItem)})

/*
const deleteParty
const deletePlayer

const moveItem
*/


module.exports = {
  addParty,
  addPlayer,
  addItem,
  addWallet,
  addBag,
  deleteItem,
  getHelloWorldString,
  getAllParty,
  getSingleParty,
  getAllPlayer,
  getSinglePlayer,
  getBag,
  getItem,
  getAllItems,
  updateItem,
  getWealth
}
