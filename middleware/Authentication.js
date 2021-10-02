const authentication = (req, res, next) => {
  console.log("authentication called");
  next();
};

module.exports = authentication;
