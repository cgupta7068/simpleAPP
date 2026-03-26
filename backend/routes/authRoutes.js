const router = require("express").Router();
const { googleLogin, signup, login } = require("../controllers/authController");

router.post("/google-login", googleLogin);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;