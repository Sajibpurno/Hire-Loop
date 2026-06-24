import { Suspense } from "react";
import SignInForm from "./SignInForm";

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <section className="w-full min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
          <div className="h-6 w-32 rounded-full bg-zinc-800 animate-pulse" />
        </section>
      }
    >
      <SignInForm />
    </Suspense>
  );
}
