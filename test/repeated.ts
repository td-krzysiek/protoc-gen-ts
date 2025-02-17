/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: test/_/repeated.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class Repeated extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        indx?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("indx" in data && data.indx != undefined) {
                this.indx = data.indx;
            }
        }
    }
    get indx() {
        return pb_1.Message.getField(this, 4) as number[];
    }
    set indx(value: number[]) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
        indx?: number[];
    }): Repeated {
        const message = new Repeated({});
        if (data.indx != null) {
            message.indx = data.indx;
        }
        return message;
    }
    toObject() {
        const data: {
            indx?: number[];
        } = {};
        if (this.indx != null) {
            data.indx = this.indx;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.indx !== undefined)
            writer.writePackedInt32(4, this.indx);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Repeated {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Repeated();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.indx = reader.readPackedInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Repeated {
        return Repeated.deserialize(bytes);
    }
}
