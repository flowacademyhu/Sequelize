module.exports = (sequelize, Datatype) => {
  var poll = sequelize.define('Polls', {
    question: {
      type: Datatype.STRING
    }
  });
  return poll;
};
