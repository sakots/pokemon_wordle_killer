function kill() {
    let kill_class = document.pokemon_killer.char.value;
    console.log (kill_class);
    //kill_classname = "'" + kill_class + "'";
    //console.log (kill_classname);
    let target = document.getElementsByClassName(kill_class);
    console.log (target);
    for (let i = 0; i < target.length; i++) {
        target[i].style.display = "none";
    }
}