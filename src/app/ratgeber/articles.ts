export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideSource = {
  label: string;
  href: string;
};

export type GuideArticle = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  category: string;
  readingTime: string;
  updated: string;
  updatedIso: string;
  primaryService: {
    href: string;
    label: string;
  };
  sections: GuideSection[];
  sources: GuideSource[];
  related: Array<{ href: string; label: string }>;
};

export const articles: GuideArticle[] = [
  {
    slug: "laser-haarentfernung-vorbereitung",
    title: "Vor der Laser-Haarentfernung: richtig vorbereiten und rasieren.",
    shortTitle: "Lasertermin richtig vorbereiten",
    description:
      "Vor der Laser-Haarentfernung rasieren, Sonne meiden und Pflege abstimmen: die wichtigsten Vorbereitungsschritte verständlich erklärt.",
    intro:
      "Eine gute Vorbereitung macht den Lasertermin nicht komplizierter, sondern ruhiger. Wichtig ist vor allem, dass die Haarwurzel erhalten bleibt, die Haut nicht unnötig gereizt ist und das Studio alle relevanten Informationen kennt.",
    category: "Laser-Haarentfernung",
    readingTime: "6 Minuten",
    updated: "16. August 2026",
    updatedIso: "2026-08-16",
    primaryService: {
      href: "/behandlungen/laser-haarentfernung",
      label: "Laser-Haarentfernung in Mannheim",
    },
    sections: [
      {
        id: "rasieren",
        title: "Wann sollte man vor der Laser-Haarentfernung rasieren?",
        paragraphs: [
          "Viele Studios empfehlen eine gründliche Rasur am Tag vor dem Termin. Der passende Zeitpunkt hängt aber auch von Hautempfindlichkeit, Körperregion und dem geplanten Hautcheck ab. Deshalb gilt die konkrete Anweisung des behandelnden Studios.",
          "Die Haut sollte beim Termin glatt genug sein, damit oberhalb der Haut möglichst wenig Haar durch die Energie erwärmt wird. Gleichzeitig sollte die Rasur nicht so knapp erfolgen, dass frische Schnitte oder starke Reizungen entstehen.",
        ],
        bullets: [
          "Einen sauberen, scharfen Rasierer verwenden.",
          "Ohne starken Druck rasieren und kleine Verletzungen vermeiden.",
          "Bei Rasurbrand oder offenen Stellen das Studio vor dem Termin informieren.",
        ],
      },
      {
        id: "nicht-zupfen",
        title: "Warum Wachsen, Epilieren und Zupfen vorher nicht passen",
        paragraphs: [
          "Laser-Haarentfernung zielt auf Pigment im Haar und auf Strukturen im Haarfollikel. Beim Wachsen, Epilieren oder Zupfen wird das Haar mitsamt der Wurzel aus der Haut gezogen. Dann fehlt genau die Struktur, über die die Lichtenergie aufgenommen werden soll.",
          "Rasieren kürzt das Haar nur an der Oberfläche. Die Haarwurzel bleibt erhalten. Zwischen den Sitzungen ist Rasur deshalb in der Regel die passende Methode – sofern das Studio nichts anderes empfiehlt.",
        ],
      },
      {
        id: "sonne",
        title: "Sonne, Solarium und Selbstbräuner",
        paragraphs: [
          "Frische Bräune verändert den Pigmentgehalt der Haut. Das kann die Auswahl der Behandlungsparameter beeinflussen und das Risiko unerwünschter Hautreaktionen erhöhen. Intensive Sonne, Solarium und Selbstbräuner sollten rund um den Termin vermieden werden.",
          "Wie lang die Pause sein sollte, lässt sich nicht für jede Person gleich beantworten. Hauttyp, Region, Jahreszeit und verwendete Technik spielen eine Rolle. Bei sichtbarer Bräune oder Sonnenbrand sollte der Termin vorab neu beurteilt werden.",
        ],
      },
      {
        id: "pflege",
        title: "Was am Behandlungstag auf die Haut gehört – und was nicht",
        paragraphs: [
          "Die Behandlungsfläche sollte sauber und frei von Deo, Öl, Parfum, Selbstbräuner oder stark aktiver Pflege sein. So kann die Haut unverfälscht betrachtet und vorbereitet werden.",
          "Medikamente, bekannte Hautreaktionen und neue Pflegeprodukte sollten nicht verschwiegen werden. Bestimmte Wirkstoffe oder Medikamente können die Lichtempfindlichkeit verändern. Im Zweifel wird erst geklärt und danach behandelt.",
        ],
      },
      {
        id: "checkliste",
        title: "Kurze Checkliste für Ihren Termin",
        paragraphs: [
          "Diese Liste ersetzt nicht die persönlichen Hinweise aus dem Studio. Sie hilft aber dabei, vor dem Termin nichts Offensichtliches zu vergessen.",
        ],
        bullets: [
          "Rasurzeitpunkt mit dem Studio abgestimmt.",
          "In den Wochen davor nicht gewachst, epiliert oder gezupft.",
          "Keine frische intensive Bräune und kein Selbstbräuner.",
          "Haut am Termin sauber, produktfrei und möglichst reizfrei.",
          "Medikamente, Hautveränderungen und besondere Umstände angesprochen.",
        ],
      },
      {
        id: "beratung",
        title: "Warum die persönliche Beratung dazugehört",
        paragraphs: [
          "Die NiSV verlangt bei Anwendungen mit nichtionisierender Strahlung unter anderem Beratung, Aufklärung und einen individuellen Behandlungsplan. Das ist keine Formalität: Haut, Haare und gesundheitliche Faktoren entscheiden darüber, ob eine Behandlung sinnvoll durchgeführt werden kann.",
          "Bei S&O Beauty Salon wird die Vorbereitung deshalb nicht nur per allgemeiner Checkliste abgewickelt. Offene Fragen werden vor dem ersten Termin persönlich geklärt.",
        ],
      },
    ],
    sources: [
      {
        label: "NiSV – Anforderungen an Beratung und individuelle Anwendungsplanung",
        href: "https://www.gesetze-im-internet.de/nisv/BJNR218700018.html",
      },
      {
        label: "Alma Lasers – Soprano ICE Platinum",
        href: "https://almalasers.com/product/soprano-ice-platinum/",
      },
    ],
    related: [
      {
        href: "/ratgeber/laser-haarentfernung-wie-viele-sitzungen",
        label: "Warum mehrere Lasersitzungen notwendig sind",
      },
      {
        href: "/behandlungen/laser-haarentfernung",
        label: "Laser-Haarentfernung bei S&O ansehen",
      },
    ],
  },
  {
    slug: "laser-haarentfernung-wie-viele-sitzungen",
    title: "Wie viele Sitzungen braucht eine Laser-Haarentfernung?",
    shortTitle: "Wie viele Lasersitzungen sind nötig?",
    description:
      "Warum Laser-Haarentfernung mehrere Sitzungen braucht, welche Faktoren die Anzahl beeinflussen und woran ein sinnvoller Behandlungsplan erkennbar ist.",
    intro:
      "Eine pauschale Zahl klingt bequem, ist aber selten ehrlich. Haare wachsen nicht gleichzeitig, Körperregionen reagieren unterschiedlich und auch Haarfarbe, Haardicke, Hauttyp und hormonelle Einflüsse verändern den Verlauf.",
    category: "Laser-Haarentfernung",
    readingTime: "7 Minuten",
    updated: "16. August 2026",
    updatedIso: "2026-08-16",
    primaryService: {
      href: "/behandlungen/laser-haarentfernung",
      label: "Laser-Haarentfernung in Mannheim",
    },
    sections: [
      {
        id: "keine-feste-zahl",
        title: "Warum es keine seriöse feste Sitzungszahl gibt",
        paragraphs: [
          "Laserenergie kann nur Haare erreichen, die genügend Pigment besitzen und sich in einer geeigneten Wachstumsphase befinden. Da nicht alle Haare einer Region gleichzeitig aktiv wachsen, wird bei einem Termin immer nur ein Teil der Haarfollikel passend erreicht.",
          "Deshalb entsteht eine sichtbare Reduktion Schritt für Schritt. Wer schon vor dem Haut- und Haarcheck ein identisches Ergebnis nach einer festen Zahl verspricht, ignoriert die wichtigsten individuellen Unterschiede.",
        ],
      },
      {
        id: "haarzyklus",
        title: "Der Haarzyklus bestimmt den Abstand",
        paragraphs: [
          "Haare wechseln zwischen Wachstums-, Übergangs- und Ruhephasen. Für die Lichtaufnahme ist vor allem die aktive Wachstumsphase relevant. Zwischen zwei Terminen braucht es daher ausreichend Zeit, damit weitere Haare in diese Phase wechseln.",
          "Der sinnvolle Abstand ist nicht an jeder Körperregion gleich. Gesicht, Achseln, Beine und Rücken haben unterschiedliche Wachstumsrhythmen. Ein guter Plan wird im Verlauf angepasst statt starr wiederholt.",
        ],
      },
      {
        id: "faktoren",
        title: "Diese Faktoren beeinflussen die Anzahl der Termine",
        paragraphs: [
          "Mehrere Merkmale wirken gleichzeitig. Manche lassen sich beim ersten Termin gut einschätzen, andere zeigen sich erst im Verlauf.",
        ],
        bullets: [
          "Haarfarbe und Pigmentgehalt.",
          "Haardicke und Haardichte.",
          "Hauttyp und aktuelle Bräune.",
          "Körperregion und dortiger Haarzyklus.",
          "Hormonelle Einflüsse und bestimmte Medikamente.",
          "Regelmäßigkeit der Termine und Verhalten zwischen den Sitzungen.",
        ],
      },
      {
        id: "verlauf",
        title: "Woran lässt sich ein sinnvoller Verlauf erkennen?",
        paragraphs: [
          "Nach dem Termin fallen behandelte Haare nicht sofort aus. Ein Teil löst sich erst in den folgenden Tagen oder Wochen. Gleichzeitig wachsen Haare nach, die beim vorherigen Termin noch nicht in der geeigneten Phase waren.",
          "Beurteilt wird deshalb nicht nur, ob die Haut kurzfristig glatt wirkt. Aussagekräftiger sind Veränderungen bei Dichte, Wachstumsgeschwindigkeit und Haardicke über mehrere Termine hinweg. Fotos oder eine knappe Dokumentation können helfen, den Verlauf nüchtern zu betrachten.",
        ],
      },
      {
        id: "auffrischung",
        title: "Sind später Auffrischungen möglich?",
        paragraphs: [
          "Auch nach einer abgeschlossenen Serie können einzelne Haare wieder sichtbar werden. Hormonelle Veränderungen, Alter, Medikamente oder lange Ruhephasen einzelner Follikel können dabei eine Rolle spielen.",
          "Ob eine Auffrischung sinnvoll ist, wird anhand des tatsächlichen Haarwuchses entschieden. Regelmäßige Termine ohne sichtbaren Bedarf sind kein Qualitätsmerkmal.",
        ],
      },
      {
        id: "beratung",
        title: "Was Sie beim Beratungsgespräch fragen können",
        paragraphs: [
          "Eine verständliche Beratung sollte erklären, welches Gerät verwendet wird, warum die Behandlung zu Haut und Haaren passt, welche Reaktionen möglich sind und wie der Verlauf kontrolliert wird.",
        ],
        bullets: [
          "Welche Haar- und Hautmerkmale wurden bei mir berücksichtigt?",
          "Warum ist dieser Abstand für meine Körperregion sinnvoll?",
          "Woran erkennen wir gemeinsam, ob der Verlauf passt?",
          "Welche Vorbereitung und Nachpflege gilt konkret für mich?",
        ],
      },
    ],
    sources: [
      {
        label: "Alma Lasers – Technologie des Soprano ICE Platinum",
        href: "https://almalasers.com/product/soprano-ice-platinum/",
      },
      {
        label: "NiSV – Beratung, Risiken und individueller Behandlungsplan",
        href: "https://www.gesetze-im-internet.de/nisv/BJNR218700018.html",
      },
    ],
    related: [
      {
        href: "/ratgeber/laser-haarentfernung-vorbereitung",
        label: "So bereiten Sie den Lasertermin vor",
      },
      {
        href: "/behandlungen/laser-haarentfernung",
        label: "Laser-Haarentfernung bei S&O ansehen",
      },
    ],
  },
  {
    slug: "microneedling-nachsorge",
    title: "Microneedling danach: Was Ihre Haut jetzt braucht.",
    shortTitle: "Microneedling-Nachsorge",
    description:
      "Microneedling-Nachsorge verständlich erklärt: Haut beruhigen, Make-up und Sport pausieren, Sonne vermeiden und Reaktionen richtig einordnen.",
    intro:
      "Nach dem Microneedling ist die Haut bewusst gereizt worden und braucht zunächst wenig statt viel: saubere Hände, milde Pflege, Schutz vor Sonne und eine Pause von Wärme, Reibung und aktiven Wirkstoffen.",
    category: "Microneedling",
    readingTime: "7 Minuten",
    updated: "16. August 2026",
    updatedIso: "2026-08-16",
    primaryService: {
      href: "/behandlungen/microneedling",
      label: "Microneedling in Mannheim",
    },
    sections: [
      {
        id: "erste-stunden",
        title: "Die ersten Stunden nach dem Microneedling",
        paragraphs: [
          "Rötung, Wärmegefühl, leichte Schwellung oder ein sonnenbrandähnliches Empfinden können nach der Anwendung auftreten. Wie stark und wie lange, hängt unter anderem von Hautzustand, behandelter Region und Intensität ab.",
          "Die Haut sollte möglichst wenig berührt werden. Verwenden Sie nur die Produkte, die für die unmittelbare Nachpflege empfohlen wurden. Mehrere neue Seren gleichzeitig helfen nicht dabei, eine Reaktion besser einzuordnen.",
        ],
      },
      {
        id: "pflege",
        title: "Milde Pflege statt Wirkstoffprogramm",
        paragraphs: [
          "In den ersten Tagen stehen Beruhigung und Schutz im Vordergrund. Säuren, Retinoide, mechanische Peelings, alkoholreiche Produkte oder stark parfümierte Pflege können die Haut zusätzlich reizen.",
          "Wann die gewohnte Routine wieder aufgenommen werden kann, richtet sich nach der sichtbaren Hautreaktion und der durchgeführten Anwendung. Die individuellen Hinweise aus dem Studio haben Vorrang vor allgemeinen Internetlisten.",
        ],
      },
      {
        id: "make-up",
        title: "Wann darf Make-up wieder auf die Haut?",
        paragraphs: [
          "Direkt nach Microneedling sollte auf Make-up verzichtet werden. Die American Academy of Dermatology empfiehlt mindestens 24 Stunden Pause. Bei stärkerer Rötung oder intensiverer Anwendung kann eine längere Pause sinnvoll sein.",
          "Wenn Make-up wieder verwendet wird, sollten Pinsel, Schwämmchen und Hände sauber sein. Stark deckende oder reizende Produkte sind für den ersten Tag zurück in die Routine keine gute Wahl.",
        ],
      },
      {
        id: "sport",
        title: "Sport, Sauna und Schwimmbad",
        paragraphs: [
          "Intensiver Sport erzeugt Wärme, Schweiß und Reibung. Sauna und heiße Bäder verstärken die Wärmebelastung; Schwimmbadwasser bringt zusätzliche Stoffe und Keime an die Haut. Diese Belastungen sollten zunächst pausieren.",
          "Wie lang die Pause dauert, hängt vom Hautbild ab. Wenn die Haut noch deutlich gerötet, warm oder empfindlich ist, braucht sie weiter Ruhe.",
        ],
      },
      {
        id: "sonne",
        title: "Sonne und Sonnenschutz",
        paragraphs: [
          "Frisch behandelte Haut reagiert empfindlicher auf UV-Strahlung. Direkte Sonne und Solarium sollten vermieden werden. Ein geeigneter, konsequent verwendeter Sonnenschutz gehört zur Nachpflege.",
          "Ein Termin unmittelbar vor intensivem Sonnenurlaub ist deshalb ungünstig. Wer viel draußen arbeitet oder Sport treibt, sollte das bei der Terminplanung offen ansprechen.",
        ],
      },
      {
        id: "warnzeichen",
        title: "Wann sollte eine Reaktion abgeklärt werden?",
        paragraphs: [
          "Normale Rötung sollte sich im Verlauf beruhigen. Zunehmende Schmerzen, starke Schwellung, Bläschen, Eiter, Fieber, anhaltende nässende Stellen oder eine Reaktion, die statt besser deutlich schlechter wird, gehören nicht einfach ausgesessen.",
          "Kontaktieren Sie in diesem Fall das Studio und holen Sie bei stärkeren oder anhaltenden Beschwerden medizinischen Rat ein. Dieser Ratgeber ersetzt keine Diagnose.",
        ],
      },
      {
        id: "checkliste",
        title: "Nachsorge auf einen Blick",
        paragraphs: [
          "Die kurze Version für die ersten Tage lautet:",
        ],
        bullets: [
          "Haut sauber halten und nicht unnötig berühren.",
          "Nur milde, empfohlene Pflege verwenden.",
          "Make-up zunächst pausieren.",
          "Sport, Sauna, Schwimmbad und starke Wärme pausieren.",
          "Direkte Sonne vermeiden und Sonnenschutz nutzen.",
          "Ungewöhnliche oder zunehmende Reaktionen abklären lassen.",
        ],
      },
    ],
    sources: [
      {
        label: "American Academy of Dermatology – Microneedling: recovery and safety",
        href: "https://www.aad.org/public/cosmetic/scars-stretch-marks/microneedling-fade-scars",
      },
      {
        label: "Chelsea and Westminster Hospital – Microneedling information",
        href: "https://www.chelwest.nhs.uk/your-visit/patient-leaflets/microneedling",
      },
    ],
    related: [
      {
        href: "/behandlungen/microneedling",
        label: "Microneedling bei S&O ansehen",
      },
      {
        href: "/behandlungen/professionelle-hautpflege",
        label: "Professionelle Hautpflege entdecken",
      },
    ],
  },
  {
    slug: "laser-haarentfernung-kosten-mannheim",
    title: "Laser-Haarentfernung Kosten in Mannheim: Wovon hängt der Preis ab?",
    shortTitle: "Kosten der Laser-Haarentfernung in Mannheim",
    description:
      "Was Laser-Haarentfernung in Mannheim kostet, welche Faktoren den Preis bestimmen und woran Sie ein nachvollziehbares Angebot erkennen.",
    intro:
      "Wer nach den Kosten einer Laser-Haarentfernung sucht, möchte meist eine klare Zahl. Seriös lässt sie sich aber erst nennen, wenn Körperregion, Haarwuchs, Hauttyp und der geplante Behandlungsumfang bekannt sind. Dieser Ratgeber erklärt, welche Punkte ein Angebot nachvollziehbar machen, ohne mit Lockpreisen zu arbeiten.",
    category: "Laser-Haarentfernung",
    readingTime: "7 Minuten",
    updated: "17. August 2026",
    updatedIso: "2026-08-17",
    primaryService: {
      href: "/behandlungen/laser-haarentfernung",
      label: "Laser-Haarentfernung in Mannheim",
    },
    sections: [
      {
        id: "preisfaktoren",
        title: "Welche Faktoren bestimmen den Preis?",
        paragraphs: [
          "Der wichtigste Faktor ist die Größe und Lage der Körperregion. Eine kleine, klar begrenzte Zone benötigt weniger Zeit als Beine, Rücken oder eine Kombination mehrerer Bereiche. Auch die Haardichte kann beeinflussen, wie sorgfältig eine Fläche bearbeitet werden muss.",
          "Hinzu kommen Hauttyp, Haarfarbe und Haarstärke. Sie entscheiden nicht nur über die Eignung, sondern auch darüber, welche Einstellungen und welcher Behandlungsplan sinnvoll sind. Ein Preis ohne vorherige Einschätzung sagt deshalb wenig über den tatsächlichen Gesamtaufwand aus.",
        ],
        bullets: [
          "Größe und Anzahl der gewünschten Zonen.",
          "Haardichte, Haarstärke und Pigmentierung.",
          "Hauttyp und aktueller Hautzustand.",
          "Zeitaufwand pro Termin.",
          "Voraussichtlicher Behandlungsrhythmus.",
        ],
      },
      {
        id: "einzeltermin-gesamtplan",
        title: "Einzeltermin und Gesamtplan sind nicht dasselbe",
        paragraphs: [
          "Der Preis eines einzelnen Termins ist leicht zu vergleichen, beantwortet aber nicht automatisch die wichtigere Frage: Welcher Gesamtplan ist für die gewünschte Region realistisch? Haare befinden sich in unterschiedlichen Wachstumsphasen. Deshalb wird Laser-Haarentfernung normalerweise als Serie geplant und im Verlauf neu beurteilt.",
          "Ein günstiger Einzeltermin kann am Ende wenig aussagekräftig sein, wenn Beratung, Dokumentation oder eine sinnvolle Verlaufskontrolle fehlen. Umgekehrt sollte auch niemand vor dem Haut- und Haarcheck eine feste Anzahl an Sitzungen garantieren.",
        ],
      },
      {
        id: "angebot",
        title: "Was sollte ein gutes Angebot erklären?",
        paragraphs: [
          "Ein verständliches Angebot benennt die behandelten Zonen eindeutig. Es erklärt außerdem, ob Beratung und Hautcheck dazugehören, welche Technik eingesetzt wird und wie mit Veränderungen im Verlauf umgegangen wird.",
          "Fragen Sie nach, wenn eine Bezeichnung unklar ist. Begriffe wie Ganzkörper, Intimbereich oder Gesicht können je nach Studio unterschiedliche Flächen umfassen. Eine kurze persönliche Abstimmung verhindert, dass zwei scheinbar gleiche Angebote tatsächlich etwas anderes enthalten.",
        ],
        bullets: [
          "Welche genaue Fläche ist enthalten?",
          "Ist der Haut- und Haarcheck Teil des Termins?",
          "Welches Gerät wird verwendet?",
          "Wie werden Abstände und Fortschritt festgelegt?",
          "Was passiert, wenn die Haut am Termin nicht behandelt werden sollte?",
        ],
      },
      {
        id: "technik-fachkunde",
        title: "Warum Technik und Fachkunde zum Preisvergleich gehören",
        paragraphs: [
          "Gerätename und Werbeversprechen allein machen noch keine gute Behandlung. Entscheidend ist, dass die Anwendung fachkundig, hygienisch und passend zu Haut und Haar durchgeführt wird. Bei S&O kommt der Soprano ICE Platinum zum Einsatz; vor dem Start werden Behandlungsbereich und mögliche Ausschlussgründe besprochen.",
          "Die NiSV regelt unter anderem Beratung, Aufklärung, Dokumentation und individuelle Anwendungsplanung bei entsprechenden Anwendungen. Diese Arbeit ist Teil einer verantwortungsvollen Behandlung, auch wenn sie auf einer Preistafel nicht sichtbar wäre.",
        ],
      },
      {
        id: "mannheim-vergleichen",
        title: "Laser-Studios in Mannheim sinnvoll vergleichen",
        paragraphs: [
          "Vergleichen Sie nicht nur die erste Zahl im Suchergebnis. Achten Sie auf eine vollständige Adresse, nachvollziehbare Qualifikation, echte Kontaktmöglichkeiten und darauf, ob Fragen zu Haut, Haaren und Medikamenten ernst genommen werden.",
          "Ein persönliches Angebot ist besonders sinnvoll, wenn mehrere Zonen kombiniert werden sollen. Senden Sie dafür die gewünschten Bereiche per WhatsApp. Nach einer kurzen Abstimmung kann das Studio den Umfang deutlich genauer einordnen als über eine allgemeine Liste.",
        ],
      },
      {
        id: "fazit",
        title: "Kurz gesagt: Ein guter Preis ist verständlich, nicht nur niedrig",
        paragraphs: [
          "Der Preis hängt vor allem von Fläche, Zeitaufwand und Ihrem individuellen Behandlungsplan ab. Ein seriöser Vergleich berücksichtigt außerdem Beratung, Technik, Fachkunde und Verlaufskontrolle.",
          "Wenn Sie wissen möchten, was Ihre gewünschten Zonen bei S&O kosten, schreiben Sie uns kurz über WhatsApp. Sie erhalten eine persönliche Einordnung, ohne dass wir Ihnen vorher einen Standardplan versprechen.",
        ],
      },
    ],
    sources: [
      {
        label: "NiSV – Beratung, Dokumentation und individuelle Anwendungsplanung",
        href: "https://www.gesetze-im-internet.de/nisv/BJNR218700018.html",
      },
      {
        label: "Alma Lasers – Soprano ICE Platinum",
        href: "https://almalasers.com/product/soprano-ice-platinum/",
      },
    ],
    related: [
      {
        href: "/ratgeber/laser-haarentfernung-wie-viele-sitzungen",
        label: "Wie viele Lasersitzungen sind nötig?",
      },
      {
        href: "/ratgeber/laser-haarentfernung-vorbereitung",
        label: "So bereiten Sie den Lasertermin vor",
      },
    ],
  },
  {
    slug: "aquafacial-oder-microneedling",
    title: "AquaFacial oder Microneedling: Welche Behandlung passt zu meiner Haut?",
    shortTitle: "AquaFacial oder Microneedling?",
    description:
      "AquaFacial und Microneedling im Vergleich: Ziele, Ablauf, Hautgefühl danach und die wichtigsten Fragen für Ihre persönliche Entscheidung.",
    intro:
      "Beide Behandlungen gehören zur professionellen Hautpflege, verfolgen aber unterschiedliche Ziele. AquaFacial konzentriert sich auf Reinigung, Pflege und Feuchtigkeit. Kosmetisches Microneedling setzt gezielte feine Reize und verlangt mehr Aufmerksamkeit bei Hautcheck und Nachpflege. Die bessere Wahl hängt deshalb nicht vom Trend ab, sondern von Ihrer Haut und Ihrem Alltag.",
    category: "Hautpflege",
    readingTime: "8 Minuten",
    updated: "17. August 2026",
    updatedIso: "2026-08-17",
    primaryService: {
      href: "/behandlungen/aquafacial",
      label: "AquaFacial in Mannheim",
    },
    sections: [
      {
        id: "unterschied",
        title: "Der wichtigste Unterschied in einem Satz",
        paragraphs: [
          "AquaFacial ist vor allem eine reinigende und pflegende Behandlung. Sie passt häufig zu Menschen, die sich ein frisches, gut durchfeuchtetes Hautgefühl wünschen und den Termin unkompliziert in den Alltag einbauen möchten.",
          "Beim kosmetischen Microneedling wird die Haut kontrolliert mit sehr feinen Nadeln behandelt. Das Ziel ist eher, das Erscheinungsbild von Hautstruktur und Unebenheiten zu unterstützen. Weil die Haut bewusst gereizt wird, sind Vorbereitung, Hygiene und Nachpflege besonders wichtig.",
        ],
      },
      {
        id: "aquafacial",
        title: "Wann spricht mehr für AquaFacial?",
        paragraphs: [
          "AquaFacial kann passen, wenn die Haut müde, trocken oder pflegebedürftig wirkt und Reinigung sowie Feuchtigkeit im Vordergrund stehen. Der Ablauf wird an Hautzustand und Empfindlichkeit angepasst.",
          "Auch vor einem Anlass kann eine sanfte Pflegebehandlung interessant sein. Ein Termin unmittelbar vor einem wichtigen Tag sollte trotzdem nicht zum ersten Experiment mit einer unbekannten Hautreaktion werden. Planen Sie bei empfindlicher Haut etwas Abstand ein.",
        ],
        bullets: [
          "Sie wünschen Reinigung und Feuchtigkeit in einem Termin.",
          "Die Haut soll frisch und gepflegt wirken.",
          "Eine kurze Erholungszeit ist Ihnen wichtig.",
          "Sie möchten mit einer eher sanften Pflegebehandlung beginnen.",
        ],
      },
      {
        id: "microneedling",
        title: "Wann spricht mehr für Microneedling?",
        paragraphs: [
          "Microneedling wird eher gewählt, wenn Hautstruktur, Porenbild oder das Erscheinungsbild bestimmter Unebenheiten im Mittelpunkt stehen. Ob die Behandlung geeignet ist, muss vorab anhand des aktuellen Hautzustands beurteilt werden.",
          "Nach der Anwendung können Rötung, Wärmegefühl oder leichte Schwellung auftreten. Wie deutlich die Haut reagiert und welche Pause sinnvoll ist, hängt auch von Gerät, Nadeltiefe und Intensität ab. Wer direkt danach Sonne, Sport, Sauna oder einen wichtigen Termin plant, sollte den Zeitpunkt neu überlegen.",
        ],
        bullets: [
          "Sie möchten gezielt am Erscheinungsbild der Hautstruktur arbeiten.",
          "Sie können konsequente Nachpflege einplanen.",
          "Ein Hautcheck hat keine Gründe zum Verschieben ergeben.",
          "Sie akzeptieren, dass die Haut vorübergehend sichtbar reagieren kann.",
        ],
      },
      {
        id: "nicht-behandeln",
        title: "Wann sollte nicht einfach behandelt werden?",
        paragraphs: [
          "Offene Stellen, aktive Infektionen, frischer Sonnenbrand oder stark entzündete Haut gehören zuerst abgeklärt. Bei Microneedling sind außerdem bestimmte Hauterkrankungen, Medikamente und eine Neigung zu auffälliger Narbenbildung relevante Themen für das Vorgespräch.",
          "Auch bei AquaFacial gilt: Sanft bedeutet nicht automatisch passend für jede Haut in jedem Zustand. Bei einem akuten Rosazea-Schub, starker Reizung oder kurz nach einer intensiven Behandlung kann Verschieben die bessere Entscheidung sein.",
        ],
      },
      {
        id: "kombination",
        title: "Kann man beide Behandlungen kombinieren?",
        paragraphs: [
          "Grundsätzlich können unterschiedliche Behandlungen Teil eines längerfristigen Pflegeplans sein. Sie sollten aber nicht spontan dicht aufeinandergelegt werden. Entscheidend sind Hautreaktion, verwendete Produkte, Intensität und ausreichende Erholung.",
          "Eine gute Planung beantwortet zuerst, welches Ziel gerade Priorität hat. Danach lässt sich entscheiden, ob eine einzelne Behandlung genügt oder ob verschiedene Termine mit sinnvollem Abstand besser passen.",
        ],
      },
      {
        id: "entscheidung",
        title: "Vier Fragen für die Entscheidung",
        paragraphs: [
          "Sie müssen die Behandlung nicht allein anhand von Bildern oder Social-Media-Trends auswählen. Diese Fragen geben dem Beratungsgespräch eine klare Richtung.",
        ],
        bullets: [
          "Geht es mir eher um Reinigung und Feuchtigkeit oder um Hautstruktur?",
          "Wie empfindlich oder gereizt ist meine Haut aktuell?",
          "Kann ich nach dem Termin Sonne, Sport und aktive Pflege pausieren?",
          "Gibt es Medikamente, Hauterkrankungen oder kürzliche Behandlungen, die ich ansprechen muss?",
        ],
      },
      {
        id: "beratung",
        title: "Persönlich entscheiden statt Behandlung raten",
        paragraphs: [
          "Viele öffentlich zugängliche Fachquellen beschreiben dermatologisches Microneedling, das in Tiefe und Ziel von einer kosmetischen Anwendung abweichen kann. Wir nutzen diese Quellen deshalb nur als Hintergrund zu Reaktionen und Vorsicht. Für den Termin gelten die Hinweise zur tatsächlich eingesetzten Methode und zum individuellen Hautzustand.",
          "Bei S&O wird zuerst auf Hautgefühl, Ziel und Alltag geschaut. Wenn AquaFacial besser passt, planen wir Reinigung und Pflege. Wenn Microneedling sinnvoll erscheint, gehören Hautcheck und Nachpflege zur Entscheidung.",
          "Schreiben Sie uns gern über WhatsApp, was Sie an Ihrer Haut beschäftigt und wann der Termin in Ihren Alltag passen soll. Das ersetzt keinen Hautcheck, macht die erste Empfehlung aber deutlich konkreter.",
        ],
      },
    ],
    sources: [
      {
        label: "American Academy of Dermatology – dermatologischer Hintergrund zu Microneedling",
        href: "https://www.aad.org/public/cosmetic/scars-stretch-marks/microneedling-fade-scars",
      },
      {
        label: "Chelsea and Westminster Hospital – klinischer Hintergrund zu Microneedling",
        href: "https://www.chelwest.nhs.uk/your-visit/patient-leaflets/microneedling",
      },
    ],
    related: [
      {
        href: "/behandlungen/aquafacial",
        label: "AquaFacial bei S&O ansehen",
      },
      {
        href: "/behandlungen/microneedling",
        label: "Microneedling bei S&O ansehen",
      },
      {
        href: "/ratgeber/microneedling-nachsorge",
        label: "Nachsorge nach Microneedling",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
