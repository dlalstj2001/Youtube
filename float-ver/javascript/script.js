
// document
// .getElementById("nav_setting")
// .addEventListener("click", function() {
//     var displayCh = document.querySelector("#sidebar-large").style.display ;
//     console.log(document.getElementById("sidebar-large").style.display);
//     console.log(displayCh);
// })

document
.getElementById("nav_menu")
.addEventListener("click", function() {
    if(document.getElementById("sidebar-large").style.display == "inline-block"){
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("sidebar-large").style.display = "none";
        document.documentElement.style.setProperty('--sidebar-width', '72px');
    }
    else if(document.getElementById("sidebar-large").style.display = "none"){        
        document.getElementById("sidebar").style.display = "none";
        document.getElementById("sidebar-large").style.display = "inline-block";
        document.documentElement.style.setProperty('--sidebar-width', '240px');    
    }
})
