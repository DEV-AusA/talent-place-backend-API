import { Habilidad } from "../entities/habilidad";
declare const _default: {
    postNewHability: (habilities: string[]) => Promise<Habilidad[]>;
    getAllHabilities: () => Promise<Habilidad[]>;
};
export default _default;
