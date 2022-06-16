var buttons=document.getElementById('buttons')

var button=buttons.getElementsByClassName("button");
var result=document.getElementById("result")



for(let i=0;i<button.length;i++){

button[i].addEventListener('click',function(){


    if(this.innerHTML=="="){
      result.innerHTML= eval(result.innerHTML)
    }
    else if(this.innerHTML=="C"){
        result.innerHTML='';
    }
    else if(this.innerHTML=="←"){
        result.innerHTML=result.innerHTML.slice(0,-1);
    }
    
    
    
    else{

       
         result.innerHTML=result.innerHTML+this.innerHTML;
    }
   
   

})



}