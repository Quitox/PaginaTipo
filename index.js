const menu = document.querySelector(".menu");
const menubarLinkP = document.querySelector(".menubar-link-p");

    menu.addEventListener("click", function() 
    { 
        menubarLinkP.classList.toggle("displaynone")

    });

const elementos = querySelectorAll(".Klass");

const otraforma = getElementsByClassName("klass");

elementos.addEventListener("click", function(){ elementos.classList.add("black"); });

otraforma.addEventListener("click", function(){ elementos.classList.add("red"); });
                           
