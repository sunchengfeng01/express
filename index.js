require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const port = 3000
const { Configuration, OpenAIApi } = require('openai')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const configuration = new Configuration({
  apiKey: process.env.API_KEY
})
const openai = new OpenAIApi(configuration)

app.post('/', async (req, res) => {
  const msg = JSON.parse(req.body.body).data
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

app.listen(port, () => {
  console.log(process.env.API_KEY)
  console.log(`Server is running on port ${port}`)
})
