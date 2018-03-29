module.exports = (sequelize, Datatype) => {
  var pollAnswer = sequelize.define('PollAnswers', {
    poll_id: {
      type: Datatype.INTEGER
    },
    options: {
      type: Datatype.STRING
    }
  });
  return pollAnswer;
};
