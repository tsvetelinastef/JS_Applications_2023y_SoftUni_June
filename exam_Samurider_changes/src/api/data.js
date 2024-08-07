
import { del, get, post, put } from "./api.js";

const endpoints = {
  motors: "/data/motorcycles",
  getAllMotors: "/data/motorcycles?sortBy=_createdOn%20desc",
  edit: "/data/motorcycles/",
  search: "/data/albums?where=name",
  delete: "/data/motorcycles/",
  
};


export async function getById(id) {
  return get(endpoints.motors + "/" + id);
}


export async function editMotor(id, motorData) {
  return put(endpoints.edit + id, motorData);
}


export async function getAllMotors() {
  return get(endpoints.getAllMotors);
}


export async function createMotor(data) {
  return post(endpoints.motors, data);
}


export async function deleteById(id) {
  return del(endpoints.delete + id);
}


export async function searchAlbum(query) {
  return get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
}

