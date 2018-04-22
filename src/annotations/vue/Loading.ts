export default function Loading (name: string, title: string = 'Загрузка') {
    return function (target: any, prop: string, value: any) {

        return {
            value: async function (...args: any[]) {
                this.$store.commit('Loadings/setLoading', { key: name, state: true, title })
                var result = await value.value.apply(this, args)
                this.$store.commit('Loadings/setLoading', { key: name, state: false, title })
                return result
            }
        };
    }
}