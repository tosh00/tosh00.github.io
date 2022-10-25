const player = document.querySelector('bp-player');

player.setIntroTime(10)

player.setSkipCallback(()=>{
    player.setURL('./src/assets/video.mp4')
    player.setSkipCallback()
})