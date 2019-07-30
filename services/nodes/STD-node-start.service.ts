/**
 * Service class for node "action-nodes/start"
 */
export class STDNodeStartService {
    public call(input, callback) {
        const { type = "", payload = {}, meta = {} } = input || {};
        callback({
            type: "success",
            payload: {
                ...payload,
                type,
                payload,
                meta
            }
        });
    }
}
