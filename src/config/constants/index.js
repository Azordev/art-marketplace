export const TOKEN_NAME = "jwt-tk";
export const USER = "user";

export const API_URL = process.env.REACT_APP_API_URL;
export const HOST_URL = process.env.REACT_APP_HOST_URL;
export const PUBLIC_URL =
  process.env.REACT_APP_HOST_URL +
  (process.env.NODE_ENV !== "production" ? "/public" : "");

//SERVER

export const STATUS_FAIL = 0;
export const STATUS_OK = 1;

export const DB_TRUE = 1;
export const DB_FALSE = 0;

export const ST_INACTIVO = 1;
export const ST_ACTIVO = 2;

export const ST_LABELS = {
  [ST_INACTIVO]: "INACTIVO",
  [ST_ACTIVO]: "ACTIVO",
};

// PERFILES
export const PERFIL_OPERADOR = 1;

//ESTADOS PEDIDO
export const PEDIDO_NUEVO = 1;
export const PEDIDO_ATENDIDO = 2;
export const PEDIDO_PREPARADO = 3;
export const PEDIDO_ASIGNADO = 4;
export const PEDIDO_RUTA = 5;
export const PEDIDO_ENTREGADO = 6;

export const ESTADOS_PEDIDOS = {
  [PEDIDO_NUEVO]: {
    color: "orange",
    valor: "NUEVO",
  },
  [PEDIDO_ATENDIDO]: {
    color: "#3598db",
    valor: "ATENDIDO",
  },
  [PEDIDO_PREPARADO]: {
    color: "#3598db",
    valor: "PREPARADO",
  },
  [PEDIDO_ASIGNADO]: {
    color: "#963de6",
    valor: "ASIGNADO",
  },
  [PEDIDO_RUTA]: {
    color: "#3598db",
    valor: "RUTA",
  },
  [PEDIDO_ENTREGADO]: {
    color: "#3598db",
    valor: "ENTREGADO",
  },
};
