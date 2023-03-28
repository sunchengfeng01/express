const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
import { Configuration, OpenAIApi } from 'openai'
const app = express()

// 将请求 /api 转发到 https://example.com/api

app.post('/', async (req, res) => {
  // const configuration = new Configuration({
  //   apiKey: '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'
  // })
  // const openai = new OpenAIApi(configuration)
  // const completion = await openai.createChatCompletion({
  //   model: 'gpt-3.5-turbo',
  //   messages: [{ role: 'system', content: data }]
  // })
  // console.log(completion.data.choices[0].message?.content, '   get data ')
  // res.send('completion.data.choices[0].message?.content')
  res.send('hello')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
