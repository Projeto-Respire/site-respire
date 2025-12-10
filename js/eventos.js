const daysElements =  document.querySelector("[data-days]")
const hoursElements =  document.querySelector("[data-hours]")
const minutesElements =  document.querySelector("[data-minutes]")
const secondsElements =  document.querySelector("[data-seconds]")

const render = (days, hours, minutes, seconds) => {

  daysElements.innerHTML = String(days).padStart("2", 0)
  hoursElements.innerHTML = String(hours).padStart("2", 0)
  minutesElements.innerHTML = String(minutes).padStart("2", 0)
  secondsElements.innerHTML = String(seconds).padStart("2", 0)

}

const countdown = () => {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const targetDate = new Date(nextYear, 2, 8);

  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  render(days,hours, minutes, seconds);
};

setInterval(countdown, 1000);


//split-txt
const transicao = new SplitType('.em-cima-de-todos');

gsap.to('.word',{

  y: 0, 
  delay: 0.2,
  duration: .1,
  stagger: 0.05, 
})


//scrollReval
window.revelar = ScrollReveal({reset:true})

    revelar.reveal('.evento-breve',
{    
    origin: 'bottom',
    distance: '90px',
    duration: 1500,
    delay: 10,
    interval: 200,
    viewFactor: 0.2,
    reset: false
})


    revelar.reveal('.em-cima-de-todos2',
{    
    origin: 'bottom',
    distance: '10px',
    duration: 2000,
    interval: 200,
    viewFactor: 0.2,
    reset: false
})
