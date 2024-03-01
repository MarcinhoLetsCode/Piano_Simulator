const pianoKeys = document.querySelectorAll(".piano-keys .key")
// console.log(pianoKeys);

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
};

pianoKeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click",()=> playTune(key.dataset.key));
    //key.addEventListener("click",()=> console.log(key.dataset.key));
});
