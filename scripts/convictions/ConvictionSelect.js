import { getCriminalsByCrime } from "../criminal/CriminalProvider.js"
import CriminalList from "../criminal/CriminalList.js"


let criminalContainer = document.querySelector(".container")

document.querySelector(".container").addEventListener(
    "change",
    (event) => {
        if (event.target.id === "crimeSelect" && event.target.value !== 0) {
            const filteredCriminals = getCriminalsByCrime(event.target.value)
            CriminalList(filteredCriminals)
        }
    }
)

const ConvictionSelect = (crimes) => {
    criminalContainer.innerHTML += `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${crimes.map(currentCrime =>{
                return `<option>${currentCrime.name}</option>`
            })}
        </select>
    `
}

export default ConvictionSelect