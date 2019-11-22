import { useOfficers } from "./OfficerProvider.js"

const eventTarget = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

eventTarget.addEventListener(
    "change",
    changeEvent => {
        if (changeEvent.target.id === "officerSelect") {
            eventTarget.dispatchEvent(new CustomEvent("officerSelected", {
                detail: {
                    officerName: changeEvent.target.value
                }
            }))
        }
    }
)

const OfficerSelect = () => {
    const officers = useOfficers()

    // const render = officerCollection => {
    //     contentTarget.innerHTML = `
    //         <select class="dropdown" id="officerSelect">
    //             <option value="0">Please select an officer...</option>
    //             ${officerCollection.map(currentOfficer => {
    //             return `<option value="${currentOfficer}">${currentOfficer}</option>`
    //         })}
    //         </select>
    //     `
    // }

    // render(officers)
}

export default OfficerSelect