function createResult(error, data){
    const res = {}
    if(data){
        result.status = 'success'
        result.data = data
    }
    else{
        result.status = 'error'
        result.error = error
    }
    return res
}

module.exports = { createResult }