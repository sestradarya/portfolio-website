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





