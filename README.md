# ファイルアップロードサンプル

rails, nextで実装したサンプル

# 動作確認
開発用のコンテナしか用意していないので、そちらを実行することで確認可能。

## 前提
docker,VSCodeおよび、拡張機能の[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)が導入されていること。

## 注意
WSL2での動作確認しか指定ないため、apple silicon macでの動作確認が可能かはわかりません。

## バックエンド
1. `packages/backend`をvscodeで開く
1. F1を押下し、Dev containers: Reopen in Containerを実行
1. Dev Container接続後ターミナルにて以下を実施
    ```
    bundle install
    rails db:migrate
    rails s
    ```
## フロントエンド
1. `packages/frontend`を別のvscodeで開く
1. F1を押下し、Dev containers: Reopen in Containerを実行
1. Dev Container接続後ターミナルにて以下を実施
    ```
    pnpm install
    pnpm dev
    ```
## ブラウザで確認
1. ホストのブラウザでアクセス
    ```
    http://localhost:3000/
    ```
