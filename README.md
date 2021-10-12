# Sample MultiSite

monorepot でサイトと UI パッケージを管理する例

## publish ui package

~/.npmrc に パッケージの READ 可能な token 追加

```
//registry.npmjs.org/:\_authToken=token
```

```
cd packages/ui
yarn publish
```

対応したときの [commit](https://github.com/Ryomasao/multi-app/commit/e83718cfe8ed12da5fb8885fac737ea681c62d06)

## main から利用する

- .yarnrc を追加して、github を参照しにいくようにする
- yarn add するときは、以下に記載の通り、バージョンまで指定しないとだめだった。

https://github.com/Ryomasao/multi-app/packages/1037579

```sh
yarn add @ryomasao/multi-app-ui@1.0.0
```

- yarn install するときは、以下の記事の通り`npm login`しなきゃだめだった

https://blog.35d.jp/2020-12-18-github-private-registry-yarn-install

`yarn add` && `yarn install`あたりの挙動の理解が怪しい。`~/.npmrc`には token 書いてるから、login しなくてもよさそうなんだけど。

## そのほか

- vercel にデプロイしたとき問題なくパッケージを install できる理由がよくわかってない。
  → vercel と github の連携設定の中に npm パッケージを参照する権限も含まれてるのかな。
