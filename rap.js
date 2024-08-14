let audio = document.getElementById("myAudio");
let currentSong = 0;
let songs = [
    {
        path: "src/song31.mp3", name: "without me - eminem", icon: "src/song31.jpg" },
    { path: "src/song32.mp3", name: "In da club - 50cent", icon: "src/song32.jpeg" },
    { path: "src/song33.mp3", name: "X Gon' Give It To Ya - DMX", icon: "src/song33.jpg" },
    {path: "src/song34.mp3", name: "Tokyo Drift - Teriyaki Boyz", icon: "src/song34.jpg" },
    { path: "src/song35.mp3", name: "still DRE - Dr.Dre", icon: "src/song35.jpg" },
    { path: "src/song36.mp3", name: "Gangsta's Paradise - Coolio ", icon: "src/song36.jpg" },
    { path: "src/song37.mp3", name: "sad! - Xxxtentacion", icon: "src/song37.jpg" },
    { path: "src/song38.mp3", name: "Rockstar - Post Malone feat. 21 Savage", icon: "src/song38.jpeg" },
    { path: "src/song39.mp3", name: "get back - ludacris", icon: "src/song39.jpg" },
    { path: "src/song40.mp3", name: "U can t touch this - MC Hammer", icon: "src/song40.jpeg" }
];
let playlist = document.getElementById("playlist");
let currentSongElement = document.getElementById("current-song");

function playPrev() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    updateCurrentSong();
    audio.src = songs[currentSong].path;
    audio.play();
}

function playNext() {
    currentSong++;
    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    updateCurrentSong();
    audio.src = songs[currentSong].path;
    audio.play();
}
function addSong() {
    let newSongPath = prompt("Введите путь к новой песне (например, src/song2.mp3):");
    let newSongName = prompt("Введите название новой песни:");
    let newSongIcon = prompt("Введите путь к изображению (например, src/song2.jpg):");
    if (newSongPath && newSongName && newSongIcon) {
        songs.push({ path: newSongPath, name: newSongName, icon: newSongIcon });
        let newListItem = document.createElement("li");
        let songIcon = document.createElement("img");
        songIcon.classList.add("song-icon");
        songIcon.src = newSongIcon;
        let songName = document.createElement("span");
        songName.classList.add("song-name");
        songName.textContent = newSongName;
        newListItem.dataset.song = newSongPath;
        newListItem.appendChild(songIcon);
        newListItem.appendChild(songName);
        newListItem.addEventListener("click", playSong);
        playlist.appendChild(newListItem);
    }
}

function playSong(event) {
    currentSong = songs.findIndex(song => song.path === event.target.dataset.song);
    updateCurrentSong();
    audio.src = event.target.dataset.song;
    audio.play();
}

function updateCurrentSong() {
    currentSongElement.textContent = `Вы в разделе рэп, сейчас играет: ${songs[currentSong].name}`;
}

// Заполняем плейлист изначально
songs.forEach(song => {
    let newListItem = document.createElement("li");
    let songIcon = document.createElement("img");
    songIcon.classList.add("song-icon");
    songIcon.src = song.icon;
    let songName = document.createElement("span");
    songName.classList.add("song-name");
    songName.textContent = song.name;
    newListItem.dataset.song = song.path;
    newListItem.appendChild(songIcon);
    newListItem.appendChild(songName);
    newListItem.addEventListener("click", playSong);
    playlist.appendChild(newListItem);
});

// Изначально ставим первую песню в плеер
audio.src = songs[currentSong].path;
audio.play();
updateCurrentSong();