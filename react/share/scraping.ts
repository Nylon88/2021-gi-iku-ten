/*
    encoding=utf-8
*/

import puppeteer from 'puppeteer'


// 論文情報格納用のインターフェース
interface paperInfoList {
    title: string,
    url: string,
    writer: string,
    issueYear: string,
    citation: string,
    // abstract: string,
    // publisher: string,
}


const crowller = async (num:number, keyword:string, year:number):Promise<[paperInfoList[]]> => {
    /*
        スクレイピングを行う関数

        return:
               論文情報を格納した配列で返却
               (ex) [[論文1,info1,info2,info3,info4], [論文2,info1,info2,info3,info4], [論文3,info1,info2,info3,info4], ...]

        論文情報(以下の順で格納)：
        　　　　➀「タイトル」
        　　　　⓶「URL」
        　　　　⓷「著者」
        　　　　⓸「発行年」
        　　　　⓹「引用数」
        　　　　⓺「概要」
        　　　　⓻発行元

    */

    // htmlの取得処理
    const url:string = `https://scholar.google.co.jp/scholar?hl=ja&as_sdt=0%2C5&num=${num}&q=${keyword}&as_ylo=${year}&as_vis=1`;
    // const DL = { waitUntil: ['domcontentloaded'] };
    const browser = await puppeteer.launch({
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage();

     // 各リクエストのレスポンスを検知
    page.on('response', response => {
        console.log(response.status(), response.url()) // 全リクエストのステータスコードとURLをlog
        if (300 > response.status() && 200 <= response.status()) return;
        console.warn('status error', response.status(), response.url()) // ステータスコード200番台以外をlog
        });

    await page.goto(url);

    // 取得したHTMLをダイジェストする
    var page_objects = await page.$$('.gs_ri');
    console.log(`論文の数${page_objects.length}`);

    // fullPageのオプションを指定すると、フルページでスクリーンショットが撮れる
    await page.screenshot({path: 'example.png', fullPage: true});


    // 各論文の情報を抽出
    var paperArry:[paperInfoList[]] = [[]];
    console.log("*****************************************************************************************************")
    // 論文の数分回す
    for (var page_object of page_objects) {

        //インターフェース継承
        var paperInfoLists:paperInfoList[] = []

        // 「タイトル」と「URl」を抽出
        var title_object = await page_object.$('.gs_rt');
        // 「タイトル」
        var title:string = await (await (title_object)!.getProperty('textContent'))!.toString().slice(9);
        console.log(`title -> ${title}`);
        // 「URL」
        var url_object = await (title_object)!.$('a');
        var href_url:string = await (await (url_object)!.getProperty('href'))!.toString().slice(9);
        console.log(`aタグurl -> ${href_url}`)


        // 「著者」と「発行年」を抽出
        var writer_issueYear_object = await page_object.$('.gs_a');
        var writer_issueYear:string = (await (writer_issueYear_object)!.getProperty('textContent'))!.toString();
        var writer_issueYear_StrList:string[] = (writer_issueYear)!.split(/ /);
        // 「発行年」
        var issueYear:string = writer_issueYear_StrList.slice(-3)[0];
        console.log(`issueYear -> ${issueYear}`);
        // 「著者」
        var writer:string = writer_issueYear_StrList.slice(0)[0];
        console.log(`write -> ${writer}`);

        // // 「概要」を抽出
        // const ele = await page.$(".gs_rs");
        // var abstract:string
        // if (ele) {
        //     var abstract_any = await page.evaluate(elm => elm.textContent, ele);
        //     abstract = abstract_any;
        // } else {
        //     var abstract = "概要がありません";
        // }
        // console.log(`abstract -> ${abstract}`);

        // 「引用数」を抽出
        var citation_object = await page_object.$('.gs_fl');
        var citation_str:string = (await (citation_object)!.getProperty('textContent'))!.toString();
        var citationStrList:string[] = (citation_str)!.split(/ /);
        var citation:string = citationStrList[3]
        console.log(`citation -> ${citation}`);

        // // 「発行元」を抽出　※ない可能異性もある為その処理もいれるべし
        // var publisher_object = await page_object.$('.gs_ggsd');
        // var publisher = await (publisher_object)!.getProperty('textContent');
        // console.log(`publisher -> ${publisher}`);


        // 論文情報を格納する。
        paperInfoLists.push({
            title,
            url,
            writer,
            issueYear,
            citation,
        })
        // 全ての論文を管理する配列に格納する
        paperArry.push(paperInfoLists);
        
        console.log("*****************************************************************************************************")
    }

    browser.close();

    return paperArry
};


// スクレイピングメイン関数
const main = async () => {
    // htmlを取得する
    const num:number = 3;
    const keyword:string = "block chain";
    const year:number = 2021;
    // var html_data:string = await crowller(num, keyword, year);
    var paperArry:[paperInfoList[]] = await crowller(num, keyword, year);
    
    return paperArry
}

// 実行
main();
