import { useOfficers } from "./OfficerProvider.js"

const EventTarget = document.querySelector(".container")
const DOMTarget = document.querySelector(".filters__officer")

EventTarget.addEventListener(
    "change",
    changeEvent => {
        if (changeEvent.target.id === "officerSelect") {
            EventTarget.dispatchEvent(new CustomEvent("filter.criminals.officer", {
                detail: {
                    officerName: changeEvent.target.value
                }
            }))
        }
    }
)

const OfficerSelect = () => {
    const officers = useOfficers()

    const render = criminals => {
        DOMTarget.innerHTML = `
            <select class="dropdown" id="officerSelect">
                <option value="0">Please select an officer...</option>
                ${officers.map(currentOfficer => {
                return `<option value="${currentOfficer}">${currentOfficer}</option>`
            })}
            </select>
        `
    }

    render(officers)
}

export default OfficerSelect