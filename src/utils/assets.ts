export const getAssetPath = (path: string): string => {
  // Removes leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${process.env.PUBLIC_URL}/${cleanPath}`;
};
