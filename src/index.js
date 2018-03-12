// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (EnumerableProperty) => {
    return EnumerableProperty;
};
const createNotEnumerableProperty = (NotEnumerableProperty) => {
    Object.defineProperty(Object.prototype, NotEnumerableProperty, { value: "value", enumerable: false });
    return NotEnumerableProperty;
};
const createProtoMagicObject = () => {
    let MagicObject = () => { };
    MagicObject.prototype = MagicObject.__proto__;
    return MagicObject;
};
//
let inc = 0;
const incrementor = () => {
    inc++;
    return incrementor;
};
incrementor.valueOf = () => inc;

let asyncInc = 0;
const asyncIncrementor = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            asyncInc++;
            resolve(asyncInc);
        }, 1);
    });
};
const createIncrementer = function* foo() {
    let index = 1;
    while (true)
        yield  index++;
};




// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    });
};
const getDeepPropertiesCount = () => { };
const createSerializedObject = () => { 
    
    return JSON.parse(JSON.stringify(null));
};
const toBuffer = () => { };
const sortByProto = (arr) =>{ return arr.sort((left, right) => left.__proto__ - right.__proto__) };

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;