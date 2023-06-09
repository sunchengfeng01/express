require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const port = 3000
const { Configuration, OpenAIApi } = require('openai')
const cors = require('cors')
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}

const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const configuration = new Configuration({
  apiKey: process.env.API_KEY
})
const openai = new OpenAIApi(configuration)

app.post('/', async (req, res) => {
  const msg = JSON.parse(req.body.body).data
  // res.setHeader('Access-Control-Allow-Origin', '*')
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS')
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (!msg) return res.send({ code: 400, data: '参数不能为空' })
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: msg }]
    })
    console.log('req suceess  log: ', JSON.stringify(completion.data.choices[0].message.content))
    return res.send({ code: 200, data: completion.data.choices[0].message.content })
  } catch (e) {
    console.log('error')
    res.send({ code: 400, data: e.respone })
  }

  // res.send(completion.data.choices[0].message?.content)
})
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.sendStatus(200)
})
app.listen(port, () => {
  console.log(process.env.API_KEY)
  console.log(`Server is running on port ${port}`)
})
