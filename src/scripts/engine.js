const pianoKeys = document.querySelectorAll(".piano-keys .key");
//console.log(pianoKeys);
const volumeSlider = document.querySelector(".volume-slider input");
//console.log(volumeSlider);
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("./src/tunes/");
//console.log(audio);

const playTune = (key) => {
    //console.log(audio.src+key+".wav");
    //console.log(key);
    //let audio = new Audio("./src/tunes/"+key+".wav");
    //console.log(audio);

    audio.src = `src/tunes/${key}.wav`;
    //console.log(audio);
    //audio.src = ("./src/tunes/"+key+".wav");
    audio.play();

    //console.log(key);
    //console.log(`[data-key="${key}"]`);
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=> {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key)=>{
    //console.log(key.dataset.key);
    key.addEventListener("click",()=> playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
    //key.addEventListener("click",()=> console.log(key.dataset.key));
    
    //mapedKeys.length === 17 ? console.log(mapedKeys) : null;

    //console.log(mapedKeys);
});

document.addEventListener("keydown",(e) => {
    //console.log(e);
    //console.log(e.key);

    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
    
});

const handleVolume = (e)=>{
    //var volumeLevel = (parseFloat(e.target.value).toFixed(2));
    //console.log(volumeLevel);
    //console.log(e.target.value);

    audio.volume = e.target.value
    console.log(parseInt((e.target.value)*100));

}

const showHideKeys = () =>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handleVolume)

keysCheck.addEventListener("click", showHideKeys)
