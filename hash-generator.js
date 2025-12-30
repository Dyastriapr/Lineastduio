// hash_generator.js
const bcrypt = require("bcryptjs");

const plaintextPassword = "testing123"; // <--- SANDI BARU ANDA

bcrypt.hash(plaintextPassword, 10, (err, hash) => {
  if (err) throw err;
  console.log(`Password Plaintext: ${plaintextPassword}`);
  console.log(`Password Hash (BCrypt):`);
  console.log(hash);
});
