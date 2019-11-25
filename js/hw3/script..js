//"use strict" //включение строгого режима в браузере, указывается в начадле документа
function task1() {
	let A = [ 12, 4, 3, 10, 1, 20 ];
	let B = [-3, -7, -100, -33];
	let C  = A.concat(B);
	let C2 = B.concat(A);
	
	console.log(C);
	console.log(C2);
}


function task3() {
	let arr = [12,4,3,10,1,20];
	let min = arr[0];
	let max = arr[0];
	for(let i = 0, len = arr.length; i < len; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}	
    arr.splice(arr.indexOf(min), 1);
    arr.splice(arr.indexOf(max), 1);
    console.log(arr);
}