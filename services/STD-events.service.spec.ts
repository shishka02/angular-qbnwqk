/**
 * Spec for events service
 */
import { TestBed } from "@angular/core/testing";
import { STDEventsService } from "./STD-events.service";

describe("Testing STDEventsService", () => {
    let service: STDEventsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [STDEventsService]
        });
    });

    beforeEach(() => {
        service = TestBed.get(STDEventsService);
    });

    it("should allow trigger and listen events", () => {
        const callback = jasmine.createSpy("callback");
        service.listen("event1", callback);
        service.trigger("event2");
        service.trigger("");
        expect(callback).not.toHaveBeenCalled();
        service.trigger("event1");
        service.trigger("event1", { some: "object" });
        service.trigger("event1", "any value");
        expect(callback).toHaveBeenCalled();
        expect(callback.calls.count()).toEqual(3);
        expect(callback.calls.allArgs()).toEqual([
            [undefined],
            [{ some: "object" }],
            ["any value"]
        ]);
        const calls: Array<any> = callback.calls.all();
        expect(calls[0].args).toEqual([undefined]);
        expect(calls[1].args).toEqual([{ some: "object" }]);
        expect(calls[2].args).toEqual(["any value"]);
    });

    it("should allow unsubscribe", () => {
        const callback = jasmine.createSpy("callback");
        const subscription = service.listen("event1", callback);
        service.trigger("event1");
        subscription.unsubscribe();
        service.trigger("event1");
        service.trigger("event1");
        expect(callback).toHaveBeenCalled();
        expect(callback.calls.count()).toEqual(1);
    });

    it("should return observable", () => {
        const observable = service.listen("event1");
        const callback = jasmine.createSpy("callback");
        const subscription = observable.subscribe(callback);
        service.trigger("event1");
        subscription.unsubscribe();
        service.trigger("event1");
        service.trigger("event1");
        expect(callback).toHaveBeenCalled();
        expect(callback.calls.count()).toEqual(1);
    });
});
