"use strict"

module.exports.groupByOccurance = function (array,key) {

    var arr = array.map(function (item, index, arr) {
        if (index == 0)
            item.flag = 0
        else if (item[key] == arr[index - 1][key])
            item.flag = arr[index - 1].flag
        else item.flag = arr[index - 1].flag + 1
        return item;
    })

    var _ = require('lodash')
    var final = _.groupBy(arr, function (x) {
        return x.flag;
    })

    final = Object.keys(final).map(function (item) {
        var obj = {}
        obj[key] = final[item][0][key]
        obj.group = final[item]
        return obj
    }).map(function (item) {
        item.group.forEach(function (flagItem) {
            delete flagItem.flag
        })
        return item;
    })
    return final;

}