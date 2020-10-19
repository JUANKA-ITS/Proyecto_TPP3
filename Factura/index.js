const app = new Vue({

    el:"#principal",
    
data:{
    
    nombre_cliente:'',
    nombre_producto:'',
    iva:'',
    cantidad:0,
    subtotal:'',
    total:null,
    forma_pago:'',
    lista_facturas:[],
    id_factura:null,
    facturas_busqueda:null,
},
    
methods:{
    
    borrarDatos()
    {
        this.nombre_producto = '';
        this.nombre_cliente = '';
        this.iva = '';
        this.cantidad = '';
        this.subtotal = '';
        this.total = '';
        this.forma_pago = '';
    },
    
    listarFacturas(){
    
    axios.get('http://localhost:3000/Factura').then(resultado => {
    
    this.lista_facturas = resultado.data;
    
    });
    
    },
    
    eliminarFacturas(codigo_facturas){
    
        axios.delete('http://localhost:3000/Factura/'+codigo_facturas).then( resultado => {
        alert('resultado.data');
        this.listarFacturas();
    });
    },
    
    guardarFacturas()
    {
        let unaFacturas = {
        nombre_cliente: this.nombre_cliente,
        nombre_producto: this.nombre_producto,
        iva: this.iva,
        cantidad: this.cantidad,
        subtotal: this.subtotal,
        total: this.total,
        forma_pago: this.forma_pago,
    }
    axios.post('http://localhost:3000/Factura',unaFacturas).then( resultado => {
        alert(resultado.data);
        this.listarFacturas();
        console.log(resultado);
        this.borrarDatos();
        
    });
    
    },
    
    buscarFacturas()
    {
        axios.get('http://localhost:3000/Factura/'+this.facturas_busqueda).then( resultado => {
        this.lista_facturas = resultado.data;
    });
    },
    
    editarFacturas(id_factura,nombre_producto,nombre_cliente,iva,cantidad,subtotal,total,forma_pago){
    
        this.nombre_producto = nombre_producto;
        this.nombre_cliente = nombre_cliente;
        this.iva = iva;
        this.cantidad = cantidad;
        this.subtotal = subtotal;
        this.total = total;
        this.forma_pago = forma_pago;
        this.id_factura = id_factura;
    
    },
    
    async actualizarFacturas(){
        let unaFacturas = {
        nombre_producto: this.nombre_producto,
        nombre_cliente: this.nombre_cliente,
        iva: this.iva,
        cantidad: this.cantidad,
        subtotal: this.subtotal,
        total: this.total,
        forma_pago: this.forma_pago
    }
    await axios.put('http://localhost:3000/Factura/'+this.id_factura,unaFacturas).then( resultado => {
    
        //alert(resultado.data);
        this.listarFacturas();
        this.borrarDatos();
    });
    
    }
    
    },
    
    created:function() 
    
    {
    this.listarFacturas();
    
    }
    
    });