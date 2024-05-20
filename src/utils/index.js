const memo = {};
export const getBackgroundColor = function (...args) {
    console.log("arguments", args)
    const uniqueId = args.join("");  
  if (!memo[uniqueId]) {
    memo[uniqueId] = `rgb(${[
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255,
    ].toString()})`;
  }
  console.table("memo", memo);
  return memo[uniqueId];
};
