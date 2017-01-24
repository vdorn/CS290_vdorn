cube(2);

function cube(x)
{
	console.log(x * x * x);
	return x * x * x;
}

theFunction(4);

var theFunction = function(x)
{
	return cube(x);
}

//theFunction(4);