/**
 * Registry of all UI elements from all screens
 */
import { Injectable } from "@angular/core";

@Injectable()
export class STDElementsService {
    private _registry = {
        ["2cd29cfe-d881-4551-b688-a1fa8c2f6607"]: {
            path: [0],
            name: "nx-radio-button",
            type: "nx-radio-button",
            properties: { color: "primary", labelPosition: "after" },
            events: { change: { typeof: "function" } },
            children: ["68a0216b-d0ca-4164-acac-40e1484f2075"]
        },
        ["68a0216b-d0ca-4164-acac-40e1484f2075"]: {
            path: [0, "children", 0],
            name: "text",
            type: "text",
            properties: { text: "Radio button" },
            events: {}
        },
        ["9c4a049a-b321-4c04-8302-615c0528539f"]: {
            path: [1],
            name: "nx-radio-button",
            type: "nx-radio-button",
            properties: { color: "primary", labelPosition: "after" },
            events: { change: { typeof: "function" } },
            children: ["444e73c7-2dc6-4a00-a10c-ff51927ffe65"]
        },
        ["444e73c7-2dc6-4a00-a10c-ff51927ffe65"]: {
            path: [1, "children", 0],
            name: "text",
            type: "text",
            properties: { text: "Radio button" },
            events: {}
        },
        ["31a8a0c0-e7b7-4564-9f5a-78cb75e384fb"]: {
            path: [2],
            name: "nx-radio-group",
            type: "nx-radio-group",
            properties: { labelPosition: "after", vertical: true },
            events: {},
            children: [
                "0e6ff01d-7cb4-41d4-afec-b072f8bcdeec",
                "b9fec371-bdc8-4089-a000-e43ffd24cf9e",
                "f3595879-10f2-4621-be58-f0cb5babf104"
            ]
        },
        ["0e6ff01d-7cb4-41d4-afec-b072f8bcdeec"]: {
            path: [2, "children", 0],
            name: "nx-radio-button",
            type: "nx-radio-button",
            properties: {
                color: "primary",
                name: "radioButtons",
                value: "option1",
                labelPosition: "after"
            },
            events: { change: { typeof: "function" } },
            children: ["93065d3a-dbd0-44b1-9ade-d460896ff047"]
        },
        ["93065d3a-dbd0-44b1-9ade-d460896ff047"]: {
            path: [2, "children", 0, "children", 0],
            name: "text",
            type: "text",
            properties: { text: "Option 1" },
            events: {}
        },
        ["b9fec371-bdc8-4089-a000-e43ffd24cf9e"]: {
            path: [2, "children", 1],
            name: "nx-radio-button",
            type: "nx-radio-button",
            properties: {
                color: "accent",
                name: "radioButtons",
                value: "option2",
                labelPosition: "after"
            },
            events: { change: { typeof: "function" } },
            children: ["9af0af6b-1182-443c-9673-f30ed6380e9f"]
        },
        ["9af0af6b-1182-443c-9673-f30ed6380e9f"]: {
            path: [2, "children", 1, "children", 0],
            name: "text",
            type: "text",
            properties: { text: "Option 2" },
            events: {}
        },
        ["f3595879-10f2-4621-be58-f0cb5babf104"]: {
            path: [2, "children", 2],
            name: "nx-radio-button",
            type: "nx-radio-button",
            properties: {
                name: "radioButtons",
                value: "option3",
                color: "primary",
                labelPosition: "after"
            },
            events: { change: { typeof: "function" } },
            children: ["36b377b3-2398-49bf-9040-d1e2703d497c"]
        },
        ["36b377b3-2398-49bf-9040-d1e2703d497c"]: {
            path: [2, "children", 2, "children", 0],
            name: "text",
            type: "text",
            properties: { text: "Option 3" },
            events: {}
        }
    };

    public getUIElement(id) {
        return this._registry[id];
    }
}
