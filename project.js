//nút play
const playBTN = document.getElementById('play')
//nút pre song
const prevBTN = document.getElementById('previous')
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
const detailSong = document.querySelector('.detail-song')
let isPlaying = false;
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
console.log(music.currentTime)
music.addEventListener('ended', () => {
    nextSong(songIndex++);
})

music.addEventListener('timeupdate', () => {
    newPercentage = music.currentTime/music.duration;
    seekbar.value = newPercentage * seekbar.max;
});

const loadSong = function(song_id){
    seekbar.value=0;
    music.src = song_id.song_src;
    player_song_name.textContent = song_id.song_name;
    player_artist_name.textContent = song_id.artist_name;
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
    console.log(currentSong)
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
    console.log(currentSong)
    if(songIndex < 0)
        songIndex = songs.length - 1;
    loadSong(songs[songIndex]);
    if(isPlaying){
        playSong();
    }
}
//nút repeat song
repeatBTN.addEventListener('click',function(){
    if(repeatBTN.classList.contains('active'))
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
volumeRange.addEventListener('input', function(e){
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

//chuyển đổi song stt thành nút play (cho đẹp)
detailSong.addEventListener('mouseover', function(){

})



var songs = [
    {
        "id":1,
        "song_name": "Nghe như tình yêu",
        "artist_name": "HIEUTHUHAI",
        "song_src":"./music/nghenhutinhyeu.mp3"
    },
    {
        "id":2,
        "song_name": "Không chỉ là thoáng qua",
        "artist_name": "wAvy x Vũ Thảo My",
        "song_src":"./music/khongchilathoangqua.mp4"
    },
    {
        "id":3,
        "song_name": "Giờ thì ai cười",
        "artist_name": "HIEUTHUHAI",
        "song_src":"./music/giothiaicuoi.mp3"
    },
    {
        "id":4,
        "song_name": "Vệ tinh",
        "artist_name": "HIEUTHUHAI, Hoàng Tôn, Kewtiie",
        "song_src":"./music/vetinh.mp3"
    },
    {
        "id":5,
        "song_name": "Bật Nhạc Lên",
        "artist_name": "HIEUTHUHAI, Harmonie",
        "song_src":"./music/batnhaclen.mp3"
    },
    {
        "id":6,
        "song_name": "Cua",
        "artist_name": "HIEUTHUHAI, Manbo",
        "song_src":"./music/cua.mp3"
    },
    {
        "id":7,
        "song_name": "Một công đôi việc",
        "artist_name": "HURRYKNG, HIEUTHUHAI",
        "song_src":"./music/motcongdoiviec.mp3"
    },
    {
        "id":8,
        "song_name": "Không thể say",
        "artist_name": "HIEUTHUHAI",
        "song_src":"./music/khongthesay.mp3"
    }
]

var downSong = [
    {
        "song_name": "Nghe như tình yêu",
        "song_src":"https://github.com/dgeniust/music/raw/main/music-src/nghenhutinhyeu.mp3"
    },
    {
        "song_name": "Không chỉ là thoáng qua",
        "song_src":"https://github.com/dgeniust/music/raw/main/music-src/khongchilathoangqua.mp4"
    },
    {
        "song_name": "Giờ thì ai cười",
        "song_src":"https://github.com/dgeniust/music/raw/main/music-src/giothiaicuoi.mp3"
    },
    {
        "song_name": "Vệ tinh",
        "song_src":"https://github.com/dgeniust/music/raw/main/music-src/vetinh.mp3"
    },
    {
        "song_name": "Bật Nhạc Lên",
        "song_src":"https://github.com/dgeniust/music/raw/main/music-src/batnhaclen.mp3"
    },
    {
        "song_name": "Cua",
        "song_src":"https://github.com/dgeniust/music/raw/main/music-src/cua.mp3"
    },
    {
        "song_name": "Một công đôi việc",
        "song_src":"https://github.com/dgeniust/music/raw/main/music-src/motcongdoiviec.mp3"
    },
    {
        "song_name": "Không thể say",
        "song_src":"https://github.com/dgeniust/music/raw/main/music-src/khongthesay.mp3"
    }
]