function check(){
	var Q1=document.quiz.q1.value;
	var Q2=document.quiz.q2.value;
	var Q3=document.quiz.q3.value;
	var Q4=document.quiz.q4.value;

	var c=0;
	if(Q1=="1"){
		c++;
	}
	if (Q2=="0") {
		c++;
	}
	if(Q3=="1"){
	    c++;
	}
	if(Q4=="0"){
	    c++;
	}
	window.alert("You got "+c+" correct!")
}
