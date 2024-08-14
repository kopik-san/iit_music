let audio = document.getElementById("myAudio");
let currentSong = 0;
let songs = [
    {
        path: "src/song11.mp3", name: "Fight back - Adakain", icon: "src/song11.jpg" },
    { path: "src/song12.mp3", name: "links 2 3 4 - Rammstein", icon: "src/song12.jpg" },
    { path: "src/song13.mp3", name: "Улица роз - Ария", icon: "src/song13.jpg" },
    { path: "src/song14.mp3", name: "Fake it - Seether", icon: "src/song14.jfif" },
    { path: "src/song15.mp3", name: "Master of puppets - metallica", icon: "src/song15.jpeg" },
    { path: "src/song16.mp3", name: "mother Russia - iron maiden ", icon: "src/song16.jpg" },
    { path: "src/song17.mp3", name: "wash it all away - FFDP", icon: "src/song17.jpg" },
    { path: "src/song18.mp3", name: "Warriors Of The World United - manowar", icon: "src/song18.jpeg" },
    { path: "src/song19.mp3", name: "highway to hell - AC/DC", icon: "src/song19.jpg" },
    { path: "src/song20.mp3", name: "Dream Evil – The Chosen Ones", icon: "src/song20.jpeg" }
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
    currentSongElement.textContent = `Вы в разделе метал, сейчас играет: ${songs[currentSong].name}`;
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