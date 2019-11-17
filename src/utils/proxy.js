export function log(target, key, descriptor) {
    var oldValue = descriptor.value;
    // 修改 descriptor属性
    descriptor.value = function() {
        console.log(`${name}`, arguments);
        return oldValue.apply(this, arguments);
    }
    return descriptor;
}


