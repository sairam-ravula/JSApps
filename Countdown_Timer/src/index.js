document.getElementById("button").onclick = (e) => {
    e.preventDefault();
    setInterval(countdownTimer,1000);
}

function countdownTimer(){
        const target = document.getElementById("datetime").value;
        let current = new Date();
        let diff = new Date(target).getTime() - current.getTime();
        let days = Math.floor(((((diff/1000)/60)/60)/24)%24);
        let hours = Math.floor((((diff/1000)/60)/60)%24);
        let minutes = Math.floor(((diff / 1000) / 60) %60);
        let seconds = Math.floor((diff / 1000) %60);
       document.getElementById("days").innerText = days+"\n";
       document.getElementById("hours").innerText = hours+"\n";
       document.getElementById("minutes").innerText = minutes+"\n";
       document.getElementById("seconds").innerText = seconds+"\n";
       if (diff<=0)
       {
           clearInterval(interval);
        document.getElementById("days").innerText = "N.A "+"\n";
        document.getElementById("hours").innerText = "N.A "+"\n";
        document.getElementById("minutes").innerText = "N.A "+"\n";
        document.getElementById("seconds").innerText = "N.A "+"\n";  
       }
    }
let interval = countdownTimer();
