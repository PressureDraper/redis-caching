import { Request, Response } from 'express';
import { EmployeeService } from '../services/employees.service.js';
import client from '../utils/redis.utils.js';

export class EmployeeController {
    private employeeService: EmployeeService;

    constructor() {
        this.employeeService = new EmployeeService();
        // await client.del('cache:allEmployees:v1');
    }

    public getAllEmployees = async (_req: Request, res: Response) => {
        try {
            console.time('getEmployeesQuery');
            const cached = await client.get('cache:allEmployees:v1');

            if (cached) {
                console.log('Cache hit');
                console.timeEnd('getEmployeesQuery');
                return res.status(200).json(JSON.parse(cached));
            } else {
                console.log('No cached data found');
            }

            console.log('Cache saving');
            
            const employees = await this.employeeService.getEmployees();
            await client.set('cache:allEmployees:v1', JSON.stringify(employees));
            
            res.status(200).json(employees);
        } catch (error) {
            res.status(500).json({ message: 'getAllEmployees: ', error });
        }
    };
}
