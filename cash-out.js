const removeBtn=document.getElementById('remove-money-btn')
const myPin =121922
removeBtn.addEventListener('click',()=>{
    const agentNumb =document.getElementById('agent-number').value
    const withDrawMoney =parseInt(document.getElementById('remove-money').value)
    const pin = parseInt(document.getElementById('add-pin').value)
    const currentBalance = parseInt(document.getElementById('curr-balance').innerText)

    const newWithdrawBalance = currentBalance -withDrawMoney
    
    if(agentNumb.length<11||agentNumb.length>11){
        alert('Please provide a valid number')
        return
    } else if(pin!==myPin){
        alert('Provide ur valid pin')
        return
    } else if(withDrawMoney<100){
        alert('Please withdraw money at least 100 TK"')
        return
    }
    

    document.getElementById('curr-balance').innerText=newWithdrawBalance
})