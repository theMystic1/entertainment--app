// export async function getMovies() {
//   const res = await fetch(`data.json`);
//   const data = await res.json();

//   return data;
// }

export async function getMovies() {
  const delayDuration = 1000;
  return new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch(`data.json`);
      const data = await res.json();
      resolve(data);
    }, delayDuration);
  });
}
