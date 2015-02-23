//Attach onclick event listeners to buttons

(function () {

    $('#myLists').on('click', function() {
        //window.location.href="../myListsPage/myListsPage.html";
        var something = document.getElementById("myLists");
    something.innerHTML = someVar;
    });
    
    $('#myGroups').on('click', function() {
        window.location.href="../groupsHome/groupsHome.html";
    });
    
     $('#stores').on('click', function() {
        window.location.href="../storesListPage/storesListPage.html";
    });
    
    
}());