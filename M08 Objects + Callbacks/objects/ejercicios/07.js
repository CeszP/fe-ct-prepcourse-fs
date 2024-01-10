// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.
let acceso
const objetoAnidado = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: {
                    propiedad4: "valor4", 
                    propiedad5: "valor5", 
                    propiedad6: {propiedad9: () => "valor7"}                    
                }
};

module.exports = objetoAnidado;
