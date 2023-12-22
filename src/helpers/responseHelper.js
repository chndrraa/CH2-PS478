const successResponse = (res, message = 'success', data) => {
  return res.json({
    status: 1,
    message: message,
    data: data
  });
};

const failedResponse = (res, message = 'failed', data) => {
  return res.json({
    status: 0,
    message: message,
    data: data
  });
};

const errorServerResponse = (res, message = 'unprocess', serverMessage) => {
  return res.status(500).json({
    status: 0,
    message: message,
    serverMessage: serverMessage
  });
};

module.exports = {
  successResponse,
  failedResponse,
  errorServerResponse,
};