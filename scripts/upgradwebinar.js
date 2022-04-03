
 let url=`http://localhost:4900/upgradwebinars`;

 async function fetchApi(){
 
    try {
   
          let res= await fetch(url)
          let data= await res.json()
           console.log(data)
          appendupData(data)
         
    } catch (err) {
          
       console.log({message:err.message})
         
    }
 }
 fetchApi()



function appendupData(data){
    var main = document.querySelector(".explore-img-w")
 data.map(function(el){
      var inner_main=document.createElement("div")
      inner_main.setAttribute("class","explore-in-img-w")
       var imgdiv= document.createElement("div")

       var image=document.createElement("img")
       image.setAttribute("class","expimg-w")
       image.src=el.image;

       var textdiv=document.createElement("div")

       var h= document.createElement("h5");
        h.setAttribute("class","h3-text-w")
       h.innerText =el.name;

       var p= document.createElement("p");
       p.setAttribute("class","h3-text-w")
       p.innerText=el.desc;

      var bton =document.createElement("button")
      bton.setAttribute("class","exbtn-w")
      bton.innerText="Explore Now";

      imgdiv.append(image)
       textdiv.append(h,p,bton)

       inner_main.append(imgdiv,textdiv)

       main.append(inner_main)

       
 })

}