//nút play
const play = document.getElementById('play')
//nút pre song
const prev = document.getElementById('previous')
//nut next song
const nextBTN = document.getElementById('next')
//nút repeat
const repeatBTN = document.getElementById('repeat')
//nút shuffle
const shuffleBTN = document.getElementById('shuffle')
//lấy audio
const music = document.querySelector('#audio')
//playlist dưới footer
const player = document.getElementById('player')
// điều chỉnh nút play và pause
const ctrlIcon = document.getElementById('playCtrl')
//tên bài hát ở phần footer
const player_song_name = document.getElementById('player-song-name')
//tên ca sĩ ở phần footer
const player_artist_name = document.getElementById('player-artist-name')
//hình bài hát ở phần footer
const player_song_img = document.getElementById('player-song-img')
//nút resume pause ở phía trên 
const resume_pause = document.getElementById('resume-pause')
//thanh volume
const volumeControl = document.querySelector('.volume-control')
const volumePanel = document.querySelector('.volume-slider')
const volumeRange = volumePanel.querySelector('input')
const volumeProgress = volumePanel.querySelector('.volume-progress')
const volumeBTN = document.querySelector('.volume-btn')
//icon max volume
const maxVol = volumeBTN.querySelector('.fa-volume-high')
//icon half volume
const halfVol = volumeBTN.querySelector('.fa-volume-low')
//icon mute volume
const muteVol = volumeBTN.querySelector('.fa-volume-xmark')
//thanh thời lượng bài
const startTime = document.querySelector('#time-start')
const endTime = document.querySelector('#time-end')
const seekbar = document.getElementById('seekbar')
//nút download
const download = document.getElementById('download')
//song-stt
const songStt = document.querySelector('.song-stt')
const detailSong = document.querySelectorAll('.detail-song')
//sắp xếp 
const sortSong = document.getElementById('categories')
//Modal sign
const openSign = document.querySelector("[data-open-modal1]")
const closeSign = document.querySelector("[data-close-modal1]")
const modalSign = document.querySelector("[data-modal1]")
const overplaySign = document.querySelector("[data-overplay1]")
//Modal log
const openLog = document.querySelector("[data-open-modal]")
const closeLog = document.querySelector("[data-close-modal]")
const modalLog = document.querySelector("[data-modal]")
const overplayLog = document.querySelector("[data-overplay]")
//Modal User Playlist 
const showDialog = document.getElementById("user-list")
const listDia = document.getElementById("dialog-user-playlist")
const closeDialog = document.getElementById("closeDialog")
//Bật playlist của bản thân mình
const user_list = document.getElementById("user-list");
//Bảng song của playlist 
const albumSong = document.getElementById("albumSong");
//biến kiểm tra có đg phát nhạc hay không
let isPlaying = false;
//biến lưu thứ tự bài nhạc 
let songIndex = 0;
let songList = []
let playFlag = true;
//bài hát hiện tại
let currentSong = 0;


halfVol.style.display = 'none';
muteVol.style.display = 'none';

resume_pause.addEventListener('click', () => {
    if (playFlag) {
        playFlag = false;
        resume_pause.children[0].hidden = false;
        resume_pause.children[1].hidden = true;
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
        var newIndex = 0;
        do {
            newIndex = Math.floor(Math.random()*(songs.length+1))
            console.log(newIndex);
        }
        while (newIndex === songIndex)
        {
            songIndex = newIndex;
            loadSong(songs[newIndex]);
            playSong();
        }
    } 
    else{
        playFlag = true;
        resume_pause.children[0].hidden = true;
        resume_pause.children[1].hidden = false;
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
        music.pause();
    }
})
music.addEventListener('ended', () => {
    nextSong(songIndex++);
})

music.addEventListener('timeupdate', () => {
    newPercentage = music.currentTime/music.duration;
    seekbar.value = newPercentage * seekbar.max;
});

function loadSong(song_id){
    seekbar.value=0;
    music.src = song_id.song_src;
    player_song_name.textContent = song_id.song_name;
    player_artist_name.textContent = song_id.artist_name;
    player_song_img.src = song_id.song_img;
    currentSong = song_id;
    setTimeout(() => {
        endTime.innerHTML = formatTime(music.duration);
    },300);
}
function formatTime(time){
    let min = Math.floor(time / 60);
    if(min < 10)
        min = `0${min}`;
    let sec = Math.floor(time % 60);
    if(sec < 10)
        sec = `0${sec}`;
    return `${min}:${sec}`;
}
seekbar.onloadedmetadata = function(){
    seekbar.max = music.duration;
    seekbar.value = music.currentTime;
}
seekbar.onchange = function() {
    music.play();
    percentage = seekbar.value / seekbar.max;
    newTime = (percentage * music.duration);
    // console.log(seekbar.value/seekbar.value * 100 * music.duration)
    music.currentTime = newTime;

    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

function playSong(){
    isPlaying = true;
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
    resume_pause.children[0].hidden = false;
    resume_pause.children[1].hidden = true;
    music.play();
}
function pauseSong(){
    isPlaying = false;
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
    resume_pause.children[0].hidden = true;
    resume_pause.children[1].hidden = false;
    music.pause();
}
//addeventlistener function cho nút play pause
ctrlIcon.addEventListener('click', function(){
    return isPlaying ? pauseSong() : playSong();
});

//nút next song
function nextSong(){
    songIndex++;
    if(songIndex >= songs.length) 
        songIndex = 0;
    loadSong(songs[songIndex]);
    if(isPlaying){
        playSong();
    }
}
//nút prev song
function prevSong(){
    songIndex--;
    if(songIndex < 0)
        songIndex = songs.length - 1;
    loadSong(songs[songIndex]);
    if(isPlaying){
        playSong();
    }
}
//nút repeat song
repeatBTN.addEventListener('click',function(){
    if(repeat.classList.contains('active'))
    {
        repeatBTN.classList.remove('active');
        audio.loop = false;
        console.log("repeat off");
    }
    else{
        repeatBTN.classList.add('active');
        audio.loop = true;
        console.log("repeat on");
    }
})
//nút shuffle song ( phát ngẫu nhiên)
shuffleBTN.addEventListener('click',function(){
    var newIndex = 0;
    do {
        newIndex = Math.floor(Math.random()*(songs.length+1))
        console.log(newIndex);
    }
    while (newIndex === songIndex)
    {
        songIndex = newIndex;
        loadSong(songs[newIndex]);
        playSong();
    }
}); 

//download song
download.addEventListener('click',function(){
    var data = downSong[songIndex].song_src;
    const href = data;
    const nameDown = downSong[songIndex].song_name;
    const a = Object.assign(document.createElement("a"),{
        href,
        style: "display.none",
        download: `${nameDown}.mp4`
    })
    document.body.appendChild(a);
    a.click();
    a.remove();
});

//thanh âm lượng 
volumeRange.addEventListener('input', function(){
    volumeProgress.style.width = volumeRange.value + "%";
    music.volume = volumeRange.value / 100;
    if(volumeRange.value <=0)
    {
        maxVol.style.display = 'none';
        halfVol.style.display = 'none';
        muteVol.style.display = '';
    }
    else if (volumeRange.value <=50)
    {
        maxVol.style.display = 'none';
        halfVol.style.display = '';
        muteVol.style.display = 'none';
    }
    else if(volumeRange.value>50){
        maxVol.style.display = '';
        halfVol.style.display = 'none';
        muteVol.style.display = 'none';
    }
},false);

//Modal
openSign.addEventListener('click', function(){
    modalSign.classList.add('open');
    overplaySign.classList.add('open');
});
closeSign.addEventListener('click', function(){
    modalSign.classList.remove('open');
    overplaySign.classList.remove('open');
});
openLog.addEventListener('click', function(){
    modalLog.classList.add('open');
    overplayLog.classList.add('open');
});
closeLog.addEventListener('click', function(){
    modalLog.classList.remove('open');
    overplayLog.classList.remove('open');
});
showDialog.addEventListener('click', function(){
    listDia.showModal();
})
closeDialog.addEventListener('click', function(){
    listDia.close();
})

// function sortTable(){
//     var rows, switching, i, x, y, shouldSwitch;
//     switching = true;
//     while(switching)
//     {
//         switching = false;
//         rows = albumSong.rows;
//         for(i = 1; i < rows.length -1 ; i++){
//             shoulSwitch = false;
//             x = rows[i].getElementsByTagName("TD")[1];
//             y = rows[i + 1].getElementsByTagName("TD")[1];
//             if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
//                 shouldSwitch = true;
//                 break;
//             }
//         }
//     }
//     if(shouldSwitch)
//     {
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//     }
// }
var songs = [
    {
        "id":1,
        "song_name": "Nghe như tình yêu",
        "artist_name": "HIEUTHUHAI",
        "song_src":"./music/nghenhutinhyeu.mp3",
        "song_img": "./img/nghenhutinhyeu.jpg"
    },
    {
        "id":2,
        "song_name": "Không chỉ là thoáng qua",
        "artist_name": "wAvy, Vũ Thảo My",
        "song_src":"./music/khongchilathoangqua.mp4",
        "song_img": "./img/khongchilathoangqua.jpeg"
    },
    {
        "id":3,
        "song_name": "Giờ thì ai cười",
        "artist_name": "HIEUTHUHAI",
        "song_src":"./music/giothiaicuoi.mp3",
        "song_img": "./img/giothiaicuoi.jpg"
    },
    {
        "id":4,
        "song_name": "Vệ tinh",
        "artist_name": "HIEUTHUHAI, Hoàng Tôn, Kewtiie",
        "song_src":"./music/vetinh.mp3",
        "song_img": "./img/vetinh.jpg"
    },
    {
        "id":5,
        "song_name": "Bật Nhạc Lên",
        "artist_name": "HIEUTHUHAI, Harmonie",
        "song_src":"./music/batnhaclen.mp3",
        "song_img": "./img/batnhaclen.jpeg"
    },
    {
        "id":6,
        "song_name": "Cua",
        "artist_name": "HIEUTHUHAI, Manbo",
        "song_src":"./music/cua.mp3",
        "song_img": "./img/cua.jpg"
    },
    {
        "id":7,
        "song_name": "Một công đôi việc",
        "artist_name": "HURRYKNG, HIEUTHUHAI",
        "song_src":"./music/motcongdoiviec.mp3",
        "song_img": "./img/motcongdoiviec.jpg"
    },
    {
        "id":8,
        "song_name": "Không thể say",
        "artist_name": "HIEUTHUHAI",
        "song_src":"./music/khongthesay.mp3",
        "song_img": "./img/khongthesay.jpg"
    },
    {
        "id":9,
        "song_name": "LAVIAI",
        "artist_name": "HIEUTHUHAI, Wrxdie, 2PILLZ",
        "song_src":"./music/laviairemix.mp3",
        "song_img": "./img/laviai.jpg"
    },
    {
        "id":10,
        "song_name": "Xích thêm chút",
        "artist_name": "MCK, tlinh, RPT Groovie",
        "song_src":"./music/xichthemchut.mp3",
        "song_img": "./img/xichthemchut.jpg"
    },
    {
        "id":11,
        "song_name": "Mắt xanh",
        "artist_name": "Gill, tlinh, Kewtiie",
        "song_src":"./music/matxanh.mp3",
        "song_img": "./img/matxanh.jpg"
    },
    {
        "id":12,
        "song_name": "Đánh đổi",
        "artist_name": "Obito",
        "song_src":"./music/danhdoi.mp3",
        "song_img": "./img/danhdoi.jpg"
    },
    {
        "id":13,
        "song_name": "Nhi Nhúng Nhảy",
        "artist_name": "A Seng quán quân RapViet mùa 4",
        "song_src":"./music/sangvoicerapperso1vietnam.mp4",
        "song_img": "./img/aseng.jpg"
    }
]

var downSong = [
    {
        "song_name": "Nghe như tình yêu",
        "song_src":"https://github.com/dgeniust/audio-data/raw/main/nghenhutinhyeu.mp3"
    },
    {
        "song_name": "Không chỉ là thoáng qua",
        "song_src":"https://github.com/dgeniust/audio-data/raw/main/khongchilathoangqua.mp4"
    },
    {
        "song_name": "Giờ thì ai cười",
        "song_src":"https://github.com/dgeniust/audio-data/raw/main/giothiaicuoi.mp3"
    },
    {
        "song_name": "Vệ tinh",
        "song_src":"https://github.com/dgeniust/audio-data/raw/main/vetinh.mp3"
    },
    {
        "song_name": "Bật Nhạc Lên",
        "song_src":"https://github.com/dgeniust/audio-data/raw/main/batnhaclen.mp3"
    },
    {
        "song_name": "Cua",
        "song_src":"https://github.com/dgeniust/audio-data/raw/main/cua.mp3"
    },
    {
        "song_name": "Một công đôi việc",
        "song_src":"https://github.com/dgeniust/audio-data/raw/main/motcongdoiviec.mp3"
    },
    {
        "song_name": "Không thể say",
        "song_src":"https://github.com/dgeniust/audio-data/raw/main/khongthesay.mp3"
    },
    {
        "song_name": "LAVIAI",
        "song_src":"https://github.com/dgeniust/audio-data/raw/main/laviairemix.mp3"
    },
    {
        "song_name": "Xích thêm chút",
        "song_src":"https://github.com/dgeniust/audio-data/raw/main/xichthemchut.mp3"
    },
    {
        "song_name": "Mắt xanh",
        "song_src":"https://github.com/dgeniust/audio-data/raw/main/matxanh.mp3"
    },
    {
        "song_name": "Đánh đổi",
        "song_src":"https://github.com/dgeniust/audio-data/raw/main/danhdoi.mp3"
    },
]