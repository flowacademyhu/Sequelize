module.exports = (sequelize, Datatype) => {
  var Poll = sequelize.define('Polls', {
    question: {
      type: Datatype.STRING
    }
  });
  return Poll;
};
