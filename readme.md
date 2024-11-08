# Sesion Anuario
//hacer sesion 1 de nuevo para examen el martes de este tema (montar una spa)
1. Creamos carpeta del proyecto dos con el readme
2. Inicializamos con el nmp init
3. creamos la libreria con npm install lite-server
4. creanos el .gitignore
5. creamos el index.html e index.js
6. escribimos el "dev": "lite-server" dentro del packcage abajo del test
7. lazamos el servidor remoto con __npm run dev__
8. en index.html ->  <div class="root"></div>
9. en idex.js -> function app(){
                        return `  
                        <h1>App</h1>
                        `
                    }
10. se crea la carpeta src y ahi se crea componentes (con header y lo que haya que importar) y vistas(que normalmente sera para mostrar como si fuera otra pagina), ademas de guardar los index ahi                     
11. cuando creamos el script del js en el html hay un nuevo atributo al lado del src para importar y exportar, __type:module__ (<script src="index.js" type="module"></script> )
12. Hacemos la vista home, los divs que tienen clases em el contenido html del js igual funcionan como direccion por lo que si se guarda document.querySelector('#vistas').innerHTML se puede inyectar la funcion = home();
13. que el menu carge las vistas, y funcionen los botones