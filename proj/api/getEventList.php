<?php

require_once '../include/dbConnect.php';
//$db now hosts our db connection

if ($db->connect_errno) {
  //1 indicates there was an error.
  die(json_encode(array(1)));
}

/* Be wary that one shouldn't change the below aliases as it
 *  will be used by AngularJS when returned.
 *
 * If the db column names change, then make sure to change just
 *  the dbCol, not the aliases.
 *
 * dbCol AS alias
 */
$query = <<<MySQL
    SELECT id           AS id,
           name         AS name,
           comments     AS comments,
           assetDirName AS assetDirName
      FROM events
     WHERE isActive = 1
  ORDER BY id DESC
MySQL;

$retval = $db->query($query);

$results = array();
while ($row = $retval->fetch_assoc()) {
  $results[] = $row;
}

//TODO: probably should put this in a separate file to load when user selects a specific test
//but i'm lazy and don't want to have to deal with sanitization and dealing with OS
//so i'm now going to imagine a perfect world where everything in the DB lines up with
//the actual FS and there are no errors or things that aren't fun
foreach ($results as $i => &$r) {
  $files = scandir("../assets/".$r['assetDirName']."/imgs");
  $filesWanted = array();
  foreach ($files as $f) {
    if (preg_match("/^IMG_\d+\.JPG$/", $f)) {
      $filesWanted[] = $f;
    }

  }

  $r['filepaths'] = $filesWanted;
}

//0 is for no error
echo json_encode(array(0, $results));

$retval->close();
$db->close();
?>
