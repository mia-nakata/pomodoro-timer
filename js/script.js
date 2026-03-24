document.addEventListener('DOMContentLoaded', function() {
  // 要素の取得
  const basePlanEl = document.getElementById('sim-base-plan');
  const optionCheckboxes = document.querySelectorAll('.sim-option-check');
  const totalPriceEl = document.getElementById('sim-total-price');

  // 計算関数
  function calculateTotal() {
    // 選択されたプランの金額を取得（未選択の場合は0）
    let total = parseInt(basePlanEl.value) || 0;

    // チェックされたオプションの金額を加算
    optionCheckboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        total += parseInt(checkbox.value);
      }
    });

    // カンマ区切りにして画面に表示
    totalPriceEl.textContent = total.toLocaleString();
  }

  // イベントリスナーの設定（ユーザーが操作した時に計算を実行）
  if (basePlanEl) {
    basePlanEl.addEventListener('change', calculateTotal);
  }
  
  optionCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', calculateTotal);
  });

  // 初期状態の計算を実行
  calculateTotal();
});