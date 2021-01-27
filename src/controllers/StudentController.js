const Student = require('../models/Student');
const bcrypt = require('bcrypt');

module.exports={
    async Create(req,res){
        const {FirstName, LastName, Email, Password, Phone, BrithDate} = req.body;

        const hash = await bcrypt.hash(Password,10)

        try {
            
        const student = await Student.create({
            FirstName:FirstName,
            LastName:LastName,
            Email:Email,
            Password:hash,
            Phone:Phone,
            BrithDate:BrithDate,
        })
        return res.json(student)

        } catch (error) {
        return res.status(401).send(error)
        }
    },


    async ShowSubject(req,res){
        const {studentId} = req.params;

        const student = await Student.findByPk(studentId,{include:{association:'Subject'}});
        if(!student){
            return res.status(400).json({error:'user not found'})
        }
        return res.json(student)
    },
    async Login(req,res){
        const {Email,Password} = req.body;
        const student = await Student.findOne({where:{Email:Email}});
        if(student){
            const validPass = await bcrypt.compare(Password, student.Password)
            if(validPass){
                return res.status(200).json(student)
            }else{
                return res.json({error:'wrong password!'})
            }
        }else{
            return res.status(400).json({error:'user not found'})
        }
    }

    
}