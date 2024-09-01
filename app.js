let textBox=document.querySelector(".text-box");
let btn=document.querySelector("button");
let voices=[];
let voiceSelection=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices =window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voices,i)=>(voiceSelection.options[i]=new Option(voices.name,i))
    );
};

voiceSelection.addEventListener("change",()=>{
   speech.voice=voices[ voiceSelection.value]
});


 let speech= new SpeechSynthesisUtterance();

 document.querySelector("button").addEventListener("click",()=>{
     speech.text=document.querySelector("textarea").value;
     window.speechSynthesis.speak(speech);
 });