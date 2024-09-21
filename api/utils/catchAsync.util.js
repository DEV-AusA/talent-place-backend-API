"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync = (controller) => {
    return (req, res, next) => {
        controller(req, res, next).catch((err) => {
            const errorDb = {
                message: err.message,
                code: err.code,
                detail: err.detail,
                hint: err.hint,
                schema: err.schema,
                table: err.table,
                column: err.column,
                constraint: err.constraint
            };
            errorDb.table ? next({ errorDb }) : next(err);
        });
    };
};
exports.default = catchAsync;
//# sourceMappingURL=catchAsync.util.js.map