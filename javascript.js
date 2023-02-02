// function myFunction() {
//     let myNumber = document.getElementById("myNumber").value;
//     if (myNumber != null) {
//         for (let i = 1; i <= myNumber; i++) {
//             console.log(`Hello ${i}`)
//         }
//     }
// }

let myArray = [];

function addToArray() {
    let myNumber = document.getElementById("myNumber").value;
    if (myNumber != null) {
        myArray.push(myNumber);
        console.log(myArray);
        let display = document.getElementById("display").value;
        display = myArray;
    }
}

function subFromArray() {
    let myNumber = document.getElementById("myNumber").value;
    if (myArray.includes(myNumber)) {
        myArray.splice(myArray.indexOf(myNumber), 1);
        console.log(myArray);
    }
}

let mystring = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
console.log(mystring);
console.log(mystring.replaceAll('$', ' '));