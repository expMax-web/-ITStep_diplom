declare module "*.css";

declare module "*.scss";

declare module "*.svg" {
  const image: any;
  export = image;
}

declare module "*.png" {
  const image: any;
  export = image;
}
