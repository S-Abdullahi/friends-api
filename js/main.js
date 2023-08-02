const submitButton = document.querySelector('.button').addEventListener('click', ()=>{
    const inputField = document.querySelector('input').value
    async function getData(){
        const resp = await fetch('https://friends-api-production-20e8.up.railway.app/friends')
        const data = await resp.json()
        console.log(data)
    }
    getData()
    console.log(inputField)
}) 

