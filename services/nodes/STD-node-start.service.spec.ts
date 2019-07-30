/**
 * Spec for service class "STDNodeStartService"
 */
import { TestBed } from "@angular/core/testing";
import { STDNodeStartService } from "./STD-node-start.service";

describe("Testing STDNodeStartService", () => {
    let service: STDNodeStartService;
    const input = { type: "type", payload: {}, meta: {} };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [STDNodeStartService]
        });
    });

    beforeEach(() => {
        service = TestBed.get(STDNodeStartService);
    });

    it("should call and return callback", () => {
        service.call(input, ({ type, payload }) => {
            expect(type).toEqual("success");
            expect(payload).toEqual(input);
        });
    });
});
