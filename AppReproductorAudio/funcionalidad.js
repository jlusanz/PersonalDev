//CANCIONES
const tracks = [
    { title: "Pista 1", src: "musica/audio1.mp3", cover: "portada/cover1.jpg" },
    { title: "Pista 2", src: "musica/audio2.mp3", cover: "portada/cover2.jpg" },
    { title: "Pista 3", src: "musica/audio3.mp3", cover: "portada/cover3.jpg" }
];

//INICIALIZAMOS AUDIO
let currentIndex = 0;
let isPlaying = false;
let audio = new Audio(tracks[currentIndex].src);  
const albumCover = document.getElementById("album-cover");
const currentTrackText = document.getElementById("current-track");

//FUNCION PARA REPRODUCIR UNA CANCION Y ACTUALIZAR LA PORTADA
function playTrack(index) {
    currentIndex = index;
    audio.src = tracks[currentIndex].src; 
    albumCover.src = tracks[currentIndex].cover; 
    currentTrackText.innerText = "Pista actual: " + tracks[currentIndex].title;  
    audio.play();  
    isPlaying = true;  
}

//FUNCION REPRODUCCIR Y PAUSAR LA CANCION
function playPause() {
    if (isPlaying) {
        audio.pause();  
        isPlaying = false;
    } else {
        audio.play();  
        isPlaying = true;
    }
}

//FUNCION PARA DETENER Y REINICAR LA CANCION
function stopTrack() {
    audio.pause();  
    isPlaying = false;  
}

//FUNCION PARA REPRODUCIR LA CANCION ANTERIOR
function previousTrack() {
    currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    playTrack(currentIndex);
}

//FUNCION PARA REPRODUCIR LA SIGUIENTE CANCION
function nextTrack() {
    currentIndex = (currentIndex + 1) % tracks.length;
    playTrack(currentIndex);
}

//FUNCION PARA REPRODUCIR UNA CANCION ALEATORIA 
function shuffleTrack() {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    playTrack(randomIndex);
}

// SIRVE PARA CANMBIAR DE CANCION UNA VEZ ACABA LA CANCION AUTOMATICAMENTE
audio.addEventListener("ended", () => {
    nextTrack(); 
});
