let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
	btn.addEventListener('click', function(e) {
		const styles = e.currentTarget.classList;
		if (styles.contains("decrease")) {
			count--;
		}
		else if (styles.contains("reset")) {
			count = 0;
		}

		else if (styles.contains("increase")) {
			count++;
		}
		value.textContent = count;
	})
})