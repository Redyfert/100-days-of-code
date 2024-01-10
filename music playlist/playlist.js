const allSongs = [
    {
        id:1,
        title: "Skorpioni",
        artist: "Marko Percovic",
        duration: "4:28",
        src:"D:\Developing\HTML; CSS\js тренировачка гоп-гоп\music playlist\assets\Thompson-Skorpioni.mp3"
    },
    {
        id:2,
        title:"The Sea of Thieves",
        artist: "Robin Beanland",
        duration:"2:25",
        src:"D:\Developing\HTML; CSS\js тренировачка гоп-гоп\music playlist\assets\The Sea of Thieves.mp3"
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
    audio.src=song.src;
    audio.title=song.title;
    if(userData?.currentSong=null||userData?.currentSong.id!==song.id){
        audio.currentTime = 0;
    }else{
        currentSongDuration = audio.currentTime;
    }
audio.play()
}
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", play);

const stop = (id)=>{
    userData?.currentSongDuration = audio.currentTime;
    audio.pause()
}
const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click",stop);
const currentSongIndex = getCurrentIndex();
const next = () =>{
const nextSongIndex = userData?.songs(currentSongIndex+1)
play(nextSongIndex.id);
}
const getCurrentIndex = ()=>{
    userData?.songs.indexOf(userData?.currentSong)
}
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click",next)
const previous = () =>{
    const previousSongIndex = userData?.songs(currentSongIndex-1);
    play(previousSongIndex.id)
}
const previousButton = document.getElementById("previousButton");
previousButton.addEventListener("click", previous);
const shuffle = () =>{
    userData?.songs.sort(()=> Math.random()-0.5)
    userData?.currentSong = null;
    userData?.currentSongDuration = 0;
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
