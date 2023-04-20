let mode = 1;
function changeMode() {
    if (mode === 1){
        document.getElementById("signingChange").textContent = "使用email註冊/登入";
        document.getElementById("signingMode").textContent = "手機號碼";

        document.getElementById("inputMode").placeholder="請輸入手機號碼";
        /*
        var y = document.getElementsByClassName("upon");
        var x = document.createElement("select");
        x.setAttribute("class", "EmailAndPassword");
        document.body.insertAdjacentElement(y,x);
         */
        mode = 2;
    } else if (mode === 2){
        document.getElementById("signingChange").textContent = "使用手機登入";
        document.getElementById("signingMode").textContent = "常用信箱";

        document.getElementById("inputMode").placeholder="輸入信箱";
        mode = 1;
    }
}