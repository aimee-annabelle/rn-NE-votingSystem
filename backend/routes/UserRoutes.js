const { request } = require("express");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Create new user.
 *     tags:
 *       - user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *               email:
 *                  type: string
 *                  description: The user's email.
 *                  example: example@gmail.com
 *               nid:
 *                  type: string
 *                  description: User nid.
 *                  example: nid
 * 
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Requests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                    
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
 *                     
 *                     email:
 *                       type: string
 *                       description: The user's email.
 *                       example: example@gmail.com
 * 
 *                     nid:
 *                      type: string
 *                      description: The user's nid.
 *                      example: nid
 */


router.post("/register", (req, res) => {

    User.find({ email: req.body.email })
        .then(async(result) => {
            if (Object.keys(result).length != 0) {
                res.status(400).json({ error: "Email taken", message: "user wasn't registered" })
            } else {
                const salt = await bcrypt.genSalt(10);
                const nid = await bcrypt.hash(req.body.nid, salt);

                newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    phone:req.body.phone,
                    nid: nid
                })

                newUser.save()
                    .then((result) => {
                        res.status(200).json({ data: result, message: "user created" });
                    })
                    .catch((err) => {
                        res.status(400).json({ error: err })
                    })
            }
        })
})


/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login.
 *     tags:
 *       - user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                  type: string
 *                  description: The user's email.
 *                  example: example@gmail.com
 *               nid:
 *                  type: string
 *                  description: User nid.
 *                  example: nid
 * 
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Requests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                    
 *                     
 *                     email:
 *                       type: string
 *                       description: The user's email.
 *                       example: example@gmail.com
 * 
 *                     nid:
 *                      type: string
 *                      description: The user's nid.
 *                      example: nid
 */

router.post("/login", (req, res) => {
    const pass = req.body.nid;
    User.find({ email: req.body.email })
        .then(async(result) => {

            if (Object.keys(result).length === 0) {
                res.status(404).json({ error: "User not found" });
            } else {
                if (bcrypt.compare(pass, result[0].nid)) {
                    const user = result[0];
                    const token = jwt.sign({ name: user.name, email: user.email },
                        "trial", { expiresIn: "6h" });

                    res.status(200).json({ token: token, message: "valid" });
                } else {
                    res.status(400).json({ message: "invalid" });
                }
            }
        })
        .catch((err) => {
            res.status(400).json({ error: err });
        })
})




module.exports = router;