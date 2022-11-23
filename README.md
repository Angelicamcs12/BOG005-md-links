# Markdown Links
## 1. Preámbulo
[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir. 

## 2. Resumen del proyecto MD-LINKS
Esta es una libreria ejecutada con node.js, donde se le entrega al programa una ruta y se leen los archivos tipo Markdown, se extraen los links encontrados en cada archivo y si el usuario lo requiere se validan, tambien permite la opcion de mostrar estadisticas basicas sobre los links encontrados.

El programa es ejecutable mediante un CLI, y su programación esta basada en promesas y recursividad.

## 3. Diagrama de flujo}
![Diagrama 1](https://github.com/Angelicamcs12/BOG005-md-links/blob/main/img/Md%20links%20-%20P%C3%A1gina%201.jpg)
![Diagrama 2](https://github.com/Angelicamcs12/BOG005-md-links/blob/main/img/Md%20links%20-%20P%C3%A1gina%202.jpg)

## 4. Uso de la aplicación

Para usar el modulo, lo puedes instalar con el siguiente comando desde tu terminal:
  npm i angelicamcs-md-links

La biblioteca se importa y usa de acuerdo al siguiente ejemplo
  const {mdLinks} = require('angelicamcs-md-links')

los comandos validos de opciones desde la terminal son:
  --validate
  --stats

#### `mdLinks(path, options)`
### Argumentos

* `path`: Ruta absoluta o relativa al archivo o directorio.
.
* `options`: 
  - `--validate`: Valida los links encontrados.
  - `--stats`: Si se desea tener información estadística general.

### Valor de retorno:
`si ingresa solo la ruta (Path)` :
* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

Con `--validate` :
* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

Con `--stats` :
* Total: 3
* Unique: 3

Con `--stats --validate`:
* Total: 3
* Unique: 3
* Broken: 1

`ejemplos de uso: md-links`

```sh
$ md-links ./some/example.md
href: ./some/example.md 
file: http://algo.com/2/3/  
text: Link a algo
```

Identifica el archivo markdown (a partir de la ruta que recibe como argumento), analiza el archivo Markdown e imprime los links que vaya encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link.

## Options

##### `--validate`

Si pasa la opción `--validate`, si el link funciona responde ok, entonces consideraremos el link como ok, si falla responde Fail.

```sh
$ md-links ./some/example.md --validate
href: ./some/example.md 
file: http://algo.com/2/3/  
text: Link a algo
status: 200
OK: ok 

href: ./some/example.md
file: https://otra-cosa.net/algun-doc.html 
text: algún doc
status: 404 
OK: fail 
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de la URL, así como el status de la respuesta recibida a la petición HTTP a dicha URL.

##### `--stats`

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También puede combinar `--stats` y `--validate` para obtener estadísticas que necesite de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```