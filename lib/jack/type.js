
/* wraps a prototype function so that it
 * can be instantiated without "new" */
exports.type = function (constructor) {
    return function () {
        var self = this instanceof arguments.callee ? this : new arguments.callee();
        return constructor.apply(self, arguments) || self;
    };
};

