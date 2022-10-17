## **FIRE_NET**
---
## ◆ アプリケーション概要
---
東京都の地震・台風などの災害発生時に画像や動画を通じて消防団と消防署の正確な情報を共有することができる。

## ◆ URl
---
https://fire-net.herokuapp.com/ 
## ◆ テスト用アカウント
---
- メールアドレス: aaat@111  
- パスワード: aaa111

## ◆ Githubリポジトリ
---
- https://git.heroku.com/fire-net.git

## ◆ 利用方法
---
### 1.災害情報の投稿
---
- ログインページから新規登録を行う。消防職員と消防団員によって一部機能が変わるのでuser_typeによって分ける。（user_typeが1の場合は消防職員、２の場合は消防団員）
- トップページ（一覧ページ）の新規投稿ボタンから災害の情報（画像or動画、住所、目標物、けが人の有無、逃げ遅れの有無、消防隊の要請の有無、具体的な状況）を入力し投稿する。
- 画像と動画のどちらか一方のみを投稿可能。画像は複数投稿可能（４枚まで）
### 2.対応状況の表示
---
- 投稿された災害情報に対して消防隊、消防団が対応しているかを表示する。対応の有無を変更させる機能は消防職員（user_type1）にのみ付与されている。（新規投稿時は未対応の表示）
- 対応状況は「未対応」「対応中」「対応済み」で表示される。（新規投稿時は未対応）
- 投稿の詳細ページではコメント機能があり消防隊と消防団がメッセージが送れる。
### 3.サイドバーから投稿されてた内容の絞り込み機能
---
- 東京都を所在によって10の方面に分け、それぞれ絞り込むことができる。
- 災害の対応状況によって絞り込むことができる（未対応、対応中、対応済み）
## ◆ アプリケーションを作成した背景
---
### 1.現状の課題
---
現職務で消防士として働く中で、地震や大風などの大規模災害が発生した際に災害情報の収集が困難であり、情報がないことが原因で人命救助や災害対応に大きな遅れが生じていることに
現状の課題を感じた。（例：町の被害状況は消防車での巡行で確認、被害状況を無線で報告するため詳細に伝わりにくい）また、近年災害が発生するとSNSなどでデマの被害情報が拡散されるという問題が散見されることから、災害発生時の情報の信頼性にも課題があると感じた。
### 2.現状の課題解決のために
---
「百聞は一見に如かず」という言葉があるように、現状は無線での音声による交信での災害状況の報告から、画像と動画を用いて、情報を視覚化して共有できるようにした。視覚化できる機能は他のSNSアプリでも可能ですが、近年ニュースでも取り上げられる、災害時のデマ情報が発生しないように地域に根付き災害対応に積極的な消防団員をターゲットに配布する仕様にすることで災害時の情報の信用性を保てると考えた。また、消防団はその地域住み地域特性も理解していることから危険な場所など、より有効な情報収集にも有効だと感じた。

---
## ◆ 洗い出した要件
https://docs.google.com/spreadsheets/d/1m9Ur0GMBWFAwdpKpjUSvRNd3u86QMEyXCN1fmaPmE2o/edit#gid=1785908763


---
## ◆ 実装した機能についての画像やその説明
---
### **1.ログインページ**  
#### ![alt](https://i.gyazo.com/860108382a32a4e6cb34a0a0ca996eb9.png)

### **2.新規登録ページ**  
#### &ensp;・新規登録（入力画面）![alt](https://i.gyazo.com/130eb21f1a621485d0863f32ef071a80.png)  
#### &ensp;・入力エラー画面 ![alt](https://i.gyazo.com/e8c83853488a327f11768b09c5372945.png)  

### **3.投稿一覧ページ**  
#### &ensp;・一覧ページ![alt](https://i.gyazo.com/b012a24a71447a8f20ffacef5abf302b.jpg)  
#### &ensp;・サイドバーの表示![alt](https://i.gyazo.com/dcc16961c8f84678c745a0b143abf06a.png)  
#### &ensp;・新規投稿ボタン（一覧ページの最下部）![alt](https://i.gyazo.com/3ff6216d3fde271ea7cad7b4e450459a.png)  

