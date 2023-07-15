// import { html, render } from '../node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', getTowns);

// const listTemplate = (data) => html `
// <ul>
//     ${data.map(town => html `<li>${town}</li>`)}
// </ul>`;

function getTowns(event) {
    // console.log('I'm here);
    event.preventDefault();

    // if(document.getElementById('towns).value !== '') { }
    const root = document.getElementById('root');
    const towns = document.getElementById('towns').value.split(', ');

    const ul = documents.createElement('ul');
    // console.log(towns);

    towns.map(el => {
        let li = `<li>${el}</li>`; // document.createElement('li');
        // li.textContent = el;
        // ul.appendChild(li);
        ul.innerHTML += li;
    });
    root.appendChild(ul);

    // const result = listTemplate(towns);
    // render(result, root);

    document.getElementById('towns').value = '';
    console.log(towns);
}
