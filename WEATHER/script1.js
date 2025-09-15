//json
console.log("===Hour 1: JSON Basic ===");
let student = {
    name:"Navya",
    age:21,
    marks:[85,76,98]
};
let jsonString = JSON.stringify(student);
console.log("JSON String:",jsonString);

let parsedObj=JSON.parse(jsonString);
console.log("parsed objects:",parsedObj);



