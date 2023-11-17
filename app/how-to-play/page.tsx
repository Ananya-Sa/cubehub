function page() {
  return (
    <>
      <h1 className="text-3xl text-blue-500">How to play a Rubik's cube</h1>
      <div className="text-xl">
        <h2>
          {" "}
          Playing with a Rubik's Cube can be a fun and challenging experience.
          Here's a step-by-step guide on how to play with and solve a Rubik's
          Cube:
        </h2>
        <h2>Phase 1: Getting the First Two Layers Right</h2>
        <h3>
          Step 1:
          <b>Create a representation of the cube:</b> Represent the current
          state of the cube in terms of permutations and orientations of the
          corners and edges.
        </h3>

        <h3>
          Step 2: Completing the First Layer
          <p>
            Locate the corner pieces that belong to the base color. Find the
            corner piece that has the base color and another color that matches
            the adjacent center color. Position the corner piece above the
            correct slot on the first layer. Then, rotate the bottom layer to
            move the corner piece into place. Repeat this for all four corners
            of the first layer.
          </p>
        </h3>

        <h3>
          Step 3: Solving the Second Layer
          <p>
            Turn the cube upside down so that the completed first layer is now
            the bottom layer. Find an edge piece that belongs to the middle
            layer. Position it directly below its correct spot on the second
            layer. Perform the sequence: R U R' U' to move the edge piece into
            place. Repeat this step for all four edge pieces of the second
            layer.
          </p>
        </h3>

        <h3>
          Step 4: Solving the Top Layer Cross
          <p>
            Hold the cube with the completed first and second layers facing you.
            Look at the top layer and find any incomplete cross shape. If there
            is a line, perform F R U R' U' F' to turn it into an L shape. If
            there is an L shape, perform the same sequence twice to complete the
            cross.
          </p>
        </h3>

        <h3>
          Step 5: Orienting the Top Layer Corners
          <p>
            Rotate the top layer until a corner piece with the base color is in
            the correct position (not necessarily oriented correctly). Perform
            the sequence: R U R' U' until the corner piece is oriented
            correctly. Repeat this for all four corners of the top layer.
          </p>
        </h3>

        <h1>
          Step 6: Permuting the Top Layer Corners
          <p>
            With the correctly oriented corners, hold the cube in a way that two
            of the corners are in the front right and back right positions.
            Perform the sequence: U R U' L' U R' U' L. This will swap the two
            corners. Repeat this step until all the corners are in their correct
            positions.
          </p>
        </h1>

        <h1>
          Step 7: Permuting the Top Layer Edges
          <p>
            With the correctly positioned corners, hold the cube with one
            unsolved edge piece at the front. Perform the sequence: R U R' U' R'
            F R2 U' R' U' R U R' F'. This will move the unsolved edge to the
            back. Repeat this step until all the edges are solved.
          </p>
        </h1>
      </div>
    </>
  );
}

export default page;
