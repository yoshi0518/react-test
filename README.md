# React Practice

## アプリ一覧

| ディレクトリ    | 内容                       |
| --------------- | -------------------------- |
| packages/app_xx | Template Project           |
| packages/app_01 | useState                   |
| packages/app_02 | useReducer                 |
| packages/app_03 | Todo(useState版)           |
| packages/app_04 | useEffect、useLayoutEffect |
| packages/app_05 | stateをprops渡し           |

## 利用手順

### React アプリ追加(テンプレート利用)

```bash
# packages/app_xxディレクトリをコピー・ディレクトリ名変更

# package.jsonのapp_xxを修正
# README.mdのアプリ一覧を修正
# rootディレクトリのpackage.jsonのscriptsを追記

# コピーしたディレクトリに移動し、Npmモジュールをインストール
$ pnpm i
```

### React アプリ追加(新規インストール)

```bash
# packagesディレクトリへ移動
$ cd packages

# Vite＋React環境をインストール(app1の構築例)
$ pnpm create vite

# Projectname: appxx
# Select a framework: React
# Select a variant TypeScript + SWC

# app1ディレクトリへ移動
$ cd app1

# Nodeモジュールをインストール
$ pnpm install

# アプリケーションを起動
$ pnpm dev

# rootディレクトリからのスクリプト設定を追加
$ pnpm app1 dev

# ESLint、Prettier設定
```
