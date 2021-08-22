// Button function
async function guess(){
    let numb = Number(document.getElementById('text').value)
    if(numb == random){
        document.getElementById('FieldOfText').innerHTML = '!! Your WIN !! Gratulation You Can Be Happy'
        await sleep(5000);window.location.href = '../../index.html'
    }else if(numb<random){
        document.getElementById('FieldOfText').innerHTML = '!! The Number ist greater !! TRY AGAIN '
        document.getElementById('span').innerHTML = count++
    }else{
        document.getElementById('FieldOfText').innerHTML = '!! The Number ist lower !! its soo sad TRY AGAIN'
        document.getElementById('span').innerHTML = count++
    }
    if(numb != random && count>rounds){
        document.getElementById('FieldOfText').innerHTML = '!! YOU LOOSE !! DONT BY SAD DO IT AGAIN'
        await sleep(5000);window.location.href = '../../index.html'
    }
    document.getElementById('text').value = ""
}
let count = 1
let random = Math.floor(Math.random()*100+1)
let rounds = 10

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}