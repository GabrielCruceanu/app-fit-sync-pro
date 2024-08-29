import Image from "next/image";
import Logo from "@/components/logo";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO Otp notification  | PassKeyModal */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center justify-between mb-3">
            <Logo />
            <ModeToggle />
          </div>
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="jutify-items-end xl:text-left">
              © 2024 FitSyncPro. All rights reserved.
            </p>
            <Link href="/?admin=true" className="">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        width={1000}
        height={1000}
        alt="client"
        className="hidden lg:block side-img max-w-[50%]"
      />
    </div>
  );
}
