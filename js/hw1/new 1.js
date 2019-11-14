//"use strict" //включение строгого режима в браузере, указывается в начадле документа

function task1() {
	let a = 15*25;
	let area = 1000;//10 соток
	let result = area % a;
	alert('Осталось '+result+' м2');
}

function task2() {
	let oval = 1500;//15дм2 = 1500см2
	let round = 600;
	let result = oval - round;
	alert('Площадь овального кольца '+result+' см2');
}

function task3() {
	let a = prompt("Введите 1 число", 0);
	let b = prompt("Введите 2 число", 0);
	let c = prompt("Введите 3 число", 0);
	alert('Наименьшее число '+ Math.min(a, b, c));
}

function task4() {
	let m = prompt("Введите значение для переменной m", 0);
	let n = prompt("Введите значение для переменной n", 0);
	let number = 10;
	let m1 = Math.abs(m-number);
	let n1 = Math.abs(n-number);
	console.log('Ближайшее к 10: ' + (m1 == n1 ? "оба одинаковы" : m1 < n1 ? m : n));
}