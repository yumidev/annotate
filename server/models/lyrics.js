module.exports = function(sequelize, DataTypes) {
    var Lyrics = sequelize.define("Lyrics", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artist: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.TEXT
        }
    }, {
       tableName: 'lyrics'
    });

    return Lyrics;
}
