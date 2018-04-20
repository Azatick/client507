export default function Message (config: MessageConfig) {
    return function (target: any, prop: string, value: any) {
        return {
            value: async function (...args: any[]) {
                try {
                    var result = await value.value.apply(this, args)
                } catch (error) {
                    config.text = error.message
                    this.$store.commit('Messages/addMessage', config)
                }
                return result
            }
        };
    }
}

export var OnErrorMessage = Message({
    type: "error",
    title: "Ошибка"
})

export type MessageType = "error" | "success" | "warning" | "info"

export interface MessageConfig {
    type: MessageType
    title?: string
    text?: string
    delay?: number
}