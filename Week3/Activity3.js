function deepEqual(obj1, obj2)
{
	//check to see if both parameters are objects
	if (typeof obj1 == "object" && obj1 != null && typeof obj2 == "object" && obj2 != null)
	{
		//console.log("Objects");
		//check to see if both objects contain the same number of properties
		var count1 = 0;
		var count2 = 0;
		for (var prop in obj1){
			count1++;
		}
		for (var prop in obj2){
			count2++;
		}
		if (count1 == count2){
			//console.log("Same number of properties");
			//check each property
			var x = 0;
			for(prop1 in obj1){
			  //console.log(obj1[prop1]);
			  //console.log(typeof obj1[prop1]);
			  for(prop2 in obj2)
			  {
				//console.log(obj2[prop2]);
				//console.log(typeof obj2[prop2]);
				if(prop1 === prop2)
				{
					if (deepEqual(obj1[prop1], obj2[prop2]) === false)
					{
						return false;
					}
				}
			  }
			}
			return true;
		}
		else{
			return false;
		}
	}
	//check to see if the non-objects are equal
	else if(obj1 === obj2){
	  //console.log(obj1);
	  //console.log(obj2);
	  //console.log("returning true in obj1 === obj2!");
	  return true;
	}
	//obj 1 or obj2 not an object and do not match
	//console.log("returning false at end!");
	return false;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

/*console.log(obj);
for(prop in obj)
{
	console.log(typeof obj[prop]);
	console.log(obj[prop]);
}*/

//var x;
/*for(var x = 0; x < count1; x++)
{
	if (obj1[x] !== obj2[x])
		return false;
	if(deepEqual(obj1[x], obj2[x]) == false){
		return false;
}*/