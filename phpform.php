<!Doctype>
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
	</head>
	<body>
	  <?php
       
       $FirstName=$LastName=$Dob=$Gender=$Telephone;
       $FirstNamerr=$LastNameerr=$Doberr= $Gendererr=$Telephoneerr;

       if($_SERVER["REQUEST_METHOD"]=="POST"){
       	if (empty($_POST["FirstName"])) {
       		$FirstNamerr="First name is required";
       	}

       	else{
       		$FirstName = test_input($_POST['FirstName']);
       	}

       	if (empty($_POST["LastName"])) {
       		$LastNameerr="Last name is required";
       	}

       	else{
       		$LastName = test_input($_POST['LastName']);
       	}

       	if (empty($_POST["Dob"])) {
       		$Doberr="Date of birth  is required";
       	}

       	else{
       		$Dob = test_input($_POST['Dob']);
       	}

       	if (empty($_POST["Gender"])) {
       		$Gendererr="First name is required";
       	}

       	else{
       		$Gender = test_input($_POST['Gender']);
       	}

       	if (empty($_POST["Telephone"])) {
       		$Telephoneerr="First name is required";
       	}

       	else{
       		$Telephone = test_input($_POST['Telephone']);
       	}


       }
	    ?>
	</body>
	</html>