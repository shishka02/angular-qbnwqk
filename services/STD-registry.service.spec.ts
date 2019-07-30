/**
 * Spec for registry service
 */
import { TestBed } from "@angular/core/testing";
import { STDRegistryService } from "./STD-registry.service";

describe("Testing STDRegistryService", () => {
    let service: STDRegistryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [STDRegistryService]
        });
    });

    beforeEach(() => {
        service = TestBed.get(STDRegistryService);
    });

    it("should call register entity", () => {
        const entity = { a: 1 };
        service.register("screen", "aaa", entity);
        const entity2 = service.get("screen", "aaa");
        expect(entity2).toEqual(entity);
    });

    it("should call reset registry", () => {
        const entity = { a: 1 };
        const registry = {
            screen: {
                aaa: entity
            }
        };
        service.reset(registry);
        const entity2 = service.get("screen", "aaa");
        expect(entity2).toEqual(registry.screen.aaa);
    });
});
