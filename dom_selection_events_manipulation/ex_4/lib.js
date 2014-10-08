(function() {
    document.getElementById("get-dom").addEventListener("click", function() {
        getDom();
    });
})();

var getDom = function() {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
          document.getElementById("container").innerHTML = xmlhttp.responseText;

          document.getElementById("footer").addEventListener("click", function() {
            alert("Footer was clicked");
          });

        var paragraphs = document.querySelectorAll(".paragraph");

        for (var i = 0 ; i < paragraphs.length ; i++) {
            paragraphs[i].addEventListener("click", function() {
                alert("Click on paragraph worked");
            });
        }
        }
    }

    xmlhttp.open("GET","http://6377cbb2.ngrok.com/dynamicdom",true);
    xmlhttp.send();
}