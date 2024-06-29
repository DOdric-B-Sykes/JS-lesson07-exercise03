var body = document.querySelector(".happy");
var dropDown = document.querySelector("#moods");
var mood = "happy";


addGuestButton.addEventListener("click", function (){
    const guest = guestInput.value;
});

dropDown.addEventListener("change", function(e){
 mood = e.target.value;

    if (mood === "sad"){
        body.classList.remove("happy");
        body.classList.remove("passionate");
        body.classList.add("sad");
    } else if (mood === "passionate"){
        body.classList.remove("sad");
        body.classList.remove("happy");
        body.classList.add("passionate");
    } else {
        body.classList.remove("passionate");
        body.classList.remove("sad");
        body.classList.add("happy");
    }
});