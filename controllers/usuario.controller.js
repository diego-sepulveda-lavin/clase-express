exports.getUserById = (req, res) => {
	res
		.status(200)
		.json({ msg: `Hola desde /usuario/${req.params.id} mediante GET` });
};

exports.createNewUser = (req, res) => {
	res.status(200).json({ msg: "Hola desde /usuario mediante POST" });
};

exports.editUser = (req, res) => {
	res.json({ msg: "Hola desde /usuario mediante PUT" });
};

exports.deleteUser = (req, res) => {
	res.json({ msg: "Hola desde /usuario mediante DELETE" });
};
