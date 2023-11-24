const validationEmail = (email) => {
  var reg = new RegExp(
    /^[^0-9][a-zA-z0-9_]+([.][a-zA-z0-9_]+)*[@][a-zA-z0-9_]+([.][a-zA-z0-9_]+)*[.][a-zA-Z]{2,4}$/i
  );
  return reg.test(email);
};

module.exports = validationEmail;
