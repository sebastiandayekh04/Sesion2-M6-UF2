import { menu } from "./menu.js"

export function header(){
    return `
    <h1> Soy el header </h1>
    ${menu()}
    `
}