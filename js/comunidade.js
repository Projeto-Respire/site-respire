let animacaodecomunidades = gsap.matchMedia();

animacaodecomunidades.add("(min-width: 768px)", () => {

gsap.from(".quadrado", {
    scrollTrigger: {
    trigger: ".blocos",
    start: "top 1%",
},
    y: -50, 
    stagger: 0.5,  
    duration: 2.5
    });
});



const transicao = new SplitType('.mini-txt');

gsap.to('.word',{

  y: 0, 
  delay: 0.2,
  duration: .1,
  stagger: 0.05,
})


