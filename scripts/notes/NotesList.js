import { getNotes, useNotes } from "./NoteProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

const NoteListComponent = () => {

    eventHub.addEventListener("showNoteButtonClicked", event => {
        const allTheNotes = useNotes()
        render(allTheNotes)
    })

    const render = (notesCollection) => {
        contentTarget.innerHTML = notesCollection.map(
            (individualNote) => {
                return `
                    <section class="note">
                        <div>${individualNote.suspect}</div>
                        <div>${individualNote.text}</div>
                        <div>${individualNote.date}</div>
                    </section>
                `
            }
        ).join("")
    }

}

export default NoteListComponent