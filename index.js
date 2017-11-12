"use strict";

const uuidParse = require('uuid-parse');
const isUUID = require('validator/lib/isUUID');

module.exports = (uuidString, addLeadingZero = false) => {
    if (!isUUID(uuidString)) {
        throw new Error('uuidString is not valid UUID', 0);
    }

    //Allocate 16 bytes for the uuid bytes representation
    let uuidBuffer = Buffer.alloc(16);

    //Parse uuid string representation and send bytes into buffer
    uuidParse.parse(uuidString, uuidBuffer);

    //Create strict uuid hex representation
    const uuidHex = uuidBuffer.toString('hex');
    return addLeadingZero ? '0x' + uuidHex : uuidHex;
};