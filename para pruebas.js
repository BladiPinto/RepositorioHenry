var arguments=[1,2,6,4,5];
var multiplicados = 1;
   if (arguments.length === 0){
      console.log(0);
   }else if(arguments.length===1){
      console.log(arguments);
   }else{
      for (var i = 0; i < arguments.length; i++) {
         multiplicados=multiplicados*arguments[i];
      }
      console.log(multiplicados);
   }