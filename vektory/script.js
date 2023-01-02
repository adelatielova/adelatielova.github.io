document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('form').onsubmit = function() {
        ax = parseInt(document.getElementById("ax").value);
        ay = parseInt(document.getElementById("ay").value);
        bx = parseInt(document.getElementById("bx").value);
        by = parseInt(document.getElementById("by").value);
        document.getElementById("delkau").innerHTML = "Délka vektoru u: " + Math.sqrt(ax * ax + ay * ay).toFixed(2);
        document.getElementById("delkav").innerHTML = "Délka vektoru v: " + Math.sqrt(bx * bx + by * by).toFixed(2);
        document.getElementById("soucet").innerHTML = `Součet vektorů: {${ax + bx};${ay + by}}`;
        document.getElementById("rozdil").innerHTML = `Rozdíl vektorů: {${ax - bx};${ay - by}}`;
        document.getElementById("soucin").innerHTML = "Skalární součin: " + ((ax * bx) + (ay * by));
        document.getElementById("odchylka").innerHTML = "Odchylka vektorů: " + ((Math.acos((ax * bx + ay * by) / ((Math.sqrt(ax * ax + ay * ay).toFixed(2)) * (Math.sqrt(bx * bx + by * by).toFixed(2))))) * (180 / Math.PI)).toFixed(2) + "°";
        if ((ax / bx) === (ay / by)) {
            document.getElementById("rovnobeznost").innerHTML = "Rovnoběžnost vektorů: Ano k = " + (ax / bx).toFixed(2);
        } else {
            document.getElementById("rovnobeznost").innerHTML = "Rovnoběžnost vektorů: Ne";
        }
        return false;
    }


});