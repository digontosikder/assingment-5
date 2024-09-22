function inputValue(id){
    const input = document.getElementById(id).value ;
    const inputNumber = parseFloat(input);
    return inputNumber;
}
function textFildValue(id){
    const text = document.getElementById(id).innerText;
    const textNumber =parseFloat(text);
    return textNumber;
    
}
function showElement(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function time (){
    const now = new Date ();
    return now.toLocaleString('en-GB')
}



