import {showDetails} from './details.js'

const section = document.getElementById("homeView");
const main = document.getElementsByTagName("main")[0];
const form = document.querySelector("#homeView form");
//console.log("beforeRendering");
form.addEventListener("submit", onSubmit);
const url = "http://localhost:3030/jsonstore/collections/myboard/posts";

section.remove();

export async function showHome(){
   const topiContainer = section.querySelector(".topic-title");

   const posts = await loadPost();
   const content = Object.values(posts).map(x=> topicTemplate(x));
   topiContainer.replaceChildren(...content);
   main.replaceChildren(section);
}

function topicTemplate(data) {
   // debugger
   const container = document.createElement("div");
   container.classList.add("topic-container");
   container.innerHTML = `
   
   `
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