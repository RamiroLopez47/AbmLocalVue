const app = new Vue({

    el: '#app0',
    data: {
        titulo: 'Ejercicio de práctica',
        datos: [],
        persona: {
            
            nombre: '',
            apellido: '',
            edad: '',
            dni: '',
            domicilio: '',
        },
        nuevaPersona: '',
    },
    methods: {
        agregarDatos: function () {

            this.datos.push({
                valores : this.persona
            });

            this.nuevaPersona = '';
            localStorage.setItem('EjemploVue', JSON.stringify(this.datos));
        },
        editarDatos: function (index) {
           

            this.datos.splice(index,1,{valores : this.persona});            

            localStorage.setItem('EjemploVue', JSON.stringify(this.datos));
        },
        eliminarDatos: function (index) {
            this.datos.splice(index, 1);

            localStorage.setItem('EjemploVue', JSON.stringify(this.datos));
        }
    },
    created: function () {
        let datosDB = JSON.parse(localStorage.getItem('EjemploVue'));
        if (datosDB === null) {
            this.datos = [];
        } else {
            this.datos = datosDB;
        }
    },
    

});