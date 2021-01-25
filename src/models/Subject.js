const {sequelize, DataTypes, Model} = require('sequelize');

class Subject extends Model{
    static init(sequelize){
        super.init({
            Name:DataTypes.STRING,
            Description:DataTypes.STRING
        },{sequelize})
    }
    static associate(models){
        this.belongsToMany(models.Student,{foreignKey:'subjectId',through:'StudentSubjects', as :'Student'})
    }
}

module.exports=Subject;