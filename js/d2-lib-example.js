'use strict';

import d2 from 'd2/d2';

function print(item) {
    window.console.log(item);
    window.console.log(item.name);

    return item;
}

function attemptModifyHref(item) {
    window.console.log(item.href);

    item.href = 'http://www.teamliquid.net';

    window.console.log(item.href);

    return item;
}

function es6StyleExtract(item) {
    let {name: name, id: id} = item;

    console.log(name);
    console.log(id);
}

function getDataElement(d2) {
    d2.models.dataElement.get('umC9U5YGDq4')
        .then(print)
        .then(attemptModifyHref)
        .then(es6StyleExtract);
}

console.log(d2);

d2({baseUrl: 'http://localhost:8080/dhis/api'}).then(getDataElement);

export default {};