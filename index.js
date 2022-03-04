
function takevalue(){
	var fname = document.getElementById("firstname").value;
	var lname = document.getElementById("lastname").value;
	var dob = document.getElementById("Dob").value;
	var tele =document.getElementById("telephone").value;
	var psw = document.getElementById("password").value;
	var gen = document.getElementById("gender").value;
	var marital = document.getElementById("status").value;
	var addr = document.getElementById("Address").value;
	var eml = document.getElementById("email").value;
	var msg = document.getElementById("inbox").value;
	var image = document.getElementById("img").value;
	var course = document.getElementById("Courses").value;
	document.write("<h1>Your Info</h1>");
	document.write("YOUR FIRST NAME IS :" + fname + "<br>")
	document.write("YOUR LAST NAME IS :" + lname + "<br>");
	document.write("YOUR DATE OF BIRTH IS :" + dob + "<br>");
	document.write("YOUR TELEPHONE IS :" + tele + "<br>");
	document.write("YOUR PASSWORD IS :" + psw + "<br>");
	document.write("YOUR  GENDER IS :" + gen + "<br>");
	document.write("YOUR MARITAL STATUS IS :" + marital + "<br>");
	document.write("YOUR HOUSE ADDRESS IS :" + addr + "<br>");
	document.write("YOUR EMAIL ADDRESS IS :" + eml + "<br>");
	document.write("THE MESSAGE FROM YOU  IS :" + msg + "<br>");
	document.write("YOUR IMAGE FILE IS :" + image + "<br>");
	document.write("YOUR COURSE CHOOSEN IS :" + course + "<br>").style.color="red";	};

function capital(){
	var x = document.getElementById("firstname");
	x.value = x.value.toUpperCase();
	var y = document.getElementById("lastname");
	y.value = y.value.toUpperCase();
};

	    	function showTime(){
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var session = "AM";

	if (h == 0){
		h = 12;
	}

	if (h > 12){
		h = h - 12;
		session = "PM";
	}

	m = (m < 10)? m = "0" + m:m;
	h = (h < 10)? h = "0" + h:h;
	s = (s < 10)? s = "0" + s:s;

	var time = h + ":" + m + ":" + s + session	;
	document.getElementById("Digitalclock").innerText=time;
	document.getElementById("Digitalclock").textContent = time;
	setTimeout(showTime,1000);
}
      showTime();


(function(document) {
  var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));
  _bars.map(function(bar, index) {
    setTimeout(function() {
    	bar.style.width = bar.dataset.percent;
    }, index * 1000);
    
  });
})(document);