### **4.新規投稿ページ**  
#### &ensp;①新規投稿ページ（上部）![alt](https://i.gyazo.com/69eafdf2ec96c08300a5fe0516be6704.png)  
#### &ensp;①新規登録ページ（下部）![alt](https://i.gyazo.com/680cda6c0e1ae3f760063f07646612de.png)  
#### &ensp;②新規投稿ページ（画像選択時ver） ![alt](https://i.gyazo.com/d8ed1d3f44eee8e03043988c10916159.jpg)  
#### &ensp;②新規投稿ページ（動画選択Ver） ![alt](https://i.gyazo.com/4b6344059afd8250f20df2875381d03e.png)  


### **5.詳細ページ**  
#### &ensp;・①ページ上部（共通）![alt](https://i.gyazo.com/8c11a96a806ec70877a385048dcbd5e8.jpg)
#### &ensp;・②ページ下部（消防職員ver）![alt](https://i.gyazo.com/ee6bc814f37042a8dfbfe9e282dba756.png)  
#### &ensp;・②ページ下部（消防団員ver）![alt](https://gyazo.com/031e0d02ac2ce595cb644ee0a0c7aab1.png)  

---
## ◆ データベース設計
![alt](https://i.gyazo.com/c535c2106f71a8f5598e1b27a73869aa.png)


---
## ◆ 画面遷移図
![alt](https://i.gyazo.com/fceab7878bdae520b62e25e401f3ca28.png)

---
## ◆ 開発環境
・ Mac
・Ruby/Ruby on Rails/JavaScript/jQuery/MySQL/Github/AWS/Visual Studio Code

## ◆ 工夫したポイント・ポートフォリオ作成を通して感じたこと
 &ensp;ユーザー目線でいかに使いやすいアプリに実装できるかを考えて実装を進めました。特に私の考えてたアプリは災害時の情報共有に活用することを前提に制作したので、いかに簡単に早く活用できるかが重要だと考えました。  
 そのため工夫したポイントとしては「投稿のしやすさ」と「投稿された情報の見やすさ」です。  
 &ensp;「投稿のしやすさ」としては投稿情報の入力をプルダウンにすることで、できるだけ文字入力する手間を省くように努めました。特に、地域の指定は市区町村までの指定できるようにと細部までこだわり作成しました。これはユーザーが災害時に活用するということで、災害時の危険な環境の中で素早く簡単に情報を投稿することを可能にするためです。  
 &ensp;「投稿された情報の見やすさ」に関しては、画像or動画による状況の視覚化、被害情報の表示や、消防隊の対応状況と方面・地域による絞り込み機能を実装することで、ユーザーが必要な情報を簡単にシンプルに閲覧できる仕様にしました。
 &ensp;アプリを作成する準備段階では、色々な機能を加えて実装したいという気持ちになりましたが、自身の実力では実装できない機能多さにプログラミングの難しさを感じました。ですが、逆にさまざまな機能が実装できないことをプラスに捉え、よりシンプルにわかりやすく、ユーザーの使いやすを考えてアプリを作成しました。結果、災害時に使用するアプリということで、シンプルに活用できることがこのアプリの強みになりました。  
 &ensp; 一連のアプリ作成を通して、多くのエラーや思ったように挙動しないことなどがあり、プログラミングの大変さを痛感しました。ですが、約２〜３ヶ月の期間継続してアプリ作成に取り組めたのは、自分のアイディアを形にできる面白さ、そしてアイディアを形にしたものがユーザーや多くの人の役に立つかもしれないと、考えることで挫折しそうな時も乗り越えることができました。結果、一つのポートフォリオとして形になった時は大きな達成感を感じることができ、改めて一つのことをやり抜く楽しさを感じることができました。  
 &ensp; ITの技術は多くの人の時間を作り出すことができたりと、様々な分野で多くの人に貢献できると思います。今後は、エンジニアとして自分の技術も磨いて、様々なアイディアを形にできる力をつけIT技術を通して、多くの人の役に立てるようになりたいと感じました。

