import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createError } from "../error.js";
import User from "../models/User.js";
import Workout from "../models/Workout.js";

dotenv.config();

/* =========================
   SIGN UP
========================= */
export const UserRegister = async (req, res, next) => {
  try {
    const { email, password, name, img } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(createError(409, "Email already exists"));
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      img,
    });

    const savedUser = await user.save();

    const token = jwt.sign(
      { id: savedUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "365d" }
    );

    return res.status(201).json({
      success: true,
      token,
      user: savedUser,
    });
  } catch (err) {
    next(err);
  }
};

/* =========================
   SIGN IN
========================= */
export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return next(createError(404, "User not found"));
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return next(createError(403, "Wrong credentials"));
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "365d" }
    );

    return res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (err) {
    next(err);
  }
};

/* =========================
   DASHBOARD
========================= */
export const getUserDashboard = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Dashboard data fetched",
    });
  } catch (err) {
    next(err);
  }
};

/* =========================
   WORKOUTS
========================= */
export const getWorkoutsByDate = async (req, res, next) => {
  try {
    return res.status(200).json({
      workouts: [],
      totalCaloriesBurnt: 0,
    });
  } catch (err) {
    next(err);
  }
};

export const addWorkout = async (req, res, next) => {
  try {
    return res.status(201).json({
      message: "Workout added",
    });
  } catch (err) {
    next(err);
  }
};
