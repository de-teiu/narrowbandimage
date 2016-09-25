$('p.loading').each(function(index, element){
  var child = $(element).children('img');
  child.hide();//読み込みが完了するまで画像を非表示にする
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
