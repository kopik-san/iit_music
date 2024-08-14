let audio = document.getElementById("myAudio");
let currentSong = 0;
let songs = [
    {
        path: "src/song21.mp3", name: "Черепашка - натали", icon: "src/song21.jpg" },
    { path: "src/song22.mp3", name: "фаина - на - на", icon: "src/song22.jpg" },
    { path: "src/song23.mp3", name: "эти глаза напротив - Валерий Ободзинский", icon: "src/song23.jpeg" },
    { path: "src/song24.mp3", name: "зеленоглазое такси - Михаил Боярский", icon: "src/song24.jpeg" },
    { path: "src/song25.mp3", name: "Gimme! Gimme! Gimme! - ABBA", icon: "src/song25.jpg" },
    { path: "src/song26.mp3", name: "Лондон, гуд бай - Кар-мэн ", icon: "src/song26.jpg" },
    { path: "src/song27.mp3", name: "самолетик - Валерий Курас", icon: "src/song27.jpeg" },
    { path: "src/song28.mp3", name: "Rasputin - Boney.M", icon: "src/song28.jpg" },
    { path: "src/song29.mp3", name: "дорога в облака - браво", icon: "src/song29.jpg" },
    { path: "src/song30.mp3", name: "coco Jambo - Mr.President", icon: "src/song30.jpeg" }
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
    currentSongElement.textContent = `Вы в разделе поп музыки, сейчас играет: ${songs[currentSong].name}`;
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