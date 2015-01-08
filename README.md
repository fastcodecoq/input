CYZ API
=======

Estructura del repositorio
--------------------------

El repositorio tiene 3 ramas: master, qa, dev. En las primeras fases y durante todo el desarrollo se trabajará en la rama dev, que es la rama de menor jerarquía. Solo se harán push a las ramas superiores, cuando se hagan entregas que estén listas para ser testeadas, el push debe hacerse la rama qa (pruebas), solo cuando el sistema este estabilizado se haría un push al master, que sería la rama de producción. 

Documentación REST API CYZ.
---------------------------

Respuesta
---------

Formato: JSON

Éxito.
Cod. HTTP 200

```javascript
{ message : String, data : Object }  (la variable data contiente los resultados)
```

Falla.
Cod. HTTP 500

```javascript
{ message : String }
```

No autorizado
Cod. HTTP 401

```javascript
{ message : String }
```

USUARIO
-------


CREAR 
_____


Método: POST 
URI: api/usuario 
Params: 

```javascript
name String (required)
last_name String (required)
email String (required)
terms Boolean (required)
tel String (debe contener numeros)
location Object
         {
             address : String,
             city : String,
             country : String,
             lat : Number,
             lng : Number
         }
active Boolean (Defautl true)
password String
```

OBTENER
_______

Método: GET
URI: /api/usuario/:idusuario || /api/usuario



MODIFICAR
_________



Método: PUT / UPDATE
URI: api/usuario/:idusuario 
Params: 

```javascript
name String (required)
last_name String (required)
email String (required)
terms Boolean (required)
location Object
         {
             address : String,
             city : String,
             country : String,
             lat : Number,
             lng : Number
         }
active Boolean (Defautl true)
password String
```


ELIMINAR
________


Método: DELETE
URI: /api/usuario/:idusuario


EMPRESA
-------


CREAR 
_____


Método: POST 
URI: /api/empresa/:empresaid || /api/empresa
Params: 

```javascript
name String (required)
nit String (required)
tel String (required)
email String (required)
userid String (required)
contact Array userid
competences String Array
location Object
         {
             address : String,
             city : String,
             country : String,
             lat : Number,
             lng : Number
         }
active Boolean (Defautl true)
```


CREAR CONTACTO EN UNA EMPRESA
_____________________________

Método: POST 
URI: /api/empresa/:empresaid/contact/:usuarioid




OBTENER
_______

Método: GET
URI: /api/empresa/:empresaid


OBTENER CONTACTOS
_________________

Método: GET
URI: /api/contacts/empresa/:empresaid



MODIFICAR
_________

  

Método: PUT / UPDATE
URI: /api/empresa/:empresaid
Params: 

```javascript
name String (required)
nit String (required)
tel String (required)
email String (required)
userid String (required)
contact Array userid
competences String Array
location Object
         {
             address : String,
             city : String,
             country : String,
             lat : Number,
             lng : Number
         }
active Boolean (Defautl true)
```


ELIMINAR
________

Método: DELETE
URI: /api/empresa/:empresaid




ORDEN DE SERVICIO
-----------------

CREAR 
_____


Método: POST 
URI: /api/empresa/:empresaid/orden_servicio || /api/orden_servicio
Params: 

```javascript
name String (required)
responsible String (userid required)
empresaid String (empresaid required)
description String (required)
status Number
type Number
rate Number
start_date (dd-mm-yy)
end_date (dd-mm-yy)
contact String Array
location Object
         {
             address : String,
             city : String,
             country : String,
             lat : Number,
             lng : Number
         }
active Boolean (Defautl truee)
```


OBTENER
_______

Método: GET
URI: /api/orden_servicio/:ordenservicioid || /api/orden_servicio  || /empresa/:empresaid/orden_servicio
 


MODIFICAR
_________


Método: PUT / UPDATE
URI: /api/:ordenservicioid
Params: 

```javascript
name String (required)
responsible String (userid required)
empresaid String (empresaid required)
description String (required)
status Number
type Number
rate Number
start_date (dd-mm-yy)
end_date (dd-mm-yy)
contact String Array
anticipos Array Object [{
	  			anticipo : Number,
	  			amount : Number,
	  			invoice_number: Number,
	  			date : Date (mm-dd-yy)
         }]
location Object
         {
             address : String,
             city : String,
             country : String,
             lat : Number,
             lng : Number
         }
active Boolean (Defautl truee)
```


ELIMINAR
________

Método: DELETE
URI: /api/orden_servicio/:ordenservicioid



SOLICITUD SERVICIO
------------------

CREAR 
_____


Método: POST 
URI: /api/solicitud_servicio 
Params: 

```javascript
name String (required)
empresaid String (empresaid required)
type String 
accepted Boolean (default false)
readed Boolean (default false)
description String 
location Object
         {
             address : String,
             city : String,
             country : String,
             lat : Number,
             lng : Number
         }
active Boolean (Defautl truee)
```


OBTENER
_______

Método: GET
URI: /api/solicitud_servicio/:solicitudservicioid || /api/solicitud_servicio
 


MODIFICAR
_________


Método: PUT / UPDATE
URI: /api/solicitud_servicio/:solicitudservicioid
Params: 

```javascript
name String (required)
empresaid String (empresaid required)
type String 
accepted Boolean (default false)
readed Boolean (default false)
description String 
location Object
         {
             address : String,
             city : String,
             country : String,
             lat : Number,
             lng : Number
         }
active Boolean (Defautl truee)
```

ELIMINAR
________

Método: DELETE
URI: /api/solicitud_servicio/:solicitudservicioid


CANDIDATO
---------

CREAR 
_____


Método: POST 
URI: /api/candidate/:usuarioid || /api/candidate
Params: 

```javascript
userid String (required)
data Object
location Object
         {
             address : String,
             city : String,
             country : String,
             lat : Number,
             lng : Number
         }
active Boolean (Defautl true)
```


OBTENER
_______

Método: GET
URI: /api/candidate || /api/:candidateid  
 


MODIFICAR
_________


Método: PUT / UPDATE
URI: /api/candidate/:candidateid
Params: 

```javascript
userid String (required)
data Object
location Object
         {
             address : String,
             city : String,
             country : String,
             lat : Number,
             lng : Number
         }
active Boolean (Defautl true)
```


ELIMINAR
________

Método: DELETE
URI: /api/candidate/:candidateid



SOLICITUD SERVICIO
------------------

CREAR 
_____


Método: POST 
URI: /api/solicitud_servicio 
Params: 

```javascript
name String (required)
empresaid String (empresaid required)
type String 
accepted Boolean (default false)
readed Boolean (default false)
description String 
location Object
         {
             address : String,
             city : String,
             country : String,
             lat : Number,
             lng : Number
         }
active Boolean (Defautl truee)
```


OBTENER
_______

Método: GET
URI: /api/solicitud_servicio/:solicitudservicioid || /api/solicitud_servicio
 


MODIFICAR
_________


Método: PUT / UPDATE
URI: /api/solicitud_servicio/:solicitudservicioid
Params: 

```javascript
name String (required)
empresaid String (empresaid required)
type String 
accepted Boolean (default false)
readed Boolean (default false)
description String 
location Object
         {
             address : String,
             city : String,
             country : String,
             lat : Number,
             lng : Number
         }
active Boolean (Defautl truee)
```

ELIMINAR
________

Método: DELETE
URI: /api/solicitud_servicio/:solicitudservicioid


CONTACTO
--------

CREAR 
_____


Método: POST 
URI: /api/contacts 
Params: 

```javascript
_usuario String (required)
_empresa String (required)
metadata Object
active (default true)
```


OBTENER
_______

Método: GET
URI: /api/contacts || /api/contacts/:empresaid || /api/contacts/:contactid
 
 54836e5c08be31d109d7af40
 548cb376b7f93fe9065a000d


MODIFICAR
_________


Método: PUT / UPDATE
URI: /api/contacts/:contactid
Params: 


```javascript
_usuario String 
_empresa String 
metadata Object
active 
```


ELIMINAR
________

Método: DELETE
URI: /api/contact/:contactid
