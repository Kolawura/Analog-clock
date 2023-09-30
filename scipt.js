const body = document.querySelector('body'),
hourHand = document.querySelector('.hour'),
minuteHand = document.querySelector('.minute'),
secondHand = document.querySelector('.second'),
modeSwitch = document.querySelector('.button');

if(localStorage.getItem('mode') ==='Dark Mode'){
    body.classList.add('dark');
    modeSwitch.textContent = 'Light Mode'
}

modeSwitch.addEventListener('click',()=>{
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    modeSwitch.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode'
    localStorage.setItem('mode', isDarkMode ? 'Dark Mode' : 'Light Mode')
})


const updateTime = () => {
    let time = new Date();
    secToDeg = (time.getSeconds() / 60) * 360;
    minToDeg = (time.getMinutes() / 60) * 360;
    hourToDeg = (time.getHours() / 12) * 360;

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}

updateTime();
setInterval(updateTime, 1000);
