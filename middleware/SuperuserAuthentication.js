const superUserAuthentication = (req, res, next) => {
  console.log("superUserAuthentication called");
  next();
};

module.exports = superUserAuthentication;
