const overlay = document.querySelector(".overlay")

const observer = new MutationObserver(() => {
    if(!overlay.classList.contains("hidden")){
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }) 
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }
})
observer.observe(overlay , {
    attributes: true,
    attributeFilter: ['class']
})