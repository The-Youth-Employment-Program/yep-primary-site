export default {
    name: "contact_form",
    label: "Contact Form",
    type: "object",
    ui: {
       defaultItem: {
           contact_statement: "Want to learn more about YEP and all that we do?",
           contact_action_call:"Reach out to us!",
           contact_button_text:"Get in touch"
    }
    },
    fields:[
    {
        name:"contact_statement",
        label:"Statement",
        description:"A short blurb to nudge the reader",
        type:"string"
    },
    {
        name:"contact_action_call",
        label:"Call to action",
        description:"A gripping title, but for the Contact section.",
        type:"string"
    },
    {
        name:"contact_button_text",
        label:"Contact Button Text",
        description:"The text inside the submit button",
        type: "string"
    }
    ]
}
