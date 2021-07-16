const doctors = document.querySelectorAll('.swiper-slide img')
const container = document.querySelector('.swiper-container')
const h5 = document.querySelector('.h5 h5')

const daysInMonth=(month, year)=>{
    return new Date(year, month, 0).getDate();
}
let d=new Date
let mc=d.getMonth()+1


const table=(e)=>{
    h5.innerHTML='Choose the date of your visit!'
    const div=document.createElement('div')
    div.classList.add('wrap')
    for(let i=1;i<=daysInMonth(mc,2021);i++){
    const item=document.createElement('div')
    item.classList.add('items')
    item.innerText=i
    div.append(item)
    
    }
    container.append(div)
    days()
}
doctors.forEach(dr=>{
    dr.addEventListener('click',table)
})
const days=()=>{
document.querySelectorAll('.items').forEach(dy=>{
    
    dy.addEventListener('click',(e)=>{
        
        e.target.classList.toggle('active')
        h5.innerHTML=`Your visit will take place at 10:00 in day ${e.target.innerText} running month!`
        h5.style.color='red'
        
})

})
}

var swiper = new Swiper(".mySwiper", {
     cssMode: true,
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },
     pagination: {
         el: ".swiper-pagination",
         
     },
     mousewheel: true,
     keyboard: true,
 });