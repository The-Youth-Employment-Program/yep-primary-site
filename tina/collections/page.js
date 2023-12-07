/**
 * @type {import('tinacms').Collection}
 */
import heroBanner from "./page_objects/hero_banner";
import titledText from "./page_objects/titled_text";
import secondaryNav from "./page_objects/secondary_nav";
import actionCards from "./page_objects/action_cards";
import testimonials from "./page_objects/testimonials";
import contactForm from "./page_objects/contact_form";
import leftImage from "./page_objects/left_image";
import rightImage from "./page_objects/right_image";
import adornment from "./page_objects/adornment";

export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "json",
    fields: [
      {
        type: "string",
        name: "pageTitle",
        label: "Page Title",
        isTitle:true,
        required:true
      },
      {
        type: "object",
        name: "section",
        label: "Page Section",
        list: true,
        templates: [
          heroBanner,
          titledText,
          secondaryNav,
          actionCards,
          testimonials,
          contactForm,
          leftImage,
          rightImage,
          adornment
        ]
      }

//     ],
// },
],
ui: {
  router: ({ document }) => {
    if (document._sys.filename === "home") {
      return `/`;
    }
    return undefined;
  },
}
};
