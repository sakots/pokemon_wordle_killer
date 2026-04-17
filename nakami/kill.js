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
      item.style.backgroundColor = 'yellow';
    }
  });

  // フォームをクリアしておく
  form.char.value = "";
}

// ハイライトのリセット
function highlightReset(form) {
  const items = document.querySelectorAll('#targetPokemon li');
  items.forEach(item => {
    // 背景色を消す
    item.style.backgroundColor = "";
  });

  // 入力フィールドも空にしておく
  if (form) {
    form.char.value = "";
  }
}
