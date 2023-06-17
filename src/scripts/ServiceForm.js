import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", event => {
    if (event.target.id === "submitRequest") {
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = parseFloat(document.querySelector("input[name='serviceBudget']").value)
        const userDate = document.querySelector("input[name='serviceDate']").value

        const userRequestData = {
            description : userDescription,
            address : userAddress,
            budget : userBudget,
            neededBy : userDate
        }

        sendRequest(userRequestData)
    }
})


export const ServiceForm = () => {
    let html = `
    <div class="field">
        <label for="serviceDescription" class="label">Description</label>
        <input type="text" name="serviceDescription" class="input">
    </div>

    <div class="field">
        <label for="serviceAddress" class="label">Address</label>
        <input type="text" name="serviceAddress" class="input">
    </div>

    <div class="field">
        <label for="serviceBudget" class="label">Budget</label>
        <input type="number" name="serviceBudget" class="input">
    </div>

    <div class="field">
        <label for="serviceDate" class="label">Date needed</label>
        <input type="date" name="serviceDate" class="input">
    </div>

    <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

