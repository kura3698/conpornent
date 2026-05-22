// PCで電話リンクを無効化
document.addEventListener("DOMContentLoaded", function () {
  var isMobile = /iphone|android(.+)?mobile/.test(
    navigator.userAgent.toLowerCase()
  );

  // 電話リンクがPCのときは無効化
  if (!isMobile) {
    document.querySelectorAll('a[href^="tel:"]').forEach((el) => {
      // href 属性を削除
      el.removeAttribute("href");
      // カーソルをデフォルトに変更
      el.style.cursor = "default";

      // クリックイベントを無効にする
      el.addEventListener("click", function (e) {
        e.preventDefault();
      });
    });
  }
});
