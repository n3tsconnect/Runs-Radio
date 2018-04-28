// Direct jika CTRL + U
document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117)) {
        location.replace("https://www.runsradio.com");
        return false;
    } else {
        return true;
    }
};

// Radio
    document.getElementById('radio').addEventListener("error",function() {
        alert('Runs Radio is OFFLINE');
    },false);