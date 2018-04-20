

export default function Message (config: MessageConfig) {
    return function (target: any, prop: string, value: any) {
        let errorForCatch = Array.isArray(config.catch) ? config.catch : [config.catch]
        return {
            value: function (...args: any[]) {
                try {
                    var result = value.value.apply(this, args)
                } catch (error) {
                    errorForCatch.map(e => errorCatching(e, error))
                }
                // var a = args.map(a => JSON.stringify(a)).join()
                // var result = value.value.apply(this, args)
                // var r = JSON.stringify(result)
                // console.log(`Call: ${key}(${a}) => ${r}`)
                return result
            }
        };
    }
}

let errorCatching = (error: Error, catchedError: Error) => {
    if (catchedError.name == catchedError.name) {
        console.log(this)
    }
}

export interface MessageConfig {
    type: "error" | "success" | "warning" | "info"
    title?: string
    text: string
    catch: Error | Error[]
}