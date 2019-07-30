/**
 * Registry for all types of entities (screen components, action flow services, data model services)
 */
import { Inject, Injectable, Injector } from "@angular/core";

@Injectable()
export class STDRegistryService {
    constructor(@Inject(Injector) private _injector: Injector) {}

    private _registry = {};

    public register(type, id, entity) {
        this._registry[type] = this._registry[type] || {};
        if (this._registry[type][id]) {
            throw new Error(`${type} ${id} already exists in the registry.`);
        }
        this._registry[type][id] = entity;
    }

    public get(type, id) {
        return this._registry[type] && this._registry[type][id];
    }

    public reset(registry) {
        this._registry = {};
        Object.keys(registry).forEach(type => {
            Object.keys(registry[type]).forEach(id => {
                this.register(
                    type,
                    id,
                    type === "screen"
                        ? registry[type][id]
                        : this._injector.get(registry[type][id])
                );
            });
        });
    }
}
