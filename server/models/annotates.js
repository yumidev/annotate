module.exports = function(sequelize, DataTypes) {
    var Annotates = sequelize.define("Annotates", {
        comment: {
            type: DataTypes.TEXT,
            defaultValue: false,
            allowNull: false
        },
        lineNumber: {
            type: DataTypes.INTEGER,
        },
        songId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'lyrics',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
    }, {
        tableName: 'annotates'
    });
    
    return Annotates;
};
