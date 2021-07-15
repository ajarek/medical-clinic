const btn = document.querySelector('.btn')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')
const alert =document.querySelector('.alert')
 
const check = (e) => {
    e.preventDefault()
    localStorageUser = JSON.parse(localStorage.getItem('data'))
    if (localStorageUser === null) {
        data = []
    }
     else {
        for (i = 0; i < localStorageUser.length; i++) {
            if(localStorageUser[i].emailUser===email.value && localStorageUser[i].passwordUser===pass.value){
               
                window.location.replace('doctors.html')
                
            }
            else{
                alert.innerHTML=`<i class="fas fa-exclamation-triangle"></i> złe dane!`
        alert.style.color='red'
        
            }
            
        }

    } 
   
}


btn.addEventListener('click', check)
