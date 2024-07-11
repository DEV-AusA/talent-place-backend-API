import { Column, Entity, ManyToOne, JoinColumn, OneToMany, PrimaryColumn, BeforeInsert, OneToOne, ManyToMany, JoinTable } from "typeorm";
import Usuario from "./usuario";
import Aplicacion from "./aplicacion";
import Pago from "./pago";
import Comentario from "./comentario";
import { ulid } from "ulid";
import Categoria from "./categoria";
import { Habilidad } from "./habilidad";

@Entity({
    name: "proyectos"
})
export default class Proyecto {

    @PrimaryColumn()
    id: string;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column({ name: "empresa_id" })
    empresaId: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    presupuesto: number;

    @Column({
        type: "enum",
        enum: ["remoto", "hibrido", "presencial"],
        default: "presencial"
    })
    modalidad: string;

    @Column({
        default: false
    })
    estado: boolean;

    @ManyToMany(() => Habilidad)
    @JoinTable({name: "proyecto_habilidades"})
    habilidades: Habilidad[];

    @ManyToOne(() => Categoria, (categoria) => categoria.proyecto)
    categoria: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.projecto)
    @JoinColumn({ name: "empresa_id" })
    empresa: Usuario;

    @OneToMany(() => Aplicacion, (aplicaciones) => aplicaciones.proyectoId)
    aplicaciones: Aplicacion[];

    @OneToMany(() => Pago, (pagos) => pagos.proyectoId)
    pagos: Pago[];

    @OneToMany(() => Comentario, (comentarios) => comentarios.proyectoId)
    comentarios: Comentario[];

    @BeforeInsert()
    generateUlid() {
      this.id = ulid();
    }
}
