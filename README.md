# React Practice

## アプリ一覧

| ディレクトリ    | 内容                                                    |
| --------------- | ------------------------------------------------------- |
| packages/app_xx | Template Project                                        |
| packages/app_01 | useState                                                |
| packages/app_02 | useReducer                                              |
| packages/app_03 | Todoリスト(useState版)                                  |
| packages/app_04 | useEffect、useLayoutEffect                              |
| packages/app_05 | stateをprops渡しで共有                                  |
| packages/app_06 | stateをuseContextで共有、LocalStorageによるデータ永続化 |
| packages/app_07 | Redux(非推奨パターン)                                   |
| packages/app_08 | Redux(推奨パターン・ReduxToolkit利用)                   |
| packages/app_09 | Todoリスト(Redux版)                                     |
| packages/app_10 | Axios、Chart.js                                         |
| packages/app_11 | モーダルウィンドウ                                      |
| packages/app_12 | React.memo、useCallback、useMemo                        |
| packages/app_13 | useRef                                                  |
| packages/app_14 | 天気アプリ(Tailwind、Axios)                             |
| packages/app_15 | createPortal                                            |
| packages/app_16 | ツールチップ                                            |
| packages/app_17 | ReactRouter v6                                          |
| packages/app_18 | ReactRouter v6(Data APIs)                               |
| packages/app_19 | Firebase Authenticationによるログイン認証               |
| packages/app_20 | ReactQuery                                              |
| packages/app_21 | カスタムフック                                          |

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
