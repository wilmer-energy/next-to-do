import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../api/auth/[...nextauth]/route";
import Image, { StaticImageData } from "next/image";
import logoJpg from "../../../public/wilmerdev-logo.jpg";

export default async function DashboardPage() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }
  const setUrlImage = (): string | StaticImageData => {
    if (!session?.user?.image) {
      return logoJpg;
    }
    return session.user.image;
  }

  return (
    <div className="grid gap-6 grid-cols-1 ">
      <WidgetItem title="User S-Side">
        <div className="flex flex-row justify-center gap-10">
          <Image src={logoJpg}
            className="rounded-lg"
            alt="tailus logo"
            width={150}
            height={150}
          />
          <div className="flex flex-col">
            <strong>Name </strong><span>{session.user?.name}</span>
            <strong>Email </strong><span>{session.user?.email}</span>
          </div>
        </div>
      </WidgetItem>
    </div>
  );
}