
exports.isLoggedin = ((req, res, done) => {
    if (!req.isAuthenticated()) {
      res.status(401).send('Unauthorized');
    } else {
      done();
    }
  });
  