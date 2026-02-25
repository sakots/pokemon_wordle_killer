function kill() {

  // 入力した文字を取得
  const kill_class = document.pokemon.char.value;
  console.log (kill_class);
  let kill_class_split = kill_class.split('');
  console.log (kill_class_split);

  // 入力した文字のクラスを持つ要素を消す/表示する
  for (let i =0; i < kill_class_split.length; i++) {
    let target_class = kill_class_split[i];
    let target_char = document.getElementsByClassName(target_class);
    console.log (target_char);
    for (let j = 0; j < target_char.length; j++) {
      const currentDisplay = window.getComputedStyle(target_char[j]).display;
      if (currentDisplay === "none") {
        // すでに消えている場合は表示をもとに戻す
        target_char[j].style.display = "";
      } else {
        // 表示されている場合は消す
        target_char[j].style.display = "none";
      }
    }
  }
}
function highlight() {

  // 入力した文字を取得
  const highlight_class = document.pokemon.char2.value;
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
}