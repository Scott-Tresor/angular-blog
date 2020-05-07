const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    thresholds: ratio
};
const  handleRequest = function (entries,  observer) {
    entries.forEach((entry) => {
        if (entry.IntersectionRatio > ration) {
            entry.target.classList.add('.');
            observer.unobserve(entry.target);
        }
    });
};

document.documentElement.classList.add('.');
window.addEventListener('DOMContent', ()=>{
    const Observer =  new IntersectionObserver(handleRequest, options);
    document.querySelectorAll('.').forEach((r)=>{
        Observer.observe(r);
    });
});


