import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// CORS設定（フロントエンドからのアクセスを許可）
app.use('/*', cors())

// APIエンドポイント
app.get('/api', (c) => {
  return c.json({ message: 'Hello from Hono API!' })
})

app.get('/api/users', (c) => {
  return c.json({ users: ['太郎', '花子', '次郎'] })
})

// サーバー起動
const port = 3000
console.log(`🚀 Backend server is running on http://localhost:${port}`)

export default {
  port,
  fetch: app.fetch,
}
