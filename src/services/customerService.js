const db = require('../config/configdb.js');

async function getAllCustomers() {
    try{
        const [rows] = await db.query('SELECT id, name, email, city, created_at FROM customers');
        return rows;
    }catch(error){
        throw new Error('Error retrieving customers: ' + error.message);
    }
}

async function getCustomerById(id){
    try{
        const [rows] = await db.query('SELECT id, name, email, city, created_at FROM customers WHERE id = ?', [id]);
        if(rows.length===0){
            return null; //* Return null if no customer is found with the given ID
        }
    return rows[0];
    }catch(error){
        throw new Error('Error retrieving customer by ID: ' + error.message);
    }
   
}

async function createCustomer(customerData) {
  const { name, email, city } = customerData;
  try {
    const [result] = await db.query(
      'INSERT INTO customers (name, email, city) VALUES (?, ?, ?)',
      [name, email, city]
    );

    return {
      id: result.insertId,
      name,
      email,
      city
    };
  } catch (error) {
    throw new Error(`Error al insertar cliente: ${error.message}`);
  }
}

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer
};