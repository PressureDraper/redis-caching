import { Request, Response } from 'express';
import { EmployeeService } from '../services/employees.service.js';

export class EmployeeController {
    private employeeService: EmployeeService;

    constructor() {
        this.employeeService = new EmployeeService();
    }

    public getAllEmployees = async (req: Request, res: Response) => {
        try {
            const employees = await this.employeeService.getEmployees();
            res.status(200).json(employees);
        } catch (error) {
            res.status(500).json({ message: 'getAllEmployees: ', error });
        }
    };
}
