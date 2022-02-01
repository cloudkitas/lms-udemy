import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";

export const register = async (req, res) => {
  try {
    console.log(req.body);

    const { name, email, password } = req.body;

    //validations
    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6) {
      return res.status(400).send("Passoword is req and more than 6 char long");
    }

    let userExists = await User.findOne({ email }).exec();
    if (userExists) return res.status(400).send("email taken");

    const hashedPassword = await hashPassword(password);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    console.log("user saved ", user);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.status(400).send("Error Try Again");
  }
};
