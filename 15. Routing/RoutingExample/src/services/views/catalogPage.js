// import { showCatlog } from "./catalogPage.js";
// import { createElement } from "../util.js"; 
import * as recipeService from '../services/recipeService.js';
import { html } from "../../node_modules/lit-html/lit-html.js";

let allRecipePreviewsTemplate = (recipes, toggleCard) => html`
<section id="catalog">
    ${recipes.map(r => r.ingredients === undefined
        ? recipePreviewsTemplate(r, toggleCard)
        : recipeCardTemplate(r)
    )}
</section>`;

let recipePreviewsTemplate = (recipe, toggleCard) => html`
<article class="preview" @click=${() => toggleCard(recipe._id)}>
    <div class="title">
        <h2>${recipe.name}</h2>
    </div>
    <div class="small">
</article>`;

// Add 