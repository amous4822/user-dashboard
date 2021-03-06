const express = require("express");
const auth = require("../middleware/auth");
const validation = require("../middleware/userValidator");
const alertValidation = require("../Validations/alertValidation");
const Alerts = require("../models/Alerts");
const router = express.Router();

/**
 * @route   POST api/alert
 * @desc    add an alert entry
 * @access  private  */

router.post("/", [auth, validation(alertValidation)], async (req, res) => {
  try {
    const { name, email, criteria1, value, days, criteria2 } = req.body;
    const alert = new Alerts({
      user: req.user.id,
      name,
      email,
      criteria2,
      days,
      criteria1,
      value,
    });

    const result = await alert.save();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "server error" });
  }
});

/**
 * @route   GET /api/alert
 * @desc    retreive all the alerts set by the user
 * @access  private  */

router.get("/", auth, async (req, res) => {
  try {
    const alert = await Alerts.find({ user: req.user.id }).sort({ name: 1 });
    res.send(alert);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "server error" });
  }
});

/**
 * @route   DELETE api/alert/:id
 * @desc    delete an alert
 * @access  private  */

router.delete("/:id", auth, async (req, res) => {
  try {
    let alert = await Alerts.findById(req.params.id);
    if (!alert) {
      return res.status(404).json({ msg: "alert not found" });
    }

    //to check if some other user knowing id parameter of a contact doesn't update the contact without being it's owner.
    if (alert.user.toString() !== req.user.id) {
      return res.status(404).json({ msg: "invalid authorization" });
    }

    await Alerts.findByIdAndRemove(req.params.id);
    res.json({ msg: "Alert removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "server error" });
  }
});

module.exports = router;
