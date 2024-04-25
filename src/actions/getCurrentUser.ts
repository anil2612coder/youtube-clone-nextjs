// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { authOptions } from "@/components/utils/authOptions";
import prisma from "@/database/db";
import { getServerSession } from "next-auth";

export default async function getCurrentUser() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    return currentUser;
  } catch (error: any) {
    return null;
  }
}