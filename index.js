require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const port = 3000
const { Configuration, OpenAIApi } = require('openai')
// const axios = require('axios')
const app = express()
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
// 将请求 /api 转发到 https://example.com/api

const configuration = new Configuration({
  apiKey: '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'
})
const openai = new OpenAIApi(configuration)

app.post('/', async (req, res) => {
  console.log(req.body)
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: 'hello' }]
  })
  // console.log('req suceess  log: ', JSON.stringify(completion.data.choices[0].message.content))
  res.send('hello')
  // res.send(completion.data.choices[0].message?.content)
})

app.get('/', async (req, res) => {
  try {
    // console.log(req.body)
    console.log('get  494654')
    res.send('fafaf')
  } catch (e) {}
})

app.listen(port, () => {
  console.log(process.env.API_KEY)
  console.log(`Server is running on port ${port}`)
})
