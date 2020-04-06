    function resized() {
      var h = document.documentElement.clientHeight;
      document.getElementById("container2").style.height = h +"px";
      document.getElementById("bg1").style.height =h+"px";

      var console = document.getElementById('console');
      console.innerHTML += "*Resize! window.innerHeight: " + window.innerHeight + ",  documentElement.clientHeight: " + document.documentElement.clientHeight + ",  background image height: " + document.getElementById("bg1").style.height + "<br>";
      console.style.color = "blue";


    }
