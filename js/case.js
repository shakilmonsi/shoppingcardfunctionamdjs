//  1 add cenent listaener to the case plus button 
//   get the balue inside4 kthe case number field (input field )
//   3conver the number to an integer 
//    calculte the new case number  
//    set the balue to the case number 

 function updateCaseNumber (isIncrease){
        const caseNumberField = document.getElementById('case-number-field')
const  caseNumberString = caseNumberField.value 
 const  previuscaseNumber=parseFloat(caseNumberString)
let newCaseNumber;
if(isIncrease){
        newCaseNumber=previuscaseNumber+1;
}
else{
        newCaseNumber=previuscaseNumber-1;
}
caseNumberField.value =newCaseNumber
return newCaseNumber
}
//////////////////////////////////////////////////////////////
function  updaCaseTotalePrice (newCaseNumber){
        const  caseTotalPrice =newCaseNumber *59
        const caseTotalElement=document.getElementById('case-total')
        caseTotalElement.innerText=caseTotalPrice

}


document.getElementById('btn-case-plus').addEventListener('click',function(){
     const newCaseNumber=   updateCaseNumber(true)
updaCaseTotalePrice(newCaseNumber)

})
document.getElementById('btn-case-munus').addEventListener('click',function(){
  const newCaseNumber =      updateCaseNumber(false)
updaCaseTotalePrice(newCaseNumber)



        
        
})









































// + section 
// console.log('click me ad ad flassh')

// const caseNumberField = document.getElementById('case-number-field')
// const  caseNumberString = caseNumberField.value 
//  const  previuscaseNumber=parseFloat(caseNumberString)

// const newNumber = previuscaseNumber+1
// caseNumberField.value=newNumber
// + section 






// munis section  
// const caseNumberField= document.getElementById('case-number-field')
//  const caseNumberString= caseNumberField.value 
//  const caseNumber= parseFloat(caseNumberString)
//  const newCaseNumber = caseNumber -1;
//  caseNumberField.value = newCaseNumber;
// munis section  
