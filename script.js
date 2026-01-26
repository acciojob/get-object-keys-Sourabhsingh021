//your JS code here. If required.
const student = {
	name : "John",
};

function getKeys(obj){
	return Object.keys(obj);
}

const codeToExecute  = "getKeys(student)";

const keys = eval(codeToExecute);

console.log(keys);
