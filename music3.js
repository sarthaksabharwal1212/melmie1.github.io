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


let audioelement1=new Audio("gods.mp3") ;
let audioelement2=new Audio("FRIENDS.mp3");
let audioelement3=new Audio("rename.mp3");
let audioelement4=new Audio("delicate.mp3");
let audioelement5=new Audio("mine.mp3");
let audioelement6=new Audio("feelings.mp3");
let audioelement7=new Audio("whatever.mp3");



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
   songname.innerText="Gods plan"
   audioelement2.pause();
   audioelement3.pause();
   audioelement4.pause();
   audioelement5.pause();
   audioelement6.pause();
   audioelement7.pause();
   
   container[0].style.backgroundImage="url('https://i.ytimg.com/vi/xpVfcZ0ZcFM/maxresdefault.jpg')"
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
     songname.innerText="Friends"
     audioelement1.pause();
   audioelement3.pause();
   audioelement4.pause();
   audioelement5.pause();
   audioelement6.pause();
   audioelement7.pause();
   container[0].style.backgroundImage="url('https://i.ytimg.com/vi/CY8E6N5Nzec/maxresdefault.jpg')"
   
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
       songname.innerText="Girls like you"
       audioelement1.pause();
   audioelement2.pause();
   audioelement4.pause();
   audioelement5.pause();
   audioelement6.pause();
   audioelement7.pause();
   container[0].style.backgroundImage="url('https://i.ytimg.com/vi/aJOTlE1K90k/maxresdefault.jpg')"
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
         songname.innerText="Delicate"
         audioelement1.pause();
   audioelement2.pause();
   audioelement3.pause();
   audioelement5.pause();
   audioelement6.pause();
   audioelement7.pause();
   container[0].style.backgroundImage="url('https://i.ytimg.com/vi/tCXGJQYZ9JA/maxresdefault.jpg')"
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
           songname.innerText="Mine"
           audioelement1.pause();
   audioelement2.pause();
   audioelement4.pause();
   audioelement3.pause();
   audioelement6.pause();
   audioelement7.pause();
   container[0].style.backgroundImage="url('https://i.ytimg.com/vi/Gc71AmT_b2k/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBZXZk4SfXIqgFDsAIdkHUG07pk5w')"
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
             songname.innerText="In my feelings"
             audioelement1.pause();
   audioelement2.pause();
   audioelement4.pause();
   audioelement5.pause();
   audioelement3.pause();
   audioelement7.pause();
   container[0].style.backgroundImage="url('https://i.ytimg.com/vi/DRS_PpOrUZ4/maxresdefault.jpg')"
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
               songname.innerText="Whatever it takes"
               audioelement1.pause();
               audioelement2.pause();
               audioelement4.pause();
               audioelement5.pause();
               audioelement6.pause();
               audioelement3.pause();
               container[0].style.backgroundImage="url('https://i.ytimg.com/vi/M66U_DuMCS8/maxresdefault.jpg')"
              }
               
             else {audioelement7.pause();
              masterplay.classList.remove('fa-pause');
              masterplay.classList.add('fa-play'); }
              })

              

              forward.addEventListener('click', ()=>{
                if(!audioelement1.paused){
                  audioelement1.pause();
                  audioelement2.play();
                  songname.innerText="Friends"
                  container[0].style.backgroundImage="url('https://i.ytimg.com/vi/CY8E6N5Nzec/maxresdefault.jpg')"
                }
                  

                  else if(!audioelement2.paused){
                    audioelement2.pause();
                    audioelement3.play();
                    songname.innerText="Girls like you"
                    container[0].style.backgroundImage="url('https://i.ytimg.com/vi/aJOTlE1K90k/maxresdefault.jpg')"
                  }

                   else if(!audioelement3.paused){
                      audioelement3.pause();
                      audioelement4.play();
                      songname.innerText="Delicate"
                      container[0].style.backgroundImage="url('https://i.ytimg.com/vi/tCXGJQYZ9JA/maxresdefault.jpg')"}


                      else if(!audioelement4.paused){
                        audioelement4.pause();
                        audioelement5.play();
                        songname.innerText="Mine"
                        container[0].style.backgroundImage="url('https://i.ytimg.com/vi/Gc71AmT_b2k/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBZXZk4SfXIqgFDsAIdkHUG07pk5w')"}

                        else if(!audioelement5.paused){
                          audioelement5.pause();
                          audioelement6.play();
                          songname.innerText="In my feelings"
                          container[0].style.backgroundImage="url('https://i.ytimg.com/vi/DRS_PpOrUZ4/maxresdefault.jpg')"}

                          else if(!audioelement6.paused){
                            audioelement6.pause();
                            audioelement7.play();
                            songname.innerText="Whatever it takes"
                            container[0].style.backgroundImage="url('https://i.ytimg.com/vi/M66U_DuMCS8/maxresdefault.jpg')"}

                

                })

                

               

                rewind.addEventListener('click', ()=>{
                  if(!audioelement7.paused){
                    audioelement7.pause();
                    audioelement6.play();
                    songname.innerText="In my feelings"
                    container[0].style.backgroundImage="url('https://i.ytimg.com/vi/DRS_PpOrUZ4/maxresdefault.jpg')"
                  }
                    
  
                    else if(!audioelement6.paused){
                      audioelement6.pause();
                      audioelement5.play();
                      songname.innerText="Mine"
                      container[0].style.backgroundImage="url('https://i.ytimg.com/vi/Gc71AmT_b2k/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBZXZk4SfXIqgFDsAIdkHUG07pk5w')"
                    }
  
                     else if(!audioelement5.paused){
                        audioelement5.pause();
                        audioelement4.play();
                        songname.innerText="Delicate"
                        container[0].style.backgroundImage="url('https://i.ytimg.com/vi/tCXGJQYZ9JA/maxresdefault.jpg')"}
  
  
                        else if(!audioelement4.paused){
                          audioelement4.pause();
                          audioelement3.play();
                          songname.innerText="Girls like you"
                          container[0].style.backgroundImage="url('https://i.ytimg.com/vi/aJOTlE1K90k/maxresdefault.jpg')"}
  
                          else if(!audioelement3.paused){
                            audioelement3.pause();
                            audioelement2.play();
                            songname.innerText="Friends"
                            container[0].style.backgroundImage="url('https://i.ytimg.com/vi/CY8E6N5Nzec/maxresdefault.jpg')"}
  
                            else if(!audioelement2.paused){
                              audioelement2.pause();
                              audioelement1.play();
                              songname.innerText="Gods plan"
                              container[0].style.backgroundImage="url('https://i.ytimg.com/vi/xpVfcZ0ZcFM/maxresdefault.jpg')"}

                              
  
                  
  
                  })