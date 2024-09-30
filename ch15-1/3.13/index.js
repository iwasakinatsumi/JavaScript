/**
 * index.html に対して以下の要素を CSS セレクタで指定して console.log に表示しなさい
 * nav 要素内のリンク (<a>)
 * 商品リスト (.product-list) 内の最初の商品 (.product-item)
 * カートアイコンの画像 (<img>)
 * 商品リスト (.product-list) 内の価格 (.price) を表示する要素
 * 商品リスト (.product-list) 内の全ての商品 (.product-item) の画像 (<img>)
 * 検索バー (.search-bar) 内の検索ボタン (<button>)
 * フッター (footer) 内のパラグラフ (<p>) 要素
 * 商品リスト (.product-list) 内の偶数番目の商品 (.product-item)
 * ヘッダー (header) 内のアカウントリンク (.account) の画像 (<img>)
 * ナビゲーションリンクのうち、"会社情報" のリンク
 * 出題範囲 15.3.1.1
 */

const navLinks = document.querySelectorAll('nav a');
console.log(navLinks);

const firstProduct = document.querySelector('.product-list .product-item');
console.log(firstProduct);

const cartIcon = document.querySelector('.cart-icon img');
console.log(cartIcon);

const prices = document.querySelectorAll('.product-list .price');
console.log(prices);

const productImages = document.querySelectorAll('.product-list .product-item img');
console.log(productImages);

const searchButton = document.querySelector('.search-bar button');
console.log(searchButton);

const footerParagraphs = document.querySelectorAll('footer p');
console.log(footerParagraphs);

const evenProducts = document.querySelectorAll('.product-list .product-item:nth-child(even)');
console.log(evenProducts);

const accountImage = document.querySelector('header .account img');
console.log(accountImage);

const companyLink = document.querySelector('nav a[href="会社情報"]');
console.log(companyLink);