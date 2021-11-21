//Evento y funciones para el formulario para desplegar la informacion (Soluciones, P7. L3,P8)
const form = document.querySelector('form');

form.addEventListener('submit',agregarDatos);

function agregarDatos(e){
    e.preventDefault();
    const datos_mascota = {
        nombre: form.propietario.value,
        direccion: form.direccion.value,
        telefono: form.telefono.value,
        tipo: form.tipo.value,
        nombre_mascota: form.nombreMascota.value,
        enfermedad: form.enfermedad.value,
    }
    const mascota = new Mascota(datos_mascota);
    console.log(mascota);
    mascota.datosPropietario();
}

//Clases, constructores, herencia, getters y setters para cada el propietario y mascota (L3,P3)
class Propietario {
    constructor(nombre,direccion,telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    datosPropietario(){
        resultado.innerHTML = `<li>El nombre del dueño es ${this._nombre.nombre}, que vive en ${this._nombre.direccion} y su telefono es ${this._nombre.telefono}</li>\n
        <li>El tipo de animal es ${this._nombre.nombre_mascota}, su nombre es ${this._nombre.tipo} y su enfermedad es ${this._nombre.enfermedad}</li>`;
    }
};

class Animal extends Propietario {
    constructor(nombre,direccion,telefono,tipo){
        super(nombre,direccion,telefono);
        this._tipo = tipo;
    }
    get tipo(){
        return this._tipo;
    }
};

class Mascota extends Animal {
    constructor(nombre,direccion,telefono,tipo,nombre_mascota,enfermedad){
        super(nombre,direccion,telefono,tipo);
        this._nombre_mascota = nombre_mascota;
        this._enfermedad = enfermedad;
    }
    get nombre_mascota(){
        return this._nombre_mascota;
    }
    set nombre_mascota(new_nombre_mascota){
        this._nombremascota = new_nombre_mascota;
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfermedad(new_enfermedad){
        this._enfermedad = new_enfermedad;
    }
};





