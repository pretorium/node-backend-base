const success = (res, successRes = {}, status = 200) => {
  res.status(status).send({
    success: true,
    body: {
      successCode: status,
      successMessage: successRes.successMessage || 'Ok'
      data: successRes.data || {},
    },
  });
};

const error = (res, errorRes = {}, status = 400) => {
  res.status(status).send({
    success: false,
    error: {
      errorCode: status,
      errorMessage: errorRes.errorMessage || 'An error occurred',
      data: errorRes.data || {},
      errorMessageDetail: errorRes.errorMessageDetail || 'Error detail',
    },
  });
};

module.exports = {
  success,
  error,
};
