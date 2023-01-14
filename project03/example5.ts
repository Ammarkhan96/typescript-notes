//Rest Parameters:
function hello(name= "Alexandar", ...nickNames: string[]){
    console.log(`Hello ${name} aka ${nickNames}`);
    
   }
   
   hello("Imran", "Alexandar", "Alex", "Alexandar the Great")   