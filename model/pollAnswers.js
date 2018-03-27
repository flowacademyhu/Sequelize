module.exports = (sequelize, Datatype) => {
  var PollAnswer = sequelize.define('PollAnswers', {
    poll_id: {
      type: Datatype.INTEGER
    },
    options: {
      type: Datatype.STRING
    }
  });
  return PollAnswer;
};
