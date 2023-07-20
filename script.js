var copy=document.querySelector('.logo1').cloneNode(true)
document.querySelector('.logos').appendChild(copy)

window.addEventListener("scroll",function(){
    var header=this.document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY>0)
})

var ab=document.querySelector('.iconz')
var cd = document.querySelector('.heading')
ab.addEventListener("click",function(){
    ab.classList.toggle("active")
    cd.classList.toggle("active")
})


function lines()
{
    let sizeW=Math.random()*12
    let e=document.createElement('div')
    e.setAttribute('class','circle')
    document.body.appendChild(e)
    e.style.width=2+sizeW+'px';
    e.style.zIndex=0;
    e.style.left=Math.random()*+innerWidth+'px';
    e.style.setProperty('--i', Math.random()*15);



    setTimeout(function(){
        document.body.removeChild(e)
    },5000)
}
setInterval(function(){
lines()
},500)


function lines1()
{
    let asw=document.querySelector('.social_links_bar')
    let sizeW=Math.random()*10
    let sizeH=10;
    let e=document.createElement('div')
    e.setAttribute('class','circle1')
    asw.appendChild(e)
    e.style.width=2+sizeW+'px';
    e.style.left=Math.random()*+innerWidth+'px';
    e.style.setProperty('--i', Math.random()*15);


    setTimeout(function(){
        asw.removeChild(e)
    },5000)
}


setInterval(function(){
    lines1()
    },500)


