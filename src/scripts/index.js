window.onload = () => { 
    // Не понятно зачем следующие 4 стоки, которые я закомментировал и без них работает плавный скрол

    // const header = document.querySelector('header'); 
     
    // document.addEventListener('scroll', event => { 
    //     console.log(event.target.scrollTop) 
    // }); 
     
    const smoothScrollLinks = document.querySelectorAll('.navig__list-item'); 
     
    for (let link of smoothScrollLinks) { 
      link.addEventListener('click', event => { 
         event.preventDefault(); 
         
        const target = event.target; 
        const elementToScroll = document.querySelector(target.getAttribute('href')); 
        elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'start'}); 
      }); 
    } 
  };