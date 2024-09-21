"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatHour = (hour) => {
    const hourString = hour.toString();
    const formattedHour = hourString.slice(0, 2) + ':' + hourString.slice(2);
    return formattedHour;
};
exports.default = formatHour;
//# sourceMappingURL=formatHour.util.js.map