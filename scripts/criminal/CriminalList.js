import { useCriminals, getCriminalsByOfficer } from "./CriminalProvider.js"
import { getCriminalsByCrime } from "./CriminalProvider.js"
import Criminal from "./Criminal.js"

const EventTarget = document.querySelector(".container")
const DOMTarget = document.querySelector(".criminalsContainer")

const CriminalList = () => {
    // Load the application state to be used by this component
    const appStateCriminals = useCriminals()

    // What should happen when detective clicks on a crime in the <select> element?
    EventTarget.addEventListener('filter.criminals.crime', event => {
        if ("crimeId" in event.detail) {
            if (event.detail.crimeId === "0") {
                render(appStateCriminals)
            } else {
                const filteredCriminals = getCriminalsByCrime(event.detail.crimeId)
                render(filteredCriminals)
            }
        }
    })

    // What should happen when detective clicks on a crime in the <select> element?
    EventTarget.addEventListener('filter.criminals.officer', event => {
        if ("officerName" in event.detail) {
            const filteredCriminals = getCriminalsByOfficer(event.detail.officerName)
            render(filteredCriminals)
        }
    })

    // Function that handles rendering of the HTML representation of the application state
    const render = criminals => {
        DOMTarget.innerHTML = `
            <article class="criminalComponent">
                <div class="criminals">
                    ${
                        criminals.map(currentCriminalObject => {
                            const criminalHTML = Criminal(currentCriminalObject)
                            return criminalHTML
                        }).join("")
                    }
                </div>
            </article>
        `
    }

    render(appStateCriminals)
}

export default CriminalList
