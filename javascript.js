let myArray = [];

function checkArray() {
    document.getElementById("displayArray").innerHTML = myArray.join(', ');
}

function addToArray() {
    let myNumber = document.getElementById("myNumber").value;
    if (myNumber != null) {
        myArray.push(myNumber);
        checkArray();        
    }
    document.getElementById("myNumber").value = "";
}

function subFromArray() {
    let myNumber = document.getElementById("myNumber").value;
    if (myArray.includes(myNumber)) {
        myArray.splice(myArray.indexOf(myNumber), 1);
        checkArray();        
    }
    document.getElementById("myNumber").value = "";
}
