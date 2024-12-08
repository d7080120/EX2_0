const express=require("express")
const router=express.Router()
const {pepoles}=require("../data")

router.get("/",(req,res)=>{
    res.json(pepoles)
})

router.get("/:id",(req,res)=>{
    const {id}=req.params;
    const pepole=pepoles.find((pepole)=>{ return pepole.id===Number(id)})
    res.json(pepole)
})

router.post("/",(req,res)=>{
    const pepole=req.body;
    console.log(pepole);
    const newpepoles=[...pepoles,pepole]
    res.json(newpepoles)
})

router.put("/",(req,res)=>{
    const pepole=req.body;
    const newpepoles=pepoles.map(apepole=>{
        if (apepole.id===pepole.id)
            return pepole
        return apepole
    })
    res.json(newpepoles)
})

router.delete("/",(req,res)=>{
    const id=req.body;
    const newpepoles=pepoles.filter(apepole=>{
        return apepole.id!=id.id
    })
    res.json(newpepoles)
})
module.exports=router