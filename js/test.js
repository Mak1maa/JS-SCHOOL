var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["Какое расширение у JS?", ".exe", ".py", ".js", "C"],
	["Какие функции выполняет JS?", "Отвечает за функции на стороне клиента", "Создает стилевое оформление сайта", "Отвечает за работу с базами данных", "A"],
	["Где верно указан вывод данных?", 'printf("Hi!");', 'prompt("Hello!");', 'console.log("Howdy!");', "C"],
	["Какие значения можно хранить в переменных?", "Только строки", "Строки, числа с точкой, простые числа и булевые выражения", "Строки, числа с точкой", "B"],
    ["Какая переменная записана неверно?", "var b = true;", "var num = 'STR';", "var number = 69,9;", "C"],
    ["Где верно указан запуск всплывающего окна?", 'new window("Yo!");', 'alert("Howdy!");', 'windowInBrowser("Hey!");', "B"],
    ["Какие циклы есть в языке JavaScript?", "Только цикл for", "for, foreach, while", "for, while, do while", "C"],
    ["Комментирование в JavaScript, выбери правильный вариант...", "-- Комментарий", "// Комментарий", "# Комментарий", "B"],
    ["Какое событие позволяет выполнять код после щелчка мыши?", "mouseClick", "clickon", "onclick", "C"],
    ["Какой оператор из этих выполняет не только математические операции?", "+", "*", "->", "A"]
];

function _(x){
	return document.getElementById(x);
}

function renderQuestion(){
	test = _("test");

	if(pos >= questions.length){
		test.innerHTML = "<h2 style = 'margin-bottom: 65px'>Вы ответили на " + correct + " из " 
                                                + questions.length + " заданных вопросов!</h2>";
		_("test_status").innerHTML = "Тест завершен";
        //test.innerHTML += "<button style = 'margin-left: 75px' onclick = 'answers()'>Посмотреть ответы</button>";
		pos = 0;
		correct = 0;
		return false;
	}

	_("test_status").innerHTML = "Вопрос " + (pos + 1) + " из " + questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h2>" + question + "</h2>";
	test.innerHTML += "<input type = 'radio' name = 'choices' value = 'A'> " + chA + "<br>";
	test.innerHTML += "<input type = 'radio' name = 'choices' value = 'B'> " + chB + "<br>";
	test.innerHTML += "<input type = 'radio' name = 'choices' value = 'C'> " + chC + "<br>";
	test.innerHTML += "<button onclick = 'checkAnswer()'>Далее</button>";
}

function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}

	if(choice == questions[pos][4]){
		correct++;
	}

	pos++;
	renderQuestion();
}

function answers(){
    test.innerHTML += "<h2><br>" + "Ответ на вопрос #1: .js" + "</h2>";
    test.innerHTML += "<h2><br>" + "Ответ на вопрос #2: Отвечает за функции на стороне клиента" + "</h2>";
    test.innerHTML += "<h2><br>" + 'Ответ на вопрос #3: console.log("Howdy!");' + "</h2>";
    test.innerHTML += "<h2><br>" + "Ответ на вопрос #4: Строки, числа с точкой, простые числа и булевые выражения" + "</h2>";
    test.innerHTML += "<h2><br>" + "Ответ на вопрос #5: var number = 69,9;" + "</h2>";
    test.innerHTML += "<h2><br>" + 'Ответ на вопрос #6: alert("Howdy!");' + "</h2>";
    test.innerHTML += "<h2><br>" + "Ответ на вопрос #7: for, while, do while" + "</h2>";
    test.innerHTML += "<h2><br>" + "Ответ на вопрос #8: // Комментарий" + "</h2>";
    test.innerHTML += "<h2><br>" + "Ответ на вопрос #9: onclick" + "</h2>";
    test.innerHTML += "<h2 style = 'margin-bottom: 60px;'><br>" + "Ответ на вопрос #10: +" + "</h2>";
}

window.addEventListener("load", renderQuestion, false);