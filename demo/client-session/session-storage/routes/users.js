var express = require("express");
var router = express.Router();
var User = require("../model/User.js");

/**
 * This application is willingly not secured... Security holes will be in a new app resolved.
 */

/* GET user list*/
router.get("/", function (req, res, next) {
  console.log("GET users/", "params:", req.query, " list:", User.list);
  //if (req.session.isAuthenticated) {
  if (req.query.username)
    if (User.isUser(req.query.username)) return res.json(User.list);
  return res.status(401).send("You are not authentified.");
});

/* POST user data for authentication */
router.post("/login", function (req, res, next) {
  let user = new User(req.body.email, req.body.email, req.body.password);
  console.log("POST users/login:", User.list);
  if (user.checkCredentials(req.body.email, req.body.password)) {
    // manage session data
    //req.session.isAuthenticated = true;
    //req.session.user = req.body.email;
    return res.json({ username: req.body.email });
  } else {
    return res.status(401).send("bad email/password");
  }
});

/* POST a new user */
router.post("/", function (req, res, next) {
  console.log("POST users/", User.list);
  console.log("email:", req.body.email);
  if (User.isUser(req.body.email)) return res.status(409).end();
  let newUser = new User(req.body.email, req.body.email, req.body.password);
  newUser.save();

  // manage session data
  //req.session.isAuthenticated = true;
  //req.session.user = req.body.email;
  return res.status(200).send({ username: req.body.email });
});

/* GET user object from username */
router.get("/:username", function (req, res, next) {
  console.log("GET users/:username", req.params.username);
  const userFound = User.getUserFromList(req.params.username);
  if (userFound) {
    return res.json(userFound);
  } else {
    return res.status(404).send("ressource not found");
  }
});

/* GET logout */
/* Session is fully managed at client side 
router.get("/logout", function (req, res, next) {
  console.log("GET users/logout");
  if (req.session.isAuthenticated) {
    req.session.destroy(function (err) {
      // cannot access session here
      if (err) return console.error("Error in session destroy:", err);
      return res.status(200).end();
    });
  }
});*/

module.exports = router;
