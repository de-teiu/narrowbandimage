/*
$('p.loading').each(function(index, element){
  var child = $(element).children('img');
  var img = $('<img>');//img要素を作成し、そこにロード完了時イベントを追加
  img.load(function () {
      var img = new Image();
      img.src = child.attr('src');
      var width = img.width;
      var height = img.height;
      var nowHei = 0;
      child.css("clip", "rect( 0px, " + width + "px, " + nowHei + "px, " + 0 + "px )");
      child.show();//画像の表示開始
      setInterval(function () {
          nowHei += Math.floor(Math.random() * 5);//画像を切り出す範囲を増やす
          if (nowHei >= height) {
              nowHei = height;
              clearInterval(this);//画像が完全に表示されたら定期実行していた処理を終了させる
          }
          $(element).css("height",nowHei);//pタグの高さを表示中の画像に合わせる
          child.css("clip", "rect( 0px, " + width + "px, " + nowHei + "px, " + 0 + "px )");//画像を一部切り出して画面に表示
      }, 100);
  });
  img.attr('src', child.attr('src'));//作成したimg要素に、表示させたい画像をセット

});
*/

window.onload = function(){

  var element = document.getElementsByClassName("narrow-band-image");
  for (var i=0;i<element.length;i++) {
    setNarrowBandImage(element[i]);
  }

  //TODO やっぱ親要素持たせないとダメだわ。spanでいいか？

  /** じわじわ表示処理初期化 */
  function setNarrowBandImage(ele){
    var img = document.createElement('img');
    img.src = ele.src;
    var width = ele.width;
    var height = img.height;
    img.style.clip="rect( 0px, " + width + "px, " + 0 + "px, " + 0 + "px )";
    document.body.insertBefore(img, ele);
    /** 0.1秒毎に画像を再描画 */
    var intervalFunction = setInterval(function(){
      /** じわじわ表示メソッド */
      function drawImage(tempImg,height){
        //TODO tempImg.style.clip からheightを抽出する
        var nowHei = Number(tempImg.style.clip.split(" ")[2].replace(/px/g,""));
        console.log(nowHei);
        nowHei += Math.floor(Math.random() * 5);//画像を切り出す範囲を増やす
        if (nowHei >= height) {
            nowHei = height;
            console.log("unko");
            clearInterval(intervalFunction);//画像が完全に表示されたら定期実行していた処理を終了させる
        }
        console.log("imgWidth:" +width);
        tempImg.style.width = width;
        tempImg.style.height = nowHei;
        tempImg.style.clip = "rect( 0px, " + width + "px, " + nowHei + "px, " + 0 + "px )";//画像を一部切り出して画面に表示
      }

      /** メソッド呼び出し */
      drawImage(img,height);

    },100);
  }

};
