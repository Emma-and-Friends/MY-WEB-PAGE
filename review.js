const reviews = [
{

id:1,
name:"Emmanuel Yidana",
job:"Web Developer",
img:
"Emmanuel.jpeg",
text:
"Iam serious web Developer from walewale but currently an undergraduate persuing a four year bachelors degree in Information Technology",


},

{
	id:2,
	name:"John Yidana",
	job:"Mobile App Developer",
	img:"Lawhiyatu.jpg",
	text:"Im John Yidana, a student at wulugu senior high school",
},

{
	id:3,
	name:"Ofori Emmanuel",
	job:"Programmer",
	img:"computers.jpg",
	text:"Im Emmanuel Ofori, a student and a programmer as well at University of Ghana,Legon",
},


];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const back = document.getElementById("background");

const nextBtn = document.querySelector(".next-btn");
const prvBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(){
 const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function(){
	currentItem++;
	if (currentItem > reviews.length-1) {
		currentItem = 0;
	}
	showPerson(currentItem);
})

prvBtn.addEventListener("click", function() {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length-1
	}
	showPerson(currentItem);
})

randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

var random = Math.floor(Math.random() * 100);
console.log(random);