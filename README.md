<div align="center">
    <h1>José Oscátegui</h1>
    <sub>Construido con 🔥︎ por
      <a href="https://coderboype.com">coderboype.com</a>
    </sub>
</div>

---

# ColorCodes

## Introducción
Este proyecto se inicio pensando en la facilidad que podríamos
ofrecerle al equipo de trabajo de poder compartir los colores que se usan
frecuentemente para los distintos proyectos que se realizan y realizaran. 

## Construido con
* HTML - Para ordenar el contenido
* Less - Un preprocesador de CSS
    - Se uso el método [BEM](http://getbem.com/naming/) para los nombres de los estilos. 
* Ant Design - Un framework CSS 
* React.js - Una librería JavaScript
* Axios - Para realizar consultas a la API

## Arquitectura del proyecto
    .
    ├── src
        ├── components        # Se estructuro con la metodología Atomic Design
            ├── layout        # En este archivo se encuentra la base de todas las páginas 
            ├── molecules     
            └── organisms
        ├── images
        ├── pages
        .
        .
        .
[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

## Iniciar proyecto
1. Situarse dentro dentro del proyecto
2. Instalar las dependencias corriendo el siguiente comando en la terminal `yarn install` o `npm install`
3. Ejecutar el siguiente comando `yarn start` o `npm run start`
4. El proyecto estará corriendo el puerto `3000` por default 

## Demo
[Ver demo](https://github.com/JOsktgui)

1. Elige un color
2. Haz click sobre el color que elegiste
3. Y listo!, el color esta en copiado

Terminaste!

