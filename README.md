# TALLER DE PROGRAMACION 2

## Instrucciones de resolución de examen

Es tu primer día en [tecnoshare.com](http://tecnoshare.com) luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador backend en nodejs con express y mongodb.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

> Bienvenid@! estuvimos esperando por horas que llegares, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

> En el presente repositorío encontrarás un proyecto de nodejs que ya tiene codigo base del backend con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo.

> 1. Realizar un Fork del presente repositorio -> OK
> 2. Realizar un clone del presente repositorio -> OK
> 3. Instalar las dependencias -> OK
> 4. Solicitar las variables de entorno que contiene la conexion string a mongodb (antes de preguntar, revisa el chat, seguro estan ahí) -> OK
> 5. Ejecutar el servidor web de la api REST con el script de npm start-dev si queres trabajar con nodemon (tendrías que instalarlo) con start solo, tambien funciona. -> OK
>    El backend se conecta con una base de datos Mongodb en la cual se encuentra la base de datos **sample_airbnb** con una collection llamada **listingsAndReviews**, ahí se encuentran aprox. 5.600 publicaciones de propiedades.
> 6. Proba el endpoint que ya se encuentra desarrollado: /api/listings debería retornar un json con 5.600 publicaciones. Sin embargo te aconsejo que uses el paginado que tiene para probar (mira la definición del end-point). Sí por algun motivo no llegase a funcionar, solicita asistencia. -> OK

> ### TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD
>
> 1. Agregar un filtro por tipo de alojamiento al endpoint existente
Modificar el endpoint que ya existe GET /api/listings para que acepte un parámetro opcional en la query string: **property_type**. Ejemplo: /api/listings?property_type=Apartment&page=1&pageSize=10. Si se envía el parámetro, debe retornar solo las propiedades de ese tipo (ej: "Apartment", "House", "Condominium"); si no se envía, debe seguir funcionando igual que ahora. La paginación debe seguir funcionando en ambos casos.
> 2. Devolver 404 cuando una propiedad no existe
Hoy el endpoint GET /api/listings/:id responde `null` con status 200 cuando el id no existe. Modificarlo para que en ese caso responda con status **404** y un mensaje `{ "message": "Propiedad no encontrada" }`. (Tip: podés usar como ejemplo cómo lo resuelve GET /api/users/:id).
> 3. Desarrollar el endpoint para obtener propiedades por país
Crear un endpoint GET /api/listings/country/:country que retorne todas las propiedades de un país, usando el campo **address.country** (ej: "Brazil", "Spain", "United States").
> 4. Desarrollar el endpoint para obtener el precio total de una propiedad
Crear un endpoint GET /api/listings/:id/total-price que retorne el **_id**, el **name** y un nuevo campo **totalPrice** que sea la suma de **price** + **cleaning_fee** de esa propiedad. Si la propiedad no tiene cleaning_fee, se considera 0. (Tip: en esta base los precios están guardados como Decimal128, para sumarlos podés convertirlos con `parseFloat(listing.price.toString())`).

> Características importantes a considerar:

    - Respetar la estructura del proyecto: routes -> controllers -> services -> data
    - Responder con códigos de estado HTTP apropiados (200, 404, 500)
    - Documentar los endpoints en el README.md con sus parámetros correspondientes

> Desde ya muchas gracias por la colaboración! 😉 como te comente en la entrevista soy muy detallista en la prolijidad del codigo y la performance cada detalle cuenta, no me gusta mucho las cosas fuera del estandar de APIREST, sin embargo si no estas seguro, es mejor que lo resuelvas como puedas y me dejes notas en el readme.md del repo, para que yo pueda probar.

## Intrucciones para la entrega

Si ya terminaste o son las 21:00 asegurate de seguir los siguientes pasos para la entrega:

1. Completar el listado de endpoints, especificando parametros si los hubiera, mas abajo en este mismo archivo.
2. Realizar un commit a tu repo con un mensaje con tu nombre completo
3. Realizar un push a tu repositorio
4. Realizar un pull request a mi repositorio

## Listado de endpoints implementados

### Endpoints de autenticación y usuarios:
- POST /api/users/register - Registro de nuevos usuarios
- POST /api/users/login - Login de usuarios existentes
- GET /api/users - Obtener todos los usuarios (requiere autenticación)
- GET /api/users/:id - Obtener un usuario específico por ID (requiere autenticación)

### Endpoints de listings/propiedades:
- GET /api/listings?pageSize=[pageSize]&page=[page] - Obtener todas las propiedades con paginación opcional
- GET /api/listings/:id - Obtener una propiedad específica por ID

### Endpoint base:
- GET / - Mensaje de bienvenida de la API