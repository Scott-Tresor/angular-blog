const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    thresholds: ratio
};
const  handleRequest = function (entries,  observer) {
    entries.forEach((entry) => {
        if (entry.IntersectionRatio > ration) {
            observer.unobserve(entry.target)
        }
    });
}
const Observer =  new IntersectionObserver(handleRequest, options);
Observer.observe(document.querySelector('.'));
