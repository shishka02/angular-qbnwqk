/**
 * Spec for the action "Action flow #1"
 */
import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { STDNodeSnackbarService } from "./nodes/STD-node-snackbar.service";
import { STDActionActionFlow1Service } from "./STD-action-action-flow-1.service";

describe("STDActionActionFlow1Service", () => {
    let service;

    @Injectable()
    class MockActionNodeService {
        call = jasmine.createSpy("call").and.callFake((input, callback) => {
            callback({
                type: "success",
                payload: {}
            });
        });
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                STDActionActionFlow1Service,
                {
                    provide: STDNodeSnackbarService,
                    useClass: MockActionNodeService
                }
            ]
        });
    });

    beforeEach(() => {
        service = TestBed.get(STDActionActionFlow1Service);
    });

    it("should call run", () => {
        const runResult = service.run({ type: "success", payload: {} });
        expect(runResult).toBeUndefined();
    });
});
