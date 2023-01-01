const inputEle = document.getElementById('input')
const buttons = Array.from(document.getElementsByTagName('button'))
let result = ''

buttons.map(eachBtn => {
    eachBtn.addEventListener('click' ,(e)=>{
        console.log(e.target.innerText)
        if(e.target.innerText =='='){
            const evalu  = eval(result)
            inputEle.value = evalu 
            result =evalu
        }
        else if(e.target.innerText === 'AC'){
            inputEle.value = ''
            result=''
        }
        else if(e.target.innerText === 'X'){
            result += '*'
        }
        else if(e.target.innerText === '%'){
            result=inputEle.value/100
            inputEle.value=result
        }
        else if(e.target.innerText === 'C'){
            inputEle.value = inputEle.value.slice(0,-1)
            result=inputEle.value
        }
        else{
            result += e.target.innerText
            inputEle.value = result
        }
    })
} )