class Producto{
    constructor(id,nombre,cantidad,precio){
        this.id=id;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
        this.siguiente= null;
        this.anterior= null;
    }
    info(){  
        return this.id + this.nombre + this.cantidad + this.precio;
    }

    infoHtml(){
        return `<div>
                    <h2>ID:${this.id}</h2>
                    <p>Nombre:${this.nombre}</p>
                    <p>Cantidad:${this.cantidad}</p>
                    <p>Precio:${this.precio}</p>
                </div>`;
    }

    infoTabla(){
        return `<table>
        <td> <strong>ID</strong> <br> ${this.id}</td>
        <td> <strong>Nombre</strong> <br> ${this.nombre}</td>
        <td> <strong>Cantidad</strong> <br> ${this.cantidad}</td>
        <td> <strong>Precio</strong> <br> ${this.precio}</td>
        </table>`;
    }
}