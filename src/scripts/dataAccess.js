const mainContainer = document.querySelector("#container")

const applicationState = {
    requests: [],
    plumbers: []
}

const api = "http://localhost:8088"

// api handlers
export const fetchRequests = () => {
    return fetch(`${api}/requests`)
        .then(res => res.json())
        .then(
            (serviceRequests) => {
                applicationState.requests = serviceRequests
            }
        ) 
}

export const sendRequest = (userRequestData) => {
    const fetchOptions = {
        method: "POST",
        headers : {"Content-Type":"application/json"},
        body: JSON.stringify(userRequestData)
    }
    
    return fetch(`${api}/requests`, fetchOptions)
    .then(res => res.json)
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
    )
}

export const deleteRequest = (id) => {
    return fetch(`${api}/requests/${id}`, {method:"DELETE"})
    .then (() => mainContainer.dispatchEvent(new CustomEvent('stateChanged')))

}

export const fetchPlumbers = () => {
    return fetch("http://localhost:8088/plumbers")
        .then(res => res.json())
        .then (data => {applicationState.plumbers = data})
}



// getters
export const getRequests = () => {
    return applicationState.requests.map((request)=>({...request}))
}

export const getPlumbers = () => {
    return applicationState.plumbers.map((plumber)=>({...plumber}))
}