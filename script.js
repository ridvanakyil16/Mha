// Slider Start 
var pathURL = window.location.pathname;

if (pathURL == '/index.html') {
    const sliderContainer = document.querySelector('.slider-container')
    const sliderItems = document.querySelectorAll('.slide-item')
    const leftBtn = document.querySelector('.left-btn')
    const rightBtn = document.querySelector('.right-btn')
    const dots = document.querySelector('.dots')


    let idx = 0

    function changeImage() {
        if (idx > sliderItems.length - 1) {
            idx = 0
        } else if (idx < 0) {
            idx = sliderItems.length - 1
        }

        sliderItems.forEach((item, id) => {
            item.classList.remove('active')
            if (id == idx) {
                item.classList.add('active')
                    // changeDot(id)
            }
        });
    }

    rightBtn.addEventListener('click', () => {
        idx++
        changeImage()
        console.log(idx)
    })

    leftBtn.addEventListener('click', () => {
        idx--
        changeImage()
    })

    // for (let i = 0; i < sliderItems.length; i++) {
    //     const dot = document.createElement('div')
    //     dot.classList.add('dot')

    //     dots.appendChild(dot)

    //     dot.forEach(element => {
    //          element.classList.add('active')
    //      });
    // }

    // function changeDot(id) {
    //     const dotss = document.querySelectorAll('.dot')
    //     dotss.forEach((item, idx) => {
    //         if (id === idx) {
    //             item.classList.add('active')
    //             console.log("elma")
    //         }
    //     })
    // }

    function resetIndex(id) {
        sliderItems[id].style.zIndex = "0"
    }
    // Slider End

}

// Link Active Event Start
const links = document.querySelectorAll('.navbar .links li a')

links.forEach(link => {
    var path = window.location.pathname;
    console.log(path)
    var attr = "/" + link.getAttribute('href')
    if (attr == path) {
        link.classList.add('active')
    }

    link.addEventListener('click', () => {
        removeActive()
        link.classList.add('active')
    })
});

function removeActive() {
    links.forEach(link => {
        link.classList.remove('active')
    });
}

// Link Active Event End



// Scroll Animation Event Start
const navbar = document.querySelector('.navbar')
const mobilMenu = document.querySelector('.navbar .links')
const toggleBtn = document.querySelector('.toggle-btn')

fixNav()
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > navbar.offsetHeight + 150) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
}

toggleBtn.addEventListener('click', () => {
    mobilMenu.classList.toggle('active')
})



// Scroll Animation Event End



// Corporate Page

const buttons = document.querySelectorAll('.corporate .menu button')
const inbuttons = document.querySelectorAll('.corporate .content button')
const contents = document.querySelectorAll('.corporate .content')
const contentSection = document.querySelector('.corporate .content-section')
const body = document.querySelector('body')

buttons.forEach((btn, idx) => {
    var height = contents[idx].clientHeight
    contentSection.style.height = `${height}px`
    btn.addEventListener('click', () => {
        removeButtonsActive()
        removeContentsActive()
        var height = contents[idx].clientHeight
        contentSection.style.height = `${height}px`
        btn.classList.add('active')
        contents[idx].classList.add('active')
    })
});

inbuttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        removeButtonsActive()
        removeContentsActive()
        btn.classList.add('active')
        contents[idx].classList.add('active')
        buttons[idx].classList.add('active')
    })
});

function removeButtonsActive() {
    buttons.forEach(btn => {
        btn.classList.remove('active')
    });
}

function removeContentsActive() {
    contents.forEach(content => {
        content.classList.remove('active')
    });
}