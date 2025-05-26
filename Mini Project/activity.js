let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');
let inp = document.querySelector('input');

btn.addEventListener('click',function(){
    
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";

    let dltbtns = document.createElement('button');
    dltbtns.classList.add('delete');
    dltbtns.innerText = 'delete';
    item.appendChild(dltbtns);

});

ul.addEventListener('click', function(event){
    if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        listItem.remove();
  
    }
});


// let dltbtns = document.querySelectorAll('.delete');

// for(dltbtn of dltbtns){
//     dltbtn.addEventListener('click',function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }