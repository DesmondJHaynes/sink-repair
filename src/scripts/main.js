import { SinkRepair } from "./SinkRepair.js"
import { fetchPlumbers, fetchRequests } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("stateChanged", e => render())
// if your anonymous function doesn't take in an argument, then you can either leave it as blank parentheses or you could type a param as see above

const render = () => {
    fetchRequests()
    .then(()=> fetchPlumbers())
    .then(() => mainContainer.innerHTML = SinkRepair())
}

render()



//line 2: logically it makes sense to fetch your data needed for a functioning app before render

// line 9-10: calling our fetchRequest and then using the .then() method to force the rest of the rend to wait on the fetch data, so that the page would work properly
