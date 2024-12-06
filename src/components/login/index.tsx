"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-gray-50 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-50" />
      <div className="absolute top-1/4 right-0 w-24 h-24 bg-gray-300 rounded-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-200 rounded-full opacity-50" />
      <div className="absolute bottom-1/4 right-0 w-16 h-16 bg-orange-200 rounded-full opacity-50" />
      <div className="container mx-auto px-4 py-12 md:py-24">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="pt-6 relative">
            <button
              className="absolute top-4 left-4 bg-gray-300 hover:bg-gray-400 text-white rounded-full p-1 flex items-center justify-center"
              onClick={() => {
                router.back();
              }}
            >
              <ArrowBack className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-4">
              <div className="text-center flex flex-col gap-2 justify-center items-center">
                <Link href="/" className="flex flex-col gap-2 justify-center items-center mb-4">
                  <Image
                    src="/logo-smarket-dark.webp"
                    alt="Smarket"
                    width={300}
                    height={200}
                    className="h-auto w-20"
                  />
                </Link>
                <h1 className="text-2xl font-bold tracking-tight text-primary">
                  Inicia sesión en Smarket
                </h1>
              </div>

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => console.log("Google login")}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Ingresa con Google
                </Button>

                <Button
                  className="w-full bg-[#1877f2] hover:bg-[#1869d6]"
                  onClick={() => console.log("Facebook login")}
                >
                  <svg
                    className="w-5 h-5 mr-2 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Ingresa con Facebook
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    o
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="bg-muted/50"
                />
                <Button className="w-full bg-[#3b7c6f] hover:bg-[#2f6359]">
                  Iniciar Sesión
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
