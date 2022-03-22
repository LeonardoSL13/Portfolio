let index = 2;
let lastItem = 2;
function nextSlider(){
  if(index===lastItem){
    index = 1;
  }else{
    index++ ;
  }
  document.getElementById("trigger"+index).checked = true; 
  
}
// function previousSlider(){
//   if(index===1){
//     index = lastItem;
//   }else{
//     index-- ;
//   }
//   document.getElementById("trigger"+index).checked = true; 
 
// }
