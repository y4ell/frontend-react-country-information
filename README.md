# Opdrachtbeschrijving

## Inleiding

Je vrienden hebben er inmiddels lucht van gekregen dat je kunt programmeren en sindsdien wordt je low key gestalkt met
verzoekjes om webapplicaties te bouwen. Je vriend Constantijn wil heel graag dat je een applicatie voor hem maakt die
feitjes over landen kan ophalen, zodat hij cool kan doen met zijn wereldse kennis op borrels en verjaardagen.

Je gaat dit doen met behulp van de REST Counties API. De documentatie over de verschillende endpoints kun
je [hier](https://restcountries.com/#endpoints) vinden. Bekijk deze documentatie goed.

## De applicatie starten

## Opdracht 1

![screenshot-opdracht-1.png](src/assets/screenshot-opdracht-1.png)

* Op basis van de informatie uit de REST Countries API, haal je data op over _alle_ landen ter wereld en geef je deze in
  een lijst weer op de pagina. Dit doe je door de gebruiker op de 'Get Info' knop te laten klikken.
* Bovenaan de pagina staat de afbeelding van een wereldkaart (zie de map `assets`);
* Voor ieder land geef je het volgende weer:
    1. De naam van het land
    2. De vlag van dat land
    3. De zin: `Has a population of [amount] people`
* De landen zijn gesorteert op populatie, van laag naar hoog;
* De land-namen moeten worden weergegeven in een kleur die overeenkomt met het continent waar het land in ligt. _Tip_:
  maak hier een helper functie voor die een regio-naam verwacht en bepaalt welke kleur het land moet krijgen. Een land
  ligt meestal in één van de volgende vijf regio's, maar uitzonderingen kunnen voorkomen:
    * `Africa`: blauw
    * `Americas`: groen
    * `Asia`: rood
    * `Europe`: geel
    * `Oceania`: paars

## Opdracht 2

Jouw Country Information App was een grote hit bij Constantijn. Hij moest echter wel lang scrollen en scannen naar de
juiste informatie voor hij onschuldige voorbijgangers kon imponeren met zijn kennis. Hij heeft jou daarom gevraagd of je
een zoek-functionaliteit kunt inbouwen zodat hij naar landen kan zoeken en zo direct allerlei informatie te zien krijgt.

![screenshot-opdracht-2.png](src/assets/screenshot-opdracht-2.png)

* Op basis van de informatie uit de REST Countries API, haal je data op over één specifiek land per keer;
* Kies één land om mee te beginnen. Zorg ervoor dat de opgehaalde data op de volgende manier wordt weergegeven op de
  pagina:

```
[IMAGE: flag] [country-name]
[country-naam] is situated in [subarea-name] and the capital is [capital]
It has a population of [amount] million people and it borders with [amount] neighboring countries 
Websites can be found on [domain] domain's
```

* Houdt er rekening mee dat de populatie met behulp van een helperfunctie omgezet moet worden naar een afgerond getal in
  miljoenen.
* Er staat een zoekbalk op de pagina waarmee de gebruiker naar een land kan zoeken. De zoekopdracht wordt
  _getriggered_ zodra de gebruiker op de 'zoek'-knop klikt of op ENTER drukt. De inhoud van het invoerveld wordt na
  iedere zoekopdracht geleegd;
* Wanneer de gebruiker zoekt naar een land dat niet bestaat, wordt er een foutmelding getoond: "[ingevoerd land] bestaat
  niet. Probeer het opnieuw". Wanneer de gebruiker daarna een nieuwe zoekopdracht maakt die wel correct is, moet de
  foutmelding weer verdwenen zijn.

## Stappenplan

### Opdracht 1

_Let op_: het is uitdagender om jouw eigen stappenplan te maken. Maar als je niet zo goed weet waar je moet beginnen,
kun je onderstaand stappenplan gebruiken:

1. Installeer en importeer Axios;
2. Neem de documentatie van de REST Countries API goed door. Welk endpoint heb je nodig om informatie over alle landen
   op te halen?
3. Maak een knop die een asynchrone functie aanroept wanneer je erop klikt;
4. Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de
   response in de console en bestudeer de data goed: hoe is het opgebouwd?
5. Probeer eens om de _naam_ van het _allereerste_ land te loggen in de console, welk pad moet je hiervoor volgen?
6. Als dat gelukt is, kun je een stukje state aanmaken om de informatie over alle landen in op te slaan;
7. Gebruik die state om de naam van het allereerste land weer te geven in een `<li>`-tag op de pagina;
8. Zorg er nu ook voor dat de populatie (`Has a population of [amount] people`) daarin wordt weergegeven;
9. Schrijf een helper-functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als string
   teruggeeft. Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina. _Tip_: zorg ervoor
   dat je CSS-classes maakt voor alle regio-kleuren!
10. Breidt de `<li>`-tag uit met een `<img>`-tag om zo ook de url van de meegegeven vlag-afbeelding weer te kunnen
    geven;
11. Map nu over de array met landen heen, om zo een `<li>`-element te maken voor álle
    landen;
12. Zorg er ten slotte voor dat je de response data eerst sorteert op populatie, van laag naar hoog, voor je deze
    opslaat in de state;

### Opdracht 2

_Let op_: het is uitdagender om jouw eigen stappenplan te maken. Maar als je niet zo goed weet waar je moet beginnen,
kun je onderstaand stappenplan gebruiken:

1.
2. Neem de documentatie van de REST Countries API goed door. Welk endpoint heb je nodig om informatie over één specifiek
   land op te halen, zoals `nederland`?
3. Maak een knop die een asynchrone functie aanroept wanneer je erop klikt;
4. Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint
   voor `nederland`. Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?
5. Probeer eens om de _naam_ en _hoofdstad_ van het land te loggen in de console. Welk pad moet je hiervoor volgen?
6. Als dat gelukt is, kun je een stukje state aanmaken om alle informatie over dit land in op te slaan;
7. Zorg ervoor dat de _naam_ van het land weergegeven wordt in op de pagina.
8. Zorg er nu voor dat de zin `[country-naam] is situated in [subarea-name] and the capital is [capital]`
   daaronder wordt weergegeven;
9. Zorg ervoor dat er een afbeelding van een vlag naast de naam van het land komt te staan;
10. Schrijf een helper-functie die getallen omzet en afrond naar miljoenen;
11. Gebruik bovenstaande helperfunctie om ervoor te zorgen dat de
    zin `It has a population of [amount] million people and it borders with [amount] neighboring countries ` wordt
    weergegeven.
12. Maak nu een inputveld met zoek-knop op de pagina. In plaats van dat de data wordt opgehaald wanneer de pagina laadt,
    zorg je er nu voor dat de data over Nederland pas wordt opgehaald wanneer de gebruiker op ENTER of 'Zoek' drukt;
13. Zorg ervoor dat de waarde uit het inputveld wordt gebruikt als dynamische waarde in jouw GET-request;
14. Zorg ervoor dat de waarde van het input veld wordt leeggemaakt na elke successvolle zoekopdracht;
15. Zorg ervoor dat als er naar een land wordt gezocht dat niet bestaat, er een foutmelding in de state wordt opgeslagen
    en wordt weergegeven op de pagina: `[ingevoerd land] bestaat niet. Probeer het opnieuw` _Tip_: als er een ongeldige
    API call wordt gemaakt, zal de response in het catch blok terecht komen.
16. Zorg er ook voor dat wanneer er daarna een geldig verzoek wordt gedaan, de foutmelding weer verdwenen is.