
const express = require('express')
const app = express()
const methodOverride = require('method-override')


const { lootRouter } = require('./controllers/lootController.js')
const { partyRouter } = require('./controllers/partyController.js')
const { playerRouter } = require('./controllers/playerController.js')



app.use(express.urlencoded({extended: true}))


app.use(express.json())

app.use(methodOverride('_method'))



app.use(express.static(`${__dirname}/client/build`))



app.use('/lootapi', lootRouter)
app.use('/partyapi', partyRouter)
app.use('/playerapi', playerRouter)


app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
