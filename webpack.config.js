const path = require('path');

module.exports = {
    // The location of the build folder described above
    entry: {
        Home: './src/home.js',
        auth: './src/auth.js',
        firebaseConfig: './src/firebaseConfig.js',
        view_events: './src/view_events.js',
        bookEvent: './src/bookEvent.js',
        accountSummary: './src/accountSummary.js',
        view_event_admin: './src/view_event_admin.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/bundle'),
        filename: '[name].bundle.js'
    },
    // Optional and for development only. This provides the ability to
    // map the built code back to the original source format when debugging.
    devtool: 'eval-source-map',
};