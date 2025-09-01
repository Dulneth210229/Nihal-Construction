export const imgs = (seed) =>
  Array.from(
    { length: 5 },
    (_, i) => `https://picsum.photos/seed/${seed}-${i}/1600/1000`
  );

export const prj = (title, category, extra) => {
  const images =
    extra.images || imgs("seed-" + Math.random().toString(36).slice(2));
  return {
    id: Math.random().toString(36).slice(2),
    title,
    category,
    cover: images[0],
    ...extra,
  };
};
