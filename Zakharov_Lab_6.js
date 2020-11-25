(function() {
	// Задание 1.
	const f1 = () => undefined;
	const f2 = () => {};
	console.log("Задание 1:");
	console.log(f1(), f2());
})();


(function() {
	// Задание 2.
	const sum = (arr) => {
		let result = 0;
		for (let i = 0; i < arr.length; i++) {
			result += arr[i];
		}
		return result;
	};
	
	const evens = (arr) => {
		const result = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				result.push(arr[i]);
			}
		}
		return result;
	}
	
	const mult = (arr, koef = 2) => {
		const result = [];
		for (let i = 0; i < arr.length; i++) {
			result.push(arr[i] * koef);
		}
		return result;
	}
	
	
	const arr = [1, 2, 3, 4, 5, 6, 7, 8];
	
	console.log("Задание 2:");
	console.log("Исходный массив = ", arr);
	console.log("Сумма = ", sum(arr));
	console.log("Четные = ", evens(arr));
	console.log("Умножение на 2 = ", mult(arr));
})();


