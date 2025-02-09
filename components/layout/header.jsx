import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Fragment, useRef, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { GiOpenBook } from "react-icons/gi";
import { TiGroup } from "react-icons/ti";
import { FaCalculator, FaFilePdf, FaInstagram } from "react-icons/fa";
import iconImage from "../../public/images/brand/icon-only-light.png";

const learnToTrade = [
  {
    name: "PDF GUIDES",
    description:
      "The best PDF guides created by experienced traders. Access their knowledge and expertise to take your trading to the next level.",
    href: "/pdf-guides",
    icon: FaFilePdf,
    colSpan: 2,
  },
  {
    name: "BEST TRADING CREATORS",
    description:
      "Learn more about trading from these creators who post daily about their trading experiences.",
    href: "/best-trading-creators",
    icon: TiGroup,
    colSpan: 2,
  },
  {
    name: "TRADING TERMINOLOGY",
    description:
      "Learning the terminology of trading can help you understand the specific terms used in trading, which can improve your comprehension of trading materials and communication with other traders.",
    href: "/trading-terminology",
    icon: GiOpenBook,
    colSpan: 2,
  },
];

const tools = [
  {
    name: "POSITION SIZE CALCULATOR",
    description:
      "Calculate your trade's position size quickly and easily with our free online calculator.",
    href: "/position-size-calculator",
    icon: FaCalculator,
  },
];

