//your JS code here. If required.
function getDomLevel(element) {
	let level =0;

	while(element){
		level++:
		element = element.parentElement;
	}
	return level;
}

const targetEle = document.getElementById("level");
const domLevel = getDomLevel(targetEle);

alert(`The level of the element is: ${domLevel}`);