import { useConvictions } from "./ConvictionProvider.js"

const eventTarget = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

eventTarget.addEventListener(
    "change",
    changeEvent => {
        if (changeEvent.target.id === "crimeSelect") {
            eventTarget.dispatchEvent(new CustomEvent("crimeSelected", {
                detail: {
                    crimeId: changeEvent.target.value
                }
            }))
        }
    }
)

const ConvictionSelect = () => {
    const convictions = useConvictions()

    const render = convictionsCollection => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(currentCrime => {
                        return `<option value="${currentCrime}">${currentCrime}</option>`
                    })
                }
            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect