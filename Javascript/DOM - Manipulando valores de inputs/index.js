function search() {
  const character = document.getElementById("character").value;
  document.getElementById("character").value = "";
  character.trim();
  switch (character) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      document.getElementById("numbers").value += character;
      break
    default:
        document.getElementById("words").value += character;
  }
}
