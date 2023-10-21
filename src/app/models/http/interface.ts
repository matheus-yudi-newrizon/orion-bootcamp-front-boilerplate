/**
 * Interfaces para a criação, leitura, atualização e exclusão de um objeto
 */
export interface Create {
    email: string;
    password: string;
}

export interface Read {
    id: number;
    user: string;
}

export interface Update {
    email: string;
    password: string;
}

export interface Delete {
    id: number;
}