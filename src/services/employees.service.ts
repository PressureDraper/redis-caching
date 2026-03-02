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
                                id: true,
                                descripcion: true,
                                observaciones: true,
                            },
                        },
                        created_at: true,
                        updated_at: true,
                        deleted_at: true,
                    },
                },
                cat_puestos: {
                    select: {
                        id: true,
                        nombre: true,
                        codigo: true,
                    },
                },
                cat_departamentos: {
                    select: {
                        id: true,
                        nombre: true,
                        created_at: true,
                        updated_at: true,
                        deleted_at: true,
                    },
                },
                cat_tipos_empleado: {
                    select: {
                        id: true,
                        nombre: true,
                        created_at: true,
                        updated_at: true,
                        deleted_at: true,
                    },
                },
                cat_categorias: {
                    select: {
                        id: true,
                        nombre: true,
                        area: true,
                        codigo: true,
                        created_at: true,
                        updated_at: true,
                        deleted_at: true,
                    },
                },
                checa: true,
                activo: true,
                matricula: true,
                created_at: true,
                updated_at: true,
                deleted_at: true,
            },
            orderBy: { matricula: 'asc' },
        });

        return res;
    }
}
