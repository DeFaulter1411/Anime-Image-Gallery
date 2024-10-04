var fullimgbox= document.getElementById("fullimgbox");
    var FullImg= document.getElementById("FullImg");
    function openFullImg(pic){
        fullimgbox.style.display ="flex";
        FullImg.src = pic;
    }
    function closeFullImg(){
        fullimgbox.style.display = "none";
    }
    