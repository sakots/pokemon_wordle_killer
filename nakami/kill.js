// ポケモンを消す関数
function kill() {

  // 入力した文字を取得
  const killClass = document.pokemonKill.char.value;
  console.log (killClass);
  let killClassSplit = killClass.split('');
  console.log (killClassSplit);

  // 入力した文字のクラスを持つ要素を消す
  for (let i =0; i < killClassSplit.length; i++) {
    let targetClass = killClassSplit[i];
    let targetChar = document.getElementsByClassName(targetClass);
    console.log (targetChar);
    for (let j = 0; j < targetChar.length; j++) {
      targetChar[j].style.visibility = "hidden";
    }
  }

  // 入力をクリアしておく
  document.pokemonKill.char.value = "";
}

// 消去のリセット
function killReset() {
  const items = document.querySelectorAll('#targetPokemon li');
  items.forEach(item => {
    // visibility を元に戻す (空文字はデフォルト値)
    item.style.visibility = "";
  });

  // 入力フィールドも空にしておく
  document.pokemonKill.char.value = "";
}

// ポケモンをハイライトする関数
function highlight(form) {

  // 入力した文字を取得
  const highlightClass = form.char.value;
  console.log(highlightClass);
  let highlightClassSplit = highlightClass.split('');
  console.log(highlightClassSplit);

  // まず既存のハイライトを解除
  highlightReset(form);

  if (highlightClassSplit.length === 0) {
    // 空だったら何もしない
    return;
  }

  // 全てのリストアイテムを調べ、クラス名文字列が
  // 入力したすべての文字を含むものだけをハイライト
  const items = document.querySelectorAll('#targetPokemon li');
  items.forEach(item => {
    const clsStr = item.className; // スペース区切りの全クラス名
    let hasAll = true;
    for (let ch of highlightClassSplit) {
      if (clsStr.indexOf(ch) === -1) {
        hasAll = false;
        break;
      }
    }
    if (hasAll) {
      item.dataset.highlight = "true";
      renderHighlightState(item);
    }
  });

  // フォームをクリアしておく
  form.char.value = "";
}

// ハイライトのリセット
function highlightReset(form) {
  const items = document.querySelectorAll('#targetPokemon li');
  items.forEach(item => {
    delete item.dataset.highlight;
    renderHighlightState(item);
  });

  // 入力フィールドも空にしておく
  if (form) {
    form.char.value = "";
  }
}

// 文字位置が確定したポケモンを別色でハイライトする関数
function Confirm(form) {
  const conditions = [
    form.char1.value,
    form.char2.value,
    form.char3.value,
    form.char4.value,
    form.char5.value,
  ];

  clearConfirmHighlight();

  if (conditions.every(char => char === "")) {
    return;
  }

  const items = document.querySelectorAll('#targetPokemon li');
  items.forEach(item => {
    const pokemonName = item.textContent.trim();
    let isMatch = true;

    for (let i = 0; i < conditions.length; i++) {
      if (conditions[i] !== "" && pokemonName[i] !== conditions[i]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      item.dataset.confirmHighlight = "true";
      item.dataset.confirmPositions = conditions
        .map((char, index) => char !== "" ? String(index) : "")
        .filter(index => index !== "")
        .join(",");
      renderHighlightState(item);
    }
  });
}

// 文字確定ハイライトのリセット
function confirmReset(form) {
  clearConfirmHighlight();

  if (form) {
    form.char1.value = "";
    form.char2.value = "";
    form.char3.value = "";
    form.char4.value = "";
    form.char5.value = "";
  }
}

function clearConfirmHighlight() {
  const items = document.querySelectorAll('#targetPokemon li');
  items.forEach(item => {
    delete item.dataset.confirmHighlight;
    delete item.dataset.confirmPositions;
    renderHighlightState(item);
  });
}

function renderHighlightState(item) {
  if (!item.dataset.pokemonName) {
    item.dataset.pokemonName = item.textContent.trim();
  }

  const pokemonName = item.dataset.pokemonName;
  const confirmPositions = item.dataset.confirmPositions
    ? item.dataset.confirmPositions.split(",").map(Number)
    : [];

  if (confirmPositions.length > 0) {
    item.innerHTML = Array.from(pokemonName).map((char, index) => {
      if (confirmPositions.includes(index)) {
        return `<span style="background-color: #009900;">${escapeHtml(char)}</span>`;
      }

      return escapeHtml(char);
    }).join("");
  } else {
    item.textContent = pokemonName;
  }

  if (item.dataset.highlight === "true") {
    item.style.backgroundColor = "yellow";
  } else {
    item.style.backgroundColor = "";
  }
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
