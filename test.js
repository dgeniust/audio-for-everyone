let usersSong = []
let card;
function renderSongList(usersList, users) 
{
    usersSong = users.map(function(user){
        // console.log(user);
        //Tạo card 
        card = document.createElement("tr");
        card.classList.add("song-add-left");
        //stt 
        const stt = document.createElement("td");
        const number = document.createElement("p");
        number.classList.add("stt");
        number.innerText = user.song_stt;
        stt.classList.add("song-stt");
        stt.appendChild(number);
        //my_btn
        const divBTN = document.createElement("div");
        const myBTN = document.createElement("button");
        myBTN.classList.add("my-btn");
        const imgBTN = document.createElement("i");
        imgBTN.classList.add("bi-play-circle-fill");
        myBTN.appendChild(imgBTN);
        divBTN.appendChild(myBTN);
        stt.appendChild(divBTN);
        //song-title
        const title = document.createElement("td");
        title.classList.add("song-title")
        const image = document.createElement("div");
        image.classList.add("song-image");
        const imgSong = document.createElement("img");
        imgSong.src = user.song_image;
        image.appendChild(imgSong);

        const info = document.createElement("div");
        info.classList.add("song-name-artist");
        const name = document.createElement("div");
        name.classList.add("song-name");
        name.innerHTML = user.song_name;
        const artist = document.createElement("div");
        artist.classList.add("song-artist");
        artist.innerHTML = user.song_artist;
        info.appendChild(name);
        info.appendChild(artist);

        title.appendChild(image);
        title.appendChild(info);
        //song_album
        const album = document.createElement('td');
        album.classList.add('song-album');
        album.innerHTML = user.song_album;
        //song-view
        const view = document.createElement('td');
        view.classList.add('song-view');
        view.innerHTML = user.song_view;
        //song-duration 
        const duration = document.createElement('td');
        duration.classList.add('song-duration');
        duration.innerHTML = user.song_durations;

        card.appendChild(stt);
        card.appendChild(title);
        card.appendChild(album);
        card.appendChild(view);
        card.appendChild(duration);

        // console.log(card);

        usersList.appendChild(card);
    })
}
const titleSort = document.getElementById('title');
const albumSort = document.getElementById('sort-album');
const idSort = document.getElementById('sort-id');
let users;
const usersList = document.getElementById('users-list').children[0];
let sortable = [];
async function layDuLieu(){
    const response = await fetch("https://raw.githubusercontent.com/dgeniust/audio-data/main/data.json?token=GHSAT0AAAAAACKN3NCYW7WKVL4G4TSMO65EZK5XVIQ");
    users = await response.json();
    usersSong = users.map(function(user){
        // console.log(user);
        //Tạo card 
        card = document.createElement("tr");
        card.classList.add("song-add-left");
        //stt 
        const stt = document.createElement("td");
        const number = document.createElement("p");
        number.classList.add("stt");
        number.innerText = user.song_stt;
        stt.classList.add("song-stt");
        stt.appendChild(number);
        //my_btn
        const divBTN = document.createElement("div");
        const myBTN = document.createElement("button");
        myBTN.classList.add("my-btn");
        const imgBTN = document.createElement("i");
        imgBTN.classList.add("bi-play-circle-fill");
        myBTN.appendChild(imgBTN);
        divBTN.appendChild(myBTN);
        stt.appendChild(divBTN);
        //song-title
        const title = document.createElement("td");
        title.classList.add("song-title")
        const image = document.createElement("div");
        image.classList.add("song-image");
        const imgSong = document.createElement("img");
        imgSong.src = user.song_image;
        image.appendChild(imgSong);

        const info = document.createElement("div");
        info.classList.add("song-name-artist");
        const name = document.createElement("div");
        name.classList.add("song-name");
        name.innerHTML = user.song_name;
        const artist = document.createElement("div");
        artist.classList.add("song-artist");
        artist.innerHTML = user.song_artist;
        info.appendChild(name);
        info.appendChild(artist);

        title.appendChild(image);
        title.appendChild(info);
        //song_album
        const album = document.createElement('td');
        album.classList.add('song-album');
        album.innerHTML = user.song_album;
        //song-view
        const view = document.createElement('td');
        view.classList.add('song-view');
        view.innerHTML = user.song_view;
        //song-duration 
        const duration = document.createElement('td');
        duration.classList.add('song-duration');
        duration.innerHTML = user.song_durations;

        card.appendChild(stt);
        card.appendChild(title);
        card.appendChild(album);
        card.appendChild(view);
        card.appendChild(duration);
        usersList.appendChild(card);

    })
}

layDuLieu();


const draggables = document.body.getElementsByClassName('.song-add-left');
console.log(draggables.children);