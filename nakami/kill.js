// ポケモンを消す関数
function kill() {

  // 入力した文字を取得
  const kill_class = document.pokemon_kill.char.value;
  console.log (kill_class);
  let kill_class_split = kill_class.split('');
  console.log (kill_class_split);

  // 入力した文字のクラスを持つ要素を消す
  for (let i =0; i < kill_class_split.length; i++) {
    let target_class = kill_class_split[i];
    let target_char = document.getElementsByClassName(target_class);
    console.log (target_char);
    for (let j = 0; j < target_char.length; j++) {
      target_char[j].style.visibility = "hidden";
    }
  }

  // 入力をクリアしておく
  document.pokemon_kill.char.value = "";
}

// 消去のリセット
function kill_reset() {
  const items = document.querySelectorAll('#target_pokemon li');
  items.forEach(item => {
    // visibility を元に戻す (空文字はデフォルト値)
    item.style.visibility = "";
  });

  // 入力フィールドも空にしておく
  document.pokemon_kill.char.value = "";
}

// ポケモンをハイライトする関数
function highlight() {

  // 入力した文字を取得
  const highlight_class = document.pokemon_highlight.char.value;
  console.log (highlight_class);
  let highlight_class_split = highlight_class.split('');
  console.log (highlight_class_split);

  // 入力した文字のクラスを持つ要素をハイライト
  for (let i =0; i < highlight_class_split.length; i++) {
    let target_class = highlight_class_split[i];
    let target_char = document.getElementsByClassName(target_class);
    console.log (target_char);
    for (let j = 0; j < target_char.length; j++) {
      target_char[j].style.backgroundColor = "yellow";
    }
  }

  // フォームをクリアしておく
  document.pokemon_highlight.char.value = "";
}

// ハイライトのリセット
function highlight_reset() {
  const items = document.querySelectorAll('#target_pokemon li');
  items.forEach(item => {
    // 背景色を消す
    item.style.backgroundColor = "";
  });

  // 入力フィールドも空にしておく
  document.pokemon_highlight.char.value = "";
}
