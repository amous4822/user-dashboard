const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const config = require("../config/default.json");
const validation = require("../middleware/userValidator");
const loginValidation = require("../Validations/loginValidation");
/**
 * @route   POST api/auth
 * @desc    login the user and provide auth
 * @access  public  */

router.post("/", validation(loginValidation), async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "invalid credentials" });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "invalid credentials" });
    }

    jwt.sign(
      payload,
      config.jwtsecret,
      {
        expiresIn: 3600,
      },
      (er, token) => {
        if (er) throw er;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(400).send("Server Error");
    console.log("error in auth.js:", err.message);
  }
});

/**
 * @route   GET api/auth
 * @desc    get the authorized user data to frontend
 * @access  private  */

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
