// 



var media_url =`http://localhost:4900/mediapresence`
async function upgradData(){

   try {
         const res= await fetch(media_url)
         const data= await res.json()
         console.log(data)
          appendmediaData(data)

   } catch (error) {
         
      console.log({message:error.message})
        
   }
}
upgradData()

function appendmediaData(data){
    let main =document.querySelector("#mediapresence")
    
   data.map( function (el){
      
      var div= document.createElement("div");
      div.setAttribute("class","carousel-cell-ex")

      var pTag= document.createElement("p")
      pTag.setAttribute("class","alumni-name")
      pTag.setAttribute("id","media-p")
      pTag.innerText=el.desc

      var image= document.createElement("img")
      
      image.setAttribute("class","media-logo")
      image.src=el.image;
     
      div.append(pTag,image)
       main.append(div)
   })
  
}