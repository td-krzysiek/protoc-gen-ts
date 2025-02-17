/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: test/_/optional/optional_proto3.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class Optional extends pb_1.Message {
    #one_of_decls: number[][] = [[2]];
    constructor(data?: any[] | ({
        should_not_be_required?: string[];
    } & (({
        proto3_optional?: string;
    })))) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("should_not_be_required" in data && data.should_not_be_required != undefined) {
                this.should_not_be_required = data.should_not_be_required;
            }
            if ("proto3_optional" in data && data.proto3_optional != undefined) {
                this.proto3_optional = data.proto3_optional;
            }
        }
    }
    get should_not_be_required() {
        return pb_1.Message.getField(this, 1) as string[];
    }
    set should_not_be_required(value: string[]) {
        pb_1.Message.setField(this, 1, value);
    }
    get proto3_optional() {
        return pb_1.Message.getField(this, 2) as string;
    }
    set proto3_optional(value: string) {
        pb_1.Message.setOneofField(this, 2, this.#one_of_decls[0], value);
    }
    get _proto3_optional() {
        const cases: {
            [index: number]: "none" | "proto3_optional";
        } = {
            0: "none",
            2: "proto3_optional"
        };
        return cases[pb_1.Message.computeOneofCase(this, [2])];
    }
    static fromObject(data: {
        should_not_be_required?: string[];
        proto3_optional?: string;
    }): Optional {
        const message = new Optional({});
        if (data.should_not_be_required != null) {
            message.should_not_be_required = data.should_not_be_required;
        }
        if (data.proto3_optional != null) {
            message.proto3_optional = data.proto3_optional;
        }
        return message;
    }
    toObject() {
        const data: {
            should_not_be_required?: string[];
            proto3_optional?: string;
        } = {};
        if (this.should_not_be_required != null) {
            data.should_not_be_required = this.should_not_be_required;
        }
        if (this.proto3_optional != null) {
            data.proto3_optional = this.proto3_optional;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.should_not_be_required !== undefined)
            writer.writeRepeatedString(1, this.should_not_be_required);
        if (typeof this.proto3_optional === "string" && this.proto3_optional.length)
            writer.writeString(2, this.proto3_optional);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Optional {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Optional();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                    break;
                case 2:
                    message.proto3_optional = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Optional {
        return Optional.deserialize(bytes);
    }
}
