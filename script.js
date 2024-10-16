const button = document.querySelector('#btn_input');

const tasksTag = document.querySelector("#tasks");
// поиск элемента

const tasks = [
  {
    id: 1,
    name: 'Доделать задачу',
    compleated: false,
  },
];

button.onclick = function () {
  const tempObj = {
    id: 2,
    name: '',
    compleated: true,
  };
  console.log('Мы нажали на кнопку');
  // ЧТо то написать, что бы в массив tasks добавлялся объект с полями(id,name,compleated)
  // методы массивы
	tasks.push(tempObj);
  console.log(tasks);
  // верстать дизайн
};
