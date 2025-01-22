// console.log('Hello');
// //window.alert('your not connected to internet');
// document.getElementById('k1').textContent = 'Hello';
// document.getElementById('k2').textContent = 'i like pizza !';
//  let x=100;
//  let age= 20;
//  let name="Kashyap";
// // console.log(`your name is ${name}`);
// // console.log(`You are ${age} Years old`);
// // console.log(`you will live more than ${x} years`);
// // console.log(typeof age);
// // console.log(typeof name);
// document.getElementById('k1').textContent = `your name is ${name}`;
// document.getElementById('k2').textContent = `You are ${age} Years old`;
// document.getElementById('k3').textContent = `you will live more than ${x} years`;
let username;
document.getElementById('btn').onclick = function(){
    username = document.getElementById('username').value;
    console.log(username);
    document.getElementById('h1').textContent =`Hello ${username}`;
}
let ui=window.prompt('Enter your name');
console.log(ui);