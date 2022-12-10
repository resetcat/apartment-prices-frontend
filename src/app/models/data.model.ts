export interface PostAPIResponse {
  help: string;
  success: boolean;
  result: PostResult;
}


export interface PostResult {
  include_total: boolean;
  resource_id : string;
  fields: FieldFormat[];
  records_format: string;
  records:RecordData[];
  _links:{
    start:string;
    next:string;
  };
  total:number;
}

export interface RecordData{
  _id: number;
  "Gads un pusgads":string;
  "Vid\u0113j\u0101 cena (EUR/m2) R\u012bga (centrs)":number;
  "Dar\u012bjumu skaits R\u012bga (centrs)":number;
  "Vid\u0113j\u0101 cena (EUR/m2) R\u012bga (mikrorajoni)":number;
  "Dar\u012bjumu skaits R\u012bga (mikrorajoni)":number;
  "Vid\u0113j\u0101 cena (EUR/m2) J\u016brmala (Sloka, Kauguri)":number;
  "Dar\u012bjumu skaits J\u016brmala (Sloka, Kauguri)":number;
}

export interface FieldFormat {
  type:string;
  id:string;
}


