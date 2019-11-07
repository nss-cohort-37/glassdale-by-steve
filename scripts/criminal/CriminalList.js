import {useCriminals} from "./CriminalProvider.js"
import Criminal from "./Criminal.js"

let criminalContainer = document.querySelector(".container")

const CriminalList = (criminals) => {

    const criminalDOMList = document.querySelector(".criminals")
    if (criminalDOMList !== null) {
        criminalDOMList.remove()
    }

    criminalContainer.innerHTML += `
        <article class="criminals">
            ${
                criminals.map(currentCriminalObject => {
                    const criminalHTML =  Criminal(currentCriminalObject)
                    return criminalHTML
                }).join("")
            }
        </article>
    `
}

export default CriminalList