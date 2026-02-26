import { db } from '../utils/db.js';

export class EmployeeService {
    async getEmployees() {
        const res = db.rch_empleados.findMany({
            select: {
                cmp_persona: {
                    select: {
                        id: true,
                        nombres: true,
                        primer_apellido: true,
                        segundo_apellido: true,
                        curp: true,
                        estado_nacimiento: true,
                        fecha_nacimiento: true,
                        sexo: true,
                        rfc: true,
                        cat_ocupaciones: {
                            select: {
                                id: true,
                                nombre: true,
                            },
                        },
                        cmp_contactos: {
                            select: {
                                descripcion: true,
                                observaciones: true,
                            },
                        },
                    },
                },
                cat_puestos: {
                    select: {
                        id: true,
                        nombre: true,
                        codigo: true,
                    },
                },
                matricula: true,
            },
            orderBy: { matricula: 'asc' },
        });

        return res;
    }
}
