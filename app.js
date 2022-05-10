// const ans=13

// if(ans<10)
// console.log("small number");
// else
// console.log("large number");

// console.log("my first app");


// console.log(__dirname);
// setInterval(()=>{
//   console.log('hello worold')
// },1000)


//modules


// const name= require('./2file')
// require('./4file')
// console.log(name);
// sayhi('avishi')
// sayhi(john)

const os=require('os');

//infor abt current user
const user=os.userInfo();
console.log(user);


//method return the system uptym ub seconds

console.log(os.uptime)

const curros ={
  name:os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
}
console.log(curros);
