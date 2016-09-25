$hora = date(h); 
if($hora < 12){
    $img="../img/1.png" ; 
} else($hora > 12){
    $img = "../img/2.png"; 
} 
body { background-image: url('<?php echo $img;?>'); }