function animatedForm(){
    const arrows=document.querySelectorAll('.fa-arrow-down')
    
    arrows.forEach(arrow=>{
    
        arrow.addEventListener('click',()=>{
    const input=arrow.previousElementSibling
    const parent=input.parentElement
    const nextParent= parent.nextElementSibling

    if (input.type==="text" && validateuser(input)) {
        nextSlide(parent,nextParent)

        
    }
    if (input.type==="email" && validatemail(input)) {
        nextSlide(parent,nextParent)
        
    }
    if (input.type==="password" && validpassword(input)) {
        nextSlide(parent,nextParent)
        
    }else{
        parent.style.animation='shake 0.5s ease'
    }
    parent.addEventListener('animationend',()=>{
        console.log('hlo    ')
        parent.style.animation=''
    })
})
})
}



function nextSlide(parent,nextParent){
    parent.classList.add('hidden')
    parent.classList.remove('active')
    nextParent.classList.add('active')

}
function validateuser(inputValue){
   
    if (inputValue.value.length<6) {
   
        error('rgb(189,87,87)')
        
    }
    else{
        error('rgb(87,189,130)')
        return true
    }
}
function validatemail(inputemail){
    const validation=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(inputemail.value)) {
        error('rgb(87,189,130)')
        return true
        
    }
    else{
        error('rgb(189,87,87)')
    }
}
function  validpassword(inputpassword){
    const validation=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    if (validation.test(inputpassword.value)) {
        error('rgb(87,189,130)')
        return true
        
    }
    else{
        error('rgb(189,87,87)')
    }
}


function error(color){
    document.body.style.backgroundColor=color
}


animatedForm()
