var stack = [];
var tos = -1;
var nodes = 9;
var adjacancyMatrix = new Array(nodes); 

function main() {

	// create adjacancy list
	for (let i = 0; i < nodes; i++) {
		adjacancyMatrix[i] = new Array(nodes);
	}

	// Initialize adjacancy list
	for (let i = 0; i < nodes; i++) {
		for (let j = 0; j < nodes; j++) {
			adjacancyMatrix[i][j] = 0;
		}
	}

	// let 0 = a; 1 = b; 2 = c; 3 = d; 4 = e; 5 = f; 6 = g; 7 = h; 8 = s
	// Assign 1 to edges between nodes
	adjacancyMatrix[0][1] = 1; // a -> b
	adjacancyMatrix[0][8] = 1; // a -> s
	adjacancyMatrix[8][2] = 1; // s -> c
	adjacancyMatrix[8][6] = 1; // s -> g
	adjacancyMatrix[2][3] = 1; // c -> d
	adjacancyMatrix[2][4] = 1; // c -> e
	adjacancyMatrix[2][5] = 1; // c -> f
	adjacancyMatrix[6][5] = 1; // g -> f
	adjacancyMatrix[6][7] = 1; // g -> h
	adjacancyMatrix[4][7] = 1; // e -> h

	// Inverse relation
	adjacancyMatrix[1][0] = 1; // b -> a
	adjacancyMatrix[8][0] = 1; // s -> a
	adjacancyMatrix[2][8] = 1; // c -> s
	adjacancyMatrix[6][8] = 1; // g -> s
	adjacancyMatrix[3][2] = 1; // d -> c
	adjacancyMatrix[4][2] = 1; // e -> c
	adjacancyMatrix[5][2] = 1; // f -> c
	adjacancyMatrix[5][6] = 1; // f -> g
	adjacancyMatrix[7][6] = 1; // h -> g
	adjacancyMatrix[7][4] = 1; // h -> e

	dfs_traversal();
}

function dfs_traversal() {
	// start with node 'A'
	stack.push(getName(0));
	tos++;
	traverse(0);
}

function traverse(node) {
	console.log("Visited Node : ", getName(node), stack);
	for (let i = 0; i < nodes; i++) {
		if(adjacancyMatrix[node][i] == 1) {
			if(hasVisited(getName(i)) || !hasChildren(i)) {
				stack.pop();
				tos--;
			} else {
				stack.push(getName(i));
				tos++;
				traverse(getIndex(stack[tos]));
			}
		}
	}
}

function getName(nodeIndex) {
	switch(nodeIndex) {
		case 0: return 'A';
		case 1: return 'B';
		case 2: return 'C';
		case 3: return 'D';
		case 4: return 'E';
		case 5: return 'F';
		case 6: return 'G';
		case 7: return 'H';
		case 8: return 'S';
	}
}

function getIndex(name) {
	switch(name) {
		case 'A': return 0;
		case 'B': return 1;
		case 'C': return 2;
		case 'D': return 3;
		case 'E': return 4;
		case 'F': return 5;
		case 'G': return 6;
		case 'H': return 7;
		case 'S': return 8;
	}
}

function hasVisited(nodeName) {
	for (let i = 0; i < stack.length; i++) {
		if (stack[i] == nodeName) {
			return true;
		}
	}

	return false;
}

function hasChildren(node) {
	for (let i = 0; i < nodes; i++) {
		if(adjacancyMatrix[node][i] == 1) return true;
	} 
	return false;
}

main();
