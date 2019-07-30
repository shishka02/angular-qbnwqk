/**
 * Spec for the action "Action flow #2"
 */
import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { STDActionActionFlow2Node2JavascriptService } from "./node-instances/STD-action-action-flow-2-node2-javascript.service";
import { STDActionActionFlow2Node3JavascriptService } from "./node-instances/STD-action-action-flow-2-node3-javascript.service";
import { STDNodeStartService } from "./nodes/STD-node-start.service";
import { STDActionActionFlow2Service } from "./STD-action-action-flow-2.service";

describe("STDActionActionFlow2Service", () => {
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
                STDActionActionFlow2Service,
                {
                    provide: STDNodeStartService,
                    useClass: MockActionNodeService
                },
                {
                    provide: STDActionActionFlow2Node2JavascriptService,
                    useClass: MockActionNodeService
                },
                {
                    provide: STDActionActionFlow2Node3JavascriptService,
                    useClass: MockActionNodeService
                }
            ]
        });
    });

    beforeEach(() => {
        service = TestBed.get(STDActionActionFlow2Service);
    });

    it("should call run", () => {
        const runResult = service.run({ type: "success", payload: {} });
        expect(runResult).toBeUndefined();
    });
});
