import bcrypt from "bcrypt";

// hash the password
export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }

        resolve(hash);
      });
    });
  });
};

//compare the password
export const comparePassword = (password, hashedPassoword) => {
  return bcrypt.compare(password, hashedPassoword);
};
