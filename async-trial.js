/*create a function that prints data1 after x seconds and; prints data2, x-seconds after data1 has been printed and then prints data3, x-seconds after data2 has been printed

function getData(dataId){
    setTimeout(()=>{
        console.log("dataId is: " , dataId);
    }, 2000);
}

getData(456);
getData(789);    
getData(212); 
 wrong way everything will be printed almost simultaneously;
 */

// function getData(dataId , getNextData){
//     setTimeout(()=>{
//         console.log("dataId is: " , dataId);
//     }, 2000);
    
//     getNextData();
// }

/*getData(456, getData(789)); this is wrong because if we pass like this getData(789) 
will get executed first and here itself and result in a number not a function*/

/*
getData(456, ()=>{
    getData(789) ;
})
    so this will act as a definition of function*/
/************************************************
getData(111 , ()=>{
    getData(222 , ()=>{
        getData(333);
    }) ;
}); 

function getData(dataId , getNextData){
    setTimeout(()=>{
        console.log("dataId is: " , dataId);
    }, 2000);
    if (getNextData) {
        setTimeout(getNextData , 2000);       // if here u pass getData o/p wil differ
    }
    
}

getData(456 , ()=>{
    console.log('getting next data');
    getData(789 , ()=>{
        console.log('getting next data');
        getData(321 ,()=>{
            console.log('getting next data');
            getData(909);
        });
    }) ;
}); 
 ************************************************/
//callbacks are functions passed in another functions
// function sum (a ,b ){
//     console.log(a+b);
// }
// function PrintSum( x , y , callBackFunction){
//     callBackFunction(x,y);
// }
// PrintSum( 4 ,5, sum);
// PrintSum( 4 ,5, sum()); this is a wrong syntax this means we are not passing the function but calling it here itself

// console.log('one');
// console.log(2);
// setTimeout(()=>{
//     console.log('intelligent')
// } , 4000)
// console.log('three');
// console.log(4);
