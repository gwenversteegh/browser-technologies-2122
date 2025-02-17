# Vragenlijst minor web design & development

## Research
## User story
Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

## Core functionaliteit
- [x] gegevens naam + studentennummer invullen
- [x] Per vak : docenten, periode, beoordeling schaal 1-10
- [x] Foutmelding bij niet ingevuld veld

## Wireflow
### Getekend
![Untitled_Artwork 36](https://user-images.githubusercontent.com/70900763/162199243-b909ab02-3a60-470f-80d0-70cf68134558.png)

### Uiteindelijke resultaat
<img width="894" alt="Screenshot 2022-04-07 at 15 20 50" src="https://user-images.githubusercontent.com/70900763/162208439-8b340768-716f-4420-9353-a2b8ba427c7a.png">


## Functional, usable & pleasurable laag

### Functional
De functional laag bestaat alleen uit HTML. Ik ben begonnen met eerst deze laag helemaal goed krijgen, voor ik verder ging met de styling en extra dingen. Voor deze laag was het belangrijk dat je de vragenlijst kon invullen, er een melding werd gegeven wanneer je iets niet hebt ingevuld en dat je hem kon versturen en vervolgens de resultaten kan bekijken. Ik maak ook gebruik van een placeholder, als voorbeeld wat en hoe je het in kunt typen.

### Usable 
Met de usable laag heb ik ervoor gezorgd dat de accessibility een stuk omhoog ging. De tekst is duidelijker, de input velden zijn groter en ook de radiobuttons zijn een stuk vergroot en uit elkaar gezet. Dit zorgt ervoor dat wanneer je grote vingers heb, of slechte ogen heb, je het nog steeds kunt gebruiken. Ook heb ik ervoor gezorgd dat er genoeg contrast is, door bijvoorbeeld bij de h2 een witte achtergrond toe te voegen. 

### Pleasurable
Hier heb ik niet heel veel toegevoegd. Ik heb niet zoveel extra'tjes erin gedaan. Ik wilde een carousel ervan maken, maar hier had ik helaas geen tijd meer voor. Wel heb ik doormiddel van javascript ervoor gezorgd, dat wanneer je de pagina herlaad, hij je naam en studentnummer onthoudt.

## Accessibility
Ik heb extra op de accessibility gelet. Dit heb ik gedaan door de inputvelden en radiobuttons een stuk groter te maken, de tekst groot te maken en zoveel mogelijk contrast te gebruiken. Ook heb ik wat onderzoek gedaan naar een screenreader en dit heb ik proberen toe te passen, al was dit wel wat lastiger dan gedacht. Ik heb ervoor gezorgd dat alles goed achter elkaar aanloopt dus h1,h2 etc. Ook heb ik alle inputvelden en radiobuttons een aria label gegeven, zodat het duidelijk is wat je moet invullen, ook voor blinde mensen. Je kunt ook met tab door de hele pagina heen, dus wanneer je geen muis hebt, kun je de vragenlijst alsnog invullen.

<img width="444" alt="Screenshot 2022-04-07 at 14 43 09" src="https://user-images.githubusercontent.com/70900763/162201279-50104296-ad0d-4d93-ae11-54d312421d7a.png">

### Feedback
Wanneer je iets niet hebt ingevuld kun je de vragenlijst niet versturen en zal hij je terugsturen naar het vak die nog leeg is. Je kunt het formulier dus niet versturen zonder alles in te vullen.

<img width="284" alt="Screenshot 2022-04-07 at 15 24 06" src="https://user-images.githubusercontent.com/70900763/162209109-9783c01f-f126-4e53-9ed1-fb622dd6c16d.png">


## Geteste browers
- [x] Chrome browser Macbook
- [x] Niet-chrome browser (safari) Macbook
- [x] Chrome browser mobiel (1+ 6)
- [x] Niet-chrome browser (safari) (iphone) 
- [x] Chrome browser nexus 5

## Test verslag
### Onderzochte features
#### screenreader 
Radiobuttons kunnen lastig zijn met een screenreader omdat er geen tekst of iets in staat. Hierdoor kan het onduidelijk zijn waarvoor elke button is. Door een aria-label toe te voegen wordt deze voorgelezen tijdens de screenreader. Dit wordt sinds 2008 ondersteunt door browsers, maar ook zonder dit label, werkt de pagina gewoon.  
https://www.evinced.com/blog/creating-accessible-styled-radio-groups/ 

#### Gegevens opslaan in sessionStorage 
De ingevulde gegevens opslaan om later verder te kunnen gaan, heb ik gedaan met sessionStorage. Dit zorgt er dus voor dat wanneer je de pagina refresht, de antwoorden blijven staan. Het is bruikbaar op browsers vanaf 2006. Wanneer dit niet ondersteunt wordt, werkt de pagina wel gewoon.
https://webscraping.pro/save-input-value-on-page-refresh-using-sessionstorage/

#### Fieldset
Om de HTML pagina zonder CSS duidelijker te maken heb ik gebruik gemaakt van fieldset. Dit zorgt voor een lijn om elk vak zoals WAFS en CSS. Hierdoor is het duidelijk dat het een nieuw vak is. Dit wordt door elke browser ondersteunt.

#### Required
Door required achter een inputfield te zetten wordt de gebruiker "verplicht" om hem in te vullen voor ze verder kunnen. Dit wordt op alle browsers ondersteunt.

https://caniuse.com 

### Functionaliteiten testen
Als test heb ik CSS en JS uitgezet. De JS zorgt er alleen voor dat je later verder kunt waar je gebleven was. Wanneer je dit uitzet moet je de vragenlijst dus opnieuw invullen wanneer je de pagina refresht. Verder werken alle core functionaliteiten. Wanneer de CSS ook uitgezet wordt werken de core functionaliteiten nog steeds, maar is het wel minder accessible. De teksten zijn dan kleiner en ook de inputvelden zijn vrij klein, waardoor het lastig kan zijn om de vragenlijst in te vullen. Verder werkt alles wel, zoals later je resultaten bekijken.

### Screenreader test
Ik heb een kleine test gedaan met een screenreader omdat ik erg benieuwd was hoe het zou klinken. Ik moet eerlijk zeggen, dat daar nog wel veel verbeteringen moeten gebeuren. Het aria-label werkt wel, maar omdat er niet alleen een aria-label staat maar ook nog andere dingen, wordt het een beetje rommelig. Daarbij staat mijn laptop in het engels en heb ik de labels nederlandse tekst gegeven, wat er voor zorgt dat het raar uitgesproken wordt.

## Oefen opdracht 1 & 2 
### Opdracht 1:
https://maggness.github.io/BT-Tim/opdracht1-BT-main
### Opdracht 2: 
https://maggness.github.io/BT-Tim/opdracht2-BT-main


