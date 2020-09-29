   
new Vue({
    el: "#comput",
    data: {
        mensaje: "",
        offsetCesar: 3,
        encriptadoCesar: "",
        frutas: [{
            nombre: "Manzana",
            precio: 1.4,
            peso: 300
        }, {
            nombre: "Naranja",
            precio: 0.9,
            peso: 280
        }, {
            nombre: "Platano",
            precio: 1.9,
            peso: 350
        }, {
            nombre: "Piña",
            precio: 2.6,
            peso: 780
        }],
        orden: "desc",
        columna: "precio"
    },
    computed: {
        reverse: function() {
            return this.mensaje.split("").reverse().join("");
        },
        mayusculas: function() {
            return this.mensaje.toUpperCase();
        },
        cifradoCesar: function() {
            var _texto = "";
            var _off = parseInt(this.offsetCesar);
            for (var cont = 0; cont < this.mensaje.length; cont++)
                _texto += String.fromCharCode(this.mensaje.charCodeAt(cont) + _off);

            this.encriptadoCesar = _texto;
        },
        precioFruta: function() {
            var _this = this;
            return this.frutas.sort(function(a, b) {
                if (_this.orden === "asc")
                    return a[_this.columna] > b[_this.columna];
                else
                    return b[_this.columna] > a[_this.columna];
            })
        },

    },
    methods: {
        orderBy: function(ord, col) {
            this.columna = col;
            if (ord == "+") {
                this.orden = "asc";
            } else {
                this.orden = "desc";
            }
        }
    }
});
Vue.filter("Reverse", function(valor) {
    return valor.split("").reverse().join("");
});
Vue.filter("Mayusculas", function(valor) {
    return valor.toUpperCase();
})
new Vue({
    el: "#filtros",
    data: {
        buscarComunidad: "",
        comunidades: [
        'Guerrero',
        'Aguascalientes',
        'Campeche',
        'Cancún',
        'Celaya',
        'Chetumal',
        'Chihuahua',
        'Chilpancingo',
        'Ciudad del Carmen',
        'Ciudad Obregón',
        'Ciudad Victoria',
        'Coatzacoalcos',
        'Colima-Villa de Álvarez',
        'Cuautla',
        'Cuernavaca',
        'Culiacán',
        'Cárdenas',
        'Córdoba',
        'Durango',
        'Ensenada',
        'Guadalajara',
        'Guanajuato',
        'Guaymas',
        'Hermosillo',
        'Irapuato'

        ]
    },
    computed: {
         filtroComunidades: function() {
            var _this = this;
            return this.comunidades.filter(function(com) {
                return com.indexOf(_this.buscarComunidad) >= 0;
            })
        }
    }
});