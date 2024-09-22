// export enum GenreEnum {
//     ESTUDO = "Estudo",
//     TRABALHO = "Trabalho",
//     PESSOAL = "Pessoal",
// }

export const taskGenre = {
    ESTUDO: "Estudo",
    TRABALHO: "Trabalho",
    PESSOAL: "Pessoal",
} as const;

export type taskGenreValues = typeof taskGenre[keyof typeof taskGenre];