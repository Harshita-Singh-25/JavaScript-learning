// async functions always return a promise ; any fuction can be made async by adding the async prefix

async function greet(){
    console.log(` HELLO !! HOW ARE YOU ??`);
}
 greet();

 function api(){
    return new Promise((res , rej)=>{
        setTimeout( ()=>{
            console.log('weather data fetched');
            res( `success `);
        }, 3000)
       
    })   
 };

 //await api();
 //Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules

 async function GetAllWeatrherData() {
    console.log(`getting weather data 1...`)
    await api(); 
    console.log(`getting weather data 2...`)
    await api(); 

 }
//  GetAllWeatrherData();


 function getData(dataId){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("dataId is: " , dataId);
            resolve(`successful !!`)
        }, 2000);
        
    }) 
}


async function getAllData(){
    await getData(4);
    await getData(5);
    await getData(7);
}
getAllData();

