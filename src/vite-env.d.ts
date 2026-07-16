/// <reference types="vite/client" />

// Declare uppercase image extensions so TypeScript can resolve them
declare module "*.JPG" {
  const src: string;
  export default src;
}

declare module "*.JPEG" {
  const src: string;
  export default src;
}

declare module "*.PNG" {
  const src: string;
  export default src;
}

declare module "*.HEIC" {
  const src: string;
  export default src;
}

declare module "*.SVG" {
  const src: string;
  export default src;
}
