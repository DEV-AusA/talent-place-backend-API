import Categoria from "../entities/categoria";
declare const _default: {
    postNewCategory: (nameCategory: string) => Promise<Categoria>;
    getAllCategories: () => Promise<Categoria[]>;
};
export default _default;
