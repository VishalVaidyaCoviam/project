module.exports = {
    devServer : {
        proxy: {
            '': {
                // host: '0.0.0.0',
                // port: 3000,
                target: 'http://localhost:3000'
                // ,
                // changeOrigin: true
              }
        }
    }
}