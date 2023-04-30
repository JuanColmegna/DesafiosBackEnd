class ProductManager {

    constructor(){
        this.products = [];
    }

    getProducts(){
        console.log(this.products);
        return this.products;
    }

    #generateID(){
        let newId = this.products.length;
        return newId;
    }

    #verificationProducts(newProduct) {
        return Object.values(newProduct).some(values=> values === null || values === undefined || values === '');
    }

    #verificationCode(code){
        return this.products.map(value => value.code !== code);
    }

    getProductsById(id){
        let searchProduct = this.products.find((value)=>{
            if (value.id == id){
                return value;
            } 
            if (searchProduct == undefined) {
                return console.log('not found');
            }  else {
                console.log(searchProduct);
                return searchProduct
            }
        })
    }

    addProduct(title, description, price, thumbmail, code, stock){
        let newProduct = {
            title : title,
            description : description,
            price : price,
            thumbmail : thumbmail,
            code : code,
            stock : stock,
        }
        
        const verification = this.#verificationProducts(newProduct);
        if(this.products.length == 0){
            
            verification ? '' : newProduct = {newProduct, id: 0};

            verification ? '' : this.products.push(newProduct);

            let respuesta = verification ? 'Favor de llenar todos los parametros' : 'Registro exitoso';

            console.log(respuesta);

            return respuesta;
        } else {
            let verifCode = this.#verificationCode(newProduct.code);

            let okProduct = !verification && verifCode;
                if (okProduct){
                    newProduct = {
                        ...newProduct, id: this.#generateID()
                    };
                    this.products.push(newProduct);
                    console.log('Registro Exitoso');
                } else {
                    console.log('El producto ya está registrado');
                }
        }
    }
}