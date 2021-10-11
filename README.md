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
