export default {
    name:"partner",
    label: "YEP Partner",
    type:"object",
    fields:[
        {
            name:"partnerType",
            label:"Partner Type",
            type:"string",
            list:false,
            options: [
                {
                    value:'organization',
                    label:'Organization'
                },
                {
                    value:'individual',
                    label:"Individual"
                },
            ],
        },
        {
            name:"name",
            label:"Name",
            description:"Name of the Organization or Individual",
            type:"string",
            isTitle:true,
            required:true,
        },
        {
            name:"image",
            label:"Profile Image",
            type:"image",
            description:"Image that displays on the Partners page card.",
        },
        {
            name:"logo",
            label:"Partner Logo",
            type:"image",
            description:"Organization Logo",
        },
        {
            name:"blurb",
            label:"Board Member Bio",
            description:"A short biography, describing the board member",
            type:"string",
        },
    ]
}