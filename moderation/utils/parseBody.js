module.exports = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';

        // Collect data from the request body
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        // Handle data completion
        req.on('end', () => {
            try {
                resolve(JSON.parse(body || '{}'));
            } catch (error) {
                reject(error);
            }
        });

        // Handle errors
        req.on('error', (err) => {
            reject(err);
        });
    });
};