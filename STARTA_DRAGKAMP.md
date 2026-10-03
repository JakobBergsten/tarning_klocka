# Starta mattedragkampen

Paketet innehåller din uppdaterade app (`index.html`) och reglerna för Firebase (`firebase-dragkamp.rules.json`). Din Firebase-konfiguration är redan inlagd i appen.

## 1. Aktivera anonym inloggning

Öppna [Firebase-projektet matteverktyg](https://console.firebase.google.com/project/matteverktyg/overview).

Gå till **Authentication → Sign-in method → Anonymous**, aktivera alternativet och spara. Om Authentication inte har startats ännu, välj **Get started** först. Eleverna ansluter sedan automatiskt och behöver inga egna konton.

## 2. Lägg in databasreglerna

Gå till **Realtime Database → Rules**. Öppna filen `firebase-dragkamp.rules.json`, kopiera hela innehållet och ersätt reglerna i editorn. Klicka på **Publish**.

Reglerna hör till Realtime Database, inte Firestore. De låter varje iPad ta en ledig lagplats och skicka sina egna svar. Tavlvyn styr matchen och poängen. Om databasen används av andra appar behöver deras regler behållas också.

## 3. Uppdatera hemsidan

Packa upp ZIP-filen. Öppna [ditt GitHub-repository](https://github.com/jakobbergsten/tarning_klocka), välj **Add file → Upload files** och ladda upp den nya `index.html` i repositoryts huvudmapp. Spara med **Commit changes**. Den ersätter din nuvarande startsida.

Du behöver bara ladda upp `index.html` till GitHub. Väntskärmens video och de tidigare matematikverktygen ingår i filen.

När GitHub Pages har publicerat ändringen öppnar du:

https://jakobbergsten.github.io/tarning_klocka/

Ladda om sidan på tavldatorn och båda iPads om den gamla versionen fortfarande visas.

## Spela i klassrummet

1. På tavldatorn: välj **Mattedragkamp**, välj räknesätt, talområde och speltid, och tryck på **Skapa dragkamp**.
2. På första iPaden: öppna samma hemsida, välj **Mattedragkamp**, ange spelkoden, välj **Blått lag · vänster** och skriv ett lagnamn.
3. På andra iPaden: anslut med samma kod, välj **Orange lag · höger** och skriv det andra lagnamnet.
4. På tavlan: tryck på **Starta matchen** när båda lagen är anslutna. Matchen börjar efter tre sekunder.
5. Varje iPad visar sina egna mattefrågor och en knappsats. Ett rätt svar ger en poäng och en ny fråga. Ett felaktigt svar kan rättas och skickas igen.
6. Repet flyttas mot laget som leder. När tiden går ut visas vinnaren och lagnamnet, eller **Oavgjort**.
7. Tryck på **Spela igen** för en ny match med samma lag och kod.

Alla tre enheter behöver internet. Håll tavlvyn öppen under matchen. Om sidan laddas om finns **Återanslut till förra spelrummet** i samma webbläsare. Använd samma hemsidesadress för alla enheter. **Till startsidan** på tavldatorn stänger spelrummet. Koden går ut efter sex timmar.

## Om anslutningen inte fungerar

- **Aktivera Anonymous…**: kontrollera steg 1.
- **Spelet behöver sina databasregler…**: kontrollera steg 2 och att reglerna har publicerats.
- **Ingen kontakt med tavlan…**: kontrollera att tavlvyn är öppen och har internet.
- **Det laget är upptaget…**: välj det andra laget, eller skapa ett nytt spelrum.

Firebase och GitHub-konfigurationen på ditt konto har inte ändrats av paketet. Synkronisering och regler har kontrollerats med tre separata klienter i en lokal Firebase-emulator. Prova en kort match med tavldatorn och era två iPads efter publiceringen.

Firebase beskriver inställningen för anonym inloggning här: https://firebase.google.com/docs/auth/web/anonymous-auth
