/**
 * Interfaces de entrada para a criação, leitura, atualização e exclusão de um objeto
 */

export interface RequestData {
  [key: string]: unknown;
}

/** Interface de erro */
export interface ErrorResponse {
  success: boolean;
  message: string;
}

/** Interface de sucesso */
export interface SuccessResponse<DataType extends RequestData = RequestData> {
  success: boolean;
  message?: string;
  data?: DataType;
}
