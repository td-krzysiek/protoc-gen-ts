/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: test/_/jstype.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class JSType extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        int_but_string?: string;
        int_and_normal?: number;
        int_and_number?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("int_but_string" in data && data.int_but_string != undefined) {
                this.int_but_string = data.int_but_string;
            }
            if ("int_and_normal" in data && data.int_and_normal != undefined) {
                this.int_and_normal = data.int_and_normal;
            }
            if ("int_and_number" in data && data.int_and_number != undefined) {
                this.int_and_number = data.int_and_number;
            }
        }
    }
    get int_but_string() {
        return pb_1.Message.getField(this, 1) as string;
    }
    set int_but_string(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get int_and_normal() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set int_and_normal(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get int_and_number() {
        return pb_1.Message.getField(this, 3) as number;
    }
    set int_and_number(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data: {
        int_but_string?: string;
        int_and_normal?: number;
        int_and_number?: number;
    }): JSType {
        const message = new JSType({});
        if (data.int_but_string != null) {
            message.int_but_string = data.int_but_string;
        }
        if (data.int_and_normal != null) {
            message.int_and_normal = data.int_and_normal;
        }
        if (data.int_and_number != null) {
            message.int_and_number = data.int_and_number;
        }
        return message;
    }
    toObject() {
        const data: {
            int_but_string?: string;
            int_and_normal?: number;
            int_and_number?: number;
        } = {};
        if (this.int_but_string != null) {
            data.int_but_string = this.int_but_string;
        }
        if (this.int_and_normal != null) {
            data.int_and_normal = this.int_and_normal;
        }
        if (this.int_and_number != null) {
            data.int_and_number = this.int_and_number;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.int_but_string !== undefined)
            writer.writeInt64String(1, this.int_but_string);
        if (this.int_and_normal !== undefined)
            writer.writeInt64(2, this.int_and_normal);
        if (this.int_and_number !== undefined)
            writer.writeInt64(3, this.int_and_number);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): JSType {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new JSType();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.int_but_string = reader.readInt64String();
                    break;
                case 2:
                    message.int_and_normal = reader.readInt64();
                    break;
                case 3:
                    message.int_and_number = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): JSType {
        return JSType.deserialize(bytes);
    }
}
