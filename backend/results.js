function createResult(error, data) {
    const result = {}
    if (data) {
        result.status = 'success'
        result.data = data
        result.message = 'login success'
    }
    else {
        result.status = 'error'
        result.error = error
        result.message = 'exception occurred'
    }
    return result
}

module.exports = { createResult }