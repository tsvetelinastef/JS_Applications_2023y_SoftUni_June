import {showDetails} from './details.js'

const section = document.getElementById("homeView");
// section.remove();
const main = document.getElementsByTagName("main")[0];
const form = document.querySelector("#homeView form");
console.log("beforeRendering");
 // form.addEventListener("submit", onSubmit);

export function showHome(){
   console.log("showHome")
   main.replaceChild(section);
   // debugger
}

function onSubmit(e){
   console.log("submit")
}

function topicTemplate(data){
   debugger
   const container = document.createElement("div");
   container.classList.add("topic-container");
   container.innerHTML = `
   <div clas="topic-name-wrapper" id="${data._id}">
       <div class="topic-name">
       <a href="#" class="normal">
            <h2>${data.topicName}</h2>
      </a>
      <div class="columns">
         <div>
            <p>Date: <time>${data.date}</time></p>
            <div class="nick-name">
               <p>Username: <span>${data.username}</span></p>
            </div>
         </div>
         </div>
      </div>`;


}

showDetails()