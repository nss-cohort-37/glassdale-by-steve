import { useConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

eventHub.addEventListener(
    "change",
    changeEvent => {
        if (changeEvent.target.id === "crimeSelect") {
            eventHub.dispatchEvent(new CustomEvent("crimeSelected", {
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