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


const loadAllIssues = async () => {
    toggleLoading(true)
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    const data = await res.json();
    displayIssues(data.data)
    totalIssues(data.data)
    toggleLoading(false)
}

loadAllIssues()