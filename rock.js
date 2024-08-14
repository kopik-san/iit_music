let audio = document.getElementById("myAudio");
let currentSong = 0;
let songs = [
    {
        path: "src/song1.mp3", name: "гибралтар-лабрадор-Вячеслав Бутусов", icon: "src/song1.jpg" },
    { path: "src/song2.mp3", name: "its my life - Bon Jovi", icon: "src/song2.jpg" },
    { path: "src/song3.mp3", name: "Paint It, Black - The Rolling Stones", icon: "src/song3.jfif" },
    { path: "src/song4.mp3", name: "варвара - би 2", icon: "src/song4.jfif" },
    { path: "src/song5.mp3", name: "Кончится лето - Виктор цой", icon: "src/song5.jpg" },
    { path: "src/song6.mp3", name: "In The End - Linkin Park ", icon: "src/song6.jpeg" },
    { path: "src/song7.mp3", name: "I'm So Sorry - Imagine Dragons ", icon: "src/song7.jpg" },
    { path: "src/song8.mp3", name: "утренний рассвет - король и шут", icon: "src/song8.jfif" },
    { path: "src/song9.mp3", name: "районы-кварталы - звери", icon: "src/song9.jpg" },
    { path: "src/song10.mp3", name: "Elvis Presley – A Little Less Conversation", icon: "src/song10.jpg" }
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
    currentSongElement.textContent = `Вы в разделе рок, сейчас играет: ${songs[currentSong].name}`;
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