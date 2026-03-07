// all selectors
const issuesContainer = document.getElementById('issue-container');
const sectionButtons = document.querySelectorAll('#section-buttons button');
const totalIssuesCounter = document.getElementById('total-issues-counter');
const loadingSpinnerContainer = document.getElementById('loading-spinner');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');


// Search functionality
searchBtn.addEventListener('click', async () => {
    if (searchInput.value.trim() === '') {
        alert('Please enter a search query');
        return;
    }
    toggleLoading(true)
    const query = searchInput.value.trim().toLowerCase();
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${query}`)
    const data = await res.json();
    displayIssues(data.data)
    totalIssues(data.data)
    toggleLoading(false)
})


// Category button active status functionality
sectionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        for (const button of sectionButtons) {
            button.classList.remove('btn-active')
        }
        btn.classList.add('btn-active')
    })
})


// function to display issues
const loadOpenIssues = async () => {
    toggleLoading(true)
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    const data = await res.json();
    const openIssues = data.data.filter((issue) => issue.status === 'open')
    displayIssues(openIssues)
    totalIssues(openIssues)
    toggleLoading(false)
}

const loadClosedIssues = async () => {
    toggleLoading(true)
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    const data = await res.json();
    const closedIssues = data.data.filter((issue) => issue.status === 'closed')
    displayIssues(closedIssues)
    totalIssues(closedIssues)
    toggleLoading(false)
}


const loadAllIssues = async () => {
    toggleLoading(true)
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    const data = await res.json();
    displayIssues(data.data)
    totalIssues(data.data)
    toggleLoading(false)
}

loadAllIssues()