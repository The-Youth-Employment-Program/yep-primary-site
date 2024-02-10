export default {
    name:"timeline",
    label: "Timeline",
    list:true,
    type:"object",
    ui:{
        itemProps (item) { return {label:item?.timelineTitle || "Timeline"}}
    },
    fields:[
        {
            label:"Timeline Title",
            name:"timelineTitle",
            type:"string"
        },
        {
            label:"Description",
            name:"timelineDescription",
            type:"string"
        },
        {
            name:"timelineEvent",
            label:"Timeline Events",
            list:true,
            type:"object",
            ui:{
                itemProps (item) { return {label:item?.eventTitle || "Event"}}
            },
            fields:[
                {
                    label:"Event Description",
                    name:"eventText",
                    type:"string",
                    ui:{ component: "textarea"}
                },
                {
                    label:"Event Title",
                    name:"eventTitle",
                    type:"string"
                },
                {
                    label:"Date",
                    name:"eventDate",
                    type:"datetime",
                    ui: {
                        dateFormat: 'YY-MM-DD',
                        parse: (value) => value && value.format('YYYY-MM-DD'),
                    },
                }
            ]
        },
        {
            label:"Accent Color",
            name: "accent_color",
            type:"string",
            list:false,
            options: [
                {
                    value:'before:dark:bg-salmon-tan',
                    label:'YEP Tan'
                },
                {
                    value:'before:dark:bg-salmon-red',
                    label:'YEP Red'
                },
                {
                    value:'before:dark:bg-salmon-green',
                    label:'YEP Green'
                },
                {
                    value:'before:dark:bg-salmon-light-g1',
                    label:'Light Grey 1'
                },
                {
                    value:'before:dark:bg-salmon-light-g2',
                    label:'Light Grey 2'
                },
                {
                    value:'before:dark:bg-salmon-dark-g1',
                    label:'Dark Grey 1'
                },
                {
                    value:'before:dark:bg-salmon-dark-g2',
                    label:'Dark Grey 2'
                }
            ]
        },
    ]
}
