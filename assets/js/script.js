const tabs = document.querySelectorAll('[data-target]');
const tabsContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', ()=> {
        const target = document.querySelector(tab.dataset.target)

        tabsContents.forEach(tc => {
            tc.classList.remove('filters-active')
        })
        target.classList.add('filters-active')

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

// Theme toggler

const themeButton = document.getElementById('theme-button')
const selectedItem = localStorage.getItem('selected-theme')

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light'

if(selectedItem === 'dark'){
    themeButton.checked = true
} 


if(selectedItem){
    document.body.classList[selectedItem === 'dark' ? 'add': 'remove']('dark-theme')
}


themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    localStorage.setItem('selected-theme', getCurrentTheme())
})


// Scroll animation 

const scroll = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

scroll.reveal(`.profile-border`)
scroll.reveal(`.profile-name`, {delay: 500})
scroll.reveal(`.profile-profession`, {delay: 600})
scroll.reveal(`.profile-social`, {delay: 700})
scroll.reveal(`.profile-buttons`, {delay: 800})
scroll.reveal(`.filters-content`, {delay: 900})
scroll.reveal(`.filters`, {delay: 1000})


