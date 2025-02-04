function getReponse(){
    let sendReponse = document.getElementById("reponse").value;
    const trueReponse = "Europe";
    if (sendReponse.toLowerCase() == trueReponse.toLowerCase()){
        alert("Bien joué");
    }else{
        alert("veuillez ressayer");
    }
}

