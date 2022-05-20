/**
 * interface que formato de categorías utilizado en el select categorías en la página
 * Add-product.
 */

export interface Categoria {
  nombreCategoria: string;
  clave: string;
}
//constante con las categorías
export const categorias: Categoria[] = [
  {
    nombreCategoria: "Pantalones",
    clave: "1"
  },
  {
    nombreCategoria: "Faldas",
    clave: "2"
  },
  {
    nombreCategoria: "Camisas",
    clave: "3"
  },
  {
    nombreCategoria: "Abrigos",
    clave: "4"
  },
  {
    nombreCategoria: "Vestidos",
    clave: "5"
  },
  {
    nombreCategoria: "Zapatos",
    clave: "6"
  },
  {
    nombreCategoria: "Gorras",
    clave: "7"
  }
];
