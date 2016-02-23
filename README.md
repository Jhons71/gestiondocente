# Gestion Docente

Repositorio para almacenar el código fuente del proyecto de práctica aplicada del 20161, Politécnico Grancolombiano. El objetivo del proyecto es la construcción de un software que permita la administración de docentes.


## ¿Cómo descargar este repositorio?

Para correr este proyecto localmente debes **[clonarlo](https://help.github.com/desktop/guides/contributing/cloning-a-repository-from-github-desktop/#cloning-repositories)** y configurarlo.

1. Instalar cliente Git https://desktop.github.com/ ó usar Git desde la consola https://git-scm.com/
2. Clonar este repositorio usando [GitHub Desltop](https://desktop.github.com/) ó desde la consola.

## Creación de la base de datos

Para tener una copia de la base de datos, debes correr este comando en el terminal:

```bash
sqlcmd -S .\SQLExpress -i BaseDeDatosV0.1.sql
```

## ¿Como establecer tu nombre de usuario en Git?

GitHub ofrece muchas opciones de colaboración a los miembros de cada repositorio, es por esto que es importante que establezcas tu nombre y correo en Git de tal manera que los commits que hagas se relacionen con tu usuario en GitHub.

Para establecer tu nombre y correo en Git, abre la termanial y escribe:

```bash
git config --global user.name "Tu nombre"
git config --global user.email tu-correo-en-github@mail.com
```

Despues de esto, tus commits se relacionarán con tu usuario en GitHub.


## Mensajes de commit

* Si es necesario, puedes añadir el ID de la historia de usuario en el commit. E.G:
`MA-1 Added something...` or the Sentry issue number `#123 Fixes bug...`

* También puedes usar Emojis para iniciar los mensajes de commit.
    * :lollipop: `:lollipop:` cuando se mejora la estructura del código.
    * :art: `:art:` cuando se realizan cambios visuales.
    * :bug: `:bug:` cuando se corrigen errores.
    * :memo: `:memo:` cuando se escribe documentación.
    * :fire: `:fire:` cuando se elimina codigo que no se usa.
    * :sunny: `:sunny:` cuando se realiza una mejora en general.
    * :white_check_mark: `:white_check_mark:` cuando se trabaja con pruebas unitarias.


## Flujo de trabajo

En este proyecto usamos tres tipos de ramas(branches):

* **Production branch**: `master`, represents the production environment, what's shown in the live app.
* **Feature branches**: E.G: `MA-1`, `MA-9`, `GP-19` etc. These branches represent a feature related with a specific User story.


Para empezar a trabajar en una nueva historia de usuario debes:

```bash
# Start at the development branch.
git checkout dev

# Get latest changes.
git pull origin dev

# Move to a branch with the name of the user story.
git go <user story id E.G: MA-18>

# Add changes.

# Commit changes.
g ca

# Push changes and create pull request.
g push

# Go back to `dev` and pull again.
git checkout ...
```
