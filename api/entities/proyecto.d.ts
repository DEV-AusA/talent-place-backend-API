import Usuario from "./usuario";
import Aplicacion from "./aplicacion";
import Pago from "./pago";
import Comentario from "./comentario";
import Categoria from "./categoria";
import { Habilidad } from "./habilidad";
export default class Proyecto {
    id: string;
    titulo: string;
    descripcion: string;
    requisitos: string;
    empresaId: string;
    empresaNombre: string;
    modalidad: string;
    estado: boolean;
    fechaCreacion: Date;
    habilidades: Habilidad[];
    categoria: Categoria;
    empresa: Usuario;
    aplicaciones: Aplicacion[];
    pagos: Pago[];
    comentarios: Comentario[];
    generateUlid(): void;
}
