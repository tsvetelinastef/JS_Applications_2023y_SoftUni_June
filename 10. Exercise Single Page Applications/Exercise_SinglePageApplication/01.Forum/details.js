import { showHome } from "./home.js";
import { createElements } from "./untils.js";

const homeAnchorElement = document.querySelector('a');
homeAnchorElement.addEventListener('click', showHome);


function fetchPost() {
    const postId = localStorage.getItem('postId')
    loadPost(postId);
}

fetchPost()

async function loadPost(postId) {
    let formElement = document.querySelector('form');
    formElement.setAttribute('dataset.id', postId)

    try {
        const res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`);

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message);
        } 
        const post = await res.json();
        const themeContentDivElement = document.querySelector('.theme-content');
        themeContentDivElement.replaceChildren();

        const themeTitleDivElement = createElements('div', '', themeContentDivElement, {
            'class': 'theme-title',
        })
        const themeNameWrapperDivElement = createElements('div', '', themeTitleDivElement, {
            'class': 'theme-name-wrapper'
        })
        const themeNameDivElement = createElements('div', '', themeNameWrapperDivElement, {
            'class': 'theme-name'
        })
        createElements('h2', post.title, themeNameDivElement, {})

    } catch (error) {

    }
}