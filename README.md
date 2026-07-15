# TP08 - Clon de Instagram con React Native y Expo

## Descripción

Este proyecto es un trabajo práctico universitario de una app móvil inspirada en Instagram, desarrollada con React Native y Expo. La aplicación permite visualizar un feed de publicaciones, explorar historias, ver el perfil de usuario y acceder al detalle de cada publicación. Para simular contenido dinámico, se consume la API pública The Cat API y se muestran imágenes de gatos en distintas pantallas.

El proyecto está pensado como una implementación de interfaz y navegación móvil, utilizando React Navigation, componentes reutilizables y manejo de estado con hooks.

## Tecnologías utilizadas

| Tecnología | Uso en el proyecto |
|---|---|
| React Native | Desarrollo de la interfaz móvil |
| Expo | Herramientas de desarrollo y ejecución de la app |
| React Navigation | Navegación entre pantallas y pestañas |
| Axios | Consumo de la API externa |
| JavaScript | Lógica del proyecto y componentes |
| FlatList | Renderizado de listas en feed, historias y grilla de perfil |
| React Hooks | Manejo de estado y efectos en pantallas y componentes |
| Expo StatusBar | Personalización del estado visual de la barra superior |

## Instalación

Para ejecutar este proyecto localmente, seguí estos pasos:

```bash
npm install
npx expo start
```

Una vez iniciado Expo, podés abrir la aplicación en un emulador o en tu dispositivo físico utilizando la app de Expo Go.

## Arquitectura del proyecto

La estructura principal del proyecto está organizada bajo la carpeta `src` de la siguiente manera:

```text
src/
├── components/
│   ├── feed/
│   │   ├── Feed.jsx
│   │   ├── PostCard.jsx
│   │   ├── Stories.jsx
│   │   └── Story.jsx
│   ├── layout/
│   │   └── Header.jsx
│   ├── profile/
│   │   ├── ProfileGrid.jsx
│   │   └── ProfileHeader.jsx
│   └── shared/
│       ├── Avatar.jsx
│       ├── ErrorMessage.jsx
│       └── LoaderMessage.jsx
├── data/
│   ├── fakeComments.js
│   └── userData.js
├── navigation/
│   └── AppNavigator.jsx
├── screens/
│   ├── DetailScreen.jsx
│   ├── HomeScreen.jsx
│   └── ProfileScreen.jsx
└── services/
    └── catApi.js
```

## Explicación de cada carpeta

### `components`
Contiene todos los componentes visuales reutilizables y de UI de la app. Aquí se encapsulan elementos como publicaciones, historias, encabezado, perfil y mensajes de carga/error.

### `screens`
Agrupa las pantallas principales de la aplicación: inicio, perfil y detalle de publicación. Cada pantalla se encarga de coordinar el estado y la renderización de la vista correspondiente.

### `navigation`
Define la estructura de navegación de la app mediante React Navigation. Incluye el stack principal y el bottom tab navigator.

### `services`
Contiene la lógica de acceso a servicios externos. En este proyecto, centraliza la comunicación con The Cat API.

### `data`
Guarda los datos estáticos usados por la aplicación, como comentarios falsos y datos del usuario de ejemplo.

## Explicación de todos los componentes

### `Feed`
Responsabilidad:
Renderiza la lista de publicaciones del feed utilizando `FlatList`.

Props:
- `posts`
- `navigation`

Por qué existe:
Permite separar la lógica de renderizado de la lista principal del contenido de cada publicación.

Renderiza:
- una lista vertical de tarjetas de publicación mediante `PostCard`

### `PostCard`
Responsabilidad:
Representa una publicación individual del feed.

Props:
- `post`
- `navigation`

Por qué existe:
Encapsula la UI de una publicación para reutilizarla dentro del feed.

Renderiza:
- avatar del usuario
- nombre de usuario
- ubicación
- imagen de la publicación
- botones de acción
- contador de likes
- caption

### `Stories`
Responsabilidad:
Muestra la barra horizontal de historias.

Props:
- `posts`

Por qué existe:
Separa la vista de historias del resto del feed para mantener el componente claro y modular.

Renderiza:
- una lista horizontal de historias mediante `Story`

