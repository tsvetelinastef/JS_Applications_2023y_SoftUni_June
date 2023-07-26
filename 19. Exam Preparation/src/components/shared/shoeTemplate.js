import { html } from "../../../node_modules/lit-html/lit-html.js";

export const shoeTemplate = (shoe, shouldShow) => html`
<li class="card">
    <img src=${shoe.imageUrl} alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${shoe.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    ${ shouldShow
        ? html`<a class="details-btn" href=${`/details/${shoe._id}`}>Details</a>`
        : ''
    }
    
</li>`; 