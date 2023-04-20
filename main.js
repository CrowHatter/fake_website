let mode = 1;
function changeMode() {
    if (mode === 1){
        document.getElementById("signingChange").textContent = "使用email註冊/登入";
        document.getElementById("signingMode").textContent = "手機號碼";

        document.getElementById("inputMode").placeholder="請輸入手機號碼";

        let parentDiv = document.getElementById("upon");
        let MySelect = document.createElement("select");
        MySelect.setAttribute("id", "newSelect");

        let option1 = document.createElement("option");
        option1.text="+886";
        MySelect.add(option1);
        let option2 = document.createElement("option");
        option2.text="+852";
        MySelect.add(option2);
        let option3 = document.createElement("option");
        option3.text="+853";
        MySelect.add(option3);
        let option4 = document.createElement("option");
        option4.text="+1";
        MySelect.add(option4);
        let option5 = document.createElement("option");
        option5.text="+7";
        MySelect.add(option5);
        let option6 = document.createElement("option");
        option6.text="+20";
        MySelect.add(option6);
        let option7 = document.createElement("option");
        option7.text="+27";
        MySelect.add(option7);



        let OldInput = document.getElementById("inputMode");
        parentDiv.insertBefore(MySelect, OldInput);

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