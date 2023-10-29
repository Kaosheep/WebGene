const sections = document.querySelectorAll('section');
const lis = document.querySelectorAll('header .bar ul li');
let now = 0;
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const section1H = sections[0].offsetHeight;
    const section2H = sections[1].offsetHeight;
    const section3H = sections[2].offsetHeight;
    if (scrollTop + window.innerHeight >= document.body.scrollHeight) {
        now = 3;
    } else if (scrollTop > section1H + section2H + section3H) {
        now = 2;
    } else if (scrollTop > section1H + section2H) {
        now = 1;
    } else if (scrollTop > section1H) {
        now = 0;
    }else{
        now = null;
    }
    lis.forEach((li, i) => {
        if (i === now) {
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    });
});
////
const slider = document.querySelector('.sliderin');
const slideritems = [...document.querySelectorAll(' .sliderin .slider a')]
let slideritemw = document.querySelector('.slider a').offsetWidth;

const update = () => {
    slideritemw = document.querySelector('.slider a').offsetWidth;
};

window.addEventListener('resize', update);


(() => {
    slider.scrollLeft = slideritemw
})();

document.getElementById('left').addEventListener('click', () => {
    slider.scrollLeft -= slideritemw;
})
document.getElementById('right').addEventListener('click', () => {
    slider.scrollLeft += slideritemw;
})

slideritems.slice(-4).reverse().forEach(sli => {
    document.querySelector('.slider').insertAdjacentHTML("afterbegin", sli.outerHTML);
})

slideritems.slice(0, 5).forEach(sli => {
    document.querySelector('.slider ').insertAdjacentHTML("beforeend", sli.outerHTML);
})

let infinitescrolls = () => {
    if (slider.scrollLeft === 0) {
        slider.scrollLeft = slider.scrollWidth - (2 * slider.offsetWidth);
    } else if (Math.ceil(slider.scrollLeft) == slider.scrollWidth - slider.offsetWidth) {
        slider.scrollLeft = slider.offsetWidth;

    }
}

slider.addEventListener('scroll', infinitescrolls);
////
document.getElementById('totop').addEventListener('click', () => {
    window.scrollTo(0, 0)
})
///
document.querySelector('.console').addEventListener('click',()=>{
    document.querySelector('header').classList.toggle('open')
})