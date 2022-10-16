const  config = require('./db');
const  sql = require('mssql');



async  function  getClienti() {
  try {
    let  pool = await  sql.connect(config);
    let  clienti = await  pool.request().query("SELECT TOP 10 * from Clienti");
    return  clienti.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getCliente(clienteId) {
  try {
    let  pool = await  sql.connect(config);
    let  cliente = await  pool.request()
    .input('input_parameter', sql.VarChar, clienteId)
    .query("SELECT * from Clienti where Denominazione = @input_parameter");
    return  cliente.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addCliente() {
  try {
    let  pool = await  sql.connect(config);
    let  insertCliente = await  pool.request()
    .input('Id', sql.Int, order.Id)
    .input('Cap', sql.NVarChar, order.Cap)
    .input('Note', sql.NVarChar, order.Note)
    .input('CategoriaCliente', sql.NVarChar, order.CategoriaCliente)
    .input('Denominazione', sql.NVarChar, order.Denominazione)
    .execute('InsertOrders');
    return  insertCliente.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}



module.exports = {
  getCliente:  getCliente,
  getClienti:  getClienti,
  addCliente:  addCliente
}