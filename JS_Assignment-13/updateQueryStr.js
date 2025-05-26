let url = 'http://universities.hipolabs.com/search?name=';
let btn = document.querySelector('button');

btn.addEventListener('click', async ()=>{

    let country = document.querySelector('input').value;
    console.log(country);

    let colArr = await getCollages(country);
    show(colArr);

})

function show(colArr){
    let ul = document.querySelector('ul');
    ul.innerText = "";
    
     for(college of colArr){   
        let li = document.createElement('li')     
        li.innerText = college.name;
        ul.appendChild(li);
        console.log(college);
    }
}

async function getCollages(country) {
    try{
        let res = await axios.get(url+country);
        return res.data ; //array
    } catch(e){
        console.log('error - ',e);
        return [];
    }
}

// console.log(getCollages());