const button = document.querySelector("#btn_input");
const ol = document.querySelector("#tasks");
// поиск элемента списка
const input = document.querySelector("#input");

let tasks = [
	{
		id: 1,
		name: "Доделать задачу",
		compleated: false,
	},
	{
		id: 2,
		name: "Купить молоко",
		compleated: true,
	},
];

// 1 способ, загружать данные которые есть

function addTask() {
	const text = input.value.trim();
	// обращаемся к селектору у него об. к значению(value)
	// после trim - удаляет проьелы в цонуе строки и в начале
	if (text !== "") {
		// проверяю что в поле input ввёл ккаие то данные,
		// а не пустое значение
		const li = document.createElement("li");
		// создаём чекбокс
		const cb = document.createElement("input");
		const label = document.createElement("label");
		cb.type = "checkbox";
		// добавление атрибута через точку(1 вариант)
		cb.setAttribute("value", false);
		// добавление атрибута через метод(2 вариант)
		cb.setAttribute("id", text);

		// работа с label
		label.setAttribute("for", text);
		label.innerText = text;

		li.appendChild(cb);
		li.appendChild(label);

		// создаём тег
		// li.innerHTML = text;

		// приравниваем значение
		ol.appendChild(li);
		// к тегу ol приравравниваем значение тега li
		// создаём дочерний элемент у тега ol
		// ol.innerHTML = li

		tasks.push({ id: tasks.length + 1, name: text, compleated: false });
		// добавление новой задачи в массив
		input.value = "";
		viewTask(tasks); // Перерисовываем список
		// очищаем

		li.addEventListener("click", () => {
			// 2. вариант добавления события по нажатию на элемент 1 раз
			li.classList.add("compleated");
			// добавляю стиль
		});

		console.log("~ text:", text);
		console.log(tasks);
	} else {
		// иначе выхожу из функции
		return;
	}
}

function deleteTask(idParam) {
	tasks = tasks.filter((i) => i.id != idParam);
	console.log(" newTask:", tasks);
	viewTask(tasks);
}

function viewTask(data) {
	let out = "";
	// переменная для вставки данных из массива
	for (const element of data) {
		// конкатанация
		// к переменной приравниваем значение объект

		// Задача: добавить:
		// 1. input checkbox
		// 2. Текст, 2 текст(выполненно или нет)
		// 3. Кнопка удаления
		out +=
			"<li>" +
			`
  <input type="checkbox" id="${element.name}" value="${element.compleated}" />
		<label for="${element.name}">${element.name}</label>
    ` +
			`<p onclick="deleteTask(${element.id})">🗑</p>` +
			"</li>";
		// через конкатанацию стро и через специальную кавычку вставляем html код, в него
		// посдтавляем перменные из массива
	}
	ol.innerHTML = out;
	// к нашему тегу приравниваем готовую строчку
}

viewTask(tasks);

button.onclick = addTask;
// 1. вариант добавления события

// комментарий
