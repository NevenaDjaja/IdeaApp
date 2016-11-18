var middleware = {
  requireAuthentication: function(req, res, next) {
    console.log('private route hit');
    next();
  },
  logger: function(req, res, next) {
    var now = new Date().toString()
    console.log('Request:',req.method, req.originalUrl, now);
    next();
  }
};

module.exports = middleware;
