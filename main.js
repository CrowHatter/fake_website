let mode = 1;
function changeMode() {
    if (mode === 1){
        document.getElementById("signingChange").textContent = "使用email註冊/登入";
        document.getElementById("signingMode").textContent = "手機號碼";

        document.getElementById("inputMode").placeholder="請輸入手機號碼";

        let parentDiv = document.getElementById("upon");
        let AddedThing = document.createElement("select");
        AddedThing.setAttribute("id", "newSelect");
        AddedThing.setAttribute("class", "");
        let OldInput = document.getElementById("inputMode");
        parentDiv.insertBefore(AddedThing, OldInput);

        OldInput.style.width="300px";

        mode = 2;
    } else if (mode === 2){
        document.getElementById("signingChange").textContent = "使用手機登入";
        document.getElementById("signingMode").textContent = "常用信箱";

        document.getElementById("inputMode").placeholder="輸入信箱";

        document.getElementById("newSelect").remove();
        document.getElementById("inputMode").style.width="100%";


        mode = 1;
    }
}