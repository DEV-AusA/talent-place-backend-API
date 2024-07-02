import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Proyecto } from "./Proyecto";
import Aplicacion from "./Aplicacion";
import Pago from "./Pago";
import Comentario from "./Comentario";

@Entity({
    name: "usuarios"
})
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column()
    contrasenia: string;

    @Column({
        type: "enum",
        enum: ["junior", "empresa", "admin"],
        default: "junior"
    })
    tipo: string;

    @Column({ name: "2fa_enabled", default: false })
    autenticacion2FAHabilitada: boolean;

    @Column({ name: "2fa_secret", nullable: true })
    autenticacion2FASecreto: string;

    @OneToMany(() => Proyecto, (projecto) => projecto.empresaId)
    projecto: Proyecto[];

    @OneToMany(() => Aplicacion, (aplicacion) => aplicacion.juniorId)
    aplicacion: Aplicacion[];

    @OneToMany(() => Pago, (pagos) => pagos.empresaId)
    PagoRealizado: Pago[];

    @OneToMany(() => Pago, (pagos) => pagos.juniorId)
    ComentarioRecivido: Pago[];

    @OneToMany(() => Comentario, (comentarios) => comentarios.usuarioId)
    comentarios: Comentario[];
}
