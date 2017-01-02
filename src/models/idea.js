module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idea', {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 500]
      }
    }
  });
};
