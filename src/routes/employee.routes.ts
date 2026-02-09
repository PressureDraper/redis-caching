import { Router } from 'express';
import { EmployeeController } from '../controllers/employees.controller.js';

const router: Router = Router();
const controller = new EmployeeController();

router.get('/', controller.getAllEmployees);

export default router;
