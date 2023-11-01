
const Technician = require('../models/Technician');

const addTechnician = async(req, res)=> {
  try {
      await Technician.create(req.body);
      res.status(201).json({message:"Technician Created"});
  } catch (error) {
     console.log(error);
     res.status(500).json({error:"Internal server error"});
  }
}


const getAllTechnicians = async(req, res)=> {
    try {
        const technicians = await Technician.find({});
        res.status(200).json(technicians);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}


module.exports = {
    addTechnician,
    getAllTechnicians
}