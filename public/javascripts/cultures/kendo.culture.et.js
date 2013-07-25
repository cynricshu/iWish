/*
 * Kendo UI Web v2012.3.1114 (http://kendoui.com)
 * Copyright 2012 Telerik AD. All rights reserved.
 *
 * Kendo UI Web commercial licenses may be obtained at
 * https://www.kendoui.com/purchase/license-agreement/kendo-ui-web-commercial.aspx
 * If you do not own a commercial license, this file shall be governed by the
 * GNU General Public License (GPL) version 3.
 * For GPL requirements, please review: http://www.gnu.org/copyleft/gpl.html
 */
﻿
(function (window, undefined) {
    kendo.cultures["et"] = {
        name: "et",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%", "n%"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["-n $", "n $"],
                decimals: 2,
                ",": " ",
                ".": ".",
                groupSize: [3],
                symbol: "kr"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"],
                    namesAbbr: ["P", "E", "T", "K", "N", "R", "L"],
                    namesShort: ["P", "E", "T", "K", "N", "R", "L"]
                },
                months: {
                    names: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember", ""],
                    namesAbbr: ["jaan", "veebr", "märts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets", ""]
                },
                AM: ["EL", "el", "EL"],
                PM: ["PL", "pl", "PL"],
                patterns: {
                    d: "d.MM.yyyy",
                    D: "d. MMMM yyyy'. a.'",
                    F: "d. MMMM yyyy'. a.' H:mm:ss",
                    g: "d.MM.yyyy H:mm",
                    G: "d.MM.yyyy H:mm:ss",
                    m: "d. MMMM",
                    M: "d. MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy'. a.'",
                    Y: "MMMM yyyy'. a.'"
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);