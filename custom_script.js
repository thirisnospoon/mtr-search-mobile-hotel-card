const titles = document.querySelectorAll('.rba-title');
const contents = document.querySelectorAll('.rba-content');

titles.forEach((element, index) => {
    element.addEventListener('click', event => {
        event.preventDefault();

        for(let i = 0; i < titles.length; i++) {
            if (event.target !== titles[i]) {
                contents[i].classList.add('hidden-block');
            }
        }
        contents[index].classList.toggle('hidden-block');
    })
});


const stickySearch = document.querySelector('.sticky-custom');
const showSearchPointer = document.querySelector('.show-search');

window.addEventListener('scroll', () => {
    console.log(stickySearch);

    if (window.pageYOffset >= showSearchPointer.offsetTop) {
        stickySearch.classList.remove('hidden-block');
    }
    else {
        stickySearch.classList.add('hidden-block');
    }
    });

