/**
 * Injectable service class for the action "Action flow #2"
 */
import { Injectable } from "@angular/core";
import * as _defaultsDeep from "lodash/defaultsDeep";
import * as _defer from "lodash/defer";
import * as _noop from "lodash/noop";
import { STDActionActionFlow2Node2JavascriptService } from "./node-instances/STD-action-action-flow-2-node2-javascript.service";
import { STDActionActionFlow2Node3JavascriptService } from "./node-instances/STD-action-action-flow-2-node3-javascript.service";
import { STDNodeStartService } from "./nodes/STD-node-start.service";

@Injectable()
export class STDActionActionFlow2Service {
    private nodes = {
        node1Start: {
            class: STDNodeStartService,
            settings: {},
            hasSuccessPort: true,
            hasFailurePort: false
        },
        node2Javascript: {
            class: STDActionActionFlow2Node2JavascriptService,
            settings: {},
            hasSuccessPort: true,
            hasFailurePort: true
        },
        node3Javascript: {
            class: STDActionActionFlow2Node3JavascriptService,
            settings: {},
            hasSuccessPort: true,
            hasFailurePort: true
        }
    };
    private heap = { node1Start: {}, node2Javascript: {}, node3Javascript: {} };
    private instances = {};
    private meta;

    public run(input) {
        this.instances = {};
        this.meta = input.meta || {};

        this.heap["node1Start"] = input.payload;
        this.node1Start(input.type);
    }

    // Node #1: action-nodes/start
    private node1Start(inputType) {
        // execute the node's code
        this.callNode("node1Start", inputType, output => {
            const _output = output || {};

            // call the following nodes depends on output type
            switch (_output.type) {
                case "success":
                    _defer(() => this.node2Javascript("start"));
                    _defer(() => this.node3Javascript("start"));

                    break;
                default:
                    break;
            }
        });
    }

    // Node #2: action-nodes/javascript
    private node2Javascript(inputType) {
        // execute the node's code
        this.callNode("node2Javascript", inputType);
    }

    // Node #3: action-nodes/javascript
    private node3Javascript(inputType) {
        // execute the node's code
        this.callNode("node3Javascript", inputType);
    }

    private callNode(name, inputType, callback = _noop) {
        const node = this.nodes[name];
        if (!this.instances[name]) {
            if (this[`_${name}`]) {
                this.instances[name] = this[`_${name}`];
            } else if (this.nodes[name]) {
                this.instances[name] = new node.class();
            } else {
                throw new Error(`Node "${name}" is missing.`);
            }
        }
        const input = {
            type: inputType,
            payload: _defaultsDeep({}, this.heap[name], node.settings),
            meta: this.meta
        };

        try {
            const payload = this.instances[name].call(input, callback);
            if (node.hasSuccessPort && typeof payload !== "undefined") {
                callback({
                    type: "success",
                    payload: payload
                });
            }
        } catch (error) {
            if (node.hasFailurePort) {
                callback({
                    type: "failure",
                    error: true,
                    payload: { error }
                });
            }
        }
    }
}
