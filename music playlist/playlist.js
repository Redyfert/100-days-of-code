const allSongs = [
    {
        id:1,
        title: "Skorpioni",
        artist: "Marko Percovic",
        duration: "4:28",
        src:".\assets\Thompson-Skorpioni.mp3",
        imgsrc:"https://i.scdn.co/image/ab67616d0000b27384dd875c0dc476a8e03c75aa"
    },
    {
        id:2,
        title:"The Sea of Thieves",
        artist: "Robin Beanland",
        duration:"2:25",
        src:".\assets\The Sea of Thieves.mp3",
        imgsrc:"https://upload.wikimedia.org/wikipedia/en/7/77/Sea_of_thieves_cover_art.jpg"
    }
];
const audio = new Audio();
const userData = {
songs: [...allSongs],
currentSong:null,
currentSongDuration:0,

}
const play = (id)=>{
    const song = userData?.songs.find((song) => song.id===id);
    audio.url=song.src;
    audio.title=song.title;
    if(userData?.currentSong===null||userData?.currentSong.id!==song.id){
        audio.currentTime = 0;
    }else{
        currentSongDuration = audio.currentTime;
    }
    userData.currentSong = song;
    currentSongImgChange()
audio.play()
}
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", () => {
    if (userData?.currentSong === null) {
    play(userData?.songs[0].id);
  } else {
    play(userData?.currentSong.id);
  }});

const stop = ()=>{
    userData.currentSongDuration = audio.currentTime;
    audio.pause()
}
const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click",stop);
const currentSongIndex = getCurrentIndex();
const next = () =>{
const nextSongIndex = userData?.songs(currentSongIndex+1)
play(nextSongIndex.id);
currentSongImgChange(nextSongIndex.id)
}
const getCurrentIndex = ()=>{
    userData?.songs.indexOf(userData?.currentSong)
}
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click",next)
const previous = () =>{
    const previousSongIndex = userData?.songs(currentSongIndex-1);
    play(previousSongIndex.id)
    currentSongImgChange(userData.currentSong.id)
}
const previousButton = document.getElementById("previousButton");
previousButton.addEventListener("click", previous);
const shuffle = () =>{
    userData?.songs.sort(()=> Math.random()-0.5)
    userData.currentSong = null;
    userData.currentSongDuration = 0;
    renderSongs(userData?.songs)
    stop()
}
const shuffleButton = document.getElementById("shuffleButton");
shuffleButton.addEventListener("click",shuffle);
const renderSongs = (array)=>{
    songs=array.map((song) => {
        return `<li></li>`
    })
};
const currentSongImg = document.getElementById("songCurrentImg");
const currentSongImgChange = (id)=>{
    const song = userData?.songs.find((song) => song.id===id);
    currentSongImg.src = song.imgsrc
}
const buttonSpan = document.querySelectorAll("buttonSpanElement");
buttonSpan.addEventListener("click", play)