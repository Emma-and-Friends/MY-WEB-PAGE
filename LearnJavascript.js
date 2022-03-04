let students = [18,19,20,21,22,23,24,25];

function checkAge(age){
	if(age >= 20){
		return students;
	}
}

let adultStudents = students.filter(checkAge);
console.log(adultStudents)

document.getElementById("button").onclick = function (){
	const p = document.querySelectorAll(".myp");
	const myh1 = document.getElementById("myh1");
	const buttons = document.getElementById("button");
	const underLine = document.createElement("u");
	underLine.innerHTML = "Hello Bye";
	myh1.innerHTML = "";
	myh1.append(underLine);
	buttons.remove();
	p.forEach(element => element.remove());


}



