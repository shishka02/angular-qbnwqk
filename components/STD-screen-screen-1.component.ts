/**
 * Component class for the screen "Screen #1"
 */
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    ViewEncapsulation
} from "@angular/core";
import { STDActionActionFlow1Service } from "../services/STD-action-action-flow-1.service";
import { STDActionActionFlow2Service } from "../services/STD-action-action-flow-2.service";

@Component({
    selector: "nxn-std-screen-screen-1",
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./STD-screen-screen-1.html"
})
export class STDScreenScreen1Component {
    constructor(
        @Inject(STDActionActionFlow1Service)
        private _actionActionFlow1: STDActionActionFlow1Service,
        @Inject(STDActionActionFlow2Service)
        private _actionActionFlow2: STDActionActionFlow2Service
    ) {}

    // handler for "change" event of "nx-radio-button" element
    onChangeNxRadioButton($event) {
        this._actionActionFlow1.run({
            type: "UI_EVENT",
            payload: { name: "change", event: $event }
        });
    }

    // handler for "change" event of "nx-radio-button" element
    onChangeNxRadioButton2($event) {
        this._actionActionFlow1.run({
            type: "UI_EVENT",
            payload: { name: "change", event: $event }
        });
    }

    // handler for "change" event of "nx-radio-button" element
    onChangeRadioButtons($event) {
        this._actionActionFlow2.run({
            type: "UI_EVENT",
            payload: { name: "change", event: $event }
        });
    }

    // handler for "change" event of "nx-radio-button" element
    onChangeRadioButtons2($event) {
        this._actionActionFlow2.run({
            type: "UI_EVENT",
            payload: { name: "change", event: $event }
        });
    }

    // handler for "change" event of "nx-radio-button" element
    onChangeRadioButtons3($event) {
        this._actionActionFlow2.run({
            type: "UI_EVENT",
            payload: { name: "change", event: $event }
        });
    }
}
