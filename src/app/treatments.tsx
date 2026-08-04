import { Droplets, Flower2, ScanFace, Sparkles, WandSparkles } from "lucide-react";

export const whatsappUrl =
  "https://wa.me/4915565855752?text=Hallo%20S%26O%20Beauty%20Salon%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20anfragen.";

export const mapsUrl = "https://maps.app.goo.gl/1dS2JhXRv3E81keT9";

export const laserZones = [
  { name: "Oberlippe", price: "24 €", group: "Gesicht" },
  { name: "Kinn", price: "25 €", group: "Gesicht" },
  { name: "Hals", price: "24 €", group: "Gesicht" },
  { name: "Wangen", price: "24 €", group: "Gesicht" },
  { name: "Koteletten", price: "25 €", group: "Gesicht" },
  { name: "Hände", price: "24 €", group: "Körper" },
  { name: "Achseln", price: "45 €", group: "Körper" },
  { name: "Oberarm", price: "39 €", group: "Arme" },
  { name: "Unterarm", price: "39 €", group: "Arme" },
  { name: "Arme komplett", price: "79 €", group: "Arme" },
  { name: "Brust", price: "35 €", group: "Oberkörper" },
  { name: "Bauch", price: "45 €", group: "Oberkörper" },
  { name: "Rücken", price: "65 €", group: "Oberkörper" },
  { name: "Bikinizone", price: "39 €", group: "Intim" },
  { name: "Intimbereich", price: "55 €", group: "Intim" },
  { name: "Pofalte", price: "24 €", group: "Intim" },
  { name: "Po", price: "49 €", group: "Körper" },
  { name: "Oberschenkel", price: "59 €", group: "Beine" },
  { name: "Unterschenkel", price: "55 €", group: "Beine" },
  { name: "Beine komplett", price: "99 €", group: "Beine" },
] as const;

export const laserPackages = [
  {
    name: "Bestseller-Paket",
    detail: "Achseln + Intim + Bikini",
    price: "119 €",
    note: "Ideal zum Starten",
    featured: true,
  },
  {
    name: "3 Zonen",
    detail: "frei kombinierbar nach Beratung",
    price: "129 €",
    note: "ca. 10-35 € Ersparnis",
    featured: false,
  },
  {
    name: "4 Zonen",
    detail: "mehrere Bereiche in einem Termin",
    price: "149 €",
    note: "ca. 30-60 € Ersparnis",
    featured: false,
  },
  {
    name: "Ganzkörper Basis",
    detail: "ohne Rücken",
    price: "179 €",
    note: "über 200 € Ersparnis",
    featured: false,
  },
  {
    name: "Ganzkörper Premium",
    detail: "inkl. Rücken",
    price: "229 €",
    note: "über 300 € Ersparnis",
    featured: false,
  },
] as const;

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
    highlights: ["Soprano ICE Platinum", "NiSV-Fachkunde", "Nahezu schmerzfreie Anwendung*"],
    price: {
      label: "ab 24 €",
      note: "Einzelzonen",
      detail: "Pakete ab 119 €",
    },
    video: {
      src: "/media/services/laser-epilation-leg.mp4",
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
    highlights: ["Frisches Hautgefühl", "Feuchtigkeit", "Sanfte Pflege"],
    price: {
      label: "89 €",
      note: "AquaFacial",
      detail: "Reinigung, Pflege und Feuchtigkeit",
    },
    video: {
      src: "/media/services/aquafacial-elegant.mp4",
      label: "Facial-Behandlung im Kosmetikstudio",
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
    highlights: ["Hautbild", "Struktur", "Persönliche Planung"],
    price: {
      label: "99 €",
      note: "Microneedling",
      detail: "gezielte Anwendung nach Hautcheck",
    },
    video: {
      src: "/media/services/microneedling.mp4",
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
    highlights: ["Natürlicher Schwung", "Ausdruck", "Gepflegter Look"],
    price: {
      label: "49 €",
      note: "inkl. Färben",
      detail: "natürlicher Schwung und Ausdruck",
    },
    video: {
      src: "/media/services/wimpern-elegant.mp4",
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
    highlights: ["Individuell", "Ruhig", "Gepflegt"],
    price: {
      label: "auf Anfrage",
      note: "individuell",
      detail: "abhängig von Hautziel und Pflegeumfang",
    },
    video: {
      src: "/media/services/hautpflege-elegant.mp4",
      label: "Ruhige Hautpflege-Behandlung",
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
    ],
    icon: Flower2,
  },
] as const;

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}
