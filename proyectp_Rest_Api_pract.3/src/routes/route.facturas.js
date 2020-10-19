const express = require('express');
const router = express.Router();

const db = require('../database');

router.get('/Factura', (req,res) => {
    
    db.query('select * from Factura', (err,rows) => {
        if(!err){
            res.json(rows);
        }else{
            res.json('Error al traer los datos de a tabla Factura');
        }
    });

     //res.json('haciendo uso de la ruta a traves del metodo GET');

});

//esta ruta elimina un cliente
router.delete('/Factura/:codigo', (req,res) => {
    var id = req.params.codigo;
    db.query('delete from Factura where id_factura = ?',[id]);

    res.json('se eliminaran las Facturas');

});

//esta ruta guardara los clientes
router.post('/Factura', (req,res) => {

    const unaFactura = req.body;
    db.query('insert into Factura set ?',[unaFactura]);
    
    res.json('se inserto un cliente exitosamente');
});


//esta ruta actualizara los cliente
router.put('/Factura/:codigo', (req,res) => {

    const id = req.params.codigo;

    const unaFactura = req.body;

    db.query('update Factura set ? where id_factura = ?',[unaFactura,id]);
    console.log(id);
    console.log(unaFactura);
    res.json('aca se actualizaran las Facturas');
});

router.get('/Factura/:codigo',(req,res) => {

    const id = req.params.codigo;

    db.query('select * from Factura where id_factura = ?',[id],(err,rows) => {
        if(!err)
        {
            res.json(rows);
        }else{
            res.json('ocurrio un error. necesita revicion!')
        }
    });
});

module.exports = router;