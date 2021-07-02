

var mymodule=(function(){
    var secretCode="WhatsUp!";

    function privateCheckcode(code){
       if(secretCode === code){
           alert("You are awesome...");
       } else{
           alert("try again...");

       }
    }

    return{
        checkCode: privateCheckcode
    };
}());
mymodule.checkCode("WhatsUp!");
