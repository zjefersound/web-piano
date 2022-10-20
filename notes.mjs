export const NOTES = [
    { key: "C5", type: "normal", path: "/notes/C5.mp3", keyboardKey: 'z' },
    { key: "Db5", type: "sharp", path: "/notes/Db5.mp3", keyboardKey: 's' },
    { key: "D5", type: "normal", path: "/notes/D5.mp3", keyboardKey: 'x' },
    { key: "Eb5", type: "sharp", path: "/notes/Eb5.mp3", keyboardKey: 'd' },
    { key: "E5", type: "normal", path: "/notes/E5.mp3", keyboardKey: 'c' },
    { key: "F5", type: "normal", path: "/notes/F5.mp3", keyboardKey: 'v' },
    { key: "Gb5", type: "sharp", path: "/notes/Gb5.mp3", keyboardKey: 'g' },
    { key: "G5", type: "normal", path: "/notes/G5.mp3", keyboardKey: 'b' },
    { key: "Ab5", type: "sharp", path: "/notes/Ab5.mp3", keyboardKey: 'h' },
    { key: "A5", type: "normal", path: "/notes/A5.mp3", keyboardKey: 'n' },
    { key: "Bb5", type: "sharp", path: "/notes/Bb5.mp3", keyboardKey: 'j' },
    { key: "B5", type: "normal", path: "/notes/B5.mp3", keyboardKey: 'm' },
    { key: "C6", type: "normal", path: "/notes/C5.mp3", keyboardKey: 'z' },
    { key: "Db6", type: "sharp", path: "/notes/Db5.mp3", keyboardKey: 's' },
    { key: "D6", type: "normal", path: "/notes/D5.mp3", keyboardKey: 'x' },
    { key: "Eb6", type: "sharp", path: "/notes/Eb5.mp3", keyboardKey: 'd' },
    { key: "E6", type: "normal", path: "/notes/E5.mp3", keyboardKey: 'c' },
    { key: "F6", type: "normal", path: "/notes/F5.mp3", keyboardKey: 'v' },
    { key: "Gb6", type: "sharp", path: "/notes/Gb5.mp3", keyboardKey: 'g' },
    { key: "G6", type: "normal", path: "/notes/G5.mp3", keyboardKey: 'b' },
    { key: "Ab6", type: "sharp", path: "/notes/Ab5.mp3", keyboardKey: 'h' },
    { key: "A6", type: "normal", path: "/notes/A5.mp3", keyboardKey: 'n' },
    { key: "Bb6", type: "sharp", path: "/notes/Bb5.mp3", keyboardKey: 'j' },
    { key: "B6", type: "normal", path: "/notes/B5.mp3", keyboardKey: 'm' },
];
Object.freeze(NOTES);

export const NOTE_PATHS = NOTES.reduce((obj, note) => ({ ...obj, [note.key]: note.path }), {});
Object.freeze(NOTE_PATHS);

export const NOTE_BY_KEYBOARD_KEY = NOTES.reduce((obj, note) => ({ ...obj, [note.keyboardKey]: note.key }), {});
console.log(NOTE_BY_KEYBOARD_KEY);
Object.freeze(NOTE_BY_KEYBOARD_KEY);
