"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { Label, Radio, RadioGroup } from "@heroui/react";

const SignUpForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("seeker");

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    setStatus({ type: null, message: "" });

    if (!user.name || !user.email || !user.password || !user.confirmPassword) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }
    if (user.password.length < 6) {
      setStatus({ type: "error", message: "Password must be at least 6 characters long." });
      return;
    }
    if (user.password !== user.confirmPassword) {
      setStatus({ type: "error", message: "Passwords do not match! Please verify." });
      return;
    }

    setIsLoading(true);

    const plan = role === "seeker" ? "seeker_free" : "recruiter_free";
    try {
      const { error } = await authClient.signUp.email({
        email: user.email,
        password: user.password,
        name: user.name,
        image: user.userImg || undefined,
        role,
        plan
      });

      if (error) {
        setStatus({ type: "error", message: error.message || "An authentication error occurred." });
      } else {
        setStatus({ type: "success", message: "Account created successfully! Redirecting..." });
        e.target.reset();
        router.push(redirectTo);
      }
    } catch {
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
          <h1 className="text-3xl font-bold tracking-tight text-white">Create Account</h1>
          <p className="text-sm text-zinc-400">Join over 15,000 job seekers today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Full Name *</label>
            <input
              type="text"
              name="name"
              disabled={isLoading}
              placeholder="John Doe"
              className="w-full h-11 rounded-xl bg-[#121214] border border-zinc-800 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/80 transition-all disabled:opacity-50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Email Address *</label>
            <input
              type="email"
              name="email"
              disabled={isLoading}
              placeholder="name@example.com"
              className="w-full h-11 rounded-xl bg-[#121214] border border-zinc-800 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/80 transition-all disabled:opacity-50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Profile Image URL</label>
            <input
              type="text"
              name="userImg"
              disabled={isLoading}
              placeholder="https://example.com/avatar.jpg"
              className="w-full h-11 rounded-xl bg-[#121214] border border-zinc-800 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/80 transition-all disabled:opacity-50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Password *</label>
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

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Confirm Password *</label>
            <div className="relative w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                disabled={isLoading}
                placeholder="••••••••"
                className="w-full h-11 rounded-xl bg-[#121214] border border-zinc-800 pl-4 pr-12 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/80 transition-all disabled:opacity-50"
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-white transition-colors">
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <Label>I am a</Label>
            <RadioGroup value={role} name="role" orientation="horizontal" onChange={setRole}>
              <Radio value="seeker">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label>Job Seeker</Label>
                </Radio.Content>
              </Radio>
              <Radio value="recruiter">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label>Recruiter</Label>
                </Radio.Content>
              </Radio>
            </RadioGroup>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 active:scale-[0.99] transition-all mt-4 shadow-lg shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="text-center text-xs text-zinc-500">
          Already have an account?{" "}
          <Link href={`/signin?redirect=${redirectTo}`} className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
            Sign In
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SignUpForm;
