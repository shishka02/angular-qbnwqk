/**
 * Angular module class for App Studio project "Sordid Icicle Project"
 */
import { CommonModule } from "@angular/common";
import { Inject, NgModule } from "@angular/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NxRadioModule } from "nx-components/nx-radio";
import { NxnRouterModule } from "nxn-common";
import { STDScreenScreen1Component } from "./components/STD-screen-screen-1.component";
import { STDNodeSnackbarService } from "./services/nodes/STD-node-snackbar.service";
import { STDActionActionFlow1Service } from "./services/STD-action-action-flow-1.service";
import { STDActionActionFlow2Service } from "./services/STD-action-action-flow-2.service";
import { STDElementsService } from "./services/STD-elements.service";
import { STDEventsService } from "./services/STD-events.service";
import { STDRegistryService } from "./services/STD-registry.service";

const REGISTRY = {
    ["screen"]: {
        ["screen1"]: STDScreenScreen1Component,
        ["3d8a9756-ae41-4ffc-b001-8ba6e527ae66"]: STDScreenScreen1Component
    },
    ["action"]: {
        ["actionFlow1"]: STDActionActionFlow1Service,
        ["e7ed6f6e-5b1d-4eba-9e54-b202b8bd2dd7"]: STDActionActionFlow1Service,
        ["actionFlow2"]: STDActionActionFlow2Service,
        ["b5dfc7f6-02b8-4311-9944-0f021c072eac"]: STDActionActionFlow2Service
    }
};

@NgModule({
    declarations: [STDScreenScreen1Component],
    imports: [
        CommonModule,
        MatSnackBarModule,
        NxRadioModule,
        NxnRouterModule.forChild([
            { component: STDScreenScreen1Component, path: "" },
            {
                component: STDScreenScreen1Component,
                path: "3d8a9756-ae41-4ffc-b001-8ba6e527ae66"
            }
        ])
    ],
    exports: [STDScreenScreen1Component],
    providers: [
        STDActionActionFlow1Service,
        STDActionActionFlow2Service,
        STDElementsService,
        STDEventsService,
        STDNodeSnackbarService,
        STDRegistryService
    ],
    entryComponents: [STDScreenScreen1Component]
})
export class STDSordidIcicleProjectModule {
    constructor(
        @Inject(STDRegistryService) private _registry: STDRegistryService
    ) {
        this._registry.reset(REGISTRY);
    }

    getScreen(nameOrId) {
        return this._registry.get("screen", nameOrId);
    }

    getAction(nameOrId) {
        return this._registry.get("action", nameOrId);
    }
}
