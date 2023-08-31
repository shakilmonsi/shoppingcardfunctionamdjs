function updatePhoneNumber (isinCrese){
        const phoneNumberField = document.getElementById('phone-number-field')
        const phoneNumberString = phoneNumberField.value 
        
        const prebuisphoneNumber =parseFloat(phoneNumberString)
        let newPhoneNumber ;
        if(isinCrese){
                newPhoneNumber=prebuisphoneNumber +1;

        }
        else{
                newPhoneNumber=prebuisphoneNumber -1;
        }
        phoneNumberField.value = newPhoneNumber 

        return newPhoneNumber;
}
    
 function updatePhonetotalPrice(newPhoneNumber){
        const  phoneTotalePrice= newPhoneNumber*1219;
        const phoneTotalElement = document.getElementById('phone-totale')
        phoneTotalElement.innerText= phoneTotalePrice
        
 }       



document.getElementById('btn-phone-plush').addEventListener('click',function(){
 const newPhoneNumber= updatePhoneNumber(true)
 updatePhonetotalPrice(newPhoneNumber)

})
document.getElementById('btn-phone-munis').addEventListener('click',function(){
  const newPhoneNumber= updatePhoneNumber(false)
 updatePhonetotalPrice(newPhoneNumber)



})