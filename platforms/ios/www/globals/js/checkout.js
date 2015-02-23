//
//git pull
//git status
//git add -A
//git commit -m "message"
//git push

//accept orders in order page
//order {id , items, orderPrice}
//item {price, name}
//orders []

//checkout file

//decide on whether to fulfill order or not based on server's decision
function validate_terminate (serverResponse){
	if (serverResponse){
		end = new Date ();
		alert("You ordered at "+ start.getHours ()+":" + start.getMinutes ()+ "your order will be ready at " + (((end.getMinutes + 10) >= 60)?end.getHours()+1 : end.getHours()) 
			+":"+ (((end.getMinutes + 10) >= 60)? end.getMinutes - 60 :end.getMinutes()+10) 
		    + "\n Your available credit: $"+ users [index].giftCard.value);
	}
	else{
		alert ("You ordered at "+ start.getHours ()+":" + start.getMinutes ()+ "\nYour order will be NOT be fullfilled since your current available credit is: $"
		+ users [index].giftCard.value);
	}
}