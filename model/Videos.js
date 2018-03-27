module.exports = (sequelize, Datatype) => {
  var Video = sequelize.define('Videos', {
    url: {
      type: Datatype.STRING
    },
    length: {
      type: Datatype.INTEGER
    },
  
    quality: {
      type: Datatype.ENUM('144p','240p','360p','480p','720p','1080p','1440p','2160p','4320p')
    },
  
    format: {
      type: Datatype.ENUM('avi','mp4','mkv','webm','flv','wmv','3gp')
    }
  });

  return Video;
};
