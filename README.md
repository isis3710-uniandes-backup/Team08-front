# DONU (grupo 8)

|<img src="https://ssaenz11.github.io/images/donu.jpg">|_Donu es una plataforma web que pretender facilitar el proceso de donaciones entre las personas y las ONG En esta plataforma pretendemos que tanto los usuario y las ong puedan decir los elementos que pueden donar y los que realmente necesitan._|
|--|--|

# VIDEO FUNCIONAMIENTO 

https://www.youtube.com/watch?v=bWiXMrlHYp8&feature=youtu.be

# INSTALACIÓN

### 1. Descarga
Descargar o clonar el [back](https://github.com/isis3710-uniandes/Team08-back) y el [front](https://github.com/isis3710-uniandes/Team08-front) de la aplicación alojados en los respectivos repositorios. 

### 2. Importar paquetes
Dentro de cada proyecto realizar 

`npm install`

### 3.  Desplegar el Back
Dentro de Team08-back realizar

`npm start`

### 4.  Desplegar el Front
Dentro de Team08-front realizar

`npm start`

### 5. Entrar
Encontrarás la aplicación desplegada en [http://localhost:3000/](http://localhost:3000/).

# FUNCIONALIDADES
## USUARIO DONADOR

|![donation](https://user-images.githubusercontent.com/20799456/55184780-063f4c80-5161-11e9-9508-530b4284f83a.png)|Creación de donaciones|
|--------|--------|

![image](https://user-images.githubusercontent.com/20799456/55185037-8665b200-5161-11e9-86e4-55c724b6da93.png)Creación de una nueva donación de productos. Para esto se deben ingresar El nombre , una descripción, una calificación a la calidad (de 1 a 5) y una foto de la donación preferiblemente de 500x500 px.
________________
|![browser-visualization (1)](https://user-images.githubusercontent.com/20799456/54962852-70bf7500-4f34-11e9-9c80-8f0787f9bc4c.png)|Visualización del historial de donaciones|
|--------|--------|

![image](https://user-images.githubusercontent.com/20799456/55184481-3e925b00-5160-11e9-88e4-a00fbd53df66.png)Visualización de las donaciones que los donadores han dado. Por cada producto se puede ver una descripción y un contador que representa el estado del objeto donado. La cantidad de objetos visualizados puede ser modificada.
____
|![score](https://user-images.githubusercontent.com/20799456/55185632-cc6f4580-5162-11e9-8ffa-dba2f4d8a5a5.png)|Visualización de puntos|
|--------|--------|

Visualización de los puntos acumulados por un usuario. Y los disponibles para ganar.

![image](https://user-images.githubusercontent.com/20799456/55185661-db55f800-5162-11e9-8bcd-f36771ff36e3.png)


## USUARIO BENEFACTOR

|![video-conference](https://user-images.githubusercontent.com/20799456/55186029-95e5fa80-5163-11e9-9b51-51c39b3a92f8.png)|Creación de solicitudes|
|--------|--------|

![image](https://user-images.githubusercontent.com/20799456/55186134-d04f9780-5163-11e9-9d24-db6ec1d6efcc.png)

Un usuario entidad puede abrir solicitudes de donaciones específicas de dinero para realizar ciertos proyectos de beneficio social. Para esto debe ingresar los fondos totales necesarios y la cantidad faltante; una imagen representativa y un mensaje asociado que permita entender mejor la solicitud. 
________________
|![browser-visualization (1)](https://user-images.githubusercontent.com/20799456/54962852-70bf7500-4f34-11e9-9c80-8f0787f9bc4c.png)|Visualización y eliminación de las solicitudes hechas por un usuario específico|
|--------|--------|

![image](https://user-images.githubusercontent.com/20799456/55187053-09890700-5166-11e9-83ea-7c0a8ad88552.png)

Visualización de las solicitudes de dinero creadas por un usuario. Aquí se puede ver información específica de las solicitudes. Dentro de los campos relevantes encontramos.Los fondos necesarios, la cantidad faltante, una imagen elegida por el creador de la solicitud y una fecha de registro de la misma. 

Borrar las solicitudes de dinero creadas por un usuario especifico. Cada usuario en su respectivo listado de solicitudes podrá elminar cada solicitud creada.
______
|![browser-visualization (1)](https://user-images.githubusercontent.com/20799456/54962852-70bf7500-4f34-11e9-9c80-8f0787f9bc4c.png)|Visualización de todas las solicitudes|
|--------|--------|

![image](https://user-images.githubusercontent.com/20799456/55187591-718c1d00-5167-11e9-95bd-aa9956e80b85.png)
Visualización de las solicitudes de todo el sistema de Donu. Aquí podemos encontrar las solicitudes de dinero hechas por organizaciones sin animo de lucro. Además de ver información descriptiva de la solicitud, se puede ver las distintas cantidades de dinero donables a cada respectiva causa.
# UI/MOCKUPS

## Landing page

![2 - Screen 1](https://user-images.githubusercontent.com/20799456/55192646-f7619580-5172-11e9-8e3b-489b01f2fec3.png)
![3 - Screen 2](https://user-images.githubusercontent.com/20799456/55192647-f7619580-5172-11e9-94ac-880ca3eb27d6.png)
![1 - Screen 3](https://user-images.githubusercontent.com/20799456/55192648-f7619580-5172-11e9-96dc-64d5481dcc5d.png)

## Creación de donacion 

![1 - Screen 4](https://user-images.githubusercontent.com/20799456/55193743-d3ec1a00-5175-11e9-969b-59310fe84720.png)

## Todas las donaciones

![3 - Screen 5](https://user-images.githubusercontent.com/20799456/55195894-e5382500-517b-11e9-8f1b-fa46872cc4f6.png)

## Nueva solicitud

![4 - Screen 6](https://user-images.githubusercontent.com/20799456/55195895-e5382500-517b-11e9-93ce-5f4cd07603c1.png)

## Todas las solicitudes

![1 - Screen  7](https://user-images.githubusercontent.com/20799456/55195896-e5382500-517b-11e9-89dd-8ea4a3f49235.png)

## Mis solicitudes
![2 - Screen  8](https://user-images.githubusercontent.com/20799456/55195893-e5382500-517b-11e9-9a8f-fbb28804fefb.png)

# UI/TESTS CARD SORTING

## Cartas creadas

![image](https://user-images.githubusercontent.com/20799456/55232967-17d23400-51f5-11e9-887a-2b512c98c923.png)

## RESULTADOS

![image](https://user-images.githubusercontent.com/20799456/55233049-549e2b00-51f5-11e9-8678-564192ac08d8.png)

La mayoría de personas crearon 4 categorías para agrupar nuestras cartas.

## Matriz de similaridad

![image](https://user-images.githubusercontent.com/20799456/55233168-b3fc3b00-51f5-11e9-9d4d-ea0bff49e11b.png)

En esta matriz podemos evidenciar:
- Las distintas opciones de donación en su mayoría fueron agrupadas en la misma categoría.
- Ver las solicitudes de donación y conocer más sobre ellas fue reconocido como parte de un mismo elemento.
- Es interesante tanmbien ver que no se encuentra tanta asociación de donar dinero con donar productos(libros, juguetes, etc).

### Agrupaciones óptimas

![image](https://user-images.githubusercontent.com/20799456/55233207-daba7180-51f5-11e9-8167-c368066fbf5c.png)

![image](https://user-images.githubusercontent.com/20799456/55233258-04739880-51f6-11e9-8572-1d441c5d1bbf.png)
