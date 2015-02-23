function postData() {
    // 1. Create XHR instance - Start
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else {
        throw new Error("Ajax is not supported by this browser");
    }
    // 1. Create XHR instance - End
    
    // 2. Define what to do when XHR feed you the response from the server - Start
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status == 200 && xhr.status < 300) {
                document.getElementById('serverResponse').innerHTML = xhr.responseText;
            }
        }
    };
    // 2. Define what to do when XHR feed you the response from the server - Start

//-->// modified!
    //var userid = document.getElementById("userid").value;
   
    //var orderx = '{"OrderID":"or19123", "Items":[{"ItemID":"it4511"},{"ItemID":"it1234"},{"ItemID":"it7881"}]}';
    var orderx = JSON.stringify(users);
    
    
    //order = JSON.stringify(order); //maybe not needed?

    // 3. Specify your action, location and Send to the server - Start 
    xhr.open('POST', '10.0.1.7/austin.php');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //xhr.send("userid=" + userid);
    xhr.send("order="+orderx);
    // 3. Specify your action, location and Send to the server - End
}//end of PostData
    