import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const [users, setUsers] = useState<string[]>([])

  // バックエンドからメッセージを取得
  const fetchMessage = async () => {
    try {
      const response = await fetch('/api')
      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      console.error('Error fetching message:', error)
    }
  }

  // バックエンドからユーザーリストを取得
  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data.users)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  return (
    <div className="app">
      <h1>Vite + React + Hono</h1>

      <div className="card">
        <h2>フロントエンド機能</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          カウント: {count}
        </button>
        <p>クリックしてカウントを増やしてください</p>
      </div>

      <div className="card">
        <h2>バックエンド連携</h2>
        <button onClick={fetchMessage}>
          APIからメッセージを取得
        </button>
        {message && (
          <div className="api-response">
            {message}
          </div>
        )}
      </div>

      <div className="card">
        <h2>ユーザー一覧</h2>
        <button onClick={fetchUsers}>
          ユーザーを取得
        </button>
        {users.length > 0 && (
          <ul className="users-list">
            {users.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App