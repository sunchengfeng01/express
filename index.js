const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

// 将请求 /api 转发到 https://example.com/api
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://api.openai.com/v1/chat/completions',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  })
)
app.get('/home', (req, res) => {
  res.send('fagsgsgsgsg')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
