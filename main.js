/*Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/


const items = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const newItems = [];

//making an ascening order
items.sort((a,b) => {
	return a-b;
});

let counter = 1;

for (var i = 0; i <= items.length; i++) {
	console.log(items[i]);
	
	if (items[i] === items[i+1]){
		counter++;
		
	} else if (counter === 1){
		newItems.push(items[i]);
	} else {
		let array = new Array();
		for (var j = 0; j < counter; j++) {
			array.push(items[i]);
		}

		newItems.push(array);
		counter = 1;
		
	}
}

console.log(newItems);








