const Actor = require('../models/Actor');
const Movie = require('../models/Movie');

const addActor = async(req, res) => {
   try {
     await Actor.create(req.body);
     res.status(201).json({message:"Actor Created"});
   } catch (error) {
    console.log(error);
    res.status(500).json({error:"Internal server error"});
   }
}


const getAllActors = async(req, res)=> {
    try {
        const actors = await Actor.find({});
        res.status(200).json(actors);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}


const deleteActor = async(req, res)=> {
    try {
        const actor = await Actor.findById(req.params.id);
        if(!actor) {
            res.status(404).json({error:"Actor not found"});
        }
        const associatedActor = await Movie.find({actors:actor._id});
        console.log(associatedActor);
        if(associatedActor.length > 0) {
            return res.status(200).json({message:"Actor is associated with movies"});
        }
        await Actor.findOneAndDelete(req.params.id, {lean:true});
        res.status(200).json({message:"Actor deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
}


module.exports ={
    addActor,
    getAllActors,
    deleteActor
}