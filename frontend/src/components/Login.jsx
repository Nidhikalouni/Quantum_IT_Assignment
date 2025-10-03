import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState(
    location.pathname === "/login" ? "Login" : "Sign Up"
  );
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Update form state whenever URL changes
  useEffect(() => {
    if (location.pathname === "/login") setState("Login");
    else if (location.pathname === "/signup") setState("Sign Up");
  }, [location.pathname]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/table");
  }, [navigate]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const endpoint =
      state === "Sign Up"
        ? "http://localhost:3000/api/auth/register"
        : "http://localhost:3000/api/auth/login";

    const payload =
      state === "Sign Up"
        ? { name, dob, email, password }
        : { email, password };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        navigate("/table");
      } else {
        alert(data.message || "Error occurred");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }

    setName("");
    setDob("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mx-auto py-12 px-6 flex justify-center">
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-b from-cyan-50 to-white p-6 rounded-lg shadow-lg">
          <div className="bg-cyan-600 text-white rounded-md p-4 mb-4 text-center font-semibold">
            {state === "Sign Up" ? "SIGN UP" : "LOGIN"}
          </div>

          <form
            onSubmit={onSubmitHandler}
            className="p-6 bg-slate-800 text-white rounded-md space-y-4"
          >
            {state === "Sign Up" && (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-slate-700 text-white outline-none"
                  required
                />
                <label className="block mb-1 text-slate-300">Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-slate-700 text-white outline-none"
                  required
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-slate-700 text-white outline-none"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-slate-700 text-white outline-none"
              required
            />

            {state === "Login" && (
              <p className="text-teal-400 text-sm text-right cursor-pointer">
                Forgot Password?
              </p>
            )}

            <button className="w-full bg-teal-400 text-slate-800 py-2 rounded mt-4">
              {state === "Sign Up" ? "Sign Up" : "Login"}
            </button>
          </form>

          <div className="text-center mt-4 text-sm text-gray-700">
            {state === "Sign Up" ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-teal-400 cursor-pointer underline"
                >
                  Login here
                </span>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-teal-400 cursor-pointer underline"
                >
                  Sign Up
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
