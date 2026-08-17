import { Droplets, Flower2, ScanFace, Sparkles, WandSparkles } from "lucide-react";

export type TreatmentGuideLink = {
  href: string;
  title: string;
};

export const whatsappUrl =
  "https://wa.me/4915565855752?text=Hallo%20S%26O%20Beauty%20Salon%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20anfragen.";

export const mapsUrl = "https://maps.app.goo.gl/1dS2JhXRv3E81keT9";

export const treatments = [
  {
    name: "Laser-Haarentfernung",
    number: "01",
    slug: "laser-haarentfernung",
    href: "/behandlungen/laser-haarentfernung",
    shortDescription:
      "Individuell auf Haut und Haar abgestimmte Behandlungen mit moderner Soprano-Technologie.",
    seoTitle: "Laser-Haarentfernung Mannheim",
    seoDescription:
      "Laser-Haarentfernung in Mannheim mit Soprano ICE Platinum, NiSV-Fachkunde und persönlicher Beratung bei S&O Beauty Salon in Q1.",
    intro:
      "Für glatte Haut mit ruhigem, professionellem Ablauf: Bei S&O Beauty Salon wird die Laser-Haarentfernung individuell auf Hauttyp, Haarstruktur und Behandlungsbereich abgestimmt.",
    promise:
      "Soprano ICE Platinum arbeitet mit drei Wellenlängen und kontinuierlicher Kühlung. Dadurch fühlt sich die Behandlung besonders komfortabel an und kann Schritt für Schritt gleichmäßig durchgeführt werden.",
    overviewTitle: "Weniger Rasur im Alltag – mit einem Plan, der zu Ihnen passt.",
    overview:
      "Laser-Haarentfernung ist keine Behandlung nach Schablone. Haarfarbe, Hauttyp, Körperregion und Wachstumsphasen beeinflussen, welche Einstellungen sinnvoll sind und wie sich eine Behandlungsserie entwickelt.",
    proofTitle: "Drei Wellenlängen, kontinuierliche Kühlung und NiSV-Fachkunde.",
    proof:
      "Der Soprano ICE Platinum kombiniert drei Laserwellenlängen in einem Applikator. Vor der Anwendung werden Haut, Haare, Behandlungsbereich und mögliche Ausschlussgründe persönlich besprochen.",
    highlights: ["Soprano ICE Platinum", "NiSV-Fachkunde", "Nahezu schmerzfreie Anwendung*"],
    video: {
      src: "/media/services/client-laser-leg.mp4",
      poster: "/media/services/client-laser-leg-poster.jpg",
      objectPosition: "48% 52%",
      mobileObjectPosition: "52% 50%",
      label: "Laser-Haarentfernung im Studio",
    },
    benefits: [
      "Persönliche Einschätzung vor der ersten Anwendung",
      "Geeignet für verschiedene Behandlungsbereiche",
      "SHR In-Motion-Technik für gleichmäßige Wärme",
      "ICE Kühlung für mehr Hautkomfort",
    ],
    processSteps: [
      {
        title: "Beratung & Hautcheck",
        text: "Vor dem ersten Termin schauen wir uns Hauttyp, Haarstruktur, Behandlungsbereich und wichtige Hinweise in Ruhe an.",
      },
      {
        title: "Vorbereitung",
        text: "Der Bereich wird vorbereitet, Schmuck oder Pflegeprodukte werden vermieden und die passenden Einstellungen werden gewählt.",
      },
      {
        title: "Laser-Anwendung",
        text: "Der Applikator wird gleichmäßig über die Haut geführt. Die Kühlung unterstützt den Komfort während der Behandlung.",
      },
      {
        title: "Nachpflege & Plan",
        text: "Zum Abschluss besprechen wir Pflege, Sonnenschutz und den sinnvollen Abstand bis zum nächsten Termin.",
      },
    ],
    preparation: [
      "Den Rasurzeitpunkt vor dem ersten Termin kurz mit uns abstimmen; häufig wird am Vortag rasiert.",
      "Die Haare in den Wochen davor nicht wachsen, epilieren oder zupfen.",
      "Intensive Sonne, Solarium und Selbstbräuner vor dem Termin vermeiden.",
      "Die Behandlungsfläche sauber und frei von Deo, Öl oder Creme lassen.",
    ],
    aftercare: [
      "Die Haut am Behandlungstag ruhig halten und starke Wärme oder Reibung vermeiden.",
      "Konsequenten Sonnenschutz verwenden und direkte Sonne meiden.",
      "Bei Rötung nur die individuell empfohlene, milde Pflege nutzen.",
      "Ungewöhnliche oder anhaltende Reaktionen zeitnah mit dem Studio oder ärztlich klären.",
    ],
    suitability: [
      "Sie möchten Rasur oder andere kurzfristige Haarentfernung reduzieren.",
      "Sie sind bereit für mehrere, auf den Haarzyklus abgestimmte Termine.",
      "Sie wünschen eine persönliche Einschätzung statt eines Standardprogramms.",
    ],
    askFirst: [
      "Bei Schwangerschaft, Stillzeit oder photosensibilisierenden Medikamenten.",
      "Bei frischer Bräune, Sonnenbrand, aktiver Hautreizung oder Infektion im Bereich.",
      "Bei sehr hellen, roten oder weißen Haaren, weil die Eignung eingeschränkt sein kann.",
    ],
    relatedGuides: [
      { href: "/ratgeber/laser-haarentfernung-vorbereitung", title: "Vorbereitung und Rasur vor dem Lasertermin" },
      { href: "/ratgeber/laser-haarentfernung-wie-viele-sitzungen", title: "Warum mehrere Lasersitzungen notwendig sind" },
      { href: "/ratgeber/laser-haarentfernung-kosten-mannheim", title: "Wovon die Kosten in Mannheim abhängen" },
    ],
    steps: [
      "Kurze WhatsApp-Anfrage mit gewünschtem Bereich senden.",
      "Hauttyp, Haare und mögliche Hinweise persönlich besprechen.",
      "Behandlung ruhig durchführen und den weiteren Plan abstimmen.",
    ],
    faq: [
      {
        question: "Ist die Laser-Haarentfernung schmerzfrei?",
        answer:
          "Der Hersteller beschreibt die Soprano-Technologie als virtually painless. Wir formulieren bewusst vorsichtig: Das Empfinden ist individuell, die integrierte Kühlung sorgt aber für deutlich mehr Komfort.",
      },
      {
        question: "Wie viele Termine brauche ich?",
        answer:
          "Das hängt von Behandlungsbereich, Haarstruktur und Hauttyp ab. Beim ersten Termin besprechen wir realistisch, welcher Rhythmus sinnvoll ist.",
      },
      {
        question: "Muss ich mich vor der Laser-Haarentfernung rasieren?",
        answer:
          "In vielen Fällen ja. Den genauen Zeitpunkt stimmen wir vor dem ersten Termin mit Ihnen ab. Wachsen, Epilieren und Zupfen sollten vorher vermieden werden, weil die Haarwurzel für die Anwendung erhalten bleiben muss.",
      },
      {
        question: "Kann Laser-Haarentfernung im Sommer stattfinden?",
        answer:
          "Das hängt vom Hautzustand, der aktuellen Bräune und dem behandelten Bereich ab. Intensive Sonne und Solarium müssen rund um den Termin vermieden werden; wir beurteilen die Situation individuell.",
      },
      {
        question: "Wann fallen behandelte Haare aus?",
        answer:
          "Die Haare verschwinden nicht unmittelbar beim Termin. Ein Teil löst sich in den darauffolgenden Tagen oder Wochen. Wie sichtbar dieser Prozess ist, variiert nach Region und Haarzyklus.",
      },
      {
        question: "Für welche Haarfarben eignet sich die Behandlung?",
        answer:
          "Laserenergie benötigt Pigment im Haar. Sehr helle, weiße oder rote Haare sprechen deshalb häufig deutlich schlechter an. Eine persönliche Einschätzung vorab ist wichtig.",
      },
    ],
    icon: Sparkles,
  },
  {
    name: "AquaFacial",
    number: "02",
    slug: "aquafacial",
    href: "/behandlungen/aquafacial",
    shortDescription:
      "Intensive Reinigung, Pflege und Feuchtigkeit für ein frisches, gepflegtes Hautgefühl.",
    seoTitle: "AquaFacial Mannheim",
    seoDescription:
      "AquaFacial in Mannheim bei S&O Beauty Salon: Reinigung, Feuchtigkeit und Pflege für ein frisches Hautgefühl.",
    intro:
      "AquaFacial ist ideal, wenn die Haut frischer, klarer und gepflegter wirken soll, ohne dass der Termin schwer oder kompliziert wird.",
    promise:
      "Die Behandlung verbindet Reinigung, Pflege und Feuchtigkeit in einem ruhigen Ablauf, der sich gut in den Alltag integrieren lässt.",
    overviewTitle: "Reinigung und Feuchtigkeit für ein klar gepflegtes Hautgefühl.",
    overview:
      "AquaFacial verbindet mehrere Pflegeschritte in einem Termin. Welche Intensität und welche Produkte passen, richtet sich nach Hautzustand, Empfindlichkeit und Ihrem persönlichen Ziel.",
    proofTitle: "Erst ansehen, dann behandeln.",
    proof:
      "Vor dem Start wird die Haut in Ruhe betrachtet. Bei aktiver Reizung oder anderen Auffälligkeiten wird die Anwendung angepasst, verschoben oder eine fachliche Abklärung empfohlen.",
    highlights: ["Frisches Hautgefühl", "Feuchtigkeit", "Sanfte Pflege"],
    video: {
      src: "/media/services/aquafacial-cleaning.mp4",
      objectPosition: "50% 48%",
      mobileObjectPosition: "50% 46%",
      label: "Gesichtsreinigung mit einem professionellen Pflegegerät",
      caption: "Einblick in einen Reinigungsschritt",
    },
    benefits: [
      "Für müde oder trockene Haut geeignet",
      "Ruhiger Pflegeablauf ohne lange Erklärung",
      "Individuell auf das Hautgefühl abgestimmt",
      "Schöne Option vor besonderen Anlässen",
    ],
    processSteps: [
      {
        title: "Hautgefühl klären",
        text: "Wir besprechen kurz, ob die Haut eher trocken, müde, empfindlich oder unrein wirkt und was Sie sich wünschen.",
      },
      {
        title: "Reinigung",
        text: "Die Haut wird vorbereitet und sanft gereinigt, damit die Pflege gleichmäßig und angenehm durchgeführt werden kann.",
      },
      {
        title: "Pflege & Feuchtigkeit",
        text: "Die Behandlung konzentriert sich auf ein frisches, gepflegtes Hautgefühl und eine schöne Feuchtigkeitsversorgung.",
      },
      {
        title: "Abschlusspflege",
        text: "Am Ende stimmen wir die passende Pflege für danach ab, damit die Haut ruhig in den Alltag zurückkommt.",
      },
    ],
    preparation: [
      "Am Behandlungstag möglichst ohne stark deckendes Make-up kommen.",
      "Aggressive Peelings oder stark reizende Wirkstoffe vorher pausieren, wenn die Haut empfindlich reagiert.",
      "Aktuelle Hautreaktionen und kürzlich erfolgte Behandlungen offen ansprechen.",
    ],
    aftercare: [
      "Die Haut mit milder Pflege und Sonnenschutz unterstützen.",
      "Am selben Tag keine zusätzlichen intensiven Peelings verwenden.",
      "Bei ungewohnt starker Reaktion Rücksprache halten.",
    ],
    suitability: [
      "Ihre Haut wirkt trocken, müde oder pflegebedürftig.",
      "Sie wünschen Reinigung und Feuchtigkeit in einem Termin.",
      "Sie möchten eine Behandlung, die sich meist gut in den Alltag integrieren lässt.",
    ],
    askFirst: [
      "Bei offenen Stellen, frischem Sonnenbrand oder aktiver Hautinfektion.",
      "Bei stark entzündeter Akne oder einem akuten Rosazea-Schub.",
      "Wenn kürzlich Laser, intensives Peeling oder Microneedling durchgeführt wurde.",
    ],
    relatedGuides: [
      { href: "/ratgeber/aquafacial-oder-microneedling", title: "AquaFacial oder Microneedling vergleichen" },
      { href: "/behandlungen/professionelle-hautpflege", title: "Professionelle Hautpflege kennenlernen" },
    ],
    steps: [
      "Hautgefühl und Ziel kurz besprechen.",
      "Reinigung und Pflege ruhig durchführen.",
      "Abschlusspflege und Empfehlungen für danach abstimmen.",
    ],
    faq: [
      {
        question: "Wann passt AquaFacial besonders gut?",
        answer:
          "Wenn die Haut frisch, gepflegt und gut durchfeuchtet wirken soll. Besonders beliebt ist es vor Events oder als regelmäßige Pflege.",
      },
      {
        question: "Kann ich danach direkt weiter in den Alltag?",
        answer:
          "In der Regel ja. Wir geben Ihnen nach der Behandlung passende Hinweise für Ihre Haut und den restlichen Tag.",
      },
      {
        question: "Wie läuft ein AquaFacial ab?",
        answer:
          "Der genaue Ablauf wird auf die Haut abgestimmt und verbindet vorbereitende Reinigung, Pflege- und Feuchtigkeitsschritte sowie eine passende Abschlusspflege.",
      },
      {
        question: "Ist AquaFacial auch für empfindliche Haut geeignet?",
        answer:
          "Das kann möglich sein, muss aber individuell eingeschätzt und sanft angepasst werden. Bei akuter Reizung oder einem entzündlichen Schub sollte der Termin verschoben oder fachlich abgeklärt werden.",
      },
      {
        question: "Was sollte ich nach AquaFacial beachten?",
        answer:
          "Milde Pflege, Sonnenschutz und eine Pause von aggressiven Peelings sind eine gute Basis. Die konkreten Hinweise richten sich nach Ihrem Hautzustand.",
      },
      {
        question: "Wie häufig ist AquaFacial sinnvoll?",
        answer:
          "Das hängt von Hautzustand, Ziel und Pflegeroutine ab. Wir empfehlen keine starre Serie, sondern besprechen nach dem Termin, ob und wann eine Wiederholung sinnvoll ist.",
      },
    ],
    icon: Droplets,
  },
  {
    name: "Microneedling",
    number: "03",
    slug: "microneedling",
    href: "/behandlungen/microneedling",
    shortDescription:
      "Eine gezielte Anwendung zur Unterstützung eines ebenmäßiger wirkenden Hautbildes.",
    seoTitle: "Microneedling Mannheim",
    seoDescription:
      "Microneedling in Mannheim bei S&O Beauty Salon: persönliche Beratung und gezielte Anwendung für ein ebenmäßiger wirkendes Hautbild.",
    intro:
      "Microneedling richtet sich an Kundinnen und Kunden, die ihr Hautbild gezielt unterstützen und die Hautstruktur feiner wirken lassen möchten.",
    promise:
      "Vor der Anwendung schauen wir genau auf Hautzustand und Ziel. So bleibt der Termin persönlich, ruhig und passend dosiert.",
    overviewTitle: "Eine gezielte Anwendung für Hautstruktur und ein ebenmäßigeres Erscheinungsbild.",
    overview:
      "Beim kosmetischen Microneedling wird die Haut kontrolliert mit sehr feinen Nadeln behandelt. Entscheidend sind ein geeigneter Hautzustand, eine saubere Durchführung und konsequente Nachpflege.",
    proofTitle: "Hautcheck und Nachpflege gehören zur Behandlung.",
    proof:
      "Microneedling passt nicht zu jeder Haut und nicht zu jedem Zeitpunkt. Deshalb werden Hautzustand, Ziel, aktuelle Pflege und mögliche Gründe zum Verschieben vorab besprochen.",
    highlights: ["Hautbild", "Struktur", "Persönliche Planung"],
    video: {
      src: "/media/services/microneedling.m4v",
      objectPosition: "54% 50%",
      mobileObjectPosition: "58% 50%",
      label: "Gezielte Hautbehandlung im Studio",
    },
    benefits: [
      "Gezielte Anwendung statt Standardprogramm",
      "Für ein ebenmäßiger wirkendes Hautbild",
      "Ruhige Beratung vor dem Start",
      "Klare Pflegehinweise für danach",
    ],
    processSteps: [
      {
        title: "Hautbild ansehen",
        text: "Wir klären, welche Hautbereiche im Fokus stehen und ob die Behandlung gerade sinnvoll für Ihre Haut ist.",
      },
      {
        title: "Vorbereiten",
        text: "Die Haut wird gereinigt und vorbereitet, damit die Anwendung sauber, ruhig und passend dosiert starten kann.",
      },
      {
        title: "Gezielte Anwendung",
        text: "Die Behandlung erfolgt kontrolliert und Schritt für Schritt, abgestimmt auf Hautzustand und Ziel.",
      },
      {
        title: "Beruhigen & Hinweise",
        text: "Nach der Anwendung bekommt die Haut Ruhe, passende Pflegehinweise und klare Empfehlungen für die nächsten Tage.",
      },
    ],
    preparation: [
      "Stark reizende Wirkstoffe und intensive Peelings vorher pausieren.",
      "Sonnenbrand, aktive Entzündungen oder offene Stellen vorab mitteilen.",
      "Am Termin möglichst ohne Make-up kommen und aktuelle Medikamente ansprechen.",
    ],
    aftercare: [
      "Die Haut nicht unnötig berühren und nur die empfohlene milde Pflege verwenden.",
      "Make-up, intensive Wirkstoffe, Sport, Sauna und Schwimmbad zunächst pausieren.",
      "Direkte Sonne vermeiden und konsequenten Sonnenschutz nutzen.",
      "Bei ungewöhnlicher, zunehmender oder lang anhaltender Reaktion ärztlichen Rat einholen.",
    ],
    suitability: [
      "Sie möchten Hautstruktur oder ein unruhig wirkendes Hautbild gezielt unterstützen.",
      "Sie können der Haut nach dem Termin einige ruhige Tage geben.",
      "Sie wünschen eine individuell dosierte kosmetische Anwendung.",
    ],
    askFirst: [
      "Bei aktiver Akne, Herpes, Hautinfektion, offenen Stellen oder frischer Bräune.",
      "Bei Neigung zu Keloiden, schlechter Wundheilung oder beeinträchtigtem Immunsystem.",
      "Bei Schwangerschaft, Blutverdünnern oder kürzlich eingenommenem Isotretinoin.",
    ],
    relatedGuides: [
      { href: "/ratgeber/microneedling-nachsorge", title: "Microneedling-Nachsorge verständlich erklärt" },
      { href: "/ratgeber/aquafacial-oder-microneedling", title: "AquaFacial oder Microneedling vergleichen" },
      { href: "/behandlungen/aquafacial", title: "AquaFacial als sanftere Pflegeoption ansehen" },
    ],
    steps: [
      "Hautzustand und Ziel gemeinsam ansehen.",
      "Anwendung passend zum Hautbild durchführen.",
      "Nachpflege und Abstand zum nächsten Termin besprechen.",
    ],
    faq: [
      {
        question: "Für wen ist Microneedling gedacht?",
        answer:
          "Für Menschen, die Hautstruktur und Hautbild gezielt unterstützen möchten. Ob es passt, klären wir vorab persönlich.",
      },
      {
        question: "Was muss ich danach beachten?",
        answer:
          "Wir erklären Ihnen direkt im Studio, welche Pflege und welche Pausen für Ihre Haut nach dem Termin sinnvoll sind.",
      },
      {
        question: "Wie lange ist die Haut nach Microneedling gerötet?",
        answer:
          "Rötung, Wärmegefühl oder leichte Schwellung können auftreten und klingen häufig innerhalb weniger Tage ab. Stärke und Dauer hängen von Haut und Intensität ab.",
      },
      {
        question: "Wann darf ich nach Microneedling wieder Make-up tragen?",
        answer:
          "Die frisch behandelte Haut sollte zunächst sauber und frei von Make-up bleiben. Den passenden Zeitpunkt erklären wir abhängig von Hautreaktion und Behandlungstiefe.",
      },
      {
        question: "Darf ich nach Microneedling Sport machen?",
        answer:
          "Intensiver Sport, Sauna und starkes Schwitzen sollten zunächst pausieren, weil Wärme, Schweiß und Reibung die Haut zusätzlich reizen können.",
      },
      {
        question: "Wann sollte Microneedling nicht durchgeführt werden?",
        answer:
          "Unter anderem bei aktiven Infektionen, offenen Stellen, entzündeter Haut oder frischem Sonnenbrand. Weitere persönliche Faktoren klären wir vorab; bei Unsicherheit ist ärztlicher Rat sinnvoll.",
      },
    ],
    icon: ScanFace,
  },
  {
    name: "Wimpernlifting",
    number: "04",
    slug: "wimpernlifting",
    href: "/behandlungen/wimpernlifting",
    shortDescription:
      "Natürlich geschwungene, ausdrucksstarke Wimpern - gepflegt und alltagstauglich.",
    seoTitle: "Wimpernlifting Mannheim",
    seoDescription:
      "Wimpernlifting in Mannheim bei S&O Beauty Salon: natürlicher Schwung, gepflegter Look und Termin per WhatsApp.",
    intro:
      "Wimpernlifting ist die dezente Lösung, wenn die eigenen Wimpern sichtbarer, geschwungener und gepflegt wirken sollen.",
    promise:
      "Der Look bleibt natürlich und alltagstauglich. Wir stimmen den Ablauf auf Ihre Wimpern und Ihren gewünschten Ausdruck ab.",
    overviewTitle: "Mehr Schwung aus den eigenen Wimpern – ohne Extensions.",
    overview:
      "Beim Wimpernlifting werden die Naturwimpern geformt und aufgerichtet. Die Form wird so gewählt, dass sie zu Wimpernlänge, Augenpartie und dem gewünschten Ausdruck passt.",
    proofTitle: "Sorgfalt zeigt sich in der Vorbereitung.",
    proof:
      "Die Augenpartie wird vor dem Termin betrachtet und die Wimpern werden sauber getrennt und positioniert. Bei Reizung oder auffälliger Empfindlichkeit wird nicht einfach weiterbehandelt.",
    highlights: ["Natürlicher Schwung", "Ausdruck", "Gepflegter Look"],
    video: {
      src: "/media/services/wimpern-elegant.m4v",
      objectPosition: "52% 46%",
      mobileObjectPosition: "56% 48%",
      label: "Wimpernbehandlung im Beauty Salon",
    },
    benefits: [
      "Mehr Ausdruck ohne künstlichen Effekt",
      "Alltagstauglicher, gepflegter Look",
      "Passend zur natürlichen Wimpernform",
      "Ideal für einen frischen Blick",
    ],
    processSteps: [
      {
        title: "Wunschlook besprechen",
        text: "Wir schauen, welcher Schwung natürlich wirkt und zu Augenform, Wimpernlänge und Alltag passt.",
      },
      {
        title: "Wimpern vorbereiten",
        text: "Die Wimpern werden sauber vorbereitet und sorgfältig positioniert, damit das Ergebnis gleichmäßig wirkt.",
      },
      {
        title: "Lifting durchführen",
        text: "Der Schwung wird Schritt für Schritt aufgebaut, ohne einen künstlichen oder überladenen Look zu erzeugen.",
      },
      {
        title: "Pflegehinweise",
        text: "Zum Schluss erklären wir, worauf Sie danach achten sollten, damit der Look schön erhalten bleibt.",
      },
    ],
    preparation: [
      "Ohne Mascara, Augen-Make-up und ölhaltige Pflege zur Behandlung kommen.",
      "Kontaktlinsen nach Möglichkeit vor dem Termin herausnehmen.",
      "Aktuelle Reizungen, Allergien oder sehr empfindliche Augen vorher ansprechen.",
    ],
    aftercare: [
      "Die Wimpern in der ersten Zeit trocken halten und nicht stark reiben.",
      "Ölige Produkte direkt an den Wimpern zunächst vermeiden.",
      "Die Wimpern vorsichtig behandeln und Pflegehinweise aus dem Studio beachten.",
    ],
    suitability: [
      "Sie möchten Ihre Naturwimpern sichtbarer und geschwungener wirken lassen.",
      "Sie bevorzugen einen natürlichen Look ohne Extensions.",
      "Sie möchten morgens weniger mit Wimpernzange und Mascara arbeiten.",
    ],
    askFirst: [
      "Bei gereizten, entzündeten oder frisch operierten Augen.",
      "Bei bekannten Allergien gegen Lifting- oder Färbeprodukte.",
      "Wenn die Naturwimpern aktuell sehr geschädigt oder brüchig sind.",
    ],
    relatedGuides: [
      { href: "/ratgeber", title: "Weitere Beauty- und Pflegehinweise" },
      { href: "/behandlungen/professionelle-hautpflege", title: "Professionelle Hautpflege entdecken" },
    ],
    steps: [
      "Wunschlook und Wimpernform kurz besprechen.",
      "Lifting sorgfältig durchführen.",
      "Pflegehinweise für die Haltbarkeit mitgeben.",
    ],
    faq: [
      {
        question: "Sieht Wimpernlifting natürlich aus?",
        answer:
          "Ja, genau das ist der Vorteil. Der Effekt kommt aus den eigenen Wimpern und wirkt gepflegt, nicht überladen.",
      },
      {
        question: "Wie buche ich einen Termin?",
        answer:
          "Am einfachsten per WhatsApp. Schreiben Sie kurz Wimpernlifting und Ihre Wunschzeit, dann stimmen wir den Termin ab.",
      },
      {
        question: "Wie lange hält ein Wimpernlifting?",
        answer:
          "Der Schwung wächst mit dem natürlichen Wimpernzyklus heraus. Häufig wird mit mehreren Wochen gerechnet; die genaue Haltbarkeit variiert nach Wimpernstruktur und Pflege.",
      },
      {
        question: "Darf ich nach dem Wimpernlifting Mascara benutzen?",
        answer:
          "Nach der ersten Schonzeit ist Mascara meist wieder möglich. Wir erklären Ihnen beim Termin, wann es für das verwendete System sinnvoll ist.",
      },
      {
        question: "Was muss ich vor dem Wimpernlifting beachten?",
        answer:
          "Kommen Sie möglichst ohne Mascara, Augen-Make-up und ölhaltige Produkte. Kontaktlinsen sollten nach Möglichkeit vorher herausgenommen werden.",
      },
      {
        question: "Kann ein Wimpernlifting wiederholt werden?",
        answer:
          "Ja, wenn die Wimpern gesund wirken und ausreichend herausgewachsen sind. Den passenden Abstand bestimmen wir anhand des aktuellen Wimpernzustands.",
      },
    ],
    icon: WandSparkles,
  },
  {
    name: "Professionelle Hautpflege",
    number: "05",
    slug: "professionelle-hautpflege",
    href: "/behandlungen/professionelle-hautpflege",
    shortDescription:
      "Ruhige, persönliche Pflege, abgestimmt auf Ihren Hauttyp und Ihre individuellen Ziele.",
    seoTitle: "Professionelle Hautpflege Mannheim",
    seoDescription:
      "Professionelle Hautpflege in Mannheim bei S&O Beauty Salon: individuelle Pflege, persönliche Beratung und ruhige Atmosphäre.",
    intro:
      "Professionelle Hautpflege bei S&O Beauty Salon bedeutet: nicht einfach irgendeine Anwendung, sondern eine ruhige Pflege, die zu Ihrer Haut passt.",
    promise:
      "Wir schauen auf Hautgefühl, Wünsche und Alltag. Daraus entsteht ein Termin, der gepflegt, persönlich und angenehm bleibt.",
    overviewTitle: "Pflege, die nicht mit einem Produkt, sondern mit Ihrer Haut beginnt.",
    overview:
      "Professionelle Hautpflege ist der passende Einstieg, wenn Sie noch keine konkrete Gerätebehandlung suchen. Hautgefühl, Alltag und Pflegeroutine bestimmen, welche Schritte sinnvoll sind.",
    proofTitle: "Keine starre Behandlungsliste – eine verständliche Empfehlung.",
    proof:
      "Wir wählen Reinigung, Pflege und Abschluss nicht nach einem Standardpaket, sondern nach dem sichtbaren und beschriebenen Hautzustand. Bei auffälligen Veränderungen empfehlen wir eine ärztliche Abklärung.",
    highlights: ["Individuell", "Ruhig", "Gepflegt"],
    video: {
      src: "/media/services/hautpflege-clinic.mp4",
      objectPosition: "57% 48%",
      mobileObjectPosition: "78% 48%",
      label: "Professionelle Hautpflege mit einem Kosmetikgerät",
      caption: "Einblick in apparative Hautpflege",
    },
    benefits: [
      "Persönliche Pflege statt Massenprogramm",
      "Abgestimmt auf Hauttyp und Ziel",
      "Ruhige Atmosphäre im Studio",
      "Gute Basis für regelmäßige Hautpflege",
    ],
    processSteps: [
      {
        title: "Haut & Alltag verstehen",
        text: "Wir sprechen kurz darüber, wie sich Ihre Haut anfühlt, was sie belastet und welches Ergebnis Sie sich wünschen.",
      },
      {
        title: "Pflege auswählen",
        text: "Die Anwendung wird passend zum Hauttyp und zum Terminziel zusammengestellt, ohne starres Standardprogramm.",
      },
      {
        title: "Behandlung in Ruhe",
        text: "Die Pflege wird ruhig durchgeführt, damit die Haut und auch Sie selbst wirklich ankommen können.",
      },
      {
        title: "Empfehlung danach",
        text: "Sie bekommen eine klare, einfache Empfehlung für die Pflege zu Hause oder den nächsten sinnvollen Termin.",
      },
    ],
    preparation: [
      "Wenn möglich ohne stark deckendes Make-up zum Termin kommen.",
      "Aktuelle Produkte, Unverträglichkeiten und Hautreaktionen nennen.",
      "Bei neuen oder auffälligen Hautveränderungen vorab ärztlich abklären lassen.",
    ],
    aftercare: [
      "Die empfohlene Pflege zunächst einfach und mild halten.",
      "Neue aktive Wirkstoffe nicht gleichzeitig auf eigene Faust ergänzen.",
      "Sonnenschutz als festen Teil der Routine einplanen.",
    ],
    suitability: [
      "Sie wünschen eine persönliche Einschätzung Ihrer aktuellen Pflegeroutine.",
      "Ihre Haut fühlt sich trocken, gestresst oder unausgeglichen an.",
      "Sie möchten einen ruhigen Pflege-Termin ohne festgelegte Gerätebehandlung.",
    ],
    askFirst: [
      "Bei akuten Entzündungen, offenen Stellen oder ansteckenden Hautveränderungen.",
      "Bei plötzlich auftretenden oder medizinisch ungeklärten Beschwerden.",
      "Wenn kurz zuvor eine intensive dermatologische oder kosmetische Behandlung stattfand.",
    ],
    relatedGuides: [
      { href: "/ratgeber", title: "Ratgeber zu Haut und Behandlungsvorbereitung" },
      { href: "/behandlungen/aquafacial", title: "AquaFacial als ergänzende Behandlung ansehen" },
    ],
    steps: [
      "Hautgefühl und Wunsch besprechen.",
      "Pflege passend zum Hauttyp durchführen.",
      "Empfehlung für Routine oder nächsten Termin geben.",
    ],
    faq: [
      {
        question: "Welche Hautpflege passt zu mir?",
        answer:
          "Das entscheiden wir nicht pauschal. Beim Termin schauen wir gemeinsam, was Ihre Haut gerade braucht.",
      },
      {
        question: "Kann ich ohne genaue Wunschbehandlung anfragen?",
        answer:
          "Ja. Schreiben Sie einfach, was Sie stört oder was Sie sich wünschen. Wir empfehlen dann die passende Richtung.",
      },
      {
        question: "Was passiert beim ersten Hautpflege-Termin?",
        answer:
          "Wir sprechen über Hautgefühl, aktuelle Pflege und Wünsche, betrachten die Haut und wählen daraus einen nachvollziehbaren Ablauf für den Termin.",
      },
      {
        question: "Muss ich meine Produkte mitbringen?",
        answer:
          "Das ist nicht zwingend nötig. Eine kurze Liste oder Fotos der regelmäßig verwendeten Produkte können aber helfen, die Routine besser zu verstehen.",
      },
      {
        question: "Kann professionelle Hautpflege Hautkrankheiten behandeln?",
        answer:
          "Nein. Kosmetische Pflege ersetzt keine Diagnose oder medizinische Therapie. Bei auffälligen, schmerzhaften oder anhaltenden Beschwerden empfehlen wir eine dermatologische Abklärung.",
      },
      {
        question: "Wie oft sollte ich eine Gesichtsbehandlung buchen?",
        answer:
          "Das hängt von Hautzustand, Ziel und Ihrer Pflege zu Hause ab. Wir empfehlen einen weiteren Termin nur, wenn er für Ihre Situation sinnvoll erscheint.",
      },
    ],
    icon: Flower2,
  },
] as const;

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}
