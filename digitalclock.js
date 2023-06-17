const hour =document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const AMPM= document.getElementById('AMPM');



function updateclock(){
	let currentTime = new Date();
	let H = currentTime.getHours();
	let M = currentTime.getMinutes();
	let S = currentTime.getSeconds();
	let ampm = "AM";


	
	if (H > 12){
			H = H-12;
			ampm = "PM";
		}
	



	
     

    H = H < 10 ? "0" + H: H;
    M = M < 10 ? "0" + M: M;
    S = S < 10 ? "0" + S: S;

   




	hour.innerText= H;
    minute.innerText =M;
    second.innerText = S;
    AMPM.innerText = ampm;



    setTimeout(updateclock, 1000)


}
updateclock()
