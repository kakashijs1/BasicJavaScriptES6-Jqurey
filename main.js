//นี้คือการเขียนคำอธิบายใน JavaScript
//alert("hello css")

// document.write("เอกสารหรือใน Body หรือ DOM ");
// alert("JavaScript")

document.write("HelloWorld<br>")
document.write("<b>Hello Medium Text</b><br>")
document.write("<h1><font color='yellow'>JavaScrpit</font></h1>")


// //การสร้างตัวแปร
// var name = "JohnHalo"
// //var age = prompt("ป้อนอายุของคุณ", "0")

// //method ConFirmed
// //var status = confirm("Are you ok?")
// console.log(status);

// //prompt
// //var msg = prompt("กรอกป้อนข้อมูล", "กดตกลง")
// console.log(msg);

//การต่อ String 
// let x = "hello"
// let y = "world"
// x += y;

// console.log(x);

// condition Operater <= น้อยกว่า >= มากว่า 
// var voteable = (age <= 20) ? "U can vote" : "Not to vote";
// console.log(voteable);

//JavaScript flow control condition and Loop , เงื่อนไข การทำซ้ำ

//condition if 

var age = 8;
if (age <= 10) { //true
    var x = "childen";
} else if (age <= 20) {
    var x = "young";
} else { //false
    var x = "Old man"
}


//function Day and switch case
var day = new Date().getDay();
switch (day) {
    case 0:
        console.log("Sunday")
        document.body.style.backgroundColor = "red";
        break;
    case 1:
        console.log("Monday")
        document.body.style.backgroundColor = "blue";
        break;
    case 2:
        console.log("Tueday")
        document.body.style.backgroundColor = "black";
        break;
    default:
        console.log("Invalid Day")
        document.body.style.backgroundColor = "white";
        break;
}