
export const statusMap = {
    "Backlog": {name: "Backlog", iconPath:"/svgIcons/Backlog.svg", order: 1},
    "Todo": {name: "Todo", iconPath:"/svgIcons/To-do.svg", order: 2},
    "In progress": {name:"In progress", iconPath:"/svgIcons/in-progress.svg", order: 3},
    "Done": {name: "Done", iconPath:"/svgIcons/Done.svg", order: 4},
    "Cancelled": {name: "Cancelled", iconPath:"/svgIcons/Cancelled.svg", order: 5},
};

export const priorityMap =  {
    "0" : {name:"No priority", iconPath: "/svgIcons/no-priority.svg"},
    "4" : {name:"Urgent", iconPath: "/svgIcons/urgent-priority-colour.svg"},
    "3" : {name:"High", iconPath: "/svgIcons/Img-high-priority.svg"},
    "2" : {name:"Medium", iconPath: "/svgIcons/Img-medium-priority.svg"},
    "1": {name:"Low", iconPath: "/svgIcons/Img-low-priority.svg"},
}

export const groupFilterOptions = [{name: "Status", value: "status"}, {name: "User", value: "userId"}, {name: "Priority", value: "priority"}]
export const orderFilterOptions = [{name: "Priority", value: "priority"}, {name: "Title", value: "title"} ]

// export const groupFilterOptionsMap = {status: "status", userId: "userId", priority: "Priority"}
// export const orderFilterOptionsMap = {priority: "Priority", title: "Title"}