function kill() {
  const kill_class = document.pokemon.char.value;
  console.log (kill_class);
  let kill_class_split = kill_class.split('');
  console.log (kill_class_split);
  for (let i =0; i < kill_class_split.length; i++) {
    let target_class = kill_class_split[i];
    let target_char = document.getElementsByClassName(target_class);
    console.log (target_char);
    for (let j = 0; j < target_char.length; j++) {
      target_char[j].style.display = "none";
    }
  }
}
