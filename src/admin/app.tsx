import type { StrapiApp } from "@strapi/strapi/admin";
// import AuthLogo from "./extensions/logo.jpg";
// import MenuLogo from "./extensions/logo.jpg";
// import favicon from "./extensions/logo.jpg";

export default {
  config: {
    // head: {
    //   favicon: favicon,
    // },
    // auth: {
    //   logo: AuthLogo,
    // },
    // menu: {
    //   logo: MenuLogo,
    // },
    locales: ["uk", "vi"],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
