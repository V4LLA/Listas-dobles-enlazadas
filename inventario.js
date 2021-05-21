class Inventario{
    constructor(){
        this.inicio= null; 
    }

    agregar(nuevo){
        if(this.inicio=== null)
            this.inicio= nuevo; 
          else{
            let t= this.inicio;
            if(nuevo.id<t.id){
              nuevo.siguiente= t;
              t.anterior= nuevo;
              this.inicio= nuevo;
            }
            else{
              while (t.id<nuevo.id && t.siguiente!= null){
              t= t.siguiente;
              }
              if (nuevo.id<t.id){
                nuevo.siguiente= t;
                nuevo.anterior= t.anterior;
                t.anterior.siguiente= nuevo;
                t.anterior= nuevo;
              }
              else{
              t.siguiente= nuevo;
              nuevo.anterior= t;
              }
            }
          }
        }
    listar(){
        let t= this.inicio;
        let res='';
        if (t!= null){
            res += t.infoTabla() 
            t= t.siguiente;
        }
        return res;
    }

    buscar(id){
            let t= this.inicio;
            while(t!=null){
              if (id==t.id)
                return t;
              else
                t=t.siguiente;
            }
            return null;
          }
        
    eliminar(id){
           //destructores
      if (this.inicio!=null){
        if (this.inicio.id==id)
          this.inicio=this.inicio.siguiente;
        else{
          let t=this.inicio;
          while( t.siguiente!=null){
            if (t.siguiente.id==id){
              t.siguiente=t.siguiente.siguiente;
              return true;
            }
            else
              t=t.siguiente;
          }
          return false;
        }
    }
}
}