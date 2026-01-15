// client/src/api/index.js
// 🔴 BACKEND DISABLED — FRONTEND MOCK ENABLED

// ---------------- AUTH ----------------
export const UserSignUp = async ({ name, email, password }) => {
  const user = { name, email };

  localStorage.setItem("fittrack-app-token", "FAKE_TOKEN");
  localStorage.setItem("fittrack-user", JSON.stringify(user));

  return {
    data: {
      token: "FAKE_TOKEN",
      user,
    },
  };
};

export const UserSignIn = async ({ email, password }) => {
  const user = JSON.parse(localStorage.getItem("fittrack-user"));

  if (!user || user.email !== email) {
    return Promise.reject({
      response: { data: { message: "Invalid email or password" } },
    });
  }

  return {
    data: {
      token: "FAKE_TOKEN",
      user,
    },
  };
};

// ---------------- DASHBOARD ----------------
export const getDashboardDetails = async () => {
  return {
    data: {
      totalCaloriesBurnt: 520,
      totalWorkouts: 4,
      totalDuration: 180,     // ✅ ADD THIS
      avgCalories: 130,       // ✅ ADD THIS

      weeklyCalories: [80, 120, 60, 140, 120, 100, 90],

      categoryData: [
        { category: "Legs", value: 200 },
        { category: "Chest", value: 150 },
        { category: "Back", value: 170 },
      ],
    },
  };
};


// ---------------- WORKOUTS ----------------
export const getWorkouts = async () => {
  return {
    data: {
      todaysWorkouts: [
        {
          name: "Leg Day",
          duration: "45 mins",
          calories: 200,
        },
        {
          name: "Chest Day",
          duration: "30 mins",
          calories: 150,
        },
      ],
    },
  };
};

export const addWorkout = async () => {
  return {
    data: {
      success: true,
    },
  };
};
