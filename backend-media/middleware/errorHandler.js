const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    if (err.message === 'Not allowed by CORS') {
        return res.status(403).json({
            success: false,
            error: 'CORS error: Origin not allowed'
        });
    }

    if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(413).json({
            success: false,
            error: 'File too large. Maximum size is 100MB.'
        });
    }

    res.status(500).json({
        success: false,
        error: err.message || 'Internal server error'
    });
};

module.exports = errorHandler;
