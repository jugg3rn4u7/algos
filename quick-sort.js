function main() {
	let numArray = [5, 3, 4, 10, 2, 6, 9, 8, 1, 7];
	quickSort(numArray, 0, numArray.length - 1);
	console.log(numArray);
}

function quickSort(numArray, start, end) {

	if(start < end) {
		let partitionIndex = partition(numArray, start, end);
		quickSort(numArray, 0, partitionIndex - 1);
		quickSort(numArray, partitionIndex + 1, end);
	}

}

function partition(numArray, start, end) {

	let pivot = numArray[end], pIndex = start;
	for (let i = start; i < end; i++) {
		if(numArray[i] <= pivot) {
			let tmp = numArray[i];
			numArray[i] = numArray[pIndex];
			numArray[pIndex] = tmp;
			pIndex++;
		}
	}

	let tmp = numArray[pIndex];
	numArray[pIndex] = numArray[end];
	numArray[end] = tmp;

	return pIndex;
}

main();