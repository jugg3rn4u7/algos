function main() {
	let numArray = [5, 3, 4, 10, 2, 6, 9, 8, 1, 7];
	mergeSort(numArray);
	console.log(numArray);
}

function mergeSort(numArray) {
	let len = numArray.length, mid = len / 2, left, right;
	left = numArray.slice(0 , mid);
	right = numArray.slice(mid, len);

	if(len == 1) return;
	else {
		mergeSort(left);
		mergeSort(right);
		merge(left, right, numArray);
	}
}

function merge(left, right, numArray) {
	let i = j = k = 0;
	while(i < left.length && j < right.length) {
		if(left[i] <= right[j]) numArray[k++] = left[i++];
		else numArray[k++] = right[j++];
	}
	while(i < left.length) numArray[k++] = left[i++];
	while(j < right.length) numArray[k++] = right[j++];
	return;
}

main();