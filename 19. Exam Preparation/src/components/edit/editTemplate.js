import { html } from "lit-html";

export const editTemplate = (form) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form class="edit-form" @submit=${form.submit}>
        <input
            type="text"
            name="brand"
            id="shoe-brand"
            placeholder="Brand"
            .value=${form.brand} 
        />
        <input
            type="text"
            name="model"
            id="shoe-model"
            placeholder="Model"
            .value=${form.model} 
        />
        <input
            type="text"
            name="imageUrl"
            id="shoe-img"
            placeholder="Image url"
            .value=${form.imageUrl} 
        />
        <input
            type="text"
            name="release"
            id="shoe-release"
            placeholder="Release date"
            .value=${form.release} 
        />
        <input
            type="text"
            name="designer"
            id="shoe-designer"
            placeholder="Designer"
            .value=${form.designer} 
        />
        <input
            type="text"
            name="value"
            id="shoe-value"
            placeholder="Value"
            .value=${form.value} 
        />

        <button type="submit">post</button>
        </form>
    </div>
</section>`;