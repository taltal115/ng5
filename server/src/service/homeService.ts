import * as mime from "mime";
import * as path from "path";
import * as fs from "fs";

var deferred = require('deferred');

export class HomeService {


    public tree() {
        return {
            data: {
                text: "Ext JS",
                qtip: "left tree grid tooltip for I like chocolate",
                fileUuid: 1,
                expanded: true,
                children: [
                    {
                        text: "Archives",
                        fileUuid: 2,
                        isDeleted: true,
                        children: [
                            {
                                fileUuid: 3, leaf: false, expanded: false, text: "111Application.js", children: [
                                    {
                                        fileUuid: 4, leaf: false, expanded: false, text: "222Application.js", children: [
                                            {
                                                fileUuid: 5, leaf: false, expanded: false, text: "333Application.js", children: [
                                                    { fileUuid: 6, leaf: false, expanded: false, text: "444Application.js" }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: "Movies 2017",
                        expanded: true,
                        fileUuid: 7,
                        children: [
                            { fileUuid: 8, leaf: false, expanded: false, text: "Action" },
                            { fileUuid: 9, leaf: false, expanded: false, text: "Comedy" },
                            { fileUuid: 10, leaf: false, expanded: false, text: "Drama" }
                        ]
                    },
                    {
                        text: "Commercial",
                        fileUuid: 11,
                        children: [
                            { fileUuid: 12, leaf: false, expanded: false, text: "ButtonGroup.js" },
                            { fileUuid: 13, leaf: false, expanded: false, text: "Container.js" },
                            { fileUuid: 14, leaf: false, expanded: false, text: "Viewport.js" }
                        ]
                    },
                    {
                        text: "Music",
                        fileUuid: 15,
                        children: [
                            {
                                text: "dom",
                                fileUuid: 16,
                                children: [
                                    { fileUuid: 17, leaf: false, expanded: false, text: "Element.form.js" },
                                    { fileUuid: "12fgfsdg3", leaf: false, expanded: false, text: "Element.static-more.js" }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
}