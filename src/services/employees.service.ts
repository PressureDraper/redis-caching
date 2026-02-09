export class EmployeeService {
    async getEmployees() {
        return [
            {
                id: 1,
                name: 'John Doe',
                position: 'Software Engineer',
            },
            {
                id: 2,
                name: 'Jane Smith',
                position: 'Product Manager',
            },
        ];
    }
}
