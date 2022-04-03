let ds_url = `http://localhost:4900/datascience`

async function upgradDs(){

    try {
          let res= await fetch(ds_url)
          let ds_arr= await res.json()
           console.log(`ds${ds_arr}`)
           appendDS(ds_arr)
 
    } catch (error) {
          console.log({message:error.message})
         
    }
 }
 upgradDs()

 function appendDS(ds_arr){
    var main =document.querySelector("#datascience")
   ds_arr.map(function(el){
       console.log(ds_arr)
      var  div= document.createElement("div")
      div.setAttribute("class","carousel-cell-h");
 
      var img= document.createElement("img")
      img.src=el.uniImage;
 
      var div1=document.createElement("div")
      div1.setAttribute("id","whiteplace")
 
      var div2=document.createElement("div")
      div2.setAttribute("id","smallimg")
 
      var img_h = document.createElement("img")
      img_h.setAttribute("class","img-sultana")
      img_h.src=el.smallImg;
 
      var p1= document.createElement("p")
      p1.innerText=el.name;
 
      var div3=document.createElement("div")
      div3.setAttribute("id","names")
 
       var hr = document.createElement("hr")
        
      var h3 =document.createElement("h3")
       h3.innerHTML=el.orgName;
 
       var p2 =document.createElement("p");
 
       p2.innerHTML=el.months;
 
       var p3 =document.createElement("p");
       p3.innerHTML=el.support;
 
      var hr2 =document.createElement("hr");
      
      var h4 =document.createElement("h4");
        h4.setAttribute("class","h4-sultana");
       h4.innerHTML=el.viewProgram
 
       div3.append(hr,h3,p2,p3,hr2,h4)
       div2.append(img_h,p1)
       div1.append(div2,div3)
 
       div.append(img,div1)
        
       main.append(div)
 
 
   })
 }