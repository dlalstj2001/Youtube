
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
    if(document.getElementById("sidebar").style.display == "block"){
        document.getElementById("sidebar").style.display = "none";
        document.getElementById("sidebar-large").style.display = "block";
        document.documentElement.style.setProperty('--sidebar-width', '240px');
    }
    else if(document.getElementById("sidebar").style.display = "none"){        
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("sidebar-large").style.display = "none";
        document.documentElement.style.setProperty('--sidebar-width', '72px');
    }
})

document
.getElementById("nav_setting")
.addEventListener("click", function() {
    if(document.getElementById("setting-popup").style.display == "block"){
        document.getElementById("setting-popup").style.display = "none";
    }
    else if(document.getElementById("setting-popup").style.display = "none"){        
        document.getElementById("setting-popup").style.display = "block";
    }
})

