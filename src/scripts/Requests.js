import {getRequests , deleteRequest, getPlumbers} from "./dataAccess.js"



const objectHtml = (object) => {
    const plumbers = getPlumbers()
    
    const html = 
        `<li>
        Order #${object.id} - Problem: ${object.description}

        <select class="plumbers" id="plumbers">
            <option value="">Choose Plumber</option>
            ${
                plumbers.map(
                    plumber => {
                        return `<option value="${object.id}--${plumber.id}">${plumber.name}</option>`
                    }
                ).join("")
            }
        </select>

        <button class="request__delete" id="request--${object.id}">
            Delete
        </button>
        </li>`

    return html

}

export const Requests = () => {
    const requests = getRequests()

    const html = 
    `<ul>
    ${requests.map(objectHtml).join('')}
    </ul>`
    // Line^ it's relationship to the objectHtml function | point of interest...passing a function straight up, but not it's result, but the actual functions action...interesting stuff
    
    console.log(html)
    return html
}


//event listenerss
document.addEventListener("click", event => {
    if (event.target.id.startsWith("request--")) {
        const [,objectId] = event.target.id.split("--")
        
        deleteRequest(parseInt(objectId))
    }
})


document.addEventListener("change" , event=>{
    if (event.target.id === "plumbers") {}
})
