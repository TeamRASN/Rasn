
const colorSwitch = document.getElementById('chk');
const currentTheme = localStorage.getItem("theme");
var theme;

colorSwitch.addEventListener('change', switchColor, false);

if(currentTheme == "dark"){
    colorSwitch.click();
}

function switchColor(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        theme = "dark";
    } else {
        theme = "light";
        document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem("theme", theme);
}