### `Story`
Responsabilidad:
Representa una historia individual en la barra superior.

Props:
- `username`
- `image`

Por qué existe:
Permite mostrar cada historia con un estilo visual propio y consistente.

Renderiza:
- avatar circular con borde destacado
- nombre de usuario

### `Header`
Responsabilidad:
Muestra el encabezado superior de la pantalla de inicio.

Props:
- No recibe props

Por qué existe:
Proporciona una barra de navegación superior con estilo similar al de Instagram.

Renderiza:
- ícono de cámara
- logo de Instagram
- íconos de TV y mensaje

### `ProfileHeader`
Responsabilidad:
Muestra la información principal del perfil del usuario.

Props:
- `user`

Por qué existe:
Centraliza la presentación de datos del perfil para que la pantalla quede más limpia.

Renderiza:
- foto de perfil
- cantidad de publicaciones, seguidores y seguidos
- nombre
- biografía
- botón de edición de perfil

### `ProfileGrid`
Responsabilidad:
Muestra las publicaciones del usuario en una grilla de tres columnas.

Props:
- `posts`
- `navigation`

Por qué existe:
Permite presentar la vista de perfil con formato visual tipo Instagram.

Renderiza:
- una lista en grilla de imágenes
- cada imagen abre el detalle de la publicación al presionarla

### `Avatar`
Responsabilidad:
Renderiza una imagen de avatar con estilo circular y configurable.

Props:
- `image`
- `size`

Por qué existe:
Es un componente reutilizable para mostrar fotos de usuario o de publicaciones en distintas partes de la UI.

Renderiza:
- una imagen con dimensiones y borde redondeado

### `ErrorMessage`
Responsabilidad:
Muestra un mensaje de error cuando falla la carga de publicaciones.

Props:
- No recibe props

Por qué existe:
Proporciona una experiencia de usuario más clara en caso de problemas de red o de API.

Renderiza:
- título de error
- mensaje de recomendación para volver a intentar

### `LoaderMessage`
Responsabilidad:
Muestra un estado de carga mientras se obtienen los datos.

Props:
- No recibe props

Por qué existe:
Mejora la experiencia de carga y evita que la pantalla quede vacía durante la petición.

Renderiza:
- un indicador de carga circular
- texto de "Cargando publicaciones..."

## Explicación de cada pantalla

### `HomeScreen`
Responsabilidad:
Es la pantalla principal del feed. Carga las publicaciones desde la API y muestra el encabezado, historias y feed.

Funcionalidad:
- utiliza `useEffect` para cargar publicaciones al montar la pantalla
- llama a `getCats()` desde el servicio de API
- maneja estados de carga y error
- renderiza los componentes `Header`, `Stories` y `Feed`

### `ProfileScreen`
Responsabilidad:
Muestra el perfil del usuario con su información y sus publicaciones.

Funcionalidad:
- carga publicaciones para construir la grilla del perfil
- muestra `ProfileHeader` con los datos del usuario
- renderiza `ProfileGrid` con las imágenes del usuario
- maneja estados de carga y error

### `DetailScreen`
Responsabilidad:
Muestra el detalle completo de una publicación seleccionada.

Funcionalidad:
- recibe el objeto `post` por parámetro de navegación
- muestra la imagen, el usuario, la ubicación y la descripción
- presenta los comentarios cargados desde `fakeComments`
- permite alternar el estado de like para la publicación

## Navegación

La navegación del proyecto está implementada con React Navigation y sigue una estructura jerárquica simple:

```text
NavigationContainer
↓
Stack Navigator
↓
MainTabs (Bottom Tab Navigator)
```

### Arquitectura implementada

- `App.js` envuelve la app con `NavigationContainer` y `SafeAreaProvider`.
- `AppNavigator.jsx` define:
  - un `Stack.Navigator` con la pantalla principal `MainTabs`
  - una pantalla adicional llamada `Detail`
- `MainTabs` se implementa con `createBottomTabNavigator()` y contiene las pestañas:
  - `Home`
  - `Search`
  - `Add`
  - `Activity`
  - `Profile`

### Flujo de navegación

