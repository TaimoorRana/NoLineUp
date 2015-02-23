function sendData () {
 $.ajax({
   url: "austin.php",
   type: 'POST',
   contentType:'application/json',
   data: JSON.stringify (users [0]),
  // dataType:'json',
   success: function(){
     //On ajax success do this
     //alert(JSON.parse(JSON.stringify (users [0])).orders[0].item.name);
    serverResp = ((JSON.parse(JSON.stringify (users [0])).giftCard.id === "1234567" && JSON.parse(JSON.stringify (users [0])).giftCard.value > 0)? 
      true :false);
    if (serverResp) {
      end = new Date ();
      min = 0;
      hr = 0;
      v = "Your order will be ready at ";
	  if ((end.getMinutes () +10 +10) >= 60){
	  	v = v + ((end.getHours () +1) + ":");
	  	//hr = end.getHours () +1;
	  	if ((end.getMinutes()+10 - 60) < 10){
	  		v = v + ("0" + (end.getMinutes() +10 - 60));
	  	}
	  	else {
	  		v = v + ((end.getMinutes()+10 - 60));
	  	}
	  }
      else {
      		v = v + ((end.getHours ()) + ":");
      		v = v +  (end.getMinutes()+10);
      }
      
       v +=   ("\n Your available credit: $"+ users [0].giftCard.value);
      
      alert (v);
      time = new Date ().getSeconds ();
      while (time <= 25){
        time = new Date ().getSeconds();
      }
      
      alert (users [0].name + ", order is ready! \nWe appreciate your business!");
    }
    else{
      alert ("Sorry we can't serve you.\n You are out of balance!");
    }
      
      },
   error: function(xhr, ajaxOptions, thrownError) {
      //On error do this
        $.mobile.loading('hide')
        if (xhr.status == 200) {

            alert(ajaxOptions);
        }
        else {
            alert(xhr.status+"Taimoor");
            alert(thrownError+"Pargol");
        }
    }
 });
    
}



