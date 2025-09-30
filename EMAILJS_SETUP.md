# EmailJS設定ガイド

## 1. EmailJSアカウントの作成
1. [EmailJS](https://www.emailjs.com/)にアクセス
2. アカウントを作成（無料プランで開始可能）

## 2. メールサービスの設定
1. EmailJSダッシュボードにログイン
2. 「Email Services」をクリック
3. 「Add New Service」をクリック
4. Gmailを選択
5. Gmailアカウントでログイン
6. サービスIDをコピー（例：`service_xxxxxxx`）

## 3. メールテンプレートの作成
1. 「Email Templates」をクリック
2. 「Create New Template」をクリック
3. 以下のテンプレートを作成：

**テンプレート名**: Contact Form
**件名**: {{subject}}
**本文**:
```
新しいお問い合わせがあります。

お名前: {{from_name}}
メールアドレス: {{from_email}}

メッセージ:
{{message}}

---
このメールはポートフォリオサイトの問い合わせフォームから送信されました。
```

4. テンプレートIDをコピー（例：`template_xxxxxxx`）

## 4. パブリックキーの取得
1. 「Account」→「API Keys」をクリック
2. パブリックキーをコピー（例：`public_key_xxxxxxx`）

## 5. コードの更新
`src/components/Contact.tsx`の以下の部分を実際の値に置き換えてください：

### 1. インポートの有効化
```typescript
// この行のコメントアウトを解除
import emailjs from '@emailjs/browser';
```

### 2. EmailJSの初期化
```typescript
// この部分のコメントアウトを解除
React.useEffect(() => {
  emailjs.init("YOUR_PUBLIC_KEY"); // 実際のパブリックキーに変更
}, []);
```

### 3. メール送信部分
```typescript
// handleSubmit関数内のコメントアウト部分を解除し、一時的な処理を削除
const templateParams = {
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message,
  to_email: 'koiuzmi3751@gmail.com',
  subject: `お問い合わせ from ${formData.name}`
};

const result = await emailjs.send(
  'YOUR_SERVICE_ID', // 実際のサービスIDに変更
  'YOUR_TEMPLATE_ID', // 実際のテンプレートIDに変更
  templateParams,
  'YOUR_PUBLIC_KEY' // 実際のパブリックキーに変更
);
```

## 6. テスト
1. フォームに情報を入力
2. 「送信」ボタンをクリック
3. `koiuzmi3751@gmail.com`にメールが届くことを確認

## 注意事項
- 無料プランでは月200通まで送信可能
- 本番環境では環境変数を使用してキーを管理することを推奨
- スパム対策のため、reCAPTCHAの追加を検討
