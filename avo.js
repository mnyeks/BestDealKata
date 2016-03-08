function findTheString(avoStr) {
     
    // var avoStr = ["1 for R3, 2 for R7, 3 for R10, 5 for R14.50."];

    
         var string = avoStr.split(",");
         for(var i = 0; i < string.length; i++){
               string[i] = string[i].trim()
         }
         console.log(string);
           return string;

   // var avoList = [];
     
     //for(var i = 0; i < findTheString.length; i++) {
         //var bestPlace = findTheString[i];
       
              };     
 
