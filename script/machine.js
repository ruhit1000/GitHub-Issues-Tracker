const displayIssues = (issues) => {
    issuesContainer.innerHTML = '';
    issues.forEach((issue) => {
        const issueCard = document.createElement('div');
        issueCard.onclick = () => OpenIssueDetails(issue.id);
        issueCard.className = `cursor-pointer hover:shadow-lg hover:translate-y-[-4px] ease-in-out shadow-md rounded-lg border-t-4 ${issue.status === 'open' ? 'border-[#00A96E]' : 'border-[#A855F7]'}`;
        issueCard.innerHTML = `
        <div class="p-4 border-b border-gray-200">
            <div class="flex justify-between mb-3">
                <img src=${issue.status === 'open' ? "./assets/Open-Status.png" : "./assets/Closed-Status.png"} alt="">
                <div class="badge badge-soft ${checkPriority(issue.priority)}">${issue.priority}</div>
            </div>
            <div>
                <h4 class="font-semibold mb-2">${issue.title}</h4>
                <p class="text-[#64748B] mb-3 text-sm line-clamp-2">${issue.description}</p>
                <div>${createBadge(issue.labels)}</div>
            </div>
        </div>
        <div class="p-4 text-[#64748B] text-sm space-y-2">
            <div class="flex justify-between">
                <p>#${issue.id} by ${issue.author}</p>
                <p>${issue.createdAt.slice(0, 10)}</p>
            </div>
            <div class="flex justify-between">
                <div>
                    <p class="font-medium">Assignee:</p>
                    <p>${issue.assignee ? issue.assignee : 'Unassigned'}</p>
                </div>
                <div>
                    <p class="font-medium">Updated:</p>
                    <p>${issue.updatedAt.slice(0, 10)}</p>
                </div>
            </div>
        </div>
        `
        issuesContainer.appendChild(issueCard)
    })
}

const checkPriority = (priority) => {
    if (priority === 'high') {
        return 'badge-error'
    }
    else if (priority === 'medium') {
        return 'badge-warning'
    }
}

const createBadge = (arr) => {
    const badgeElements = arr.map((el, index) => {
        const isSecond = index === 1;
        const colorClass = isSecond ? "badge-warning border-warning" : "badge-error border-error";

        return `<div class="m-0.5 badge badge-soft ${colorClass}">${el.toUpperCase()}</div>`;
    });
    return badgeElements.join(' ')
}

const totalIssues = (arr) => totalIssuesCounter.textContent = arr.length;

const toggleLoading = (status) => {
    if (status) {
        loadingSpinnerContainer.classList.remove('hidden');
    } else {
        loadingSpinnerContainer.classList.add('hidden');
    }
};