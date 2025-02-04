$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"KCC Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      [ "KuSwap",     `<a href="kuswap"       >Various</a>`,     "KUS",       "https://kuswap.io" ],
      [ "KuCat",      `<a href="kucat"        >Various</a>`,     "CAT",       "https://kucat.finance" ],
      [ "KuBeans",    `<a href="kubeans"      >Various</a>`,     "KUBEANS",   "https://kubeans.club" ],
      [ "KandySwap",  `<a href="kandyswap"    >Various</a>`,     "KANDY",     "https://www.kandyswap.com" ]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
