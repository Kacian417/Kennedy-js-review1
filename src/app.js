/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let people = [
    { name: "Tom", lastname: "Bradley", birthDate: new Date("2001-04-17") },
    { name: "Dylan", lastname: "Thompson", birthDate: new Date("1982-06-17") },
    { name: "Shayla", lastname: "Carvol", birthDate: new Date("1991-12-17") },
    { name: "Bob", lastname: "Hardley", birthDate: new Date("1995-12-20") },
    { name: "Maria", lastname: "Manrique", birthDate: new Date("1985-11-17") }
  ];
  //console.log("The original people: ", people);

  //while loop:
  // let index = 0;
  //while (index < people.length) {
  // console.log("Using the while loop:", people[index]);
  //index++;
  // }

  //for loop:
  //for (let index = 0; index < people.length; index++) {
  //console.log("Using the while loop:", people[index]);
  // }

  //"forEach" loop:
  //people.forEach(element => { console.log("Using the forEach loop:", element});

  let myArr = [];
  let myArr2 = ["one", 2, "three", 4, "six", 7, "eight", 9, "ten"];

  console.log(myArr);
  console.log(myArr2);
  //.push adds item to array
  myArr2.push("six");
  console.log(myArr2);
  //.pop removes array item
  myArr2.pop();
  console.log(myArr2);
  //.unshift adds to beginning of array
  myArr2.unshift(0);
  console.log(myArr2);
  myArr2.shift();
  console.log(myArr2);

  for (let index in myArr2) {
    console.log(myArr2[index]);
  }

  //slice and splicing
  myArr = myArr2.slice(3, 5);
  console.log(myArr);
  myArr = myArr2.splice(3, 5);
  console.log(myArr);

  //sort
  myArr2.sort();
  console.log(myArr2);
};
