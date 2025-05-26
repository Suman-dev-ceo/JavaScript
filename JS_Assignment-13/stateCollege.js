let url = 'http:universities.hipolabs.com/search?name=India';
let btn = document.querySelector('button');


btn.addEventListener('click', async () => {
    let state = document.querySelector('input').value;
    
    let collArr = await getStateColleges();
    show(collArr,state);
    
});

function show(collArr,state){
    document.querySelector('#list').innerText = ""; // parent ul

    for(college of collArr){
        if(state == college["state-province"]){
            let name = (college.name);
            let li = document.createElement('li');
        li.innerText = name;
        document.querySelector('#list').appendChild(li);
        }
    }

    
    
}



async function getStateColleges(){
    try{
        let res = await axios.get(url);
        return (res.data) ;
    } catch(e){
        console.log('error -',e);
    }
}

