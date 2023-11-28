class Persona{
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }; 
    obtDetalles() {
      console.log("El nombre de la persona es "+this.nombre+", tiene "+this.edad+" y es "+this.genero);
    }
};

let Julia = new Persona ("Julia", 26, "chica");
Julia.obtDetalles();

class Estudiante extends Persona {
    constructor (nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        console.log("El nombre de la persona es "+this.nombre+", tiene "+this.edad+" y es "+this.genero+", estudia "+this.curso+" en el grupo "+this.grupo)
    }
}

let JuliaEstudiante = new Estudiante("Julia", 26, "chica", "fullstack", "super guay");
JuliaEstudiante.registrar();

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    };

    asignar() {
        console.log(`${this.nombre} da clases de ${this.asignatura} de nivel ${this.nivel.toLowerCase()}.`);
    };
};

let ProfX = new Profesor ('Prof. X', 58, 'hombre', 'fullstack', 'bajo')

ProfX.asignar();
