const { authService } = require("../services");

const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body; // email valid

  if (email && password) {
    const user = authService.getUserByEmailAndPassword(email, password);

    if (user) {
      const accessToken = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      const refreshToken = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "1d",
      });

      res
        .cookie("refreshToken", refreshToken, {
          httpOny: true,
          sameSite: "strict",
        })
        .header("Authorization", accessToken)
        .status(200)
        .send();
    } else {
      res.status(404).send("kullanıcı bulunamadı ...");
    }
  } else {
    res.status(400).send("Email ve password gerekli ...");
  }
};

exports.refresh = (req, res) => {
  const refreshToken = req.cookies["refreshToken"];

  if (!refreshToken) res.status(401).send("refreshToken hatalı");

  try {
    const decoded = jwt.verify(refreshToken, process.env.SECRET_KEY);
    // user varmı kontrolü

    if (decoded) {
      const accessToken = jwt.sign(
        { user: decoded.user },
        process.env.SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      res
        .header("Authorization", accessToken)
        .status(200)
        .send("Refresh success");
    } else {
      res.status(401).send("refreshToken hatalı");
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.logout = (req, res) => {
  const { token } = req.params;

  if (!token) res.status(401).send("token hatalı");

  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  if (decoded) res.status(204).send();
};
