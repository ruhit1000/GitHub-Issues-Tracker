// all selectors
const issuesContainer = document.getElementById('issue-container');
const sectionButtons = document.querySelectorAll('#section-buttons button');
const totalIssuesCounter = document.getElementById('total-issues-counter');
const loadingSpinnerContainer = document.getElementById('loading-spinner');



sectionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        for (const button of sectionButtons) {
            button.classList.remove('btn-active')
        }
        btn.classList.add('btn-active')
    })
})

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