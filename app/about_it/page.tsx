import Image from "next/image";

function page() {
  return (
    <div className="max-w-[90%] mx-auto pt-28 pb-8">
      <div>
        <div className="flex justify-between w-full mb-20">
          <div className="w-full flex justify-center">
            <Image
              src={"/about-cube.png"}
              alt="cube"
              height={300}
              width={300}
              className="object-contain"
            />
          </div>
          <div className="w-[85%]">
            <h1 className="text-4xl mb-5 font-extrabold underline md: underline-offset-4">
              About Us
            </h1>
            <h2 className="text-2xl mb-2 font-semibold">
              Unraveling the Complexity of the Cube
            </h2>
            <p>
              Welcome to The CubeHub, your ultimate destination for mastering
              the art of solving Rubik's Cubes and other twisty puzzles. We're
              not just a website; we're a hub of knowledge, techniques, and a
              community of passionate puzzle enthusiasts.
            </p>
          </div>
        </div>
        <div className="container mx-auto my-8">
          <div className="flex flex-wrap mx-4"></div>
          <div className="grid grid-cols-3 space-x-6">
            <div className="bg-slate-900 rounded-md border-l-slate-900 py-6 px-6 mb-8 text-justify">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-white">
                Empowering teams and individuals through seamless collaboration.
                We believe in the power of teamwork and technology to transform
                ideas into reality.
              </p>
            </div>
            <div className="bg-slate-900 rounded-md border-l-slate-900 py-6 px-6 mb-8 text-justify">
              <h2 className="text-2xl font-bold mb-4">What Drives Us</h2>
              <p className="text-white">
                Fueled by a relentless passion for innovation. Our mission is to
                push boundaries, disrupt the status quo, and inspire creative
                thinking.
              </p>
            </div>
            <div className="bg-slate-900 rounded-md border-l-slate-900 py-6 px-6 mb-8 text-justify">
              <h2 className="text-2xl font-bold mb-4">How We Achieve It</h2>
              <p className="text-white">
                Leveraging cutting-edge technology to provide a platform that
                fosters seamless collaboration and enhances productivity.
              </p>
            </div>
          </div>
        </div>

        <footer className="bg-slate-950 text-white p-8 rounded-md">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Join Us</h2>
            <p className="text-justify">
              At The Cube Solver, we are dedicated to unraveling the complexity
              of Rubik's Cubes and twisty puzzles. If you're passionate about
              puzzles or want to embark on a fascinating journey of discovery,
              you've come to the right place. We're excited to be a part of your
              puzzle-solving adventure and look forward to celebrating your
              achievements with you. Thank you for choosing The Cube Solver as
              your trusted resource. Feel free to adapt and modify this content
              to reflect the specific mission and values of your Cube Solver
              website.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default page;
