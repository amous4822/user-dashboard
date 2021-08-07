const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/default.json");
const Users = require("../models/Users");
const validator = require("../middleware/userValidator");
const userSchema = require("../Validations/userValidation");
/**
 * @route   POST api/users
 * @desc    register a user
 * @access  public  */

router.post("/", validator(userSchema) ,async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await Users.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: " Email already in use" });
    }

    user = new Users({
      name,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.jwtsecret,
      {
        expiresIn: 40000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    res.status(500).json({ msg: "server error" });
    console.log("error in user registeration ", error.message);
  }
});

router.get("/", (req, res) => {
  res.send("bitcch");
});

module.exports = router;
