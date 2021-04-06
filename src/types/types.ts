export type ConstructorType =
  | "Number"
  | "String"
  | "Object"
  | "Array"
  | "Boolean";

export interface DataType {
  // name: string
}

export interface RegionType {
  region: String;
}
export interface AjusteTecType {
  ajuste: String;
}

export interface EncuestasType {
  p1: Number | null;
  p2: Number | null;
  p3: Number | null;
  p4: Number | null;
  p5: Number | null;
  p6: Number | null;
  p7: Number | null;
  p8: Number | null;
}
export interface EncuestaCamasBMType {
  p1: Number | null;
  p2: Number | null;
  p3: Number | null;
  p4: Number | null;
  p5: Number | null;
  p6: Number | null;
  p7: Number | null;
  p8: Number | null;
}
export interface EncuestaCamasUEHType {
  p1: Number | null;
  p2: Number | null;
  p3: Number | null;
  p4: Number | null;
}
export interface EncuestaCamasUPCType {
  p1: Number | null;
  p2: Number | null;
  p3: Number | null;
  p4: Number | null;
  p5: Number | null;
  p6: Number | null;
  p7: Number | null;
  p8: Number | null;
  p9: Number | null;
  p10: Number | null;
  p11: Number | null;
  p12: Number | null;
  p13: Number | null;
  p14: Number | null;
}

// Solicitud SS
export interface SolicitudSSType {
  id: Number;
  fechaSolicitud: String;
  idDerivacion: String;
  fechaDerivacion: String;
  estabOrigen: String;
  ss: String;
  nombrePaciente: String;
  tipoPaciente: String;
  camaSol: String;
  estabDestino: String;
  tipoSolicitud: String;
  comentario: String;
}

// Buscador CIE10
export interface BuscadorCIE10Type {
  id: Number;
  cod: Number;
  codcie: String;
  dx: String;
}
/* export type ConstructorType =
  | "Number"
  | "String"
  | "Object"
  | "Array"
  | "Boolean";

export interface DataType {
}
 */