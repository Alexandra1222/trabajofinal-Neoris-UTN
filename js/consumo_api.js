
/* let url ="https://v2.jokeapi.dev/joke/Programming,Misc?format=json&blacklistFlags=nsfw,racist,sexist,explicit&type=single&lang=es&amount=2" */


const apiButton=document.getElementById("apiButton");
/* const apiData = document.getElementById('apidata'); */
const jokes = document.getElementById('jokes')

const callAPI =()=>{
    fetch('https://v2.jokeapi.dev/joke/Programming,Misc?format=json&blacklistFlags=nsfw,racist,sexist,explicit&type=single&lang=es&amount=2')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            /* apiData.innerText = JSON.stringify(data); */
            jokes.innerText = `Broma:${JSON.stringify(data.jokes)}`
        })
        .catch(e => console.error(new Error (e)));
        
    
}

apiButton.addEventListener('click',callAPI)