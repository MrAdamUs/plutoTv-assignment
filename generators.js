// 1. How does this generator work and how would I use it?
export default generators => {
  console.log("running generators");
  function* idMaker() {
    var index = 0;
    while (true) yield index++;
  }

  // write example here
  console.log("ID MAKER");

  // 2. create a generator named take
  // with 2 arguments ( N, iter)
  // => it should return the N-th number of elements from the array
  function* take(n, iter) {
    let index = 0;
    for (const val of iter) {
      if (index >= n) {
        return;
      }
      index = index + 1;
      yield val;
    }
  }

  function* mainGenerator() {
    // take(5, [0, 1, 0, 1]);
    // ERROR: array out of bounds from N
    // const result = yield* take(5, naturalNumbers());
    // 1 2 3 4 5
    const result = yield* take(3, ["a", "b", "c", "d", "e"]);
    // // a b c
    console.log(result);
    yield "the end";
  }

  const gen = mainGenerator();
  for (let i of gen) {
    console.log(i);
  }
};
