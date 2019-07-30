/**
 * Spec for component class "Screen #1"
 */
import { Injectable, NO_ERRORS_SCHEMA } from "@angular/core";
import { async, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { STDActionActionFlow1Service } from "../services/STD-action-action-flow-1.service";
import { STDActionActionFlow2Service } from "../services/STD-action-action-flow-2.service";
import { STDScreenScreen1Component } from "./STD-screen-screen-1.component";

describe("STDScreenScreen1Component", () => {
    let fixture;
    let component;

    @Injectable()
    class MockEventActionService {
        run = jasmine.createSpy("run");
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule],
            declarations: [STDScreenScreen1Component],
            providers: [
                {
                    provide: STDActionActionFlow1Service,
                    useClass: MockEventActionService
                },
                {
                    provide: STDActionActionFlow2Service,
                    useClass: MockEventActionService
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .overrideTemplate(
                STDScreenScreen1Component,
                "<h1>STDScreenScreen1Component</h1>"
            )
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(STDScreenScreen1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create a component", () => {
        expect(component).toBeDefined();
    });

    it("should run #onChangeNxRadioButton", () => {
        const stdactionactionflow1service = TestBed.get(
            STDActionActionFlow1Service
        );
        const $event = { target: { value: "testValue" } };

        component.onChangeNxRadioButton($event);
        expect(stdactionactionflow1service.run).toHaveBeenCalled();
    });

    it("should run #onChangeNxRadioButton2", () => {
        const stdactionactionflow1service = TestBed.get(
            STDActionActionFlow1Service
        );
        const $event = { target: { value: "testValue" } };

        component.onChangeNxRadioButton2($event);
        expect(stdactionactionflow1service.run).toHaveBeenCalled();
    });

    it("should run #onChangeRadioButtons", () => {
        const stdactionactionflow2service = TestBed.get(
            STDActionActionFlow2Service
        );
        const $event = { target: { value: "testValue" } };

        component.onChangeRadioButtons($event);
        expect(stdactionactionflow2service.run).toHaveBeenCalled();
    });

    it("should run #onChangeRadioButtons2", () => {
        const stdactionactionflow2service = TestBed.get(
            STDActionActionFlow2Service
        );
        const $event = { target: { value: "testValue" } };

        component.onChangeRadioButtons2($event);
        expect(stdactionactionflow2service.run).toHaveBeenCalled();
    });

    it("should run #onChangeRadioButtons3", () => {
        const stdactionactionflow2service = TestBed.get(
            STDActionActionFlow2Service
        );
        const $event = { target: { value: "testValue" } };

        component.onChangeRadioButtons3($event);
        expect(stdactionactionflow2service.run).toHaveBeenCalled();
    });
});
