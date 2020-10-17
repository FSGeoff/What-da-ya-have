$(document).ready(function(){

    // console.log("hello world");
    
    
    function getData(searchTerm){
    $.ajax({
        url: "http://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=66fe3974-ba6e-4f55-8ab3-11cd131ab532" 
        ,method: "GET",  
    }).then(function (response){
      console.log(response);
    });
    
    
};
});

