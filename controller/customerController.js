
/*module.exports = class CustomerController {

    constructor(app) {
        this.initController(app);
    }

    initController(app) {
        app.get("/api/customer", (req,res) => {
            res.send({
                "firstName" : "Subbu",
                "lastName" : "Palani"
            })
        });
    }


}*/
//baseurl : api/customer
const express = require("express");
const router = express.Router();
const CustomerDAL = require("./../../MongoDAL").customerDal;
router.get("/", async (req,res) => {
    const custDAL = new CustomerDAL();
    const result = await custDAL.getCustomerData();
    console.log("First");
    res.send(result);   
});

router.post("/" , (req,res) => {
    const custDAL = new CustomerDAL();
    custDAL.addNewCustomer(req.body);
    res.sendStatus(200);
});

module.exports = router;