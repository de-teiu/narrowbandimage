"use strict"

window.onload = function () {

  var element = document.getElementsByClassName("narrow-band-image");
  for (var i = 0; i < element.length; i++) {
    //console.log(element[i].children[0]);
    setNarrowBandImage(element[i]);
  }

  /** じわじわ表示処理初期化 */
  function setNarrowBandImage(ele) {
    var img = ele.children[0];
    var width = img.width;
    var height = img.height;
    img.style.clip = "rect( 0px, " + width + "px, " + 0 + "px, " + 0 + "px )";
    ele.style.display = "block";

    /** 0.1秒毎に画像を再描画 */
    var intervalFunction = setInterval(function () {
      /** じわじわ表示メソッド */
      function drawImage(tempEle, tempImg, height) {
        var nowHei = Number(tempImg.style.clip.split(" ")[2].replace(/px,/g, ""));
        //console.log(nowHei);
        nowHei += Math.floor(Math.random() * 5);//画像を切り出す範囲を増やす
        if (nowHei >= height) {
          nowHei = height;
          tempImg.style.clip = "";
          clearInterval(intervalFunction);//画像が完全に表示されたら定期実行していた処理を終了させる
        }
        tempImg.style.width = width;
        tempEle.style.height = nowHei + "px";
        tempImg.style.clip = "rect( 0px, " + width + "px, " + nowHei + "px, " + 0 + "px )";//画像を一部切り出して画面に表示
      }

      /** メソッド呼び出し */
      drawImage(ele, img, height);

    }, 100);
  }

};
