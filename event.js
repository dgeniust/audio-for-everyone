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
        songAdd.remove();
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
