/**
 * Interfaces para a criação, leitura, atualização e exclusão de um objeto
 */
export interface Create {
    email: string;
    senha: string;
}

export interface Read {
    id: number;
    usuario: string;
}

export interface Update {
    email: string;
    senha: string;
}

export interface Delete {
    id: number;
}