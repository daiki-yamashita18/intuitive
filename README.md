# intuitive
視覚的にわかりやすいWEBメモ帳

## プロジェクト構成

```
intuitive/
├── src/
│   ├── backend/           # Honoバックエンド (TypeScript)
│   │   └── index.ts       # APIサーバー (ポート3000)
│   └── frontend/          # Reactフロントエンド (TSX)
│       ├── App.tsx        # メインコンポーネント
│       ├── App.css        # スタイル
│       └── main.tsx       # エントリーポイント
├── index.html             # HTMLテンプレート
├── package.json           # 依存関係とスクリプト
├── tsconfig.json          # フロントエンド用TypeScript設定
├── tsconfig.backend.json  # バックエンド用TypeScript設定
└── vite.config.ts         # Vite設定（プロキシ含む）
```

## 技術スタック

- **バックエンド**: Hono (高速軽量なWebフレームワーク)
- **フロントエンド**: React 19 + Vite
- **言語**: TypeScript
- **ランタイム**: Bun

## セットアップ

### 1. 依存関係のインストール

```bash
bun install
```

## 起動方法

### すべて一度に起動（推奨）

バックエンドとフロントエンドを同時に起動:

```bash
bun run dev
```

これにより以下が起動します:
- バックエンド: `http://localhost:3000`
- フロントエンド: `http://localhost:8080`

### 個別に起動

バックエンドのみ:
```bash
bun run dev:backend
```

フロントエンドのみ:
```bash
bun run dev:frontend
```

## 動作確認

1. ブラウザで `http://localhost:8080` を開く
2. 「APIからメッセージを取得」ボタンをクリック
3. バックエンドからのレスポンスが表示されればOK！

## API エンドポイント

バックエンドは以下のAPIを提供しています:

- `GET /api` - シンプルなメッセージを返す
- `GET /api/users` - ユーザー一覧を返す

## プロキシ設定

フロントエンド (Vite) は、`/api` で始まるリクエストを自動的にバックエンド (`http://localhost:3000`) に転送します。

この設定は `vite.config.ts` にあります。

## ビルド

本番用にフロントエンドをビルド:

```bash
bun run build
```

ビルド結果は `dist/` ディレクトリに出力されます。

## プレビュー

ビルドしたアプリケーションをプレビュー:

```bash
bun run preview
```

## 開発のヒント

### 新しいAPIエンドポイントの追加

`src/backend/index.ts` にルートを追加:

```typescript
app.get('/api/新しいエンドポイント', (c) => {
  return c.json({ data: 'レスポンス' })
})
```

### フロントエンドからAPIを呼び出す

```typescript
const response = await fetch('/api/新しいエンドポイント')
const data = await response.json()
```

### ホットリロード

開発中は、バックエンドもフロントエンドもファイルを保存すると自動的にリロードされます。

## トラブルシューティング

### ポートが既に使用されている

- バックエンド (3000) またはフロントエンド (8080) のポートが使用中の場合:
  - `src/backend/index.ts` でバックエンドのポートを変更
  - `vite.config.ts` でフロントエンドのポートを変更

### CORS エラー

- バックエンドの `src/backend/index.ts` でCORS設定を確認してください
