/**
 * Service class for node "action-nodes/snackbar"
 */
import { Inject, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class STDNodeSnackbarService {
    constructor(@Inject(MatSnackBar) private snackBar: MatSnackBar) {}

    public call(input, callback) {
        const payload = input.payload || {};
        const message = payload.message || "Snackbar Message";
        const action = payload.action || "OK";
        const duration = payload.duration || 1000;
        const horizontalPosition = payload.horizontalPosition || "center";
        const verticalPosition = payload.verticalPosition || "bottom";

        try {
            this.snackBar.open(message, action, {
                duration: duration,
                horizontalPosition: horizontalPosition,
                verticalPosition: verticalPosition
            });
            callback({
                type: "success"
            });
        } catch (error) {
            callback({
                type: "failure",
                error: true,
                payload: { error }
            });
        }
    }
}
