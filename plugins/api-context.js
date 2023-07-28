export default (context, inject) => {
    inject('api', async (controller, method, params) => {
        try {
            return await context.$axios['$' + (params ? 'post' : 'get')]('/api/' + controller + '/' + method, params);
        } catch (e) {
            console.error(e);
            throw e;
        }
    })
}