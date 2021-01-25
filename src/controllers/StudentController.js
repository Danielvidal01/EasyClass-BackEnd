const Student = require('../models/Student');

module.exports={
    async Create(req,res){
        const {FirstName, LastName, Email, Password, Phone, BrithDate} = req.body;
        try {
            
        const student = await Student.create({
            FirstName,
            LastName,
            Email,
            Password,
            Phone,
            BrithDate
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
    }
}