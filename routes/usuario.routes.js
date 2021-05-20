const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuario.controller");

router.get("/:id", usuarioController.getUserById);
router.post("", usuarioController.createNewUser);
router.put("", usuarioController.editUser);
router.delete("", usuarioController.deleteUser);

module.exports = router;
