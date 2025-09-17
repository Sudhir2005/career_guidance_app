import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Login Successful:", data);
      localStorage.setItem("token", data.token); // save JWT
      setLoading(false);
      navigate("/dashboard"); // redirect after success
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.error || "Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-tr from-purple-700 via-pink-600 to-indigo-500">
      {loading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60">
          <img
            src="/magic-loader.gif"
            alt="Loading..."
            className="w-32 h-32 animate-bounce"
          />
          <p className="mt-6 text-lg font-bold tracking-wider text-white animate-pulse">
            Conjuring Your Dashboard...
          </p>
        </div>
      )}

      <div className="relative z-10 w-full max-w-md p-10 border shadow-2xl bg-white/20 backdrop-blur-md border-white/30 rounded-3xl">
        <h2 className="mb-4 text-3xl font-extrabold text-center text-white drop-shadow-lg">
          Welcome Back
        </h2>
        <p className="mb-8 text-center text-white/80">
          Enter your credentials to access your magical portal
        </p>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 font-medium text-white/90">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-5 py-3 text-white transition border rounded-xl border-white/30 bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white/90">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-5 py-3 text-white transition border rounded-xl border-white/30 bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-bold text-white transition-transform duration-300 shadow-lg bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-xl hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-white/80">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold text-white underline transition hover:text-yellow-300">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
