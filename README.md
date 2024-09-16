# PokeApi Vue 3 + Vite

El proceso de desarrollo fue el siguiente:

[1] - Se creó el proyecto y se dividieron las funcionalidades solicitadas en componentes individuales: lista, modal, bienvenida, y carga.

[2] - Se organizó el desarrollo en diferentes ramas: una para cada funcionalidad y otra para refactorizaciones.

[3] - Se configuró el router con las vistas necesarias.

[4] - Se desarrollaron los primeros componentes y vistas, descomponiéndolos gradualmente para crear componentes reutilizables, con el objetivo de mejorar la escalabilidad del proyecto.

[5] - Se creó un servicio para consumir la API de la que provienen los datos, el mismo utiliza axios pensando en la escalabilidad del proyecto, por si hubiera que manejar otras peticiones a futuro.

[5] - Se utilizó Vuex para el manejo del estado y las actualizaciones en tiempo real de la aplicación, y se implementó LocalStorage para mejorar la experiencia del usuario, evitando la pérdida de datos como los favoritos al recargar la página.

[6] - Por último se implementó VueToast para la notificación de copiar al portapapeles

[7] - Se realizó el deploy en Vercel para poder ser visualizado desde cualquier dispositivo.
