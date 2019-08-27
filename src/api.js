/** Named parameters */
function createAccount({
  password = "",
  nickname = "",
  email = "",
  gender = "Male",
  bio = "",
  subscription = "Basic",
  callback
}) {
  if (!password || !email) {
    throw new Error(
      'You are missing one or all of the following fields: "username", "passowrd", "email"'
    );
  }
  return api
    .createAccount({
      password,
      nickname,
      email,
      gender,
      bio,
      subscription
    })
    .then(result => {
      if (callback) callback(null, result);
    })
    .catch(error => {
      console.error(error);
      if (callback) callback(error);
    });
}

createAccount({
  password: "JollyTots!1",
  email: "example@gmail.com",
  bio: "My bio",
  callback: function cb(err, data) {
    if (err) {
      console.error(err);
    }
  }
});
