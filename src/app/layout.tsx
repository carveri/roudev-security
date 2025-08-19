import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

// para la autenticacion con cognito
//import { AuthProvider } from "react-oidc-context";


// // configuracion inicial 
// const cognitoAuthConfig = {
//   authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_M6KESmU5N",
//   client_id: "qfo4g86fmh203nrjokffmnaul",
//   redirect_uri: "https://roudev.com/dashboard/home",
//   response_type: "code",
//   scope: "phone openid email",
// };

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const geistInter = Inter({
//   variable: "--font-geist-inter",
//   subsets: ["latin"]
// });

export const metadata: Metadata = {
  title: "Roudev",
  description: "Gestiona bien tu startUp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={` antialiased`}
      >
        
          {children}
        
      </body>
    </html>
  );
}
