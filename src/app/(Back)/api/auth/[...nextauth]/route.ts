

import NextAuth from "next-auth/next"
import type { AuthOptions, NextAuthOptions } from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { Adapter } from "next-auth/adapters";
// import GithubProvider from "next-auth/providers/github";
//import prisma from "@/libs/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/app/(Back)/libs/prisma";


export const authOptions: AuthOptions = {
    //adapter: PrismaAdapter(prisma) as Adapter,

    providers: [
        // GithubProvider({
        //   clientId: process.env.GITHUB_ID ?? '',
        //   clientSecret: process.env.GITHUB_SECRET ?? ''
        // })
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
            password: { label: "Contraseña", type: "password", placeholder: "***********" },
            
          },
          async authorize(credentials:any) {
            
            const userFound:any = await prisma.user.findUnique({
              where: {
                email: credentials?.email
              }
           
            })
            if(!userFound) return null
            
            
            const matchpassword = await bcrypt.compare(credentials?.password, userFound?.password)
            if(!matchpassword) return null
            //console.log('usuarioEncontrado:', userFound);
            
            return {
              id: userFound.id,
              name: userFound.primerNombre,
              email: userFound.email,
              // name: userFound?.cargo?.departamento?.areaId,
              // image: userFound.cargoId,
              // cosa: 'olis'
              //empresa: userFound.empresa,
              //cargo: 'sdsd'
            }
          }
        })
        
        
      ],
      pages: {
        signIn: "/api/auth/login",
        signOut: "/sign-out"
      },
      session: {
        strategy: 'jwt'
      },
      callbacks:{
        async signIn({}){
          return true
        },

        async jwt({ token }){
          
          const dbUser = await prisma.user.findUnique({
            where:{
              email: token.email ?? 'No hay email'
            }
          })
          if(dbUser?.isActive === false){
            throw Error('El usuario no esta activo!!')
          }

          token.id = dbUser?.id ?? 'no-uuid'
          token.apellidoPaterno = dbUser?.apellidoPaterno ?? 'eliminado' 
          // token.isActivo = dbUser.isActive ?? true

          
          
          return token
        },
        async session({ session, token }:any){

          if(session && session.user){
            session.user.id = token.id
            session.user.apellidoPaterno = token.apellidoPaterno
          }
          return session
        }
      }
}
      

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}

//export default NextAuth(authOptions)