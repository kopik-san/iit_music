let audio = document.getElementById("myAudio");
let currentSong = 0;
let songs = [
    {
        path: "src/song41.mp3", name: "в лунном сиянии - Евгения Смольянинова", icon: "src/song41.jpg" },
    {
        path: "src/song42.mp3", name: "Клён ты мой опавший - Николай Сличенко", icon: "src/song42.jpeg" },
    { path: "src/song43.mp3", name: "У церкви стояла карета - Олег Погудин", icon: "src/song43.jpg" },
    { path: "src/song44.mp3", name: "письмо к матери - Клавдия Шульженко", icon: "src/song44.jpeg" },
    { path: "src/song45.mp3", name: "Колечко - Виктор Берковский", icon: "src/song45.jpeg" },
    { path: "src/song46.mp3", name: "я встретил вас - Иван Козловский ", icon: "src/song46.jpeg" },
    { path: "src/song47.mp3", name: "Утро туманное - Сергей Захаров", icon: "src/song47.jpeg" },
    { path: "src/song48.mp3", name: "Я помню чудное мгновенье - Сергей Лемешев", icon: "src/song48.jpeg" },
    { path: "src/song49.mp3", name: "На заре ты её не буди - Николай Тимченко ", icon: "src/song49.jpg" },
    { path: "src/song50.mp3", name: "Колыбельная в бурю - Сергей Лемешев", icon: "src/song48.jpeg" }
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
    currentSongElement.textContent = `Вы в разделе романсы, сейчас играет: ${songs[currentSong].name}`;
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
