/**
 * @type {import('tinacms').Collection}
 */
import donation from "./stripe_types/donation";
import product from "./stripe_types/product";
import sponsor from "./stripe_types/sponsor";

export default {
  label: "Payment Information",
  name: "stripeContent",
  path: "content/stripe",
  format: "json",
  templates: [
    donation,
    product,
    sponsor,
  ],
  ui: {
    router: ({ document }) => {
        return `/stripe/${document._sys.filename}`;
    },
},
};
