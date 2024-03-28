export const printVersion = () => {
  console.log(`%c v${APP_VERSION}`, "background: #9747DD; color: #FFF");
};

export const pascalToKebab = (str: string) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/-?element/, "");

export const scrollToTop = (delay = 0) => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as any,
    });
  }, delay);
};

export function getPublicFileUrl(path: string) {
  if (path.startsWith("http")) {
    return path;
  }

  const baseUrl = new URL(
    import.meta.env.BASE_URL || "",
    import.meta.url
  ).href.replace(/\/$/, "");
  return `${baseUrl}${path}`;
}
