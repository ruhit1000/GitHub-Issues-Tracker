// all selectors
const issuesContainer = document.getElementById('issue-container');
const sectionButtons = document.querySelectorAll('#section-buttons button')


const loadAllIssues = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    const data = await res.json();
    displayIssues(data.data)
}

loadAllIssues()