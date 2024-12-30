const themeToggle = document.querySelector('.theme-toggle'); const body = document.body; 
const savedTheme = localStorage.getItem('theme'); 

if (savedTheme === 'light') { body.classList.add('light'); } 
themeToggle.addEventListener('click', () => { body.classList.toggle('light');  
localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark'); });