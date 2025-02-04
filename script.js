function getAnswer(){
    let sendAnswer = document.getElementById("answer").value;
    const trueAnswer = "Europe";
    if (sendAnswer.toLowerCase() == trueAnswer.toLowerCase()){
        alert("Bien joué");
    }else{
        alert("veuillez ressayer");
    }
}

