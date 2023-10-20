    let toggle = document.querySelector(".toggle");
    let text = document.querySelector(".text");
    let header = document.querySelector(".header");
     
    function Animatedtoggle(){
        toggle.classList.toggle("active");

        if(toggle.classList.contains("active")){
            text.innerHTML = "ON";
        }
        else{
            text.innerHTML = "OFF";
        }

        if(toggle.classList.contains("active")){
            header.innerHTML = "Let's GO!";
        }
        else{
            header.innerHTML ="Good night!";
        }

    }