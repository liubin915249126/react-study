export function isObjectValueEqual(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a == b
    }
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (Object.prototype.toString(a[propName]) == '[Object Object]' || Object.prototype.toString(b[propName]) == '[Object Object]') {
            isObjectValueEqual(a[propName], b[propName])
        }
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}