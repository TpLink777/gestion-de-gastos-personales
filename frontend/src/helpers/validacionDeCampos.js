
export const ValidacionDeCampos = (name, value,  todosLosValores = {}) => {

    let errores = ''
    const trimmed = value.trim()


    if (value.trim() === '') {
        return 'Este campo no puede estar vacío.'
    }

    // validaciones pora el login de registro  y el paso de correo

    if (name === 'correo') {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


        if (trimmed === '') {
            errores = 'Este campo no puede estar vacío.'
        } else if (value !== trimmed) {
            errores = 'No debe haber espacios al inicio o al final.'
        } else if (!regex.test(trimmed)) {
            errores = 'El correo debe tener un formato válido, como ejemplo@dominio.com.'
        } else {
            errores = ''
        }
    }

    if (name === 'password') {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

        if (trimmed == '') {
            errores = 'Este campo no puede estar vacío.'
        } else if (value !== trimmed) {
            errores = 'No debe haber espacios al inicio o al final.'
        } else if (trimmed.length < 8) {
            errores = 'este valor debe contener minimo 8 caracteres.'
        } else if (trimmed.length > 30) {
            errores = 'este valor no puede ser tan largo.'
        } else if (!regex.test(trimmed)) {
            errores = 'La contraseña debe tener solo 1 minúscula, 1 mayúscula, 1 número y 1 símbolo.'
        } else if (/\s{2,}/.test(trimmed)) {
            errores = 'No se permiten espacios múltiples entre palabras.'
        } else {
            errores = ''
        }

    }


    // Datos personales

    if (name === 'nombre' || name === 'apellido') {
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/
        const trimmed = value.trim();

        if (trimmed === '') {
            errores = 'Este campo no puede estar vacío.'
        } else if (value !== trimmed) {
            errores = 'No debe haber espacios al inicio o al final.';
        } else if (trimmed.length <= 3) {
            errores = 'este valor es demasiado corto.'
        } else if (trimmed.length >= 30) {
            errores = 'este valor es demasiado largo.';
        } else if (!regex.test(trimmed)) {
            errores = 'Este campo solo debe contener letras y espacios.'
        } else if (/\s{2,}/.test(trimmed)) {
            errores = 'No se permiten espacios múltiples entre palabras.';
        } else {
            errores = ''
        }
    }

    if (name === 'monedaBase') {
        if (trimmed === '') {
            errores = 'Debes seleccionar una divisa.';
        } else {
            errores = '';
        }
    }


    // validacion de codigo 

    if (name === 'codigo') {

        if (trimmed === '') {
            errores = 'Todos los campos deben estar llenos.'
        } else if (value !== trimmed) {
            errores = 'No debe haber espacios al inicio o al final.';
        } else if (trimmed.length !== 6) {
            errores = 'el codigo debe de ser de 6 digitos.'
        } else {
            errores = ''
        }

    }


    //validacion de password

    if (name === 'pass1' || name === 'pass2') {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        const pass1 = todosLosValores.pass1 || ''
        const pass2 = todosLosValores.pass2 || ''

        if (trimmed === '') {
            errores = 'Este campo no puede estar vacío.';
        } else if (value !== trimmed) {
            errores = 'No debe haber espacios al inicio o al final.';
        } else if (trimmed.length < 8) {
            errores = 'Debe contener mínimo 8 caracteres.';
        } else if (trimmed.length > 30) {
            errores = 'Este valor no puede ser tan largo.';
        } else if (!regex.test(trimmed)) {
            errores = 'Debe tener al menos 1 mayúscula, 1 minúscula, 1 número y 1 símbolo.';
        } else if (/\s{2,}/.test(trimmed)) {
            errores = 'No se permiten espacios múltiples entre caracteres.';
        } else if (pass1 && pass2 && pass1 !== pass2) {
            errores = 'Ambas contraseñas deben ser iguales.';
        } else {
            errores = '';
        }
    }


    return errores
}




