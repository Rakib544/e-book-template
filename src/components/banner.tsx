import Image from "next/image";
import Link from "next/link";
import coverBackImage from "../images/cover-back.svg";
import coverImage from "../images/cover-front.svg";
import { Container } from "./container";
import Navbar from "./navbar";
import { buttonVariants } from "./ui/button";

export default function Hero() {
  return (
    <header className="overflow-hidden">
      <Container size="lg">
        <Navbar />
        <div className="max-w-6xl mx-auto grid grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-12 md:pt-12 lg:grid-cols-12 lg:gap-y-20 lg:pb-36 lg:pt-12 xl:py-20 items-center">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 md:px-3">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Unlock Your Potential: A Guide to Personal Growth.
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Discover the Power Within You to Transform Your Life, Achieve Your
              Goals, and Embrace Your True Potential
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#free-chapters"
                className={buttonVariants({ size: "lg" })}
              >
                Get sample chapter
              </Link>
              <Link
                href="#pricing"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Buy book
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 relative z-10 order-1 lg:order-2">
            <div className="flex">
              <div className="relative flex-shrink-0 p-4">
                <div
                  // className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-96"
                  className="relative z-10 overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5"
                >
                  <Image
                    className="h-[404px] w-[336px]"
                    src={coverImage}
                    alt=""
                    priority
                  />
                </div>
                <div className="z-0">
                  <div className="absolute -right-12 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -right-12 bottom-14 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -bottom-8 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
                    <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex-shrink-0 p-4 mt-14">
                <div className="overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5">
                  <Image
                    className="h-[404px] w-[336px]"
                    src={coverBackImage}
                    alt=""
                    priority
                  />
                </div>
                <div>
                  <div className="absolute -left-4 -right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -bottom-12 -top-20 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -left-4 -right-8 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute right-10 top-[calc(100%-1px)] -mb-px flex h-8 items-start overflow-hidden">
                    <div className="flex -mt-px h-[2px] w-80 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
