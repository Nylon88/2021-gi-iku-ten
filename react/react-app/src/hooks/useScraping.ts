import puppeteer from 'puppeteer'
import path from "path"


import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// // 論文情報格納用のインターフェース
// interface paperInfoList {
//     title: string,
//     href_url: string,
//     writer: string,
//     issueYear: string,
//     citation: string,
//     // abstract: string,
//     // publisher: string,
// }

type Props = {
	num: number,
	keyword: string,
	year: number
}

type PaperInfoList = {
	title: string,
	href_url: string,
	writer: string,
	issueYear: string,
	citation: string,
	abstract: string,
	// publisher: string
}

const crawler = async (props: Props): Promise<Array<PaperInfoList>> => {
	const { num, keyword, year } = props;
	// htmlの取得処理
	const url = `https://scholar.google.co.jp/scholar?hl=ja&as_sdt=0%2C5&num=${num}&q=${keyword}&as_ylo=${year}&as_vis=1`;
	// const DL = { waitUntil: ['domcontentloaded'] };
	const browser = await puppeteer.launch({
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox'
		]
	});
	const page = await browser.newPage();

	//  // 各リクエストのレスポンスを検知
	// page.on('response', response => {
	//     console.log(response.status(), response.url()) // 全リクエストのステータスコードとURLをlog
	//     if (300 > response.status() && 200 <= response.status()) return;
	//     console.warn('status error', response.status(), response.url()) // ステータスコード200番台以外をlog
	//     });

	// 実際にアクセスするサイト
	// await page.goto(url);
	// テスト環境
	console.log("HTMLを読み込みます");
	await page.goto(`file:${path.join(__dirname, '/test_html/test_schalor_src.html')}`);
	console.log("HTMLを読みました");

	// 取得したHTMLをダイジェストする
	const page_objects = await page.$$('.gs_ri');
	console.log(`論文の数${page_objects.length}`);

	// fullPageのオプションを指定すると、フルページでスクリーンショットが撮れる
	// await page.screenshot({path: 'example.png', fullPage: true});

	let paperArray: Array<PaperInfoList> = [];
	// 論文の数分回す
	let i = 1;
	for (const page_object of page_objects) {

		// //インターフェース継承
		// const paperInfoLists:paperInfoList[] = []

		// 「タイトル」と「URl」を抽出
		const title_object = await page_object.$('.gs_rt');

		// 「タイトル」
		const title_row: string = await (await (title_object)!.getProperty('textContent'))!.jsonValue();
		const title = title_row.trim().replace(/\s{2,}/g, "");

		// 「URL」
		const url_object = await (title_object)!.$('a');
		const href_url_row: string = await (await (url_object)!.getProperty('href'))!.jsonValue();
		const href_url = href_url_row.trim();

		// 「著者」と「発行年」を抽出
		const writer_issueYear_object = await page_object.$('.gs_a');
		const writer_issueYear_row: string = await (await (writer_issueYear_object)!.getProperty('textContent'))!.jsonValue();
		const writer_issueYear = writer_issueYear_row.trim();
		const writer_issueYear_StrList:string[] = (writer_issueYear)!.split(/ /);

		// 「発行年」
		const issueYear = writer_issueYear_StrList.slice(-3)[0].trim();

		// 「著者」
		const writer = writer_issueYear_StrList.slice(0)[0].trim();

		// 「概要」を抽出
		const ele = await page.$(".gs_rs");
		let abstract: string
		if (ele) {
			const abstract_any = await page.evaluate(elm => elm.textContent, ele);
			abstract = abstract_any.trim().replace(/\s{2,}/g, "").slice(4, -10);
		} else {
			abstract = "概要がありません";
		}

		// 「引用数」を抽出
		const citation_object = await page_object.$('.gs_fl');
		const citation_str_row: string = await (await (citation_object)!.getProperty('textContent'))!.jsonValue();
		const citation_str = citation_str_row.trim()
		const citationStrList = (citation_str)!.split(/ /);
		const citation = citationStrList[1]

		// // 「発行元」を抽出　※ない可能異性もある為その処理もいれるべし
		// const publisher_object = await page_object.$('.gs_ggsd');
		// const publisher = await (publisher_object)!.getProperty('textContent');
		// console.log(`publisher -> ${publisher}`);

		const paperInfoLists = {
			title: title,
			href_url: url,
			writer: writer,
			issueYear: issueYear,
			citation: citation,
			abstract: abstract,
			// publisher: Array<string>,
		}

		// 全ての論文を管理する配列に格納する
		paperArray.push(paperInfoLists);

		i++;
	}

	browser.close();

	// 先頭の空のオブジェクトを削除してから返す
	paperArray.splice(0, 1);
	return paperArray
};


// スクレイピングメイン関数
const main = async () => {
	// htmlを取得する
	const num = 3;
	const keyword = "block chain";
	const year = 2021;
	// const html_data:string = await crawler(num, keyword, year);
	const paperArray = await crawler({num, keyword, year});

	console.log(`paperArray -> ${paperArray}`);

	return paperArray
}

// 実行
main();



// やる事
// ➀　constをconst,letにする  →　〇
// ⓶　ハッシュに置き換え
// ⓷　残りの論文情報の取得
