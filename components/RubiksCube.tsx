import Image from "next/image";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="max-w-[90%] mx-auto mt-20 md:flex md:flex-row-reverse block justify-between">
      <div className="justify-end flex">
        <Image
          src={"/cube.png"}
          width={550}
          height={550}
          alt="Cube"
          className=" object-cover"
        />
      </div>
      <header>
        <p className="whitespace-break-spaces pl-4 text-6xl md:text-7xl font-sans font-semibold">
          Discover <br />
          an exhibition <br />
          of modern cubism
        </p>
        <p className="pt-5 mb-12 pl-4 text-sm text-slate-200 leading-[1.45rem]">
          A Rubik's Cube is a three-dimensional combination puzzle that consists
          <br />
          of a cube with six faces, each made up of smaller colored squares.
          <br />
          The goal is to arrange the colors on each face so that each side of
          the cube <br /> is a single, solid color. The cube can be twisted and
          turned along its axes,
          <br />
          creating a multitude of possible combinations. <br />
        </p>
        <div className="flex justify-between">
          <button className="bg-white px-5 py-2 text-black ml-4">Camera</button>
          <p className="font-semibold md:pr-10 pr-0">
            Happy Cubing with CubeHub!
          </p>
        </div>
      </header>
    </div>
  );
};

export default Home;
