<?php

//TODO: make which test grabbing dynamic
$file = fopen("../assets/test1/data/beamtestdata.csv", "r");

//grabs the first line of the csv file, which will shove
// into $fields a list of possible fields
$fields = fgetcsv($file);

//0 is for no error
echo json_encode(array(0, $fields));

?>
