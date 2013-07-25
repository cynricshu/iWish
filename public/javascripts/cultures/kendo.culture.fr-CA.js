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
    kendo.cultures["fr-CA"] = {
        name: "fr-CA",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n %", "n %"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["(n $)", "n $"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "$"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
                    namesAbbr: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    namesShort: ["di", "lu", "ma", "me", "je", "ve", "sa"]
                },
                months: {
                    names: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
                    namesAbbr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc.", ""]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "d MMMM yyyy",
                    F: "d MMMM yyyy HH:mm:ss",
                    g: "yyyy-MM-dd HH:mm",
                    G: "yyyy-MM-dd HH:mm:ss",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM, yyyy",
                    Y: "MMMM, yyyy"
                },
                "/": "-",
                ":": ":",
                firstDay: 0
            }
        }
    }
})(this);
