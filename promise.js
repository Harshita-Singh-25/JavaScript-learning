//usually we dont create a promise but when we call an api it returns a promise immediately and then we decide what to fo with that

// here wea  creating a new object from the Promise class and it itself consist of two differnt callbacks for resolving and rejecting the promise

/*
let prom = new Promise((resolve , reject)=>{
    console.log('i am a promise');
    console.log(prom);

})]
    this throws an error bcz prom has not been initialized
*/


/************************
 
let prom;
prom= new Promise((resolve , reject)=>{
    console.log('i am a promise');
    console.log(prom);
});

let p2;
p2= new Promise((resolve , reject)=>{
    console.log('i am a resolved promise');
    console.log(p2);
    resolve('success');
});

let p3;
p3= new Promise((resolve , reject)=>{
    console.log('i am a rejected promise');
    console.log(p3);
  //  reject('some error occured');
});


function getData(dataId , getNextData){
   return new Promise((res ,rej)=>{
        setTimeout( ()=>{
            console.log(`data is  ${dataId}`);
            res('sucessful in getting data');
        }, 5000);
        if (getNextData) {
            setTimeout(getNextData ,5000);
            res('sucessful in getting data');
        }
        
   });
}

let prom1= getData(45);
console.log(prom1);

****************/

function asynFun(){
    return new Promise((resolve ,reject )=>{
        setTimeout( ()=>{
            console.log(`data fetched !!`);
            resolve(`success in getting data `);
            reject(`not got data`);
        },4000);
    })
}

// let promi= asynFun();
// promi.then(()=>{
//     console.log(` that was the successful result of fetching: `);
// })

let promi= asynFun();
promi.then((resolve)=>{
    console.log(` that was the successful result of fetching: `);
    console.log(resolve);
})
.catch((rej)=>{
    console.log(`error: ${rej}`)
})