const express = require('express');
const routes = express.Router();
//import de controllers.
const StudentController = require('./controllers/StudentController');
const SubjectController = require('./controllers/SubjectController');


//rotas estudantes.
routes.post('/student',StudentController.Create);
//routes.get('/student/:studentId',StudentController.ShowSubject);

//rotas das materias.
routes.post('/subject/:studentId',SubjectController.Create);
routes.get('/subject/',SubjectController.Show);

//rota de login.

routes.post('/login',StudentController.Login)

module.exports=routes;