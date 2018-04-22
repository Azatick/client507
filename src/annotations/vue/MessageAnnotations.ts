export default function Message (config: MessageConfig) {
    return function (target: any, prop: string, value: any) {
        return {
            value: async function (...args: any[]) {
                try {
                    var result = await value.value.apply(this, args)
                } catch (error) {
                    config.text = error.message
                    this.$store.commit('Messages/addMessage', {...config})
                }
                return result
            }
        };
    }
}

export var OnErrorMessage = function (config: MessageConfig = { type: 'error' }) {
    return Message({
        title: 'Ошибка',
        position: 'top right',
        ...config,
        type: 'error',
    })
}

export type MessageType = "error" | "success" | "warning" | "info"

export interface MessageConfig {
    type?: MessageType
    title?: string
    text?: string
    position?: MessagePosition
    duration?: number
    always?: boolean
    id?: number
}

export type MessagePosition =
    | "top left"
    | "top right"
    | "top center"
    | "bottom left"
    | "bottom right"
    | "bottom center"
    | "middle left"
    | "middle right"
    | "middle center"