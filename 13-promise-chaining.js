function asynFun(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log(`data for user-id fetched!! `);
            resolve(   `success !!  `);
        } , 2000)
    }
    );
}

/*******  wrong format both will be done simultaneously
 * 
 console.log(`fetching data1....`)
asynFun()
.then((res)=>{
    console.log(res);
});

console.log(`fetching data2..`);
asynFun()
.then((res)=>{
    console.log(res);
})
 * 
 */



/*
//correct method
console.log(`fetching data1...`);
let p1 =asynFun();
p1.then((res)=>{
    console.log(res);

    console.log(`fetching data2..`);
    let p2 =asynFun();
    p2.then((res)=>{
        console.log(res);
    })
})

*/


function getData(dataId){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("dataId is: " , dataId);
            resolve(`successful !!`)
        }, 2000);
        
    }) 
}

/// basically what we are doing :
// getData(10).then((result)=>{
//     console.log(result);
//     getData(20).then(()=>{
//         console.log(result);
//     });   
// })


// same thing as above in standard format of promise chaining
// getData(10)
//     .then((result)=>{
//         console.log(result);
//         return  getData(20);   
//     });


getData(10)
    .then((result)=>{
        console.log(result);
        return  getData(20);   
    })
    .then((res)=>{
        console.log(res);
        return  getData(30) ;
    })
    .then((result)=>{
        console.log(result);
        return  getData(40) ;
    });