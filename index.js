const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const { Configuration, OpenAIApi } = require('openai')
const app = express()

// 将请求 /api 转发到 https://example.com/api

app.post('/', async (req, res) => {
  const configuration = new Configuration({
    apiKey: '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'
  })
  const openai = new OpenAIApi(configuration)
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: 'xiexiexie ' }]
  })
  console.log('req suceess  log')
  res.send(completion)
})
app.get('/', async (req, res) => {
  try {
    const configuration = new Configuration({
      apiKey: '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'
    })
    const openai = new OpenAIApi(configuration)
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: '前端框架' }]
    })
    //ompletion.data.choices[0].message?.content
    console.log('req suceess log: ', completion.data.choices[0].message.content)
    res.send(ompletion.data.choices[0].message?.content)
  } catch (e) {
    console.log('fafafafa: ', JSON.stringify(e))
  }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
