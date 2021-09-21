function addUser(){
    player_1=document.getElementById("player1_name_input").value;
    player_2=document.getElementById("player2_name_input").value;

    localStorage.setItem("player1",player_1);
    localStorage.setItem("player2",player_2);

    window.location="math.html";
}

function send(){
    number1=document.getElementById("word").value;
    number2=document.getElementById("word1").value;
    actual_number=parseInt(number1)*parseInt(number2);

    question_number="<h4>"+ number1 + "X" +number2+"</h4>";
    input= "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
    row=question_number+input+actual_number;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    document.getElementById("word1").value="";
}