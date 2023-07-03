let x = 0;
let y = "Turn of: ";
let z = "X";
$("#myHeading-secondary").html(y+z);
$(".myScreen-sections").on("click", function(){
    let myAudio = new Audio("audio1.wav");
    myAudio.play();
if(x % 2 === 0 && this.innerHTML === ""){
        this.innerHTML = "X";
        x++;     
        z = "O";
        $("#myHeading-secondary").html(y+z);
    } else if(this.innerHTML === ""){
        this.innerHTML = "O";
        x++;
        z = "X";
        $("#myHeading-secondary").html(y+z);
    }
    checkWin();
});
function checkWin(){
    let a = document.querySelector(".a").textContent;
    let b = document.querySelector(".b").textContent;
    let c = document.querySelector(".c").textContent;
    let d = document.querySelector(".d").textContent;
    let e = document.querySelector(".e").textContent;
    let f = document.querySelector(".f").textContent;
    let g = document.querySelector(".g").textContent;
    let h = document.querySelector(".h").textContent;
    let i = document.querySelector(".i").textContent;
        if(a !="" && b !="" && c !="" && a === b && b === c){
            $("#winning").text(a+" won!");
            $(".myScreen-sections").off("click");
            $("#myHeading-secondary").html("Refresh for restarting");
            let myAudio1 = new Audio("win.wav");
            $(".myScreen-sections").removeClass("me");
            myAudio1.play();
        } else if(a !="" && d !="" && g !="" && a === d && d === g){
            $("#winning").text(a+" won!");
            $(".myScreen-sections").off("click");
            $("#myHeading-secondary").html("Refresh for restarting");
            let myAudio1 = new Audio("win.wav");
            $(".myScreen-sections").removeClass("me");
            myAudio1.play();
        } else if(a !="" && e !="" && i !="" && a === e && e === i){
            $("#winning").text(a+" won!");
            $(".myScreen-sections").off("click");
            $("#myHeading-secondary").html("Refresh for restarting");
            let myAudio1 = new Audio("win.wav");
            $(".myScreen-sections").removeClass("me");
            myAudio1.play();
        } else if(g !="" && h !="" && i !="" && g === h && h === i){
            $("#winning").text(g+" won!");
            $(".myScreen-sections").off("click");
            $("#myHeading-secondary").html("Refresh for restarting");
            $(".myScreen-sections").removeClass("me");
            let myAudio1 = new Audio("win.wav");
            myAudio1.play();
        } else if(c !="" && f !="" && i !="" && c === f && f === i){
            $("#winning").text(c+" won!");
            $(".myScreen-sections").off("click");
            $("#myHeading-secondary").html("Refresh for restarting");
            let myAudio1 = new Audio("win.wav");
            $(".myScreen-sections").removeClass("me");
            myAudio1.play();
        } else if(b !="" && e !="" && h !="" && b === e && e === h){
            $("#winning").text(b+" won!");
            $(".myScreen-sections").off("click");
            $("#myHeading-secondary").html("Refresh for restarting");
            let myAudio1 = new Audio("win.wav");
            $(".myScreen-sections").removeClass("me");
            myAudio1.play();
        } else if(c !="" && e !="" && g !="" && c === e && e === g){
            $("#winning").text(c+" won!");
            $(".myScreen-sections").off("click");
            $("#myHeading-secondary").html("Refresh for restarting");
            let myAudio1 = new Audio("win.wav");
            $(".myScreen-sections").removeClass("me");
            myAudio1.play();
        } else if(d !="" && e !="" && f !="" && e === d && d === f){
            $("#winning").text(d+" won!");
            $(".myScreen-sections").off("click");
            $("#myHeading-secondary").html("Refresh for restarting");
            let myAudio1 = new Audio("win.wav");
            $(".myScreen-sections").removeClass("me");
            myAudio1.play();
        } else if(a !="" && b !="" && c !="" && d !="" && e !="" && f !="" && g !="" && h !="" && i !=""){
            $("#winning").text("Draw!");
            $("#myHeading-secondary").html("Refresh for restarting");
        }
    }
    if($(".myScreen-sections").html("")){
    $(".myScreen-sections").on("mouseover", function(){
        $(this).css("background", "rgba(128, 128, 128, 0.268)");
    });
    $(".myScreen-sections").on("mouseout", function(){
        $(this).css("background", "white");
    });
}