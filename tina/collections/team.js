/**
 * @type {import('tinacms').Collection}
 */
import employee from "./team_types/employee";
import board_member from "./team_types/board_member";
import partner from "./team_types/partner";

export default {
  label: "Our Team",
  name: "team",
  path: "content/team",
  format: "json",
  templates: [
    employee,
    board_member,
    partner,
  ],
  ui: {
    router: ({ document }) => {
        return `/team/${document._sys.filename}`;
    },
},
};
