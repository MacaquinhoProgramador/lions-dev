
const express = require("express")
const router = express.Router()
const controllers = require('../controllers/controllers')

router.post("/",controllers.criarFicha);
router.get("/", controllers.listarFichas);
router.put("/:id", controllers.editarFicha);
router.delete("/:id", controllers.deletarFicha);

module.exports = router;