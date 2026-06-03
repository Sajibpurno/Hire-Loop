"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // ← FormData
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    setStatus({ type: null, message: "" });

    if (!user.email || !user.password) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
      });

      if (error) {
        setStatus({ type: "error", message: error.message || "Authentication failed." });
      } else {
        setStatus({ type: "success", message: "Logged in successfully! Redirecting..." });
        e.target.reset();
        router.push("/"); // ← redirect
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please check your connection." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6 py-12 font-sans relative overflow-hidden">

      {status.type && (
        <div className={`absolute top-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md max-w-sm animate-in fade-in slide-in-from-top-4 duration-300 ${
          status.type === "success"
            ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-400"
            : "bg-rose-950/40 border-rose-500/30 text-rose-400"
        }`}>
          <span className="text-sm font-medium">{status.message}</span>
          <button type="button" onClick={() => setStatus({ type: null, message: "" })} className="ml-auto text-zinc-400 hover:text-white text-xs font-bold">✕</button>
        </div>
      )}

      <div className="w-full max-w-md bg-zinc-950/60 border border-zinc-900 rounded-3xl p-8 backdrop-blur-md space-y-6 z-10">

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Welcome Back</h1>
          <p className="text-sm text-zinc-400">Sign in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              name="email"
              disabled={isLoading}
              placeholder="name@example.com"
              className="w-full h-11 rounded-xl bg-[#121214] border border-zinc-800 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/80 transition-all disabled:opacity-50"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Password</label>
              <Link href="/forgot-password" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                Forgot password?
              </Link>
            </div>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                disabled={isLoading}
                placeholder="••••••••"
                className="w-full h-11 rounded-xl bg-[#121214] border border-zinc-800 pl-4 pr-12 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/80 transition-all disabled:opacity-50"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-white transition-colors">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 active:scale-[0.99] transition-all mt-6 shadow-lg shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="text-center text-xs text-zinc-500">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
            Sign Up
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SignIn;