require('dotenv').config()
const express = require('express')
// const { Configuration, OpenAIApi } = require('openai')
const axios = require('axios')
const app = express()
app.use(express.json())

// 将请求 /api 转发到 https://example.com/api

app.post('/', async (req, res) => {
  // const configuration = new Configuration({
  //   apiKey: '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'
  // })
  // const openai = new OpenAIApi(configuration)
  // const completion = await openai.createChatCompletion({
  //   model: 'gpt-3.5-turbo',
  //   messages: [{ role: 'system', content: 'xiexiexie ' }]
  // })
  // console.log('req suceess  log')
  // res.send(completion)
})
app.get('/', async (req, res) => {
  try {
    await axios.options('https://api.openai.com/v1/chat/completions')
    await axios
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          messages: [{ role: 'system', content: '前端' }],
          model: 'gpt-3.5-turbo'
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`
          }
        }
      )
      .then((data) => {
        console.log(data)
      })
  } catch (e) {
    console.log('fafafafa: ')
  }
})

app.listen(3000, () => {
  console.log(process.env.API_KEY)
  console.log('Server is running on port 3000')
})
