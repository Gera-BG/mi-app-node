const customerService = require('../services/customerService');

async function getAllCustomers(req, res){
    try{
        const customer = await customerService.getAllCustomers();
        return res.json({succes: true, data: customer});
    }catch(error){
        return res.status(500).json({succes: false, error: error.message});
    }
}

async function getCustomerById(req,res){
    const {id} = req.params;

    try{
        const customer = await customerService.getCustomerById(id);
        if (!customer) {
        return res.status(404).json({
            success: false,
            error: `Cliente con ID ${id} no encontrado`
        });
        }
        return res.json({succes: true, data: customer});
    }catch(error){
        return res.status(500).json({succes: false, error: error.message});
    }
}

async function createCustomer(req, res) {
  const { name, email, city } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      error: 'Campos requeridos faltantes: "name" y "email"'
    });
  }

  try {
    const newCustomer = await customerService.createCustomer({ name, email, city });
    return res.status(201).json({ success: true, data: newCustomer });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

module.exports= {
    getAllCustomers,
    getCustomerById,
    createCustomer  
};