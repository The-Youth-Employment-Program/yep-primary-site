export default {
    name: "action_cards",
    label: "Action Cards",
    type: "object",
    list: true,
    fields: [
        {
            label:"Action Card",
            name:"action_card",
            type:"object",
            list: true,
            ui: {
                itemProps (item) {
                    return { label: item?.card_title || "Action Card" }
                }
            },
            fields:[
                {
                    label: "Action Card Title",
                    name: "card_title",
                    type: "string"
                },
                {
                    label: "Action Text",
                    name:"action_text",
                    type: "rich-text"
                },
                {
                    label: "Call to Action",
                    name: "action_call",
                    type: "string"
                }
            ]
        }
    ]
}
