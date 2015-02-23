<?php //replaced order with order
  // $order = trim($_POST["OrderID"]);
  // $items = trim($_POST["Items"]);
  // $data = array("OrderID" => $order, "Items" => $items );
  // echo json_encode($data);
  $forder = trim($_POST["users"]);
 //echo json_encode($forder);
// echo "\n".$forder;
echo var_dump($forder);

$orderJSON = json_decode($forder,true);
echo var_dump($orderJSON);
// echo $orderJSON;
// echo "The order ID is: ".$orderJSON['OrderID']."<BR>";

// $count=0;
// foreach ($orderJSON['Items'] as $value) {
// 	$count+=1;
// 	echo "Item ".$count.": ".$value['ItemID']."<BR>";
// }


  // if ($order == "")                // if user id is blank
  //   echo "you must not leave it blank"; 
  // else if ($order == "johnny")     // if user id is "johnny" (case sensitive)
  //   echo "'johnny' has been used, please choose another User ID";
  // else                              // if user id anything else
  //   echo "yeah! user id \"".$order."\" is available, you are free to use it.";
?>