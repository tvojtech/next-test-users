import Promise from 'bluebird';

export const executeRequest = request =>
  new Promise((resolve, reject) => request.end((err, res) => (err ? reject(err) : resolve(res.body))));
