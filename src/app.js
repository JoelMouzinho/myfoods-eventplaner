"use strict";
// Unterhaltung
const unterhaltung = JSON.parse(localStorage.getItem("unterhaltung") || "[]");
const unterhaltungList = document.getElementById("overview-unterhaltung");
unterhaltung.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    unterhaltungList?.appendChild(li);
});
// Mobilliar
const mobilliar = JSON.parse(localStorage.getItem("mobilliar") || "[]");
const mobilliarList = document.getElementById("overview-mobilliar");
mobilliar.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    mobilliarList?.appendChild(li);
});
// Energie
const energie = JSON.parse(localStorage.getItem("energie") || "[]");
const energieList = document.getElementById("overview-energie");
energie.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    energieList?.appendChild(li);
});
// Menü
const menue = localStorage.getItem("menue");
const menueText = document.getElementById("overview-menue");
if (menueText) {
    menueText.textContent = menue ? "Menü Nummer: " + menue : "Kein Menü gewählt";
}
// Termin
const date = localStorage.getItem("date");
const time = localStorage.getItem("time");
const terminText = document.getElementById("overview-termin");
if (terminText) {
    if (date && time) {
        terminText.textContent = `${date} um ${time}`;
    }
    else {
        terminText.textContent = "Kein Termin festgelegt";
    }
}
