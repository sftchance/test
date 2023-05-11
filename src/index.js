"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLibColorRgbRgb = exports.useLibColorRgbR = exports.useLibColorRgbPack = exports.useLibColorRgbNumber = exports.useLibColorRgbHexadecimal = exports.useLibColorRgbG = exports.useLibColorRgbB = exports.useLibColorRgbRead = exports.readLibColorRgb = exports.getLibColorRgb = exports.libColorRgbABI = void 0;
const wagmi_1 = require("wagmi");
const actions_1 = require("wagmi/actions");
exports.libColorRgbABI = [
    {
        stateMutability: 'pure',
        type: 'function',
        inputs: [{ name: '$color', internalType: 'uint24', type: 'uint24' }],
        name: 'b',
        outputs: [{ name: '$b', internalType: 'uint8', type: 'uint8' }],
    },
    {
        stateMutability: 'pure',
        type: 'function',
        inputs: [{ name: '$color', internalType: 'uint24', type: 'uint24' }],
        name: 'g',
        outputs: [{ name: '$g', internalType: 'uint8', type: 'uint8' }],
    },
    {
        stateMutability: 'pure',
        type: 'function',
        inputs: [{ name: '$color', internalType: 'uint24', type: 'uint24' }],
        name: 'hexadecimal',
        outputs: [{ name: '$hex', internalType: 'string', type: 'string' }],
    },
    {
        stateMutability: 'pure',
        type: 'function',
        inputs: [{ name: '$hex', internalType: 'bytes', type: 'bytes' }],
        name: 'number',
        outputs: [{ name: '$color', internalType: 'uint24', type: 'uint24' }],
    },
    {
        stateMutability: 'pure',
        type: 'function',
        inputs: [
            { name: '$r', internalType: 'uint8', type: 'uint8' },
            { name: '$g', internalType: 'uint8', type: 'uint8' },
            { name: '$b', internalType: 'uint8', type: 'uint8' },
        ],
        name: 'pack',
        outputs: [{ name: '$color', internalType: 'uint24', type: 'uint24' }],
    },
    {
        stateMutability: 'pure',
        type: 'function',
        inputs: [{ name: '$color', internalType: 'uint24', type: 'uint24' }],
        name: 'r',
        outputs: [{ name: '$r', internalType: 'uint8', type: 'uint8' }],
    },
    {
        stateMutability: 'pure',
        type: 'function',
        inputs: [{ name: '$color', internalType: 'uint24', type: 'uint24' }],
        name: 'rgb',
        outputs: [
            { name: '$r', internalType: 'uint8', type: 'uint8' },
            { name: '$g', internalType: 'uint8', type: 'uint8' },
            { name: '$b', internalType: 'uint8', type: 'uint8' },
        ],
    },
];
function getLibColorRgb(config) {
    return (0, actions_1.getContract)(Object.assign({ abi: exports.libColorRgbABI }, config));
}
exports.getLibColorRgb = getLibColorRgb;
function readLibColorRgb(config) {
    return (0, actions_1.readContract)(Object.assign({ abi: exports.libColorRgbABI }, config));
}
exports.readLibColorRgb = readLibColorRgb;
function useLibColorRgbRead(config = {}) {
    return (0, wagmi_1.useContractRead)(Object.assign({ abi: exports.libColorRgbABI }, config));
}
exports.useLibColorRgbRead = useLibColorRgbRead;
function useLibColorRgbB(config = {}) {
    return (0, wagmi_1.useContractRead)(Object.assign({ abi: exports.libColorRgbABI, functionName: 'b' }, config));
}
exports.useLibColorRgbB = useLibColorRgbB;
function useLibColorRgbG(config = {}) {
    return (0, wagmi_1.useContractRead)(Object.assign({ abi: exports.libColorRgbABI, functionName: 'g' }, config));
}
exports.useLibColorRgbG = useLibColorRgbG;
function useLibColorRgbHexadecimal(config = {}) {
    return (0, wagmi_1.useContractRead)(Object.assign({ abi: exports.libColorRgbABI, functionName: 'hexadecimal' }, config));
}
exports.useLibColorRgbHexadecimal = useLibColorRgbHexadecimal;
function useLibColorRgbNumber(config = {}) {
    return (0, wagmi_1.useContractRead)(Object.assign({ abi: exports.libColorRgbABI, functionName: 'number' }, config));
}
exports.useLibColorRgbNumber = useLibColorRgbNumber;
function useLibColorRgbPack(config = {}) {
    return (0, wagmi_1.useContractRead)(Object.assign({ abi: exports.libColorRgbABI, functionName: 'pack' }, config));
}
exports.useLibColorRgbPack = useLibColorRgbPack;
function useLibColorRgbR(config = {}) {
    return (0, wagmi_1.useContractRead)(Object.assign({ abi: exports.libColorRgbABI, functionName: 'r' }, config));
}
exports.useLibColorRgbR = useLibColorRgbR;
function useLibColorRgbRgb(config = {}) {
    return (0, wagmi_1.useContractRead)(Object.assign({ abi: exports.libColorRgbABI, functionName: 'rgb' }, config));
}
exports.useLibColorRgbRgb = useLibColorRgbRgb;
//# sourceMappingURL=index.js.map