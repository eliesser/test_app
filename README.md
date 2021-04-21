# Prueba Front

Dado el siguiente diseño:


1º Maquetar usando HTML5 y SCSS como preprocesador de CSS. El diseño ha de ser aproximado no se va a valorar si el margen mide 8px en lugar de 5px si no que exista el margen

2º La Validación del formulario será obligatorio que ambos inputs estén cumplimentados, uno será tipo email con validación email y otro password cuya validación será que al menos deberá de tener 5 caracteres. El reminder del formulario, será un switch de tipo booleano y opcional.

3º El botón de aceptar siempre estará activo pero al pulsarlo la primera vez si el formulario está mal cumplimentado se mostraran los mensajes de error, en caso de estar correctamente cumplimentados con poner un console.log(‘OK’) será suficiente

4º Para los iconos usar la librería que viene en Ionic o cualesquiera, el objetivo no es el diseño del icono si no su correcta maquetación.

5º Realizar el diseño responsive  con el breakpoint en 960px.

6º Se valorará positivamente la creatividad (por ejemplo añadir alguna animación)

7º Test unitarios, E2E y componentes

Se valorará el uso de test unitarios, E2E y componentes

8º Inicialización del proyecto

Bastará con inicializar un proyecto en blanco mediante el CLI de Ionic o el CLI de Angular dependiendo del puesto si es web o mobile.

Mobile
ionic start test_app blank

Web
ng new test_app

9º Dudas

## Clonar el repositorio

```bash
$ git clone https://github.com/eliesser/test_app
```

Posteriormente moverse al la carpeta con esta instrucción:

```bash
$ cd test_app
```


## Levantar el proyecto

Una vez descargado el repositorio, para levantarlo puede lanzar el comando:

Para poder agregarlo puede usar este comando:

```bash
$ ionic serve
```

Por defecto desplegara en esta dirección http://localhost:8100/

## Pruebas unitarias
Para ejecutar las pruebas unitarias puede hacerlo mediante el siguiente comando:

```bash
$ ng test
```

## Estadisticas de pruebas unitarias
Para ejecutar las pruebas unitarias y poder visualizar las estadísticas, puede hacerlo mediante el siguiente comando:

```bash
$ ng test --code-coverage
```
Este comando creara una carpeta en el directorio raíz del proyecto deben navegar a "coverage/ngv/" y abrir el archivo index.html, donde presentara las estadísticas de los test unitarios

