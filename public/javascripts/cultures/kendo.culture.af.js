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
    kendo.cultures["af"] = {
        name: "af",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3],
            percent: {
                pattern: ["-n%", "n%"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["$-n", "$ n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "R"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
                    namesAbbr: ["Son", "Maan", "Dins", "Woen", "Dond", "Vry", "Sat"],
                    namesShort: ["So", "Ma", "Di", "Wo", "Do", "Vr", "Sa"]
                },
                months: {
                    names: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember", ""],
                    namesAbbr: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des", ""]
                },
                AM: ["AM", "am", "AM"],
                PM: ["PM", "pm", "PM"],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    g: "yyyy/MM/dd hh:mm tt",
                    G: "yyyy/MM/dd hh:mm:ss tt",
                    m: "dd MMMM",
                    M: "dd MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    }
})(this);
