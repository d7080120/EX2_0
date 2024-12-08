const express=require("express")
const router=express.Router()
const {wars}=require("../data")

router.get("/",(req,res)=>{
    res.json(wars)
})

router.get("/:id",(req,res)=>{
    const {id}=req.params;
    const war=wars.find((war)=>{ return war.id===Number(id)})
    res.json(war)
})

router.post("/",(req,res)=>{
    const war=req.body;
    console.log(war);
    const newWars=[...wars,war]
    res.json(newWars)
})

router.put("/",(req,res)=>{
    const war=req.body;
    const newWars=wars.map(awar=>{
        if (awar.id===war.id)
            return war
        return awar
    })
    res.json(newWars)
})

router.delete("/",(req,res)=>{
    const id=req.body;
    const newWars=wars.filter(awar=>{
        return awar.id!=id.id
    })
    res.json(newWars)
})
module.exports=router