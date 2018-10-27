export interface Producto {
    nombre: string,
    codigoBarras: string,
    precio: number,
    retornable?: boolean,
    favorito?: boolean,
    puntosCantidad?: number,
    imagen: string,
    soloVenta?: boolean,
    soloCompra?: boolean,
    sectorImpresionId?: number,
    zIndex: number,
    tipoProductoId?: number
}