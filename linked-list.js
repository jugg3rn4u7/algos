/**
* Linked-List operations -
* a. isEmpty
* b. size
* c. contains
* d. prepend
* e. append
* f. remove
* g. print
*/

function LinkedList () {
	this.head = null;
};

// If head is null then list is empty
LinkedList.prototype.isEmpty = function () {
	return this.head === null;
};

LinkedList.prototype.size = function () {
	let current = this.head, count = 0;
	while (current !== null) {
		current = current.next;
		count++;
	}
	return count;
};

// 1. Traverse the list to check if the value exists
// 2. If exists, return true else return false
LinkedList.prototype.contains = function (val) {
	let current = this.head;
	while(current !== null) {
		if(current.data === val) return true;
		else current = current.next;
	}
	return false;
};

// [10] -> [20] -> [30] -> [40] -> [50]
// 1. Create a new node with the val
// 2. Point the current node's next to the current head
// 3. Make the new node as head
LinkedList.prototype.prepend = function (val) {
	let newNode = {
		data: val,
		next: this.head
	};
	this.head = newNode;
};

// [10] -> [20] -> [30] -> [40] -> [50]
// 1. Create a new node with the val
// 2. Traverse to the end of list
// 3. Make last node's next point to the new node
LinkedList.prototype.append = function (val) {
	let newNode = {
		data: val,
		next: null
	};
	
	if(this.isEmpty()) this.head = newNode;
	else {
		let current = this.head;
		while(current.next !== null) {
			current = current.next;
		}
		current.next = newNode;
	} 
};

// [10] -> [20] -> [30] -> [40] -> [50]
// 1. If the val is present in the first node, just make the next node as head
// 2. Otherwise, traverse to the end of list to find the value at a node
// 3. When found, make its previous node point to its next node.
LinkedList.prototype.remove = function (val) {
	let previous = null, current = this.head;
	while(current !== null) {
		if(current.data === val) {
			if(previous === null) {
				current.next = this.head;
				return;
			} else {
				previous.next = current.next;
				return;
			}
		} else {
			previous = current;
			current = current.next;
		}
	}
};

// Outputs - [ 2, 5, 10, 50 ]
LinkedList.prototype.print = function () {
	let output = '[ ', current = this.head;
	while(current !== null) {
		output += current.data;
		if(current.next !== null) output += ', ';
		current = current.next;
	}
	output += ' ]';
	return output;
};


let list = new LinkedList();
list.prepend(10);
list.prepend(5);
list.prepend(15);
list.prepend(2);
list.append(50);
list.remove(15);

console.log(list.print());
console.log(list.size());
console.log(list.isEmpty());
console.log(list.contains(15));