# namplate

README

## Feature
- Gulp
- SASS(SCSS)
- JS/CSSの圧縮と最適化
- ベンダープレフィックス付与自動化
- BrowserSync

## Dependence
* [NodeJS](https://nodejs.org/) v0.12.9
* [Gulp](http://gulpjs.com/) 3.9.0

## 構成

```
package.json - npmパッケージ設定ファイル
gulpfile.js - gulpファイル
/html - サイト表示用ソース
┣ /assets - PC or PC&SP共通アセット
	┗ /js/common.js PC&SP共通JS
	┗ /js/library/ PC&SP共通　ライブラリJS
┗/assets-sp - SP専用アセット
	┗ /common.js SP専用JS
/src - 開発用フォルダ
  ┣ /js_es6 - JSフォルダ。Babelしてsrc/js_uncompressed/に出力。
  ┣ /js_comcompressed - BabeったJSが出力される。Compressして/assets/js/に出力。
  ┣ /sass_pc - sass(PC用)フォルダ。html/assets/cssに出力される
  ┗  /sass_sp - sass(SP用)フォルダ。html/assets-sp/cssに出力される

```

## コーディングルール

- CSS：SMACSS  
https://app.codegrid.net/entry/smacss-1#toc-0  
http://qiita.com/matsui-a/items/9b9188904d160a3ec223
 - JS

## Get Started

### 準備

rootディレクトリを任意のディレクトリに展開し、展開したディレクトリで以下のコマンドを実行します。

```
npm install
```

### ファイル監視の実行 & サーバー起動

以下のコマンドを実行するとブラウザで開発中のページが開きます。この状態でCSSやJSを修正するとユニットテストやLintも同時に実行され、ブラウザが自動的に更新されます。

```
# ディレクトリを監視(src) 
基本これでおk↓
gulp


## Other documentation

- [Babel](https://babeljs.io/)
- [EJS](http://www.embeddedjs.com/)
- [ESLint](http://eslint.org/)
- [FrontNote](http://frontainer.com/frontnote/)
- [HTMLHint](http://htmlhint.com/)
- [SASS](http://sass-lang.com/)
- [webpack](http://webpack.github.io/)
- [JSHint](http://jshint.com/)
- [Mocha](http://mochajs.org/)
- [PowerAssert](https://github.com/power-assert-js/power-assert)
- [Sinon](http://sinonjs.org/)

## License

The MIT License (MIT)

Copyright (c) 2016 Naoko Nishimura

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
