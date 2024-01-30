export default {
    name:"board",
    label: "Board Member",
    type:"object",
    fields:[
        {
            name:"name",
            label:"Full Name",
            description:"Board Member's full name",
            type:"string",
            isTitle:true,
            required:true,
        },
        {
            name:"image",
            label:"Member Photo",
            type:"image",
        },
        // {
        //     name:"qualifier",
        //     label:"Board Qualifier",
        //     description:"Member's organization or position",
        //     type:"string",
        // },
        {
            name:"blurb",
            label:"Board Member Bio",
            description:"A short biography, describing the board member",
            type:"string",
            ui:{ component:"textarea" },
        },
    ]
}