# VPN/Website-nuxt
## 環境構築と実行
1. 環境準備
   1. `git`, `node` (または `nvm`)をダウンロード、インストールします
   2. `nvm`をインストールした場合は `nvm install --lts` を実行します
   3. `corepack enable`もしくは`sudo corepack enable`を実行します
   4. 必要に応じて統合開発環境またはコードエディタをダウンロード、インストールします
2. リポジトリのクローン
   1. `git clone --recursive https://github.com/Shota-Sakitsu/vpn-website-nuxt.git` を実行します
   2. (`--recursive`を付け忘れた場合のみ) `git submodule update --init --recursive`を実行します
3. パッケージのダウンロード
   1. `cd vpn-website-nuxt` を実行して作業ディレクトリを移動します
   2. `pnpm install --frozen-lockfile` を実行してパッケージをダウンロードします。
4. 統合開発環境またはコードエディタでディレクトリを開きます  
   以下の統合開発環境またはコードエディタを推奨します
   - Visual Studio Code
   - IntelliJ IDEA Ultimate
   - WebStorm
   - PhpStorm
5. 開発サーバーを開始します
   1. 以下の方法で開発サーバーを開始します
	   - `pnpm dev` を実行します
       - IntelliJ などの実行機能を使用することも出来ます
   2. `http://localhost:3000`を開きます

## コミットメッセージのルール
一般的なコミットメッセージのルールとは異なり、変更場所や変更内容によって変わります。

### 書式
`[{Module}:{Change}] {Message}`

#### Messageのルール
特にありませんが、できるだけ日本語でお書きください。

#### パラメータのリスト
##### Module
- `all`: すべて
- `poly`: 複数
- `schema`: スキーマおよびTSの型
- `vue`: Vueコンポーネント関連
- `css`: スタイルシート操作
- `pnpm`: NPM パッケージ
- `config`: 設定
- `asset`: アセット
- `document`: ドキュメント
- `test`: テスト
- `api`: API ルート
- `middleware`: ミドルウェア
- `other`: その他

##### Change
- `new`: 新規
- `update`: 更新
- `remove`: 削除
- `feature`: 機能の変更
- `bugfix`: バグ修正
- `refactor`: リファクタリング
- `poly`: 複数操作
- `other`: その他