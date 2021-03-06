var player1name = localStorage.getItem("player1name");
var player2name = localStorage.getItem("player2name");
var player1score = 0;
var player2score = 0;
var player_question = "player1";
var player_answer = "player2";
document.getElementById("player1_name").innerHTML = player1name + " : ";
document.getElementById("player2_name").innerHTML = player2name + " : ";
document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;
document.getElementById("player_question").innerHTML = "Question Turn: " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2name;
function generateQuestion() {
    word = document.getElementById("word").value;
    lowerCase_word = word.toLowerCase();
    console.log(lowerCase_word);
    charAt1 = lowerCase_word.charAt(1);
    charAt2 = lowerCase_word.charAt(Math.floor(lowerCase_word.length / 2));
    charAt3 = lowerCase_word.charAt(lowerCase_word.length - 1);
    charAt4 = lowerCase_word.charAt(Math.floor(Math.random()* lowerCase_word.length));
    console.log(charAt1);
    console.log(charAt2);
    console.log(charAt3);
    console.log(charAt4);
    replace_charAt1 = lowerCase_word.replace(charAt1, "_");
    replace_charAt2 = replace_charAt1.replace(charAt2, "_");
    replace_charAt3 = replace_charAt2.replace(charAt3, "_");
    replace_charAt4 = replace_charAt3.replace(charAt4, "_");
    console.log(replace_charAt4);
    question_tag = "<h4 id='word_display'> Question: " + replace_charAt4 + "</h4> <br>";
    answer_tag = "Answer: <input type='text' id='answer_check'> <br>";
    check_button = "<br> <button class='btn btn-info' onclick='check_answer()'> Check </button>";
    document.getElementById("output").innerHTML = question_tag + answer_tag + check_button;
    document.getElementById("word").value = "";
}
function check_answer() {
    get_answer = document.getElementById("answer_check").value;
    lowerCase_answer = get_answer.toLowerCase();
    console.log(lowerCase_answer);
    if (lowerCase_answer == lowerCase_word) {
        if (player_answer == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1_score").innerHTML = player1score;
        }
        else if (player_answer == "player2") {
            player2score = player2score + 1;
            document.getElementById("player2_score").innerHTML = player2score;
        }
    }
    else {
        if (player_answer == "player1") {
            player1score = player1score - 1;
            document.getElementById("player1_score").innerHTML = player1score;
        }
        else if (player_answer == "player2") {
            player2score = player2score - 1;
            document.getElementById("player2_score").innerHTML = player2score;
        }
    }
    if (player_question == "player1") {
        player_question = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player2name;
    }
    else {
        player_question = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player1name;
    }
    if (player_answer == "player2") {
        player_answer = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player1name;
    }
    else {
        player_answer = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2name;
    }
    document.getElementById("output").innerHTML = "";
}