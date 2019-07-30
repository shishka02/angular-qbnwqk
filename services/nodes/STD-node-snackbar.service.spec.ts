/**
 * Spec for service class "STDNodeSnackbarService"
 */
import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { MatSnackBar } from "@angular/material/snack-bar";
import { STDNodeSnackbarService } from "./STD-node-snackbar.service";

describe("Testing STDNodeSnackbarService", () => {
    let service: STDNodeSnackbarService;

    @Injectable()
    class MockSnackbar {
        open = jasmine.createSpy("open");
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                STDNodeSnackbarService,
                {
                    provide: MatSnackBar,
                    useClass: MockSnackbar
                }
            ]
        });
    });

    beforeEach(() => {
        service = TestBed.get(STDNodeSnackbarService);
    });

    it("should open snackbar", () => {
        const snackBar = TestBed.get(MatSnackBar);
        service.call(
            {
                payload: {
                    message: "Hello snackbar"
                }
            },
            ({ type }) => {
                expect(type).toBe("success");
            }
        );
        expect(snackBar.open).toHaveBeenCalled();
    });

    it("should fail to open snackbar", () => {
        const snackBar = TestBed.get(MatSnackBar);
        snackBar.open = jasmine.createSpy("open").and.throwError("error");
        service.call(
            {
                payload: {
                    message: "Hello snackbar"
                }
            },
            ({ type }) => {
                expect(type).toBe("failure");
            }
        );
    });
});
