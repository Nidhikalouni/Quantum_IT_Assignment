import React from "react";
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div>

      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Welcome to <span className="text-teal-500">MyApp</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-8">
          This is a simple login and registration system built with React.js and Node.js.
          You can sign up to create an account or log in if you already have one.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/signup"
            className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-600"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="bg-slate-800 text-white px-6 py-3 rounded-lg shadow hover:bg-slate-900"
          >
            Login
          </Link>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
