
export const getStatusIcon = (status) => {
    switch (status) {
        case "Backlog": return <img src="/icons/Backlog.svg" height={15} width={15} alt="backlog"/>;
        case "Todo": return <img src="/icons/To-do.svg" height={15} width={15} alt="backlog"/>;
        case "In progress": return <img src="/icons/in-progress.svg" height={15} width={15} alt="backlog"/>;
        case "Done": return <img src="/icons/Done.svg" height={15} width={15} alt="backlog"/>;
        case "Canceled": return <img src="/icons/Cancelled.svg" height={15} width={15} alt="backlog"/>;
        default: return <img src="/icons/Cancelled.svg" height={15} width={15} alt="backlog"/>;
    }
}

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src="/icons/No-priority.svg" height={15} width={15} alt="no-priority"/>;
        case "Low": return <img src="/icons/Img - Low Priority.svg" height={15} width={15} alt="medium"/>;
        case "Medium": return <img src="/icons/Img - Medium Priority.svg" height={15} width={15} alt="medium"/>;
        case "High": return <img src="/icons/Img - High Priority.svg" height={15} width={15} alt="high"/>;
        case "Urgent": return <img src="/icons/SVG - Urgent Priority colour.svg" height={15} width={15} alt="urgent"/>;
        default: return <img src="/icons/SVG - Urgent Priority colour.svg" height={15} width={15} alt="urgent"/>
    }
}