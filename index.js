// noakhali section
document.getElementById('noakhali-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const noakhaliInput = inputValue('noakhali-input');
    const noakhaliTaka  = textFildValue('noakhali-taka');
    const mainBalance = textFildValue('mainbalance');
    if(isNaN(noakhaliInput)){
        alert('invalid input');
        return
    }
    if(0>=noakhaliInput || mainBalance < noakhaliInput ){
        alert("invalid input")
        return

    }
    
    const noakhalibalance = noakhaliTaka + noakhaliInput;
    document.getElementById('noakhali-taka').innerText = noakhalibalance;

    const finalAmmount =mainBalance- noakhaliInput;
    document.getElementById('mainbalance').innerText = finalAmmount;

    



    const div = document.createElement('div');
    div.innerHTML = `
  <div class= "p-8 border rounded-lg mt-4">
  <p class = "text-xl font-bold ">${noakhaliInput} Taka is Donated for famine-2024 at Naokhali, Bangladesh</p>
  <p class = "font-light">${time()} (Bangladesh Standard Time)</p>
            
        </div>
        
  `
  document.getElementById('history-section').appendChild(div);
    
    
    
})
// fani section 
document.getElementById('feni-btn').addEventListener('click',function(event){
    event.preventDefault();
    const feniInput = inputValue('feni-input');
    const feniTaka  = textFildValue('fani-balance');
    const mainBalance = textFildValue('mainbalance');
    if(isNaN(feniInput)){
        alert('invalid input');
        return;
    }
    if(0>=feniInput || mainBalance < feniInput ){
        alert("invalid input")
        return

    }
    
    const fenibalance = feniTaka +feniInput;
    document.getElementById('fani-balance').innerText = fenibalance;

    const finalAmmount =mainBalance- feniInput;
    document.getElementById('mainbalance').innerText = finalAmmount;
    


    const div = document.createElement('div');
    div.innerHTML = `
  <div class= "p-8 border rounded-lg mt-4">
  <p class = "text-xl font-bold ">${feniInput} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
  <p class = "font-light">${time()} (Bangladesh Standard Time)</p>
            
        </div>
        
  `
  document.getElementById('history-section').appendChild(div);
    
    
    
})


// Quata section
document.getElementById('quota-btn').addEventListener('click', function(event){
    event.preventDefault();
    const quotaInput = inputValue('quota-input');
    const quotaTaka = textFildValue('quota-balance');
    const mainBalance = textFildValue('mainbalance');
    if(isNaN(quotaInput)){
        alert('invalid input');
        return;
    }
    if(0>=quotaInput || mainBalance < quotaInput ){
        alert("invalid input")
        return

    }
    const quotabalance = quotaTaka + quotaInput;
    document.getElementById('quota-balance').innerText =quotabalance;
    const finalAmmounts = mainBalance - quotaInput;
    document.getElementById('mainbalance').innerText=finalAmmounts;
   

    const div = document.createElement('div');
    div.innerHTML = `
  <div class= "p-8 border rounded-lg mt-4">
  <p class = "text-xl font-bold ">${quotaInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
  <p class = "font-light">${time()} (Bangladesh Standard Time)</p>
            
        </div>
        
  `
  document.getElementById('history-section').appendChild(div);

})

// history sections 

document.getElementById('donation-btn').addEventListener('click',function(){
//  document.getElementById('donation').classList.remove('hidden');
//  document.getElementById('history-section').classList.add('hidden');
  
showElement('donation-section');
})
document.getElementById('history-btn').addEventListener('click',function(){
//  document.getElementById('history-section').classList.remove('hidden');
//  document.getElementById('donation').classList.add('hidden');
    showElement('history-section')
})

// color changeing 

document.getElementById('history-btn').addEventListener('click', function(){
   const historyelement = document.getElementById('history-btn');
   historyelement.classList.add('bg-[#B4F461]');
   const donationelement = document.getElementById('donation-btn');
   donationelement.classList.remove('bg-[#B4F461]')
})
document.getElementById('donation-btn').addEventListener('click', function(){
   const donationelement = document.getElementById('donation-btn');
   donationelement.classList.add('bg-[#B4F461]');
   const historyelement = document.getElementById('history-btn');
   historyelement.classList.remove('bg-[#B4F461]')
})



// main buttons section Donation 





