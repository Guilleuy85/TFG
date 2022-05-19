
export interface Product {
  nombreProducto: string;
  descripcionProducto: string;
  categoriaProducto: string;
  precioCompraProducto: string;
  precioVentaProducto: string;
  cantidadProducto: string;
  imagen: File;
}

export const productos: Product[] = [
  {
    nombreProducto: "Nike",
    descripcionProducto: "Rojas y blancas",
    categoriaProducto: "zapatillas",
    precioCompraProducto: "12,45",
    precioVentaProducto: "25",
    cantidadProducto: "20",
    imagen: null
  },
  {
    nombreProducto: "string",
    descripcionProducto: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al origina",
    categoriaProducto: "string",
    precioCompraProducto: "string",
    precioVentaProducto: "string",
    cantidadProducto: "string",
    imagen: null
  },
  {
    nombreProducto: "string",
    descripcionProducto: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al origina",
    categoriaProducto: "string",
    precioCompraProducto: "string",
    precioVentaProducto: "string",
    cantidadProducto: "string",
    imagen: null
  }
]

