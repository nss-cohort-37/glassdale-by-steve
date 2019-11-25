import { saveNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")


const NoteFormComponent = () => {

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {
            const newNote = {
                noteText: document.querySelector("#note-text").value,
                criminal: document.querySelector("#note-criminal").value,
                timestamp: Date.now()
            }

            // Change API state and application state
            saveNote(newNote)

            // Broadcast to rest of system that application state has changed
            const noteCreatedEvent = new CustomEvent("noteCreated")
            eventHub.dispatchEvent(noteCreatedEvent)
        }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <div class="note__field">
                Note: <input type="text" id="note-text" />
            </div>
            <div class="note__field">
                Criminal: <input type="text" id="note-criminal" />
            </div>
            <button class="note__field" id="saveNote">Save Note</button>
        `
    }

    render()
}

export default NoteFormComponent
