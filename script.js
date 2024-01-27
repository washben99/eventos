let coche1 = {
    color: 'verde',
    marca: 'BMW',
    caballos: '150'
}
let coche2 = {
    colores: ['naranja','azul','gris','negro'],
    marca: 'audi',
    caballos: '160',
    coche: function(){
        return "Vendi un coche"
    }
}


console.log(coche2());
