import { NOTE_PATHS } from './notes.mjs';

export function playNote(note) {
    var audio = new Audio(NOTE_PATHS[note]);
    audio.play();
}