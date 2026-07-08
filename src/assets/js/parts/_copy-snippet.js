document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".js-copy-btn");
  if (!btns.length) return;

  btns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;

      try {
        await navigator.clipboard.writeText(target.innerHTML.trim());
        btn.textContent = "コピー完了！";
      } catch {
        btn.textContent = "コピー失敗";
      }

      setTimeout(() => {
        btn.textContent = "HTMLをコピー";
      }, 2000);
    });
  });
});
