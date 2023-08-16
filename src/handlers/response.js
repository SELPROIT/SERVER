const response = (message, data = null) => ({
    success: true,
    message,       
    data,          
});

module.exports = {
    response
}
