d = document.getElementById("amount");
// d.innerText = "hello";
let  amount  = 0;
let ct  =0;
users =[];
d.addEventListener("click",()=>{
  amount  = prompt("what is the amount");
 amount =  amount?amount:0;
    d.innerText = amount+"Rs";
users.forEach((each,count)=>document.getElementById(count).innerHTML = `<div class = "card" id = ${count} ><div class = "userN">${each.username}</div> <div class = "amt">${amount/(ct)}</div></div>`)

    
})

document.getElementById("new_user").addEventListener(
    "click",()=>{
    let user  = prompt("what is the name of th user")
    if(user){
    nUser  = document.createElement("div")
    nUser.id = ct;
//    nUser.innerText = user +" "+ amount;
   users.push({username:user,bill :"0",id :ct,})

    document.getElementById("users").appendChild(nUser);
users.forEach((each,count)=>document.getElementById(count).innerHTML = `<div class = "card" id = ${count} ><div class = "userN">${each.username}</div> <div class = "amt">${amount/(ct+1)}</div></div>`)
ct++;
    }
}
)
document.getElementById("backspace").addEventListener(
    "click",()=>{

       if(ct>0)
        {users.pop();
           document.getElementById(ct-1).innerHTML= "";
ct--;}

users.forEach((each,count)=>document.getElementById(count).innerHTML = `<div class = "card" id = ${count} ><div class = "userN">${each.username}</div> <div class = "amt">${amount/(ct)}</div></div>`)

    })
