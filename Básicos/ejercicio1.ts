/*
 * Deberás crear una clase Persona con los una variable pública de cada tipo, un
 * constructor, instanciar un objeto y luego compilar el typescript a js.
 */

class Persona {
    public nombre: string;
    public edad: number;
    public estadoCivil: string;
    public hobbies: Array<string>;
    public detalles: any;

    constructor(nombre: string, edad: number, estadoCivil:string) {
        this.nombre = nombre;

        this.edad = edad;

        this.estadoCivil = estadoCivil;

        this.hobbies = ["Leer", "Viajar", "Fútbol"];

        this.detalles = {
            direccion: "Calle Falsa 123",
            telefono: "123456789"
        };
    }
}

let persona1 = new Persona("Carlos", 24, "Soltero");