const callsToAction = [
  { name: "Trading Tutorial Video", href: "#", icon: PlayCircleIcon },
  { name: "Contact Coming Soon", href: "#", icon: EnvelopeIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const learnToTradeRef = useRef();
  const toolsRef = useRef();

  return (
    <header className="bg-kt-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="lg:flex-1">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image
              src={iconImage}
              width={54}
              height={30}
              alt="Kovacs Trading"
            />
          </Link>
        </div>
        <div className=" flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6">
          <Link
            href="/"
            className={
              `text-sm font-semibold leading-6 hover:text-gray-50 ` +
              (pathname === "/" ? "text-gray-50" : "text-gray-300")
            }
          >
            HOME
          </Link>
          <Popover className="relative">
            <Popover.Button
              ref={learnToTradeRef}
              className={
                `flex items-center gap-x-1 text-sm font-semibold leading-6 hover:text-gray-50 focus:outline-none ` +
                (pathname === "/getting-started" ||
                pathname === "/best-trading-creators" ||
                pathname === "/pdf-guides" ||
                pathname === "/trading-terminology"
                  ? "text-gray-50"
                  : "text-gray-300")
              }
            >
              LEARN TO TRADE
              <ChevronDownIcon
                className="h-5 w-5 flex-none"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel className="absolute -left-64 top-full z-10 mt-3 w-screen max-w-3xl overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-kt-black/5">
                <div className="p-4 grid grid-cols-2 gap-2.5">
                  {learnToTrade.map((item) => (
                    <Link
                      href={item.href}
                      key={item.name}
                      className={
                        `${
                          item.colSpan ? "col-span-" + item.colSpan + " " : ""
                        }group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 ` +
                        (pathname !== item.href
                          ? "hover:bg-gray-50"
                          : "bg-gray-50")
                      }
                      onClick={() => learnToTradeRef.current?.click()}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-kt-yellow">
                        <item.icon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <div className="block font-semibold text-gray-900">
                          <span className="text-kt-black">{item.name}</span>
                          <span className="absolute inset-0" />
                        </div>
                        <p className="mt-1 text-gray-500">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                {/*<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      onClick={() => toolsRef.current?.click()}
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                  </div>*/}
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button
              ref={toolsRef}
              className={
                `flex items-center gap-x-1 text-sm font-semibold leading-6 hover:text-gray-50 focus:outline-none ` +
                (pathname === "/position-size-calculator"
                  ? "text-gray-50"
                  : "text-gray-300")
              }
            >
              UTILITIES
              <ChevronDownIcon
                className="h-5 w-5 flex-none"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-kt-black/5">
                <div className="p-4">
                  {tools.map((item) => (
                    <Link
                      href={item.href}
                      key={item.name}
                      className={
                        `group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6  ` +
                        (pathname !== item.href
                          ? "hover:bg-gray-50"
                          : "bg-gray-50")
                      }
                      onClick={() => toolsRef.current?.click()}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-kt-yellow">
                        <item.icon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <div className="block font-semibold text-gray-900">
                          <span className="text-kt-black">{item.name}</span>
                          <span className="absolute inset-0" />
                        </div>
                        <p className="mt-1 text-gray-500">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                {/*<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      onClick={() => toolsRef.current?.click()}
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>*/}
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            href="/best-crypto-exchange"
            className={
              `text-sm font-semibold leading-6 hover:text-gray-50 ` +
              (pathname === "/best-crypto-exchange"
                ? "text-gray-50"
                : "text-gray-300")
            }
          >
            BEST CRYPTO EXCHANGE
          </Link>
          {/* <!--<Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-300 hover:text-gray-50"
          >
            Features
          </Link>--> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
          <div className="flex justify-center items-center gap-4 text-gray-300">
            <a
              href="https://www.instagram.com/codewithroby/"
              target="_blank"
              className="hover:text-gray-50"
              aria-label="Instagram Link"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white">
          <div className="flex items-center justify-between px-6 py-6 bg-gray-900">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src={iconImage}
                width={54}
                height={30}
                alt="Kovacs Trading"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <div className="my-6 flow-root px-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                  <Link
                    href="/"
                    className={
                      `flex w-full rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ` +
                      (pathname === "/" ? "bg-gray-50" : "hover:bg-gray-50")
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    HOME
                  </Link>
                </div>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={
                          `flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ` +
                          (pathname === "/getting-started" ||
                          pathname === "/best-trading-creators" ||
                          pathname === "/pdf-guides" ||
                          pathname === "/trading-terminology"
                            ? "bg-gray-50"
                            : "hover:bg-gray-50")
                        }
                      >
                        LEARN TO TRADE
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...learnToTrade /*, ...callsToAction*/].map(
                          (item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={
                                `block rounded-lg ml-6 py-1 px-3 text-sm font-semibold leading-7 text-gray-900 ` +
                                (pathname === item.href
                                  ? "bg-gray-50"
                                  : "hover:bg-gray-50")
                              }
                            >
                              {item.name}
                            </Link>
                          )
                        )}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={
                          `flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ` +
                          (pathname === "/position-size-calculator"
                            ? "bg-gray-50"
                            : "hover:bg-gray-50")
                        }
                      >
                        UTILITIES
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...tools /*, ...callsToAction*/].map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={
                              `block rounded-lg ml-6 py-1 px-3 text-sm font-semibold leading-7 text-gray-900 ` +
                              (pathname === item.href
                                ? "bg-gray-50"
                                : "hover:bg-gray-50")
                            }
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <div className="-mx-3">
                  <Link
                    href="/best-crypto-exchange"
                    className={
                      `flex w-full rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ` +
                      (pathname === "/best-crypto-exchange"
                        ? "bg-gray-50"
                        : "hover:bg-gray-50")
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BEST CRYPTO EXCHANGE
                  </Link>
                </div>
                {/*<Link
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </Link> */}
              </div>
              <div className="py-6">
                <p className="text-kt-black text-base text-center font-bold pb-4">
                  GET IN TOUCH
                </p>
                <div className="w-full flex justify-center gap-4 text-white">
                  <a
                    href="https://www.instagram.com/codewithroby/"
                    target="_blank"
                    className="max-w-[100px] flex-1 flex justify-center rounded-lg py-2 bg-kt-yellow hover:bg-kt-black"
                    aria-label="Instagram Link"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
