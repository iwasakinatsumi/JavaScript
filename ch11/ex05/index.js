/**
 * バイナリデータの先頭数バイト (マジックバイト) を確認することでファイル種別を推測できる。
例えば PDF ファイルの場合、ファイルの先頭は 25 50 44 46 2D といったバイト列になっている (参考)。この知識があれば拡張子に頼らずにファイル種別を推測できる。
与えられたバイト列に対し、そのバイナリデータのファイル種別を返す関数 detectFileType を書きなさい。
考えられる全てのファイル種別に対応することは現実的ではないため、与えられたテストコードに対して動作する関数を書けば十分とする。
注意: マジックバイトを信用しすぎることで思わぬ結果になることもあるため注意 (参考:  画像ファイルによるクロスサイト・スクリプティング(XSS)傾向と対策)
https://en.wikipedia.org/wiki/List_of_file_signatures 
https://blog.tokumaru.org/2007/12/image-xss-summary.html
*/
