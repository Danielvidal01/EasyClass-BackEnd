const { create } = require('../models/Student')
const Student = require('../models/Student')
const Subject = require('../models/Subject');
const { ShowSubject } = require('./StudentController');


module.exports={
    async Create(req,res){
        const {studentId}=req.params;
        const {Name, Description} = req.body;

        const student = await Student.findByPk(studentId);

        if(!student){
            return res.status(400).json({error:'user not found'})
        }
        const [subject,created] = await Subject.findOrCreate({
            where:{Name,Description}
        })
        await student.addSubject(subject);
        return res.json(subject)
    },
    async Show(req,res){
        const subjects = await Subject.findAll();
        return res.json(subjects)
    }
}