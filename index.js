// const score = ;
// let grade;
// if (score >= 85 && score <= 100) {
//     grade = "A";
//     console.log(grade);
// } else if (score >= 70 && score <= 84) {
//     grade = "B";
//     console.log(grade);
// } else if (score >= 60 && score <= 69) {
//     grade = "C";
//     console.log(grade);
// } else if (score >= 45 && score <= 59) {
//     grade = "D";
//     console.log(grade);
// } else {
//     grade = "plese enter vaild score like 1 to 100 ";
//     console.log(grade)
// }



// for (let num = 0; num < 100; num++) {
//     if (num %2  == 0) {
//         console.log("num",num)
//     }

// }

// let gameNum = 10;

// let userNum = prompt("guss the game num :");

// while (userNum != gameNum) {
//     userNum = prompt("plese try again :");
// }

// console.log("you are the won the this game :")

// let  num = 0;
// for ( num = 0; num < 20; num++) {
//     console.log(num)
//     if (num % 2== 0) {
//         console.log("num is :" , num)
//     }
// }

// let arr = [10,100,90, 54, 25, 87, 68, 57, 58];
// let sum = 0;
// for (const val of arr) {
//     sum =sum+ val;
// }

// let avrage= sum/arr.length
// console.log(`avrage mark of is ${avrage}`);


// let itmes = [250, 300, 900, 50, 450];
// let arr = 0;
// for (let val of itmes) {
//     let offer = val / 10;
//     itmes[arr] = itmes[arr] - offer;
//     console.log("value of after offer", itmes[arr])
//     arr++;
// }


//  let itmes = [250, 300, 900, 50, 450];

//  for(let i = 0; i < itmes.length; i++){
//     let offer = itmes[i] /10;
//     itmes[i] = itmes[i] - offer;
//  console.log(itmes[i])

//  }

// function vovels(str) {
//    let count = 0;
//    for (const val of str) {
//       if (val === "a" || val === "o" || val === "u" || val === "i") {

//       }
//       count++;

//    }
//    return count;

// }

// let data = document.getElementById("won");
// data =  data.innerText + "from apna collage students";
// let index = 1;
// let divs = document.querySelectorAll(".box");
// for(let val of divs){
//    val =  val.innerText = `new ${index}`;
//    index++
// }
// console.log(divs)


// let buttton = document.createElement("button");
//  buttton.innerText = "click me";

// buttton.style.backgroundColor = "red"
// buttton.style.color = "white";

// document.querySelector("body").prepend(buttton);

// let pra = document.querySelector(".para");
// pra.classList.remove("newClass");
// pra.classList.add("newClass");
// let btn = document.createElement("button");
//   btn.innerText = "button";
//   btn.style.backgroundColor  = "red";
//   btn.style.color = "white";
//   btn.style.padding = '10px';
//   btn.style.border = 'none';
//   btn.style.textTransform = 'uppercase';
//   btn.style.borderRadius = '4px';
//   btn.style.marginLeft = '600px';
// document.querySelector("body").prepend(btn);
// let a = 0;
// btn.addEventListener("click", (e) =>{
//    console.log("button was clicked");
//    console.log("e",e.type,a++);

// })

// let a = 1;
// let data = document.querySelector(".pata");
// data.addEventListener("click",(e)=>{
//    let b  = e;
//    a++;
// })

// console.log(data)
let userId = 1;

function submitForm() {
    // show data in list
    document.getElementById("list");

    // get error meassage
    document.getElementById("usererror").innerText = "";
    document.getElementById("emailerror").innerText = "";
    document.getElementById("passworderror").innerText = "";


    // get  form input field value
    let userName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let conPassword = document.getElementById("conpassword").value;


    // form data 
    let dataBody = document.getElementById("dataBody");
    let newRow = document.createElement("tr");

    newRow.innerHTML = `
    <td>${userId}</td>
    <td>${userName}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${conPassword}</td>
    `;
    userId++;

    dataBody.appendChild(newRow);


    // form validaction condactions

    if (userName === "") {
        document.getElementById("usererror").innerText = "Please fill the name";
        return;
    }
    if (email === "") {
        document.getElementById("emailerror").innerText = "email address is required";
        return;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailerror").innerText = "Invalid email address"
    }
    if (password === "") {
        document.getElementById("passworderror").innerText = "password is required";

        return;
    }
    if (password.length < 8) {
        document.getElementById("passworderror").innerText = "Password must be at least 8 characters";
        return;
    }

    var passwordRegex = /(?=.*[!@#$%^&*])/;
    if (!passwordRegex.test(password)) {
        document.getElementById("passworderror").innerText = "Include at least one special character";
        return;
    }

    if (conPassword !== password) {
        document.getElementById("conpassworderror").innerText = "password do not match";
        return;
    }

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("conpassword").value = "";
    alert('Form submitted successfully!');


}

// const list = [1,2,3,4,5,6,7,8,9,10];

// const newVal = list.filter((itme)=>{
//      return itme >5
// })

// console.log(newVal)

const itme = ["ram","sanjay",'vikash','raj'];

// console.log(itme)
// const data = itme.filter((name)=> {
//     return name === "sanjay" || name === "ram"
// });

// console.log(data)


// const list = product.filter((item)=>{
//     return item.price > 2000 && item.proName === "car";
// })

// let prolist = document.getElementById("prolist");

// const product = [
//     {proName : "phone", price: 9999, dis: 10 },
//     {proName : "laptop", price: 19999, dis: 15 },
//     {proName : "fan", price: 999, dis: 18 },
//     {proName : "car", price: 1009999, dis: 25 },
// ]

// const data = product.map((item)=> {
// let list = document.createElement("li");

//      list.innerText = `name : ${item.proName} price: ${item.price} discount : ${item.dis}`
//      return list;
    
// })

// data.forEach((li)=>{
//     prolist.appendChild(li)
// })
// console.log(data)
// console.log(list)

// data.forEach((item)=>{
//     // let price = item.price * 25 /100;
// lilist.innerText = `Product Name ${item.proName} Product Price ${item.price}  Priduct Dis ${item.dis}`;
// prolist.appendChild(lilist);

// })

const product = [
    {proName : "phone", price: 9999, dis: 10 },
    {proName : "laptop", price: 19999, dis: 15 },
    {proName : "fan", price: 999, dis: 18 },
    {proName : "car", price: 1009999, dis: 25 },
]

const intValue = 0;

const total  = product.reduce((ac,val)=>{
    return ac + val.price
},0)
console.log(total)