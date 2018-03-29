module.exports = (sequelize, Datatype) => {
  var Poll = sequelize.define('Poll', {
    question: {
      type: Datatype.STRING
    }
  });
  return Poll;
};
