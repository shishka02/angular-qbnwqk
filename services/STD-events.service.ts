/**
 * Module events service
 */
import { Injectable } from "@angular/core";
import { Observable, Subject, Unsubscribable } from "rxjs";

@Injectable()
export class STDEventsService {
    private _events = {};

    public trigger(eventName: string, eventData?: any) {
        if (eventName && this._events[eventName]) {
            this._events[eventName].next(eventData);
        }
    }

    public listen(eventName: string): Observable<any>;

    public listen(
        eventName: string,
        callback: (value: any) => void
    ): Unsubscribable;

    public listen(eventName: string, callback?: (value: any) => void) {
        if (!eventName) {
            return;
        }
        this._events[eventName] = this._events[eventName] || new Subject<any>();

        if (typeof callback === "function") {
            return this._events[eventName].asObservable().subscribe(callback);
        } else {
            return this._events[eventName].asObservable();
        }
    }
}
