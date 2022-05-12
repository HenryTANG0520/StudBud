var isFHD = screen.width > 1024 ? ture : false;
alert(screen.width + ":" + screen.height);
(function(){
    if (isFHD) {
        window.location = "index_pc.html";
    }else{
        window.location = "index_mb.html";
    }
})