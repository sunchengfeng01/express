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

/**
 * const express = require('express');
const axios = require('axios');
const app = express();
const OPENAI_API_KEY = '<YOUR_OPENAI_API_KEY>'; // 您的 OpenAI API Key

app.use(express.json()); // 解析请求体中的 JSON 数据

// 中间件处理程序，转发接收到的消息到 OpenAI 服务
app.use((req, res, next) => {
  // 从请求体中获取消息
  const message = req.body.message;

  // 发送 HTTP POST 请求到 OpenAI API
  axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: message,
    max_tokens: 50,
    n: 1,
    stop: '\n',
    temperature: 0.7
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    }
  })
  .then(response => {
    // 将 OpenAI API 的响应转发给客户端
    res.send(response.data.choices[0].text);
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('Internal Server Error');
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

 */
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
