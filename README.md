
## Instalacion

Use el package manager [npm](https://www.npmjs.com/) para instalar el Client y el Server por separado.

```bash
npm install
```

## Uso
En primer lugar debe correr el Server con el comando:
```bash
npm run dev
```
Esto usara el puerto local 5000.

Luego debe correr el Client con:
```bash
npm run start
```

Esto usara el puerto local 3000.

Una vez tenga la aplicacion corriendo en su totalidad debe iniciar sesion con los usarios correspondientes, si no probee los usuarios correctos el backend retornara un status 400(bad request) y false como body.

El backend tambien valida si el email es valido o no enviando un status code 422(Unprocessable Entity) en el caso de enviar un email invalido reflejando en el cliente con un mensaje de "Email Invalido"

La aplicacion tampoco dejara hacer ningun request en el caso de no tener los campos (email, password) completos, dando un mensaje de que esos campos son requeridos.

Una vez haya iniciado sesion correctamente el sistema da acceso a la ruta protegida '/welcome' dando puerta abierta a la web completa
