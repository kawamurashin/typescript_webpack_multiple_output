#memo


###開発環境  
windows10   
intellij idea   
###初期設定
package.jsonをつくる  

###packageのインストール

npm install --save-dev typescript　@types/node
npm install --save-dev webpack webpack-cli ts-loader

tsconfigを設定　　
webpack.config.jsonを設定　　

package.jsonにscriptの追加
```angular2html
  "scripts": {
    "build": "webpack",
    "watch": "webpack -w"
  },
```
serverとhtml/index
動作確認
```
npm run build
```

###expressのインスール

npm install --save-dev express  @types/express

src/main.tsを書く


動作確認
```
npm run build
```

うんで、サーバー起動してテストして、エラーがないことを確認
```
node dist/server.js
```

### nodemon
npm install --save-dev nodemon  

nodemon.jsonを書き込む

package.jsonを記入  

それでウオッチ開始
```
npm run server
```

参考
webpackでファイルの出力先を複数指定する  
https://qiita.com/twinemarron/items/7adca7b911caa2718823  
これでもいいけど、tsconfigが共通になる  