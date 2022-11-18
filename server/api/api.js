const { Router, response } = require('express')
const users = require('../models/users')
const router = Router()
const user = require('../models/users')
const prod = require('../models/products')



router.get('/users', async (req, res) => {
    const users = await user.find()
    console.log(Date.now())
    res.send(users)
   
})
router.post('/login', async (req, res) => {
    
    const { name, pass } = req.body
    const user = await users.findOne({ name, pass })

    if (!user) {
        res.send(false)
    }
    else {
        res.send(user)
    }
})


router.post('/userById', async (req, res) => {
    const user = await users.findById(req.body._id)

    res.send(user)
})

router.post('/registr', async (req, res) => {
    const check = await users.findOne({ name: req.body.name })
    if (check) {
        res.send(false)
    } else {
        const NewUser = new user({
            name: req.body.name,
            pass: req.body.pass
        })

        await NewUser.save(async (err) => {
            if (err) {
                res.send(false)
            } else {
                const usep = await user.findOne({ name: req.body.name, pass: req.body.pass })
                res.send(usep)
            }

        })
    }

})
router.get('/products', async(req,res)=>{

    res.send(await prod.find())

})
router.post('/productById', async(req,res)=>{
    res.send(await prod.findOne({_id:req.body._id}))
})
router.post('/addToCard', async(req,res)=>{
    let userf = await user.findOne({_id:req.body._id})

    let hasThis = false;
    let ind = 0;

    for(let i =0; i < userf.korz.items.length;i++){

        if(userf.korz.items[i]._id==req.body.prod._id){
            hasThis = true
            ind = i
        }
    }
    
    if(hasThis){
        userf.korz.items[ind].count++
    }else{
        userf.korz.items.push(req.body.prod)
    }
    
    await userf.save((err)=>{
        if(err){
            console.log(err)
        }
            
        
        res.send(true)
    })
    
})
router.post('/addToShop', async function(req,res){
    const {name, about, cost} = req.body
    const NewProd = new prod({
        name:name,
        about:about,
        cost:cost
    })
    NewProd.save((err)=>{
        if(err){
            res.send(false)
        }
        else{
            res.send(true)
        }
    })
})

router.post('/EditKorz', async(req,res)=>{
    let FUser = await user.findOne({_id:req.body._id})
    FUser.korz.items = req.body.card
    FUser.save()
})
module.exports = router