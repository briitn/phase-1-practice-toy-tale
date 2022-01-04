let addToy = false;
const toys=document.getElementById("toy-collection")
const cont=document.querySelector('.input-text')
const input=document.querySelector('#test')
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
      
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  
  
  fetch("http://localhost:3000/toys")
  .then(res=>res.json())
  .then(obj=>{obj.forEach(item => display(item)
    
  )});
  
  


function display(images){
  
let image=document.createElement('div')
  image.innerHTML=`
  
  <h2> ${images.name}</h2>
  <img src=${images.image} class='toy-avatar'/>
  
  <p class='likes'>${images.likes}</p>
  <button class='like-btn'>
  ${images.id}</button>`  
  
  toys.appendChild(image);
  
 
  
  
}
//display()




let addImage=document.querySelector('.submit')
addImage.addEventListener(
  'click',function(event){
    
 
 addImage=cont.value
 let testValue=input.value
 console.log(addImage)
  console.log(test)
  
  //console.log('hi')
  fetch('http://localhost:3000/toys',{method:"POST",
  headers:{'Content-type':"application/json",
  Accept:'application/json'},
  body:JSON.stringify({
    name:addImage,
    image:testValue,
    likes:0
  })
  })

    .then(
      res=>res.json()
      
      )
   
  }
)
 fetch('http://localhost:3000/toys')
 .then(res=>res.json())
 .then(obj=>{
  
   
  
   
   let addlikers=document.querySelectorAll('.like-btn')
   addlikers.forEach(item=>{item.addEventListener('click',(e)=>{let kil=e.target.innerText;
    //console.log(kil)
let itemIncrease=item.previousElementSibling.innerText++


let likeUpdate=item.previousElementSibling.innerText
    //console.log(testttt)
    fetch(`http://localhost:3000/toys/${kil}`,{
        method:"PATCH",
        headers:{  "Content-Type": "application/json",
        Accept: "application/json"

        },
        body: JSON.stringify({
          'likes':likeUpdate
        })
      })
     
    })
    
   })})
    
     //console.log(addlikes());//console.log(e.target)
    /*let likeSelector=document.querySelectorAll('.likes')
    likeSelector.forEach(item=>item.innerHTML++)
console.log(item)
    
      */
    
    //let liker=document.querySelectorAll('.likes')
   // console.log(liker)
    //console.log(item.liker)
    //for(let item in liker){co}    // liker.innerHTML++
  // })})}})
  //})})
   //console.log(likes)

  
})





//const test2=document.querySelector('#toy-collection .likes')
//console.log(test2)