- La pantalla inicial es `HomeScreen` a través de la tab `Home`.
- Al tocar una publicación del feed, la navegación dirige a `Detail` pasando el objeto `post` como parámetro.
- Desde la tab `Profile`, el usuario accede a la vista de perfil.
- Las pestañas `Search`, `Add` y `Activity` reutilizan `HomeScreen` en esta implementación.

## Consumo de API

El proyecto consume la API pública The Cat API para obtener imágenes de gatos que se utilizan como contenido de las publicaciones.

### Implementación

- El servicio se encuentra en `src/services/catApi.js`.
- Se utiliza `axios` para realizar la petición.
- La petición se realiza hacia:

```js
https://api.thecatapi.com/v1/images/search?limit=9
```

### Flujo de consumo

1. `HomeScreen` y `ProfileScreen` invocan a `getCats()`.
2. El servicio realiza una request con `axios`.
3. Se espera la respuesta con `async/await`.
4. Los datos obtenidos se transforman en objetos de publicación con:
   - `id`
   - `image`
   - `username`
   - `location`
   - `caption`
   - `likes`

### ¿Por qué se usa `FlatList`?

`FlatList` se utiliza porque la aplicación renderiza listas de datos dinámicas: publicaciones, historias y grilla de perfil. Este componente es eficiente para mostrar contenido largo y permite scroll suave y rendimiento adecuado en React Native.

## Estados (Hooks)

El proyecto utiliza hooks de React para controlar el estado de la interfaz y la carga de datos.

### `HomeScreen`
Estados utilizados:
- `posts`: almacena las publicaciones obtenidas desde la API.
- `loading`: indica si la pantalla está cargando datos.
- `error`: permite mostrar un mensaje de error si la petición falla.

Función de cada estado:
- `posts` se usa para pasar los datos al componente `Stories` y al componente `Feed`.
- `loading` controla si se muestra `LoaderMessage` o el contenido de la pantalla.
- `error` controla si se muestra `ErrorMessage` en lugar del contenido principal.

### `ProfileScreen`
Estados utilizados:
- `posts`: contiene las publicaciones que se mostrarán en la grilla del perfil.
- `loading`: controla el estado de carga de la pantalla.
- `error`: muestra un mensaje de error si falla la petición.

Función de cada estado:
- `posts` se usa para renderizar `ProfileGrid`.
- `loading` evita mostrar contenido incompleto mientras llegan los datos.
- `error` permite informar al usuario de un problema en la carga.

### `DetailScreen`
Estados utilizados:
- `liked`: indica si la publicación fue marcada como favorita por el usuario.
- `likes`: guarda la cantidad actual de likes de la publicación.

Función de cada estado:
- `liked` cambia el icono de corazón y el estado visual de la publicación.
- `likes` actualiza el contador mostrado en pantalla.

## Componentes reutilizables

Los componentes reutilizables del proyecto son aquellos que pueden usarse en más de una parte de la interfaz:

- `Avatar`: se reutiliza para mostrar fotos de usuario y de historias.
- `LoaderMessage`: se usa en pantallas que esperan datos.
- `ErrorMessage`: se usa para manejar errores de carga de forma uniforme.

Su importancia radica en que permiten mantener un diseño coherente y reducir duplicación de código.

## Diseño

El diseño fue realizado tomando como referencia un mockup de Instagram obtenido en Figma.

### Diseño de referencia

Figma:
https://www.figma.com/community/file/874574625832268971

Capturas:
(Pegar aquí las imágenes del proyecto si se desea documentarlas)

## Requisitos de la consigna cumplidos

- [x] React Navigation
- [x] FlatList
- [x] Axios
- [x] Feed dinámico
- [x] Detalle de publicación
- [x] Perfil
- [x] Cuadrícula de 3 columnas
- [x] StatusBar
- [x] SplashScreen
- [x] Icono personalizado

## Conclusión

Este trabajo práctico permitió desarrollar una app móvil básica pero clara, con navegación entre pantallas, consumo de una API externa y estructura modular en React Native. La implementación demuestra el uso de componentes funcionales, hooks, navegación y renderizado de listas, manteniendo una organización simple y adecuada para un proyecto académico.