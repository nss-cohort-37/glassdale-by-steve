import { useCrimes } from "./ConvictionProvider.js"

const EventTarget = document.querySelector(".container")
const DOMTarget = document.querySelector(".filters__crime")

EventTarget.addEventListener(
    "change",
    changeEvent => {
        if (changeEvent.target.id === "crimeSelect") {
            EventTarget.dispatchEvent(new CustomEvent("filter.criminals.crime", {
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
        DOMTarget.innerHTML = `
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