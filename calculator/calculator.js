let string ="";   //initilize a empty string 

let buttons = document.querySelectorAll('button');   //selecting all the button elements
let inputval= document.getElementById("input");      //selecting the screen of the calculator

Array.from(buttons).forEach((button)=>{              //selecting each button from the button array
    button.addEventListener("click",(e)=>{           //adding click event to every button
        
        
        if(e.target.innerHTML=='='){       
                   
           try{eval(string);}
           catch (err){                             //cheaking the correctness of input mathematical expression
            if (err instanceof SyntaxError){        
                inputval.value = "Syntax Error";
                string="";
            }
           }
           finally{                                
                string=eval(string);               //evaluating the mathematical expression
                inputval.value=string;             //changing the value of screen to evaluated mathematical expression
                string="";
           }
        }
        else if(e.target.innerHTML=='C'){         //clear the screen of calculator
           
            string="";
            inputval.value=string;
        }
        else{                                    //giving input to the calculator
            string=string + e.target.innerHTML;
            inputval.value=string;
        }
        
    })
})