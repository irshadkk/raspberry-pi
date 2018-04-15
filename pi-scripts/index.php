<?php
header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");
?>
<?php
if($_GET['on']=="ON")
{
system ( "gpio mode 7 out" );
     system ( "gpio write 7 1" );
echo 1;
    }

else if($_GET['on']=="OFF")
{
system ( "gpio mode 7 out" );
     system ( "gpio write 7 0" );
echo 0;
    }

?>
