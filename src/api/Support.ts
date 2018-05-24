import AxiosWrapper from "./AxiosWrapper";

export default class Support extends AxiosWrapper {

    static async getMessages () {
        return (await this.get('getMessages')).data
    }

    static async getDialogs () {
        return (await this.get<void, DialogDTO[]>('getDialogs')).data
    }

    static async getSupports () : Promise<string[]> {
        return (await this.get<void, Supports>('supports')).data.supportUsers;
    }

    static async getChatHistory (id: number) {
        return (await this.get<{id: number}, ChatMessage[]>('getChatHistory', {
            id,
        })).data
    }

    static async sendMessage (input: SendMessageDTO) {
        return await this.post('sendMessage', input)
    }

    static async createDialog (input: CreateDialogDTO) {
        return (await this.post<CreateDialogDTO, number>('createDialog', input)).data
    }

}

export interface CreateDialogDTO {
    subject: string
    toUserEmail: string
}

export interface SendMessageDTO {
    dialogueId: number
    text: string
}

export interface Supports {
    supportUsers: string[]
}

export interface DialogDTO {
    dialogueId: number
    subject: string
}

export interface ChatMessage {
    text: string
    time: number
    role: "Customer" | "Admin" | "Support"
}