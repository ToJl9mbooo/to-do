const a = document.getElementById("footer");
// находи элемент по id
a.style.background = "#fc6c85";
a.style.minHeight = "100px";

a = document.getElementsByTagName("div");
// находит по тегу

b = document.querySelectorAll("p > a");
// находит по css селектору
for (let e of b) {
	console.log(e.innerText);
}
//
c = document.querySelectorAll(".subsubcontent");
// поиск по классу(через точку)

d = document.querySelectorAll("#footer");
// поиск по id(через решётку)

tasks.push({
	id: 2,
	name: 'Сходить за молоком',
	compleated: false,
});
console.log(tasks);
