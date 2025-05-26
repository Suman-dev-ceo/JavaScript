let heroes = [["Ironman","spiderman","thor"],["superman","wonder women","flash"]];

// for (let i=0; i<heroes.length; i++){
//     console.log(`i=${i}`);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

for(hero of heroes){
    for (star of hero){
        console.log(star);
    }
}