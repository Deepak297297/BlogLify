export const errorHandler = (statusCode, message) => {
    const error = new Error(err.message);
    error.statusCode = statusCode;
    error.message = message;
    return error;
};