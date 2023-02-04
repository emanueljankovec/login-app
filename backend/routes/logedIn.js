const router = require("express").Router();
const { User } = require("../models/modelUser");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.query.email });
        res.status(200).send({
            data: user,
            message: "Logged in successfully",
        });
    } catch (error) {
        res.send({ message: error });
    }
});

module.exports = router;
