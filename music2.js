var flag=0;

let masterplay=document.getElementById('masterplay');
let forward=document.getElementById('forward');
let rewind=document.getElementById('rewind');
let home=document.getElementById('home');
let song1=document.getElementById('song1');
let song2=document.getElementById('song2');
let song3=document.getElementById('song3');
let song4=document.getElementById('song4');
let song5=document.getElementById('song5');
let song6=document.getElementById('song6');
let song7=document.getElementById('song7');
let container=document.getElementsByClassName('container')


let audioelement1=new Audio("despacito.mp3") ;
let audioelement2=new Audio("dusk.mp3");
let audioelement3=new Audio("sign.mp3");
let audioelement4=new Audio("havana.mp3");
let audioelement5=new Audio("perfect.mp3");
let audioelement6=new Audio("rockstar.mp3");
let audioelement7=new Audio("rules.mp3");



audioelement1.addEventListener('timeupdate', ()=>{
  let progress1=parseInt((audioelement1.currentTime/audioelement1.duration)*100)
  progressbar.value=progress1;



})
      
audioelement2.addEventListener('timeupdate', ()=>{
  let progress2=parseInt((audioelement2.currentTime/audioelement2.duration)*100)
  progressbar.value=progress2;



})

audioelement3.addEventListener('timeupdate', ()=>{
  let progress3=parseInt((audioelement3.currentTime/audioelement3.duration)*100)
  progressbar.value=progress3;



})

audioelement4.addEventListener('timeupdate', ()=>{
  let progress4=parseInt((audioelement4.currentTime/audioelement4.duration)*100)
  progressbar.value=progress4;



})

audioelement5.addEventListener('timeupdate', ()=>{
  let progress5=parseInt((audioelement5.currentTime/audioelement5.duration)*100)
  progressbar.value=progress5;



})

audioelement6.addEventListener('timeupdate', ()=>{
  let progress6=parseInt((audioelement6.currentTime/audioelement6.duration)*100)
  progressbar.value=progress6;



})

audioelement7.addEventListener('timeupdate', ()=>{
  let progress7=parseInt((audioelement7.currentTime/audioelement7.duration)*100)
  progressbar.value=progress7;



})



song1.addEventListener('click', ()=>{
  
    
    
  if(audioelement1.paused|| flag==0){
   audioelement1.play(); 
   
   flag=1;
   masterplay.classList.remove("fa-play");
   masterplay.classList.add("fa-pause");
   songname.innerText="Despacito"
   audioelement2.pause();
   audioelement3.pause();
   audioelement4.pause();
   audioelement5.pause();
   audioelement6.pause();
   audioelement7.pause();
   
   container[0].style.backgroundImage="url('https://i.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg')"
  }
   
 else {audioelement1.pause();
  masterplay.classList.remove('fa-pause');
  masterplay.classList.add('fa-play'); }
  })
 


  
  
   
   
    
  song2.addEventListener('click', ()=>{
  
    
    
    if(audioelement2.paused|| flag==0){
     audioelement2.play(); 
     
     flag=1;
     masterplay.classList.remove("fa-play");
     masterplay.classList.add("fa-pause");
     songname.innerText="Dusk till dawn"
     audioelement1.pause();
   audioelement3.pause();
   audioelement4.pause();
   audioelement5.pause();
   audioelement6.pause();
   audioelement7.pause();
   container[0].style.backgroundImage="url('https://m.timesofindia.com/photo/65459033/size-47893/65459033.jpg')"
   
    }
     
   else {audioelement2.pause();
    masterplay.classList.remove('fa-pause');
    masterplay.classList.add('fa-play'); }
    })







    song3.addEventListener('click', ()=>{
  
    
    
      if(audioelement3.paused|| flag==0){
       audioelement3.play(); 
       flag=1;
       masterplay.classList.remove("fa-play");
       masterplay.classList.add("fa-pause");
       songname.innerText="Sign of the times"
       audioelement1.pause();
   audioelement2.pause();
   audioelement4.pause();
   audioelement5.pause();
   audioelement6.pause();
   audioelement7.pause();
   container[0].style.backgroundImage="url('https://i.ytimg.com/vi/qN4ooNx77u0/maxresdefault.jpg')"
      }
       
     else {audioelement3.pause();
      masterplay.classList.remove('fa-pause');
      masterplay.classList.add('fa-play'); }
      })




  




 
  

      song4.addEventListener('click', ()=>{
  
    
    
        if(audioelement4.paused|| flag==0){
         audioelement4.play(); 
         flag=1;
         masterplay.classList.remove("fa-play");
         masterplay.classList.add("fa-pause");
         songname.innerText="Havana"
         audioelement1.pause();
   audioelement2.pause();
   audioelement3.pause();
   audioelement5.pause();
   audioelement6.pause();
   audioelement7.pause();
   container[0].style.backgroundImage="url('https://i.ytimg.com/vi/BQ0mxQXmLsk/maxresdefault.jpg')"
        }
         
       else {audioelement4.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play'); }
        })




 
        song5.addEventListener('click', ()=>{
  
    
    
          if(audioelement5.paused|| flag==0){
           audioelement5.play(); 
           flag=1;
           masterplay.classList.remove("fa-play");
           masterplay.classList.add("fa-pause");
           songname.innerText="Perfect"
           audioelement1.pause();
   audioelement2.pause();
   audioelement4.pause();
   audioelement3.pause();
   audioelement6.pause();
   audioelement7.pause();
   container[0].style.backgroundImage="url('https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg')"
          }
           
         else {audioelement5.pause();
          masterplay.classList.remove('fa-pause');
          masterplay.classList.add('fa-play'); }
          })















          song6.addEventListener('click', ()=>{
  
    
    
            if(audioelement6.paused|| flag==0){
             audioelement6.play(); 
             flag=1;
             masterplay.classList.remove("fa-play");
             masterplay.classList.add("fa-pause");
             songname.innerText="Rockstar"
             audioelement1.pause();
   audioelement2.pause();
   audioelement4.pause();
   audioelement5.pause();
   audioelement3.pause();
   audioelement7.pause();
   container[0].style.backgroundImage="url('https://i.ytimg.com/vi/4GFAZBKZVJY/maxresdefault.jpg')"
            }
             
           else {audioelement6.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play'); }
            })



















            song7.addEventListener('click', ()=>{
  
    
    
              if(audioelement7.paused|| flag==0){
               audioelement7.play(); 
               flag=1;
               masterplay.classList.remove("fa-play");
               masterplay.classList.add("fa-pause");
               songname.innerText="New rules"
               audioelement1.pause();
               audioelement2.pause();
               audioelement4.pause();
               audioelement5.pause();
               audioelement6.pause();
               audioelement3.pause();
               container[0].style.backgroundImage="url('https://i.ytimg.com/vi/k2qgadSvNyU/hqdefault.jpg')"
              }
               
             else {audioelement7.pause();
              masterplay.classList.remove('fa-pause');
              masterplay.classList.add('fa-play'); }
              })

              

              forward.addEventListener('click', ()=>{
                if(!audioelement1.paused){
                  audioelement1.pause();
                  audioelement2.play();
                  songname.innerText="Dusk till dawn"
                  container[0].style.backgroundImage="url('https://m.timesofindia.com/photo/65459033/size-47893/65459033.jpg')"
                }
                  

                  else if(!audioelement2.paused){
                    audioelement2.pause();
                    audioelement3.play();
                    songname.innerText="Sign of the times"
                    container[0].style.backgroundImage="url('https://i.ytimg.com/vi/qN4ooNx77u0/maxresdefault.jpg')"
                  }

                   else if(!audioelement3.paused){
                      audioelement3.pause();
                      audioelement4.play();
                      songname.innerText="Havana"
                      container[0].style.backgroundImage="url('https://i.ytimg.com/vi/BQ0mxQXmLsk/maxresdefault.jpg')"}


                      else if(!audioelement4.paused){
                        audioelement4.pause();
                        audioelement5.play();
                        songname.innerText="Perfect"
                        container[0].style.backgroundImage="url('https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg')"}

                        else if(!audioelement5.paused){
                          audioelement5.pause();
                          audioelement6.play();
                          songname.innerText="Rockstar"
                          container[0].style.backgroundImage="url('https://i.ytimg.com/vi/4GFAZBKZVJY/maxresdefault.jpg')"}

                          else if(!audioelement6.paused){
                            audioelement6.pause();
                            audioelement7.play();
                            songname.innerText="New rules"
                            container[0].style.backgroundImage="url('https://i.ytimg.com/vi/k2qgadSvNyU/hqdefault.jpg')"}

                

                })

                

               

                rewind.addEventListener('click', ()=>{
                  if(!audioelement7.paused){
                    audioelement7.pause();
                    audioelement6.play();
                    songname.innerText="Rockstar"
                    container[0].style.backgroundImage="url('https://i.ytimg.com/vi/4GFAZBKZVJY/maxresdefault.jpg')"
                  }
                    
  
                    else if(!audioelement6.paused){
                      audioelement6.pause();
                      audioelement5.play();
                      songname.innerText="Perfect"
                      container[0].style.backgroundImage="url('https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg')"
                    }
  
                     else if(!audioelement5.paused){
                        audioelement5.pause();
                        audioelement4.play();
                        songname.innerText="Havana"
                        container[0].style.backgroundImage="url('https://i.ytimg.com/vi/BQ0mxQXmLsk/maxresdefault.jpg')"}
  
  
                        else if(!audioelement4.paused){
                          audioelement4.pause();
                          audioelement3.play();
                          songname.innerText="Sign of the times"
                          container[0].style.backgroundImage="url('https://i.ytimg.com/vi/qN4ooNx77u0/maxresdefault.jpg')"}
  
                          else if(!audioelement3.paused){
                            audioelement3.pause();
                            audioelement2.play();
                            songname.innerText="Dusk till dawn"
                            container[0].style.backgroundImage="url('https://m.timesofindia.com/photo/65459033/size-47893/65459033.jpg')"}
  
                            else if(!audioelement2.paused){
                              audioelement2.pause();
                              audioelement1.play();
                              songname.innerText="Despacito"
                              container[0].style.backgroundImage="https://i.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg')"}

                              
  
                  
  
                  })