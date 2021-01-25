const {DataTypes, Sequelize, Model} =  require('sequelize');

class Student extends Model {
    static init(sequelize){
        super.init({
            FirstName:DataTypes.STRING,
            LastName:DataTypes.STRING,
            Email:DataTypes.STRING,
            Password:DataTypes.STRING,
            Phone:DataTypes.STRING,
            BrithDate:DataTypes.STRING,
        },
        {sequelize})
    }
    static associate(models){
        this.belongsToMany(models.Subject,{foreignKey:'studentId',through:'StudentSubjects', as :'Subject'})
    }
};

module.exports = Student;