let myWindow;

function openWin() {
  myWindow = window.open("https://www.google.com.br/", "myWindow", "width=200, height=100");
}

function closeWin() {
  myWindow.close();
}

function onprint() {
    window.print();
}