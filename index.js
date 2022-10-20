import { playNote } from "./playNote.mjs";
import { NOTES, NOTE_BY_KEYBOARD_KEY } from "./notes.mjs";

function renderKeys() {
    const pianoElement = document.getElementById("piano");
    pianoElement.replaceChildren([]);

    NOTES.forEach(note => {
        const keyElement = document.createElement('div');
        keyElement.id = note.key;
        keyElement.className = note.type === "normal" ? "key" : "key-sharp";
        keyElement.onclick = () => playNote(note.key);
        pianoElement.appendChild(keyElement);
    })
}

function playWithKeyboard() {
    window.addEventListener('keydown', (event) => {
        const keyElement = document.getElementById(NOTE_BY_KEYBOARD_KEY[event.key])
        keyElement.click();
    })
}

renderKeys();
playWithKeyboard();
