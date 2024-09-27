let lichtAn = false; 

function buttonClickHandler(){

        if (lichtAn == false){
                document.getElementsByClassName("meinBild")[0].src = "licht-aus.png";
        } else {
                document.getElementsByClassName("meinBild")[0].src = "licht-an.png";      
        }

        lichtAn = !lichtAn;
}

