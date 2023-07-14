import { createIdea } from '../api/data.js';

const section = document.getElementById("createView");
const form = section.querySelector("from");

form.addEventListener("submit", onSubmit)

let ctx = null;
export function showCreate(context) {
    ctx = context;
    context.showSection(section);
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const { tile, description, imageURL } = Object.fromEntries(formData);
    await createIdea({tile, description, img: imageURL});
    form.reset();
    ctx.goTo('/catalog')
}
