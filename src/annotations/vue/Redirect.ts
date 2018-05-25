export default function Redirect (to: string, config: RedirectConfig = { on: 'success' }) {
    return function (target: any, prop: string, value: any) {

        return {
            value: async function (...args: any[]) {
                try {
                    var result = await value.value.apply(this, args)
                    if (config.on == 'success') {
                        console.log(result)
                        this.$router.push({
                            name: to,
                            params: result
                        })
                    }
                    return result
                } catch (e) {
                    if (config.on == 'error') {
                        this.$router.push(to)
                    }
                    throw e;
                }
            }
        };
    }
}

export interface RedirectConfig {

    on?: 'error' | 'success',


}