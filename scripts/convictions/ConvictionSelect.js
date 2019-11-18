import { useCrimes } from "./ConvictionProvider.js"

const eventTarget = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

eventTarget.addEventListener(
    "change",
    changeEvent => {
        if (changeEvent.target.id === "crimeSelect") {
            eventTarget.dispatchEvent(new CustomEvent("filter.criminals.crime", {
                detail: {
                    crimeId: changeEvent.target.value
                }
            }))
        }
    }
)

const ConvictionSelect = () => {
    const crimes = useCrimes()

    const render = criminals => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${crimes.map(currentCrime => {
                return `<option value="${currentCrime}">${currentCrime}</option>`
            })}
            </select>
        `
    }

    render(crimes)
}

export default ConvictionSelect