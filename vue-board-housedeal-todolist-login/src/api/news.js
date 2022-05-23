import { apiInstance } from "./index.js";

const api = apiInstance();

function listArticle(param, success, fail) {
  api.get(`/board`, { params: param }).then(success).catch(fail);
}

const getHTML = async (keyword) => {
  try {
    return await axios.get(
      "https://search.naver.com/search.naver?where=news&ie=UTF-8&query=" +
        encodeURI(keyword),
    );
  } catch (err) {
    console.log(err);
  }
};
const parsing = async (keyword) => {
  const html = await getHTML(keyword);
  const $ = cheerio.load(html.data);
  const $titlist = $(".news_area");

  let informations = [];
  $titlist.each((idx, node) => {
    const title = $(node).find(".news_tit").text();
    informations.push({
      title: $(node).find(".news_tit:eq(0)").text(),
      press: $(node).find(".info_group > a").text(),
      time: $(node).find(".info_group > span").text(),
      contents: $(node).find(".dsc_wrap").text(),
    });
    console.log(informations);
  });
};

parsing("신혼부부 지원사업");

export { listArticle };
