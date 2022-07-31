export const mapper = images => {
  return images.map(({ webformatURL, largeImageURL, id, tag }) => ({
    webformatURL,
    largeImageURL,
    id,
    tag,
  }));
};
