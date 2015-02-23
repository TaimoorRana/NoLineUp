//Attach onclick event listeners to buttons

(function () {
    
    $('#allDrinks').on('click', function() {
        document.getElementById("test").innerHTML=users[0].name;
        // window.location.href="../subCategories/allDrinks/allDrinks.html";
        print(users[0].name);
    });
    
    $('#hotDrinks').on('click', function() {
        window.location.href="../subCategories/hotDrinks/hotDrinks.html";
    });
    
    $('#coldDrinks').on('click', function() {
        window.location.href="../subCategories/coldDrinks/coldDrinks.html";
    });
    
    $('#frappuccinos').on('click', function() {
        window.location.href="../subCategories/frappuccinos/frappuccinos.html";
    });
    
    $('#teas').on('click', function() {
        window.location.href="../subCategories/teas/teas.html";
    });

}());
