# Teoria

## React Router Dom

Clase 9 - Routing y navegación
Organicemos nuestra app
La facilidad con la que nuestra aplicación permite agregar funcionalidades y navegarlas es un factor clave en términos de experiencia y escalabilidad.

La buena navegabilidad permite a…
Users: entender dónde están parados y guardar favs/marcadores a secciones en las que tienen interés
Navegadores: Permitir controlar las acciones de ir adelante y volver, y conocer el nav history
Crawlers: Entender la estructura de la app y proveer acceso optimizado/visibilizado a las distintas secciones


# Organizando la app

- Paso a paso
- Inicio
- Búsqueda
- Detalle
- Confirmación
- Fin

# React router

## Instalación

Por defecto, React no viene con un mecanismo integrado de navegación.

Esto es para mantener sus dependencias al mínimo y dado que no todo proyecto necesita routing, se maneja como una dependencia aparte.

Hay varias soluciones, pero hoy instalaremos: react-router-dom

### Versión react router

Si bien instalaremos react-router-dom publicado en NPM, veremos varias versiones:

- react-router => librería core (no instalar).
- react-router-dom => para routing en el browser.
- react-router-native => para routing en react-native.
Y algunas otras...

## Configurar nuestra app con el router

### Importar

Una vez instalado, importaremos el módulo desde react-router-dom:

Agregar la funcionalidad a toda la app

Una vez realizado el import necesitamos configurar dos cosas:

Wrappear (envolver) la aplicación en un BrowserRouter
Crear un Routes (donde proyectaremos las vistas navegadas)
Crear los Route’s de las distintas navegaciones con sus componentes asociados



# Especificidad de match

Por defecto se matchean (coinciden) únicamente partes de la url, por lo tanto ‘/’ va a matchear ‘/cart’ o ‘/checkout’, a no ser que le digamos que use la propiedad exact:



# Navegar a una ruta

Ahora que tenemos todo configurado, podemos importar un link perteneciente a react-router-dom, en cualquier componente del sub-árbol del <BrowserRouter>,

Usarlo para que al clickear, el BrowserRouter renderice ese Route que habíamos declarado dentro del Switch.


# Navegar a una ruta (con parámetros)

Si hacemos la ruta dinámica (con parámetros), podremos navegarla idénticamente, pero de manera dinámica.



Navegar a una ruta - navlink

¿Notaron que cambiamos el Link por un NavLink?

Un NavLink es un link con un estilo, está siempre detectando la ruta actual, y si coincide con la suya nos activa la clase que le demos para que el user sepa qué item de la lista corresponde con la vista actual.


Recibir parámetros por ruta

React router provee integración con Hooks.useParams:
Lo podemos utilizar para leer en js los parámetros de la ruta.
En combinación con un useEffect, nos sirve para obtener actualizaciones sobre los parámetros.



