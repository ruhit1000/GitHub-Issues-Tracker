// all selectors
const issuesContainer = document.getElementById('issue-container');
const sectionButtons = document.querySelectorAll('#section-buttons button');
const totalIssuesCounter = document.getElementById('total-issues-counter');
const loadingSpinnerContainer = document.getElementById('loading-spinner');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const modalDetails = document.getElementById('modal-details');


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


// modal functionality
const OpenIssueDetails = async(id) => {
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    const data = await res.json();
    const issue = data.data;
    modalDetails.innerHTML = `
    <h2 class="font-bold text-2xl mb-2">${issue.title}</h2>
    <div class="flex gap-6 items-center">
        ${issue.status === 'open' ? `<div class="badge bg-[#00A96E]">Opened</div>` : `<div class="badge bg-[#A855F7]">Closed</div>`}
        <ul class="list-disc flex gap-6">
            <li class="text-[#64748B] text-xs">Opened by ${issue.author}</li>
            <li class="text-[#64748B] text-xs">${issue.createdAt.slice(0, 10)}</li>
        </ul>
    </div>
    <div class="my-6">${createBadge(issue.labels)}</div>
    <p class="text-[#64748B] mb-6">${issue.description}</p>
    <div class="bg-[#F8FAFC] p-4 grid grid-cols-2">
        <div>
            <p class="text-[#64748B] mb-1">Assignee:</p>
            <p class="font-semibold">${issue.assignee || 'Unassigned'}</p>
        </div>
        <div>
            <p class="text-[#64748B] mb-1">Priority:</p>
            <div class="badge badge-outline ${checkPriority(issue.priority)}">${issue.priority}</div>
        </div>
    </div>
    `
    issueDetails.showModal()
}

loadAllIssues()