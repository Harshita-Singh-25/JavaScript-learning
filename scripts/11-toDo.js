const ToDo=[];
 
function HandleClick(){
    const InputElemet=document.querySelector('#js-ToDoinput');
    const DivElement=document.querySelector('.displayList');
    let html='';
    let str= InputElemet.value;
    if(str){
        str=str.trim();
        ToDo.push(str);
        console.log(ToDo);
        InputElemet.value='';
    }
    for(let i=0; i<ToDo.length; i++){
        html+=`<p>${ToDo[i]}</p>`;
    }
    DivElement.innerHTML=html;
}