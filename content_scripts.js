document.addEventListener('DOMContentLoaded', init, false);
document.getElementById('myCheck').addEventListener('click', func_a);

var using = 0;
var original_answer = [];
var my_answer = [];

function getQuestionType()
{
	return document.getElementsByClassName("pull-left")[0].textContent.trim();
}

function hide_answers_vocabulary()
{
	//get all answer elements from the page
	var res = document.getElementsByClassName("choice");
	for(var i = 0; i < res.length; i++)
	{
		res[i].outerHTML = my_answer[i];
	}
}

function show_answers_vocabulary()
{
	var res = document.getElementsByClassName("choice");
	for(var i = 0; i < res.length; i++)
	{
		my_answer[i] = res[i].outerHTML;
		res[i].outerHTML = original_answer[i];
	}
}

function init()
{
	//Create new button "Show/Hide"
	using = documentElement.getElementById("myCheck").checked;
	if(using === true)
		first_remove();
}

function show_hide(btn)
{
	//btn = document.getElementById("show-hide-btn");
	if(btn.textContent === "Show Answers")
	{
		show_answers_vocabulary();
		btn.textContent = "Hide Answers";
	}else{
		hide_answers_vocabulary();
		btn.textContent = "Show Answers";
	}
}

function first_remove()
{
	var mother = document.getElementsByClassName("answer-instructions")[0];
	var new_btn = document.createElement("a");
	new_btn.setAttribute("class", "btn");
	new_btn.setAttribute("id", "show-hide-btn");
	new_btn.onclick = function(){
		show_hide(new_btn);
	}
	new_btn.textContent = "Show Answers";
	
	mother.appendChild(new_btn);
	//new_btn.addEventListener("click", "show_hide(this)");

	var res = document.getElementsByClassName("choice");
	for(var i = 0; i < res.length; i++)
	{

		original_answer[i] = res[i].outerHTML;
		var word = res[i].textContent;
		
		res[i].classList.remove("correct");
		res[i].classList.remove("incorrect");
		res[i].children[0].removeAttribute("disabled");
		res[i].children[0].removeAttribute("checked");
		res[i].removeChild(res[i].childNodes[1]);
		
		var new_elem = document.createElement("span");
		//new_elem.setAttribute("class", "vocabulary");
		new_elem.textContent = word;
		
		res[i].appendChild(new_elem);

	}
}