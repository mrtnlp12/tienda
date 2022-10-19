const fs = require('fs');

const deleteFile = (fileaPath) => {
  fs.unlink(fileaPath, (err) => {
    if (err) {
      throw err;
    }
  });
};

exports.deleteFile = deleteFile;
