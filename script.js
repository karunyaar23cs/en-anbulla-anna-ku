const screens = ["welcome","birthday","memories","letter","ending"];
function showScreen(id){
  screens.forEach(screenId => document.getElementById(screenId).classList.toggle("hidden",screenId!==id));
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="birthday" || id==="ending") burstHearts();
}
document.getElementById("openBtn").addEventListener("click",()=>showScreen("birthday"));
document.getElementById("memoriesBtn").addEventListener("click",()=>showScreen("memories"));
document.getElementById("letterBtn").addEventListener("click",()=>showScreen("letter"));
document.getElementById("toLetterBtn").addEventListener("click",()=>showScreen("letter"));
document.getElementById("finalBtn").addEventListener("click",()=>showScreen("ending"));
document.getElementById("replayBtn").addEventListener("click",()=>showScreen("welcome"));

function burstHearts(){
  const holder=document.getElementById("floatingHearts");
  const symbols=["♡","♥","✿","💕"];
  for(let i=0;i<18;i++){
    const heart=document.createElement("span");
    heart.className="float-heart";
    heart.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(14+Math.random()*20)+"px";
    heart.style.animationDelay=(Math.random()*1.5)+"s";
    holder.appendChild(heart);
    setTimeout(()=>heart.remove(),7500);
  }
}

document.getElementById("songBtn").addEventListener("click",()=>showScreen("song"));
document.getElementById("songToLetterBtn").addEventListener("click",()=>showScreen("letter"));
document.getElementById("playSongBtn").addEventListener("click",()=>{
  document.getElementById("youtubePlayer").classList.remove("hidden");
  document.getElementById("youtubePlayer").scrollIntoView({behavior:"smooth",block:"center"});
  document.getElementById("playSongBtn").textContent="Song player opened ♡";
});
