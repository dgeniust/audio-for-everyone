const addPlaylist = document.getElementById('addPlaylist');

addPlaylist.addEventListener('click', function() {
    const songAdd = listDia.querySelector('.storage-fav');
    // fav-song
    const addedSong = document.createElement('div');
    addedSong.classList.add('fav-song');
    addedSong.setAttribute('id', 'fav-song');
    console.log(addedSong);
    //fav-song-img
    const imgAdded = document.createElement('div');
    imgAdded.classList.add('fav-song-img');

    const imgSrc = document.createElement('img');
    imgSrc.src = songs[songIndex].song_img;
    imgAdded.appendChild(imgSrc);
    //fav-song-info
    const info = document.createElement('div');
    info.classList.add('fav-song-info');
    
    //fav-song-name-and-artist
    const nameAdded = document.createElement('div');
    nameAdded.classList.add('fav-song-name');
    const textName = document.createTextNode(songs[songIndex].song_name);
    nameAdded.appendChild(textName);
    const artistAdded = document.createElement('div');
    artistAdded.classList.add('fav-song-artist');
    const textArtist = document.createTextNode(songs[songIndex].artist_name);
    artistAdded.appendChild(textArtist);
    //fav-song-src-mp3/mp4
    const songSrc = document.createElement('audio');
    songSrc.setAttribute('id','audio');
    songSrc.src = songs[songIndex].song_src;
    //minus-btn
    const minusBTN = document.createElement('button');
    minusBTN.classList.add('minusBTN');
    minusBTN.addEventListener('click',function() {
        songAdd.children[0].remove();
    })
    const minusImg = document.createElement('i');
    minusImg.classList.add('bi-dash-circle');
    minusBTN.appendChild(minusImg);
    //play-fav-btn
    const playFavBTN = document.createElement('button');
    playFavBTN.classList.add('play-fav-song');
    const playFavImg = document.createElement('i');
    playFavImg.classList.add('gg-play-button-o');
    console.log(playFavBTN);
    playFavBTN.appendChild(playFavImg);
    info.appendChild(nameAdded);
    info.appendChild(artistAdded);

    
    addedSong.appendChild(playFavBTN);
    addedSong.appendChild(imgAdded);
    addedSong.appendChild(info);
    addedSong.appendChild(minusBTN);

    // console.log(addedSong);

    songAdd.appendChild(addedSong);
})

const playFavSong = document.getElementById('fav-song');
playFavSong.addEventListener('dblclick', function(){
    music.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
})

// const leftSongAdded = document.querySelector('.song-add-left');
// const stt = document.querySelector('.stt');
// const likedSong = document.querySelector('.bi-play-circle-fill');

// likedSong.style.display = 'none';


// leftSongAdded.addEventListener('mouseover', function(){
//     stt.style.display = 'none';
//     likedSong.style.display = '';
// })
// leftSongAdded.addEventListener('mouseout', function(){
//     stt.style.display = '';
//     likedSong.style.display = 'none';
// })
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
const usersList = document.getElementById('users-list');
let sortable = [];
async function layDuLieu(){
    const response = await fetch("https://raw.githubusercontent.com/dgeniust/audio-data/main/data.json?token=GHSAT0AAAAAACKN3NCZNIUABX2L2456IT4MZKYGQRA");
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
const searchInput = document.getElementById('searching');
searchInput.addEventListener('input', function(e) {
    const value = e.target.value.toLowerCase();
    console.log(value)
    usersList.innerHTML = "";
    const filtered = users.filter(user => {
        const isVisible = user.song_name.toLowerCase().includes(value.toLowerCase()) || user.song_artist.toLowerCase().includes(value.toLowerCase())
        return isVisible
    })
    renderSongList(usersList,filtered);
})

titleSort.addEventListener('click', function(){
    usersList.innerHTML ="";
    const sorted = users.sort((a, b) => {
        const nameA = a.song_name.toUpperCase();
        const nameB = b.song_name.toUpperCase();
        if(nameA < nameB)
            return -1;
        if(nameA > nameB)
            return 1;
        return 0;
    })
    renderSongList(usersList, sorted);
    console.log(sorted)
})
albumSort.addEventListener('click', function(){
    usersList.innerHTML ="";
    const sorted = users.sort((a, b) => {
        const nameA = a.song_album.toUpperCase();
        const nameB = b.song_album.toUpperCase();
        if(nameA < nameB)
            return -1;
        if(nameA > nameB)
            return 1;
        return 0;
    })
    renderSongList(usersList, sorted);
    console.log(sorted)
})
idSort.addEventListener('click', function(){
    usersList.innerHTML ="";
    const sorted = users.sort((a, b) => 
        a.song_stt - b.song_stt
    );
    renderSongList(usersList, sorted);
    console.log(sorted)
})