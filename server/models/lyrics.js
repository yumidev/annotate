module.exports = function(sequelize, DataTypes) {
    var Lyrics = sequelize.define("Lyrics", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        singer: {
            type: DataTypes.STRING,
        }
    }, {
       tableName: 'Lyrics'
    });

    return Lyrics;
}
