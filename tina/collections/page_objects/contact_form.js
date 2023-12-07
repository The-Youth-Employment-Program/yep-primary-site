export default {
    name: "contactForm",
    label: "Contact Form",
    type: "object",
    ui: {
       defaultItem: {
           contactStatement: "Want to learn more about YEP and all that we do?",
           contactActionCall:"Reach out to us!",
           contactButtonText:"Get in touch"
    }
    },
    fields:[
    {
        name:"contactStatement",
        label:"Statement",
        description:"A short blurb to nudge the reader",
        type:"string"
    },
    {
        name:"contactActionCall",
        label:"Call to action",
        description:"A gripping title, but for the Contact section.",
        type:"string"
    },
    {
        name:"contactButtonText",
        label:"Contact Button Text",
        description:"The text inside the submit button",
        type: "string"
    }
    ]
}
