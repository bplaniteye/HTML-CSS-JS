const org = document.getElementById("org");

let str = org.textContent;
const myArr = str.match(/.{1,2}/g)

let broken = '';

myArr.forEach(letters => broken+=('<span>'+letters+'</span>'));

function updateOrg(x){
  org.innerHTML = x;
}

updateOrg(broken);