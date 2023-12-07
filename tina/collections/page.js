/**
 * @type {import('tinacms').Collection}
 */
import hero_banner from "./page_objects/hero_banner";
import titled_text from "./page_objects/titled_text";
import secondary_nav from "./page_objects/secondary_nav";
import action_cards from "./page_objects/action_cards";
import testimonials from "./page_objects/testimonials";
import contact_form from "./page_objects/contact_form";
import left_image from "./page_objects/left_image";
import right_image from "./page_objects/right_image";
import adornment from "./page_objects/adornment";

export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "json",
    fields: [
      {
        type: "string",
        name: "page_title",
        label: "Page Title",
        isTitle:true,
        required:true
      },
      {
        type: "object",
        name: "page_section",
        label: "Page Section",
        list: true,
        templates: [
          hero_banner,
          titled_text,
          secondary_nav,
          action_cards,
          testimonials,
          contact_form,
          left_image,
          right_image,
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
