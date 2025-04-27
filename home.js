navlink = document.getElementsByClassName('navlink')
navGroup = document.getElementsByClassName('navgroup')
btnMenu = document.getElementsByClassName('menu-btn')
scrollBtn = document.getElementById('scrollBtn')
firstElement = document.getElementsByClassName('main-firstSquare')
secondElemet = document.getElementsByClassName('main-secondSquare')
btnContact = document.getElementsByClassName('contactBtn')
contactWindow = document.getElementsByClassName('contactInfoBox')
btnBackMain = document.getElementsByClassName('backtoMain')

//header links hover effect 
for (let i = 0; i<navlink.length; i++){
    navlink[i].addEventListener('mouseover',(e)=>{navlink[i].style.setProperty('--decor-color','#8ECAE6')})
    navlink[i].addEventListener('mouseout',(e)=>{navlink[i].style.setProperty('--decor-color','white')})
 }

// show/hide navGroup
btnMenu[0].addEventListener('click',(e)=>{
    navGroup[0].classList.toggle('show')
})

//Scroll Button
window.addEventListener('scroll',()=>{window.scrollY > 400 ? scrollBtn.style.setProperty('display','block'):scrollBtn.style.setProperty('display','none')})

scrollBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})

//hide/show elements in main (ContactInfo or main elements)

btnContact[0].addEventListener('click',()=>{

    contactWindow[0].classList.toggle('show')
})

btnBackMain[0].addEventListener('click',()=>{

    contactWindow[0].classList.toggle('show')
})

