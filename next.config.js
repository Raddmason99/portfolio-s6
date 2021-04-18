
const withPWA = require('next-pwa')

module.exports = withPWA({
    future: { webpack5: true },
    pwa: {
        dest: 'public',
        register: true,
        scope: '/',
        sw: 'service-worker.js',
    }
})