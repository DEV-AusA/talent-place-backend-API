import Proyecto from "./proyecto";
import Aplicacion from "./aplicacion";
import Pago from "./pago";
import Comentario from "./comentario";
export default class Usuario {
    id: string;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    pais: string;
    contrasenia: string;
    tipo: string;
    updatedAt: Date;
    autenticacion2FAHabilitada: boolean;
    autenticacion2FASecreto: string;
    projecto: Proyecto[];
    aplicacion: Aplicacion[];
    pagoRealizado: Pago[];
    comentarioRecibido: Pago[];
    comentarios: Comentario[];
    generateUlid(): void;
}
