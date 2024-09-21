import Proyecto from "./proyecto";
export default class Categoria {
    id: string;
    nombre: string;
    proyecto: Proyecto;
    generateUlid(): void;
}
