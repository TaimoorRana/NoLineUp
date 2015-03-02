//var items = new Array(10);
//var counter = 0;
function item(name, price) {
    this.name = name;
    this.price = price;
   // this.processTime = new Date ();
}

function order (item){
	this.id = -1;
	this.item = item;
	this.orderPrice = 0;
	this.orderPrice += item.price;
}

function doNothing () {}

function addItem(name, price) {
    //alert(name + " has been added");
     navigator.notification.alert(name + ' has been added', doNothing, 'Drink Order', 'OK');
    it = new item (name, price);
    items.push(it);
    order1 = new order (it);
    order1.id = counter;
    counter++;
    //console.log(users[counter]);
    users [0].orders.push (order1);
    users [0].giftCard.value -= order1.orderPrice;
 
	//obj= JSON.stringify(users [counter]);
	//jObject = JSON.parse(obj);
	//alert(jObject.name);
	//alert(typeof(users[counter].giftCard.value) + ""+ users[counter].giftCard.value + " " + order1.orderPrice);
}

