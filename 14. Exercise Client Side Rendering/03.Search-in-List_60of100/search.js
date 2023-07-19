import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';


const searchTemplate = (towns, match) => html`
<article>
         <div id="towns">
            <ul>
               ${towns.map( t => itemTemplate(t, match))};
            </ul>
         </div>
         <input type="text" id="searchText" />
         <button @click =${search}>Search</button>
         <div id="result">${countMatches(towns, match)}</div>
</article>
`

const itemTemplate = (name, match) => html`
   <li class = ${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${name} </li>
`

const main = document.body;
update();

function update(match = '') {
   const result = searchTemplate(towns, match);
   render(result, main)
}


function search() {
   const match = document.getElementById('searchText').value;
   update(match);
}

function countMatches(towns, match) {
   const matches = towns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())).length; 
  // console.log(matches); // returns the array, so that's why on the previous line we need .length , because we want the number of it, not the names of the towns
   return `${matches} matches found`;  //  return matches ? `${matches} matches found` : '';

//    or it can allso be written like:
//    const matches = towns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())); 
//    return `${matches.length} matches found`; 

}


// how to comment HTML multiple lines in VSC
//  1. Select all line you want comments.
//  2. CTRL + /