module.exports = (req, res, next) => {
  const { collectionName } = req.params;
  if (["Character", "Film", "Planet"].includes(collectionName)) {
    return next();
  } else {
    throw Error("Invalid Model");
  }
};
