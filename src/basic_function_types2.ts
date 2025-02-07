function mul(x: number, y: number): number {
  return x * y;
}

function div(x: number, y: number): number {
  return x / y;
}

function applyFunc(
  //   funcs: Array<(x: number, y: number) => number>,
  funcs: ((a: number, b: number) => number)[],
  values: [number, number][]
): number[] {
  //   let Arr1: number[] = [];
  //   Arr1.push(
  //     funcs[0](values[0][0], values[0][1]),
  //     funcs[1](values[1][0], values[1][1])
  //   );
  //   return Arr1;
  let results: number[] = [];
  for (let i = 0; i < funcs.length; i++) {
    const args = values[i];
    const result = funcs[i](args[0], args[1]);
    results.push(result);
  }
  return results;
}

console.log(
  applyFunc(
    [mul, div],
    [
      [1, 2],
      [20, 5],
    ]
  )
);
