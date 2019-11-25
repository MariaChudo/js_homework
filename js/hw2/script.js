//"use strict" //включение строгого режима в браузере, указывается в начадле документа
function task1() {
	let month = +prompt("Выберите месяц:\n 1 - январь \n 2 - февраль \n 3 - март \n 4 - апрель \n 5 - май \n 6 - июнь \n 7 - июль \n 8 - август \n 9 - сентябрь \n 10 - октябрь \n 11 - ноябрь 12 - декабрь", "1");
	switch(month) {
		case 12:
		case 1:
		case 2:
			alert("зима");
			break;
		case 3:
		case 4:
		case 5:
			alert("весна");
			break;
		case 6:
		case 7:
		case 8:
			alert("лето");
			break;
		case 9:
		case 10:
		case 11:
			alert("осень");
			break;
		default:
			alert("такого месяца не существует")
	}
}

function task2() {
	let n = +prompt("Выберите единицу измерения:\n 1 - дециметр \n 2 - километр \n 3 - метр \n 4 - миллиметр \n 5 - сантиметр", "1");
	let L = prompt("Введите длину отрезка", 0);
		switch(n) {
		case 1:
			alert(L + ' дц = ' + L*0.1 + 'м');
			break;
		case 2:
			alert(L + ' км = ' + L*1000 + 'м');
			break;
		case 3:
			alert(L + ' м = ' + L + 'м');
			break;
		case 4:
			alert(L + ' мм = ' + L*0.001 + 'м');
			break;
		case 5:
			alert(L + ' см = ' + L*0.01 + 'м');
			break;
		default:
			alert("это не выполнится")
	}
}

function task3() {
	let num = +prompt("Введите число");
		if (num >= -999 && num < -99) {
			alert("Отрицательное трехзначное число");
		}
		else if (num > -100 && num < -9) {
			alert("Отрицательное двузначное число");
		}
		else if (num > -10 && num < 0) {
			alert("Отрицательное однозначное число");
		}
		else if (num === 0) {
			alert("Нулевое значение");
		}
		else if (num > 0 && num < 10) {
			alert("Положительное однозначное число");
		}
		else if (num > 9 && num < 100) {
			alert("Положительное двузначное число");
		}
		else if (num > 99 && num <= 999) {
			alert("Положительное трехзначное число");
		}	
		else alert("число не входит в диапозон")
}

function task4() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
		console.log('ThreeFive');
		} else if (i % 3 === 0) {
		console.log('three');
		} else if (i % 5 === 0) {
		console.log('five');
		} else {
		console.log(i);
		}
	}
}


function task5() {
	let year = +prompt("Введите год");
		if (year % 400 == 0 || year % 100 == 0 || year % 4 == 0) 
			{ alert("Високосный год") }
		else {
			alert("Не високосный год"); }
}