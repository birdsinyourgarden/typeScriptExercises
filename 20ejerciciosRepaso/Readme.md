# Ejercicios Básicos de TypeScript

Este archivo contiene 20 ejercicios diseñados para introducirte a los conceptos básicos de TypeScript. Sigue las instrucciones en cada ejercicio para resolverlos y asegúrate de probar tu código para ver los resultados.

---

## Tabla de Contenidos

1. [Tipos básicos](#1-tipos-básicos)
2. [Inferencia de tipos](#2-inferencia-de-tipos)
3. [Tipos personalizados (type aliases)](#3-tipos-personalizados-type-aliases)
4. [Interfaces](#4-interfaces)
5. [Funciones y tipado](#5-funciones-y-tipado)
6. [Parámetros opcionales y valores por defecto](#6-parámetros-opcionales-y-valores-por-defecto)
7. [Unión de tipos](#7-unión-de-tipos)
8. [Intersección de tipos](#8-intersección-de-tipos)
9. [Enumeraciones (Enums)](#9-enumeraciones-enums)
10. [Clases y constructores](#10-clases-y-constructores)
11. [Modificadores de acceso (public, private, protected)](#11-modificadores-de-acceso)
12. [Herencia](#12-herencia)
13. [Genéricos](#13-genéricos)
14. [Tuplas](#14-tuplas)
15. [Módulos](#15-módulos)
16. [Decoradores](#16-decoradores)
17. [Control de flujo con `never` y `unknown`](#17-control-de-flujo-con-never-y-unknown)
18. [Casting de tipos](#18-casting-de-tipos)
19. [Utilidad de tipos (Partial, Readonly, etc.)](#19-utilidad-de-tipos)
20. [Manipulación de tipos avanzados](#20-manipulación-de-tipos-avanzados)

---

## Ejercicios

### 1. Tipos básicos

**Descripción**: Declara variables con los tipos básicos: `string`, `number`, `boolean`, `any`. Asegúrate de asignarles valores iniciales.

**Requerimientos**:
- Declara una variable llamada `nombre` de tipo `string` con el valor `"Juan"`.
- Declara una variable llamada `edad` de tipo `number` con el valor `25`.
- Declara una variable llamada `esEstudiante` de tipo `boolean` con el valor `true`.
- Declara una variable llamada `cualquierCosa` de tipo `any` con el valor `42`.

---

### 2. Inferencia de tipos

**Descripción**: Deja que TypeScript infiera el tipo de las variables basándose en el valor inicial.

**Requerimientos**:
- Declara una variable llamada `saludo` con el valor `"Hola, TypeScript"`.
- Declara una variable llamada `anios` con el valor `30`.
- Declara una variable llamada `esActivo` con el valor `false`.

---

### 3. Tipos personalizados (type aliases)

**Descripción**: Define un tipo personalizado llamado `Persona` que represente a un individuo con las propiedades `nombre` (string) y `edad` (number). Luego, crea una variable de ese tipo.

**Requerimientos**:
- Define un `type` llamado `Persona`.
- Crea una variable llamada `persona1` de tipo `Persona` con los valores `{ nombre: "Ana", edad: 28 }`.

---

### 4. Interfaces

**Descripción**: Define una interfaz llamada `Producto` que incluya las propiedades `id` (number), `nombre` (string) y `precio` (number). Luego, crea un objeto basado en esa interfaz.

**Requerimientos**:
- Define una interfaz llamada `Producto`.
- Crea una variable llamada `producto1` que siga el formato de la interfaz con los valores `{ id: 1, nombre: "Café", precio: 10.5 }`.

---

### 5. Funciones y tipado

**Descripción**: Define una función llamada `multiplicar` que reciba dos parámetros de tipo `number` y devuelva su producto.

**Requerimientos**:
- La función debe llamarse `multiplicar`.
- Debe recibir dos parámetros: `a` y `b`.
- Debe devolver un valor de tipo `number`.

---

### 6. Parámetros opcionales y valores por defecto

**Descripción**: Crea una función llamada `saludar` que reciba un parámetro opcional llamado `nombre`. Si no se proporciona un nombre, la función debe usar "Amigo" como valor por defecto.

**Requerimientos**:
- La función debe llamarse `saludar`.
- Debe devolver un mensaje como `"Hola, Juan!"` o `"Hola, Amigo!"`.

---

### 7. Unión de tipos

**Descripción**: Crea una función llamada `mostrarResultado` que reciba un parámetro que puede ser de tipo `string` o `number` y devuelva una cadena de texto.

**Requerimientos**:
- La función debe llamarse `mostrarResultado`.
- Si el valor es un número, debe devolver `"El resultado es: [valor]"`.
- Si el valor es una cadena, debe devolver `"Mensaje recibido: [valor]"`.

---

### 8. Intersección de tipos

**Descripción**: Define dos tipos llamados `Empleado` y `Usuario`. Luego, combina ambos tipos en uno solo llamado `EmpleadoUsuario` y crea un objeto que lo represente.

**Requerimientos**:
- `Empleado` debe tener una propiedad `salario` (number).
- `Usuario` debe tener una propiedad `email` (string).
- `EmpleadoUsuario` debe combinar ambas propiedades.

---

### 9. Enumeraciones (Enums)

**Descripción**: Crea un enum llamado `EstadoPedido` con los valores `Pendiente`, `Procesando` y `Completado`. Luego, usa este enum para definir el estado de un pedido.

**Requerimientos**:
- Declara un enum llamado `EstadoPedido`.
- Declara una variable llamada `estadoActual` y asígnale el valor `EstadoPedido.Pendiente`.

---

### 10. Clases y constructores

**Descripción**: Crea una clase llamada `Animal` que tenga una propiedad `nombre` y un método `hacerSonido`. El nombre debe inicializarse mediante un constructor.

**Requerimientos**:
- La clase debe llamarse `Animal`.
- Debe tener un método llamado `hacerSonido` que imprima `"Sonido genérico"`.

---

### 11. Modificadores de acceso (public, private, protected)

**Descripción**: Crea una clase llamada `CuentaBancaria` con una propiedad privada llamada `saldo`. Implementa un método público para obtener el saldo y otro para agregar fondos.

**Requerimientos**:
- La clase debe llamarse `CuentaBancaria`.
- Debe tener un método llamado `obtenerSaldo`.
- Debe tener un método llamado `agregarFondos` que aumente el saldo.

---

### 12. Herencia

**Descripción**: Implementa una clase base llamada `Vehiculo` que tenga una propiedad `marca` y un método `encender`. Crea una subclase llamada `Auto` que añada una propiedad `puertas`.

**Requerimientos**:
- La clase base debe llamarse `Vehiculo` y tener:
  - Una propiedad pública `marca` inicializada mediante el constructor.
  - Un método `encender` que imprima `"Vehículo encendido"`.
- La subclase `Auto` debe:
  - Extender de `Vehiculo`.
  - Añadir una propiedad `puertas` inicializada mediante su constructor.
  - Implementar un método `abrirPuertas` que imprima `"Abriendo [número] puertas"`.

---

### 13. Genéricos

**Descripción**: Crea una función genérica llamada `revertirArray` que reciba un array de cualquier tipo y devuelva un nuevo array con los elementos en orden inverso.

**Requerimientos**:
- La función debe llamarse `revertirArray`.
- Debe aceptar un parámetro genérico `T` que sea un array de cualquier tipo.
- Debe devolver un nuevo array con los elementos en orden inverso.
- Prueba la función con un array de números y otro de cadenas.

---

### 14. Tuplas

**Descripción**: Usa una tupla para representar coordenadas en un espacio bidimensional y escribe una función que las imprima.

**Requerimientos**:
- Declara una tupla llamada `coordenadas` que contenga dos números (x, y).
- Crea una función llamada `imprimirCoordenadas` que acepte una tupla como argumento y muestre su contenido en el formato `(x, y)`.
- Prueba la función con diferentes valores.

---

### 15. Módulos

**Descripción**: Divide tu código en módulos. Define una constante llamada `PI` en un archivo y expórtala. En otro archivo, importa la constante y úsala para calcular el área de un círculo.

**Requerimientos**:
- Crea un archivo `constantes.ts` que exporte la constante `PI`.
- Crea un archivo `main.ts` que importe `PI` y calcule el área de un círculo con un radio dado.
- Imprime el resultado del área.

---

### 16. Decoradores

**Descripción**: Implementa un decorador llamado `logClase` que registre el nombre de una clase en la consola al ser definida.

**Requerimientos**:
- Define un decorador llamado `logClase` que acepte el constructor de una clase como argumento.
- Usa este decorador en una clase llamada `Ejemplo`.
- Verifica en la consola que se registra el nombre de la clase.

---

### 17. Control de flujo con `never` y `unknown`

**Descripción**: Implementa una función que lance un error (tipo `never`) y otra que analice un valor desconocido (tipo `unknown`).

**Requerimientos**:
- Crea una función llamada `lanzarError` que reciba un mensaje como parámetro y lance un error con ese mensaje. Su tipo de retorno debe ser `never`.
- Crea una función llamada `analizarTipo` que acepte un valor de tipo `unknown` y determine si es un número, una cadena o de otro tipo.
- Imprime el tipo del valor en cada caso.

---

### 18. Casting de tipos

**Descripción**: Usa casting para convertir un valor de tipo `any` a `string`. Luego, calcula y muestra su longitud.

**Requerimientos**:
- Declara una variable llamada `valor` de tipo `any` e inicialízala con una cadena.
- Usa el operador `as` para convertirla a `string`.
- Calcula la longitud de la cadena y muéstrala en la consola.

---

### 19. Utilidad de tipos (Partial, Readonly, etc.)

**Descripción**: Crea un tipo llamado `Usuario` con las propiedades `id`, `nombre` y `email`. Usa utilidades de tipos para modificar sus propiedades.

**Requerimientos**:
- Usa `Partial<Usuario>` para crear una variable donde todas las propiedades sean opcionales.
- Usa `Readonly<Usuario>` para crear una variable inmutable.
- Intenta modificar las propiedades de ambas variables y observa el comportamiento.

---

### 20. Manipulación de tipos avanzados

**Descripción**: Usa los operadores `keyof` y `typeof` para trabajar dinámicamente con tipos basados en objetos y valores.

**Requerimientos**:
- Define un tipo `Usuario` con las propiedades `id` y `nombre`.
- Usa `keyof` para obtener un tipo que represente las claves de `Usuario`.
- Usa `typeof` para crear un tipo basado en una variable existente.
- Imprime los resultados en la consola para verificar los tipos dinámicos.

---