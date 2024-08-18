const audioElements = [
    new Audio('src/music/MoonRiver.mp3'),
    new Audio('src/music/PrecisoMeEncontrar.mp3'),
    new Audio('src/music/exFactor.mp3'),
    new Audio('src/music/wassup.mp3'),
    new Audio('src/music/baby.mp3'),
    new Audio('src/music/she.mp3'),
    new Audio('src/music/530.mp3'),
    new Audio('src/music/ShikiNoUta.mp3'),
    new Audio('src/music/PrantodePoeta.mp3'),
    new Audio('src/music/wiseman.mp3')
];

const playButtons = Array.from(document.querySelectorAll('[id^=songCover]'));
let isPlaying = false;
let currentAudio = null;

function toggleAudio(index) {
    if (isPlaying && currentAudio === audioElements[index]) {
        audioElements[index].pause();
        isPlaying = false;
        currentAudio = null;
    } else {
        pauseAll();
        audioElements[index].play();
        isPlaying = true;
        currentAudio = audioElements[index];
    }
    modal();
}

function pauseAll() {
    audioElements.forEach(audio => audio.pause());
    isPlaying = false;
}

playButtons.forEach((button, index) => { // Adds an event listener to the song covers
    button.addEventListener("click", () => toggleAudio(index));
});



