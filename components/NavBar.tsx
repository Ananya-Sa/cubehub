import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu } from "lucide-react";

function NavBar() {
  return (
    <header className="max-w-[90%] mx-auto">
      <nav className="w-full">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl text-white font-bold">CubeHub</div>
          <div className="md:hidden block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-4 mt-2 bg-slate-950">
                <DropdownMenuItem>
                  <Link
                    className="hover:bg-slate-900 hover:underline transition duration-300 px-4 py-2 rounded-md"
                    href={"/"}
                  >
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="hover:bg-slate-900 hover:underline transition duration-300 px-4 py-2 rounded-md"
                    href={"/about_it"}
                  >
                    About It
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="hover:bg-slate-900 hover:underline transition duration-300 px-4 py-2 rounded-md"
                    href={"/how-to-play"}
                  >
                    How to play
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="hover:bg-slate-900 hover:underline transition duration-300 px-4 py-2 rounded-md border-amber-200"
                    href={"/contact"}
                  >
                    Contact
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="md:flex hidden gap-3 items-center">
            <Link
              className="hover:bg-slate-900 hover:underline transition duration-300 px-4 py-2 rounded-md"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="hover:bg-slate-900 hover:underline transition duration-300 px-4 py-2 rounded-md"
              href={"/about_it"}
            >
              About It
            </Link>
            <Link
              className="hover:bg-slate-900 hover:underline transition duration-300 px-4 py-2 rounded-md"
              href={"/how-to-play"}
            >
              How to play
            </Link>
            <Link
              className="hover:bg-slate-900 hover:underline transition duration-300 px-4 py-2 rounded-md border-amber-200"
              href={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
