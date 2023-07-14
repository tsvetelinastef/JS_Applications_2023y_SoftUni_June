import * as api from './api.js';

const endpoint = {
    'getAllIdeas': "data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
    'createIdea': "data/ideas",
    'ideaById': "data/ideas/",
}

export function getAllIdeas() {
    return api.get(endpoint.getAllIdeas);
}

export function createIdea(idea) {
    return api.post(endpoint.createIdea, idea);
}

export function ideaById (id) {
    return api.get(`${endpoint.ideaById}${id}`);
}

export async function deleteByIde(id) {
    return api.delete_(`${endpoint.ideaById}${id}`);
}
