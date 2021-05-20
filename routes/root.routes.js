const express = require("express");
const router = express.Router();

router.get("",(req, res) => {
	res.status(200).json({ msg: "Hola mundo desde ruta raiz mediante GET" });
});

router.post("",(req, res) => {
	console.log(req.body.hobbies);
	if (!req.body.usuario) {
		res.status(400).json({ msg: "Falta un usuario" });
	} else {
		res.status(200).json({ msg: "Todo OK" });
	}
});

router.put("",(req, res) => {
	res.json({ msg: "Hola mundo desde ruta raiz mediante PUT" });
});

router.delete("",(req, res) => {
	res.json({ msg: "Hola mundo desde ruta raiz mediante DELETE" });
});

module.exports = router;
