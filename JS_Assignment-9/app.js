// let smImg = document.getElementsByClassName('oldImg');

// for(let i =0; i<smImg.length; i++){
//     smImg[i].src = 'assets/spiderman_img.png';
//     console.log(`Image changes for the object ${i}`);
// }

console.dir(document.querySelectorAll('p'));



let links = document.querySelectorAll('.box a'); 

for(link of links){
    link.style.color = 'orange';
}

// for(let i =0; i<links.length; i++){
//     links[i].style.color = 'yellow';
// }