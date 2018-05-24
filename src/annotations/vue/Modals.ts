export function Modal (name: string, type: ModalType = "default") {
    return function (target: any, prop: string, value: any) {
        return {
            value: async function (...args: any[]) {
                this.$store.commit('Modals/set', { name, visible: true })
                let store = this.$store;
                let self = this;
                var result;
                if (type != "default") {
                    let timer = setInterval(async function () {
                        let success = store.getters['Modals/get'](name).success;
                        if (success) {
                            clearInterval(timer)
                            result = await value.value.apply(self, args)
                        } else if(success === false) {
                            clearInterval(timer)
                        }
                    }, 500)
                } else {
                    result = await value.value.apply(this, args)
                }
                return result

            }
        };
    }
}

export type ModalType = "confirm" | "alert" | "default"