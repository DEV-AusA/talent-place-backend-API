export default class Comentario {
    id: string;
    proyectoId: string;
    usuarioId: string;
    comentario: string;
    puntuación: number;
    generateUlid(): void;
}
