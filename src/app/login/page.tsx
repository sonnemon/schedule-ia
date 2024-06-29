"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center">
      <div className="mx-auto max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">Login or register to continue</p>
        </div>
        <div>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full bg-black text-white"
              onClick={() => signIn("github")}
            >
              <FaGithub className="h-5 w-5 mr-2" />
              Sign in with Github
            </Button>
            <Button
              variant="outline"
              className="w-full bg-black text-white"
              onClick={() => signIn("google")}
            >
              <FaGoogle className="h-5 w-5 mr-2" />
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
