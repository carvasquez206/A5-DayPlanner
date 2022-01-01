$(document).ready(function(){
//JQuery needs $(document).ready(function(){} to function. Had to look it up. Website with explanation: https://learn.jquery.com/using-jquery-core/document-ready/.


// variable for current time and date
var currentDateTime = moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm a');
    //  display todays date in header    
     $("#currentDay").text(currentDateTime); 

//

});