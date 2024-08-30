import React from "react";
import Logo from "@/components/logo";
import Image from "next/image";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import { ModeToggle } from "@/components/theme-toggle";

interface RegisterPageProps {
  params: {
    userId: string;
  };
}

const RegisterPage = async ({ params: { userId } }: RegisterPageProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <div className="flex items-center justify-between mb-3">
            <Logo />
            <ModeToggle />
          </div>
          <RegisterForm user={user} />

          <p className="copyright py-12">
            © 2024 FitSyncPro. All rights reserved.
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        width={1000}
        height={1000}
        alt="client"
        className="hidden lg:block side-img max-w-[390px]"
      />
    </div>
  );
};
export default RegisterPage;
