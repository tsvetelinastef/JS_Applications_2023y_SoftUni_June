// `
// </from>
// </article>`;

export async function showEditPage(navigate, id) {
    _navigate = navigate;

    let result = await recipeService.getRecipeById(id);

    let template = editPageTemplate(result, editRecipe)
    return template;
}
