import { html, render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const allCats = document.getElementById('allCats');

allCats.addEventListener('click', toggle);

const cardTemplate = (data) => html`
<ul>

        <li>
                <img src="./images/cat100.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id="100">
                        <h4>Status Code: 100</h4>
                        <p>Continue</p>
                    </div>
                </div>
            </li>

</ul>
`




cats.forEach(c => console.log(c));
update();

function update() {
    const result = cardTemplate(cats);
    render(result, allCats); // we send result to continer allcats


}

function toggle() {
    console.log('test');

}