/**
 * Injectable service class for the action "Action flow #1"
 */
import { Inject, Injectable } from "@angular/core";
import * as _defaultsDeep from "lodash/defaultsDeep";
import * as _defer from "lodash/defer";
import * as _noop from "lodash/noop";
import { STDNodeSnackbarService } from "./nodes/STD-node-snackbar.service";

@Injectable()
export class STDActionActionFlow1Service {
    private nodes = {
        node1Snackbar: {
            class: STDNodeSnackbarService,
            settings: {
                duration: 1000,
                horizontalPosition: "center",
                verticalPosition: "bottom",
                message: "1"
            },
            hasSuccessPort: true,
            hasFailurePort: true
        },
        node2Snackbar: {
            class: STDNodeSnackbarService,
            settings: {
                duration: 1000,
                horizontalPosition: "center",
                verticalPosition: "bottom",
                message: "2"
            },
            hasSuccessPort: true,
            hasFailurePort: true
        },
        node3Snackbar: {
            class: STDNodeSnackbarService,
            settings: {
                duration: "500",
                horizontalPosition: "center",
                verticalPosition: "bottom",
                message: "3"
            },
            hasSuccessPort: true,
            hasFailurePort: true
        },
        node4Snackbar: {
            class: STDNodeSnackbarService,
            settings: {
                duration: 1000,
                horizontalPosition: "center",
                verticalPosition: "bottom",
                message: "4"
            },
            hasSuccessPort: true,
            hasFailurePort: true
        }
    };
    private heap = {
        node1Snackbar: {},
        node2Snackbar: {},
        node3Snackbar: {},
        node4Snackbar: {}
    };
    private instances = {};
    private meta;

    constructor(
        @Inject(STDNodeSnackbarService)
        protected _node1Snackbar: STDNodeSnackbarService,
        @Inject(STDNodeSnackbarService)
        protected _node2Snackbar: STDNodeSnackbarService,
        @Inject(STDNodeSnackbarService)
        protected _node3Snackbar: STDNodeSnackbarService,
        @Inject(STDNodeSnackbarService)
        protected _node4Snackbar: STDNodeSnackbarService
    ) {}

    public run(input) {
        this.instances = {};
        this.meta = input.meta || {};

        this.heap["node1Snackbar"] = input.payload;
        this.node1Snackbar(input.type);
    }

    // Node #1: action-nodes/snackbar
    private node1Snackbar(inputType) {
        // execute the node's code
        this.callNode("node1Snackbar", inputType, output => {
            const _output = output || {};

            // call the following nodes depends on output type
            switch (_output.type) {
                case "success":
                    _defer(() => this.node2Snackbar("start"));

                    break;
                default:
                    break;
            }
        });
    }

    // Node #2: action-nodes/snackbar
    private node2Snackbar(inputType) {
        // execute the node's code
        this.callNode("node2Snackbar", inputType, output => {
            const _output = output || {};

            // call the following nodes depends on output type
            switch (_output.type) {
                case "success":
                    _defer(() => this.node3Snackbar("start"));
                    _defer(() => this.node4Snackbar("start"));

                    break;
                default:
                    break;
            }
        });
    }

    // Node #3: action-nodes/snackbar
    private node3Snackbar(inputType) {
        // execute the node's code
        this.callNode("node3Snackbar", inputType);
    }

    // Node #4: action-nodes/snackbar
    private node4Snackbar(inputType) {
        // execute the node's code
        this.callNode("node4Snackbar", inputType);
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
