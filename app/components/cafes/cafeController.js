const CafeController = {}
let Cafe = require('./cafe')

CafeController.create = async(req, res) =>{
    try {
        const cafe = new Cafe({
            name: req.body.name
        })
        cafe.save()

        res.status(200).json({message:"Created cafe successfully"})
    }catch(ex){
        console.log(ex)
    }
}

module.exports = CafeController