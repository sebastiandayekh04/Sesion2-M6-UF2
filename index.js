import { header } from "./componentes/header.js";
import { menu } from "./componentes/menu.js"
import { home } from "./vistas/home.js";
import { about } from "./vistas/about.js";
console.log("Cargando");
console.log(app())

function app(){
    return `  
    ${header()}
    <div id="vistas"></div>
    `
}

document.querySelector('#root').innerHTML = app();

//document.querySelector('#vistas').innerHTML = home();


function navegar(){
    if (pagina == 'home'){
        document.querySelector('#vistas').innerHTML = home();
    } else if (pagina == 'about'){
        document.querySelector('#vistas').innerHTML = about();
    }
}

document.querySelector('#btn-home').addEventListener('click', function(){
    navegar('home')
});
//cargar por defecto home
//navegar(home);