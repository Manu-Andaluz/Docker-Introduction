const { Router } = require("express");
const collection = require("../database/index");
const { validateModel } = require("../middleware/index");

const router = Router();

router.get("/:collectionName", validateModel, async (req, res) => {
  const name = req.params.collectionName;
  const response = await collection[name].list();

  res.status(200).send(response);
});

router.get("/:collectionName/:id", validateModel, async (req, res) => {
  const name = req.params.collectionName;
  const id = req.params.id;

  const response = await collection[name].get(id);

  res.status(200).send(response);
});

router.post("/:collectionName", validateModel, async (req, res) => {
  const name = req.params.collectionName;
  const data = req.body;

  const response = await collection[name].upsert(data);

  res.status(201).send(response);
});

module.exports = router;
