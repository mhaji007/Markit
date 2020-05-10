import User from "../../models/User";
import jwt from "jsonwebtoken";

try {connectDb();}
catch(err) {console.log(err.message);}

export default async (req, res) => {
  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    const users = await User.find({ _id: { $ne: userId } }).
    sort({role: "asc"});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(403).send("Please login again");
  }
};
