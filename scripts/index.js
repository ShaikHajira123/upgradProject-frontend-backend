
var arr=[
   {
      imgUrl:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fdeloitte__1644555599257.png&w=1920&q=75",
   },
   {
      imgUrl:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FdataScience__1644555732575.png&w=1920&q=75",
   },
   {
     imgUrl:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fmba__1644558374257.png&w=1920&q=75",
  },
  {
     imgUrl:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fsoftware__1644558447943.png&w=1920&q=75",
  },
  {
     imgUrl:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2F4__1635261083350.jpg&w=1920&q=75",
  },
 
]

  localStorage.setItem('slide_images',JSON.stringify(arr));
 function slide(){

   let img_arr= JSON.parse(localStorage.getItem('slide_images'))||[]
     let slides_div = document.querySelector(".slideshow-m")

     let images =document.createElement("img")
    

     let i=0
    setInterval(() => {
        
          if(i==img_arr.length)
          {
              i=0;

            
          }
          slides_div.append(images)
          images.setAttribute("class","sliding-img-m")

          console.log(img_arr.imgUrl)
          
          images.src=img_arr[i].imgUrl;

          i++;
    
        },2000);



 }

 slide()

document.querySelector('#Hireupgrad-page').addEventListener('click',function(){
    window.location.href="hireformUpgrad.html"
})
document.querySelector('#forbusiness').addEventListener('click',function(){
   window.location.href="forbusiness.html"
})


document.querySelector('#studyabroad').addEventListener('click',function(){
   window.location.href="studyabroad.html"
})

let alumni_logo=[
   {  //1
      img:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Famazon_colour_240X80__1617794797691.png&w=256&q=75",
   },
   { //2
    img:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Faccenture_colour_240X80__1617795159794.png&w=256&q=75",
   },
   { //3
    img:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fespndigitalmedia.png&w=256&q=75",
   },
   { //4
    img:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fflipkart_240x80__1617713965876.png&w=256&q=75",
   },
   { //5
    img:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fjio_240x80__1604486675523.png&w=256&q=75",
   },
   {//6
    img:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fola.png&w=256&q=75",
   },
   { //7
    img:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fmyntra.png&w=256&q=75",
   },
   { //8
    img:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fmicrosoft.png&w=256&q=75",
   },
   { //9
    img:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fvisa.png&w=256&q=75",
   },
]



alumni_logo.map(function(el){
    let alumni_Arr =document.querySelector(".alumni-work-logo");
      let div= document.createElement('div')
       let img= document.createElement("img");
       img.src=el.img;
       img.id="alumni-wrk-logo"


    div.append(img)

    alumni_Arr.append(div)
})


// document.querySelector("#clickHere").addEventListener('click',function(){

//       window.location.href="https://www.upgrad.com/media/"
// })

// document.querySelector("#more-m").addEventListener('change',function(){
      
//   if(this.value=="Upgradweb")
//      window.location.href="More-Upgrad-webinar.html"

// })
// document.querySelector("#more-m").addEventListener('change',function(){
      
//   if(this.value=="Associate")
//      window.location.href="BusinessAssociate.html"

// })

// document.querySelector("#more-m").addEventListener('change',function(){
      
//    if(this.value=="blog")
//       window.location.href="blog.html"
 
//  })
 
 
//  document.querySelector("#signup").addEventListener("click",function(){
//     window.location.href="More-Upgrad-webinar.html"
//  })




