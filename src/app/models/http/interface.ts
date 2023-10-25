/**
 * Interfaces de entrada para a criação, leitura, atualização e exclusão de um objeto
 */
export interface Create {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Read {
  id: number;
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
  sucess: boolean;
  data: {
    id: number;
    email: string;
  }
}

export interface ReturnRead {
  sucess: boolean;
  data: {
    id: number;
    email: string;
  }
}

export interface ReturnUpdate {
  sucess: boolean;
  data: {
    id: number;
    email: string;
  }
}

export interface ReturnDelete {
  sucess: boolean;
  idItemDeleted: number;
}

/** Interface de erro */
export interface ErrorResponse {
  sucess: boolean;
  message: string;
}
