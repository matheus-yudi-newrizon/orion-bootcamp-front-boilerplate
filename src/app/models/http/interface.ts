/**
 * Interfaces de entrada para a criação, leitura, atualização e exclusão de um objeto
 */
export interface Create {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Read {
  id?: number;
  email: string;
}

export interface Update {
  email: string;
  password: string;
}

export interface Delete {
  id: number;
}

/** Interfaces de saída */
export interface ReturnCreate {
  success: boolean;
  data: {
    id: number;
    email: string;
  }
}

export interface ReturnRead {
  success: boolean;
  message?: string;
}

export interface ReturnUpdate {
  success: boolean;
  data: {
    id: number;
    email: string;
  }
}

export interface ReturnDelete {
  success: boolean;
  idItemDeleted: number;
}

/** Interface de erro */
export interface ErrorResponse {
  success: boolean;
  message?: string;
}

/** Interface de sucesso */
export interface SuccessResponse<DataType extends Record<string, unknown>> {
  success: boolean;
  data?: DataType;
}
