// ─── EXTERNER ÜBUNGSPOOL v2 ───────────────────────────────────────────────────
// ~200 Übungen: Studio + Körpergewicht + Band + KH + LH
// muscle: Beine | Brust | Rücken | Schulter | Arme | Core | Ausdauer | Mobilität
// eq: LH | KH | Stange | Maschine | Band | – (Körpergewicht)
// difficulty: 1 (leicht) | 2 (mittel) | 3 (schwer)

const EXERCISE_POOL = [

  // ══ BEINE ══════════════════════════════════════════════════════════════════

  { name:"Kniebeuge", eq:"LH", muscle:"Beine", secondary:["Core","Rücken"], sets:3, reps:5, weight:0, unit:"kg", difficulty:3,
    note:"Tiefe kontrollieren, Knie über Zehen, RPE 7–8", alts:["Goblet Squat","Frontkniebeuge","Bulg. Kniebeuge","Beinpresse"] },

  { name:"Frontkniebeuge", eq:"LH", muscle:"Beine", secondary:["Core"], sets:3, reps:5, weight:0, unit:"kg", difficulty:3,
    note:"Aufrechter Oberkörper, Ellbogen hoch", alts:["Kniebeuge","Goblet Squat","Zercher Squat"] },

  { name:"Zercher Squat", eq:"LH", muscle:"Beine", secondary:["Core","Brust"], sets:3, reps:6, weight:0, unit:"kg", difficulty:3,
    note:"Stange in Ellbogenbeuge, sehr aufrechter Oberkörper", alts:["Frontkniebeuge","Goblet Squat"] },

  { name:"Goblet Squat", eq:"KH", muscle:"Beine", secondary:["Core"], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"KH vor der Brust halten, Fersen auf Boden", alts:["Kniebeuge","Körpergewicht-Squat","Sumo Squat"] },

  { name:"Sumo Squat", eq:"KH", muscle:"Beine", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Weiter Stand, Zehen nach außen, KH hängend", alts:["Goblet Squat","Körpergewicht-Squat"] },

  { name:"Körpergewicht-Squat", eq:"–", muscle:"Beine", secondary:[], sets:3, reps:20, weight:0, unit:"kg", difficulty:1,
    note:"Keine Last, Fokus auf Tiefe und Kniestabilität", alts:["Goblet Squat","Ausfallschritt","Wandsitzen"] },

  { name:"Pistol Squat", eq:"–", muscle:"Beine", secondary:["Core"], sets:3, reps:5, weight:0, unit:"kg", difficulty:3,
    note:"Einbeinige Kniebeuge, Gegengewicht vorne halten", alts:["Körpergewicht-Squat","Bulg. Kniebeuge","Schritt-Kniebeuge"] },

  { name:"Assisted Pistol Squat", eq:"–", muscle:"Beine", secondary:["Core"], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"Hand an Wand oder Tür für Balance", alts:["Pistol Squat","Körpergewicht-Squat","Bulg. Kniebeuge"] },

  { name:"Wandsitzen", eq:"–", muscle:"Beine", secondary:["Core"], sets:3, reps:45, weight:0, unit:"sek", difficulty:1,
    note:"Rücken an Wand, 90° Kniewinkel, Isometrie", alts:["Körpergewicht-Squat","Goblet Squat"] },

  { name:"Bulg. Kniebeuge", eq:"KH", muscle:"Beine", secondary:[], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"Pro Seite, hinterer Fuß erhöht, Knie zum Boden", alts:["Ausfallschritt","Lunges","Schritt-Kniebeuge"] },

  { name:"Bulg. Kniebeuge KG", eq:"–", muscle:"Beine", secondary:[], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Gleiche Bewegung ohne Zusatzlast, hinterer Fuß erhöht", alts:["Pistol Squat","Ausfallschritt","Körpergewicht-Squat"] },

  { name:"Lunges", eq:"KH", muscle:"Beine", secondary:["Core"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Pro Seite, aufrechter Oberkörper, langsam runter", alts:["Bulg. Kniebeuge","Ausfallschritt","Schritt-Kniebeuge"] },

  { name:"Ausfallschritt", eq:"–", muscle:"Beine", secondary:["Core"], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Abwechselnd vor und zurück, Balance halten", alts:["Lunges","Körpergewicht-Squat","Schritt-Kniebeuge"] },

  { name:"Schritt-Kniebeuge", eq:"KH", muscle:"Beine", secondary:["Core"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Vorwärts schreiten und absenken, dynamisch", alts:["Lunges","Ausfallschritt","Bulg. Kniebeuge"] },

  { name:"Seitwärts Lunges", eq:"–", muscle:"Beine", secondary:["Core"], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Seitlicher Ausfallschritt, Adduktoren dehnen", alts:["Ausfallschritt","Sumo Squat","Körpergewicht-Squat"] },

  { name:"Beinpresse", eq:"Maschine", muscle:"Beine", secondary:[], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Füße schulterbreit, Knie nicht durchdrücken", alts:["Kniebeuge","Goblet Squat","Hack Squat"] },

  { name:"Hack Squat", eq:"Maschine", muscle:"Beine", secondary:[], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Rücken angelehnt, enge Fußstellung = mehr Quad", alts:["Beinpresse","Kniebeuge","Frontkniebeuge"] },

  { name:"Beinstrecker", eq:"Maschine", muscle:"Beine", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Isolation Quadrizeps, kontrolliert senken", alts:["Kniebeuge","Goblet Squat"] },

  { name:"Beinbeuger liegend", eq:"Maschine", muscle:"Beine", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Isolation Hamstrings, Hüfte flach auf Bank", alts:["Romanian Deadlift","Nordic Curl","Hip Thrust"] },

  { name:"Beinbeuger sitzend", eq:"Maschine", muscle:"Beine", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Sitzende Variante, mehr Range of Motion", alts:["Beinbeuger liegend","Nordic Curl","Romanian Deadlift"] },

  { name:"Romanian Deadlift", eq:"LH", muscle:"Beine", secondary:["Rücken"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Slow eccentric 4s, Hüftscharniere, Stange nah", alts:["KH Romanian Deadlift","Hip Thrust","Nordic Curl"] },

  { name:"KH Romanian Deadlift", eq:"KH", muscle:"Beine", secondary:["Rücken"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Gleiche Mechanik wie LH, pro Hand oder beide", alts:["Romanian Deadlift","Hip Thrust","Rückenstrecker"] },

  { name:"Einbeiniges Romanian Deadlift", eq:"KH", muscle:"Beine", secondary:["Core","Rücken"], sets:3, reps:8, weight:0, unit:"kg", difficulty:3,
    note:"Pro Seite, Standbein leicht gebeugt, Balance", alts:["Romanian Deadlift","KH Romanian Deadlift","Hip Thrust"] },

  { name:"Einbeiniges RDL KG", eq:"–", muscle:"Beine", secondary:["Core"], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"Pro Seite ohne Last, Balance und Koordination", alts:["Einbeiniges Romanian Deadlift","Glute Bridge einbeinig"] },

  { name:"Nordic Curl", eq:"–", muscle:"Beine", secondary:[], sets:3, reps:5, weight:0, unit:"kg", difficulty:3,
    note:"Füße fixiert, sehr langsam nach vorne sinken", alts:["Beinbeuger liegend","Romanian Deadlift"] },

  { name:"Hip Thrust", eq:"KH", muscle:"Beine", secondary:["Core"], sets:3, reps:12, weight:0, unit:"kg", difficulty:2,
    note:"Schultern auf Bank, KH auf Hüfte, max Kontraktion", alts:["Romanian Deadlift","Glute Bridge","Rückenstrecker"] },

  { name:"Hip Thrust LH", eq:"LH", muscle:"Beine", secondary:["Core"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Langhantel auf Hüfte, maximale Gluteusaktivierung", alts:["Hip Thrust","Romanian Deadlift","Glute Bridge"] },

  { name:"Glute Bridge", eq:"–", muscle:"Beine", secondary:["Core"], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Auf dem Boden, Füße hüftbreit, Gesäß anspannen", alts:["Hip Thrust","Romanian Deadlift"] },

  { name:"Glute Bridge einbeinig", eq:"–", muscle:"Beine", secondary:["Core"], sets:3, reps:12, weight:0, unit:"kg", difficulty:2,
    note:"Ein Bein gestreckt, Hüfte gleichmäßig hoch", alts:["Glute Bridge","Hip Thrust","Einbeiniges RDL KG"] },

  { name:"Donkey Kicks", eq:"–", muscle:"Beine", secondary:["Core"], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Vierfüßler, Bein nach hinten oben strecken, Glute", alts:["Glute Bridge","Hip Thrust","Fire Hydrant"] },

  { name:"Fire Hydrant", eq:"–", muscle:"Beine", secondary:["Core"], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Vierfüßler, Bein seitlich heben, Abduktoren", alts:["Donkey Kicks","Seitwärts Lunges","Glute Bridge"] },

  { name:"Wadenheben", eq:"KH", muscle:"Beine", secondary:[], sets:4, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Volle ROM, langsam senken, Zehenstand", alts:["Einbeiniges Wadenheben","Wadenheben Maschine"] },

  { name:"Wadenheben Maschine", eq:"Maschine", muscle:"Beine", secondary:[], sets:4, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Stehend an Maschine, volle ROM, langsam", alts:["Wadenheben","Einbeiniges Wadenheben"] },

  { name:"Einbeiniges Wadenheben", eq:"–", muscle:"Beine", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:2,
    note:"Pro Seite, Treppenstufe für volle ROM", alts:["Wadenheben"] },

  { name:"Seated Calf Raise", eq:"Maschine", muscle:"Beine", secondary:[], sets:4, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Sitzend, Soleus betont, langsames Tempo", alts:["Wadenheben","Einbeiniges Wadenheben"] },

  { name:"Tibialis Raise", eq:"–", muscle:"Beine", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Schienbein, Rücken an Wand, Zehen heben", alts:["Wadenheben","Einbeiniges Wadenheben"] },

  // ══ RÜCKEN ═════════════════════════════════════════════════════════════════

  { name:"Kreuzheben", eq:"LH", muscle:"Rücken", secondary:["Beine","Core"], sets:3, reps:5, weight:0, unit:"kg", difficulty:3,
    note:"Stangennah, flacher Rücken, Luft holen vor dem Zug", alts:["Sumo Kreuzheben","Romanian Deadlift","Kreuzheben KH"] },

  { name:"Sumo Kreuzheben", eq:"LH", muscle:"Rücken", secondary:["Beine","Core"], sets:3, reps:5, weight:0, unit:"kg", difficulty:3,
    note:"Weiter Stand, Zehen weit außen, aufrechter Oberkörper", alts:["Kreuzheben","Romanian Deadlift"] },

  { name:"Kreuzheben KH", eq:"KH", muscle:"Rücken", secondary:["Beine"], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"KH seitlich oder vor dem Körper, gleiche Mechanik", alts:["Kreuzheben","Romanian Deadlift","KH Romanian Deadlift"] },

  { name:"Trap Bar Deadlift", eq:"LH", muscle:"Rücken", secondary:["Beine","Core"], sets:3, reps:5, weight:0, unit:"kg", difficulty:2,
    note:"Neutralgriff, aufrechter als konventionell, knieschonend", alts:["Kreuzheben","Beinpresse"] },

  { name:"Klimmzüge (weit)", eq:"Stange", muscle:"Rücken", secondary:["Arme"], sets:3, reps:6, weight:0, unit:"kg", difficulty:3,
    note:"Schulterbreit plus, Ellbogen zur Hüfte ziehen", alts:["Klimmzüge (eng)","Klimmzüge (Untergriff)","Latzug"] },

  { name:"Klimmzüge (eng)", eq:"Stange", muscle:"Rücken", secondary:["Arme"], sets:3, reps:6, weight:0, unit:"kg", difficulty:3,
    note:"Enge Griffweite, volle ROM, Schulterblätter zusammen", alts:["Klimmzüge (weit)","Klimmzüge (Untergriff)","Latzug"] },

  { name:"Klimmzüge (Untergriff)", eq:"Stange", muscle:"Rücken", secondary:["Arme"], sets:3, reps:6, weight:0, unit:"kg", difficulty:2,
    note:"Supinierter Griff, Bizeps stärker involviert", alts:["Klimmzüge (eng)","Klimmzüge (weit)","Latzug"] },

  { name:"Klimmzüge Neutral", eq:"Stange", muscle:"Rücken", secondary:["Arme"], sets:3, reps:6, weight:0, unit:"kg", difficulty:2,
    note:"Paralleler Griff, gelenkschonend, volle ROM", alts:["Klimmzüge (eng)","Klimmzüge (Untergriff)"] },

  { name:"Assistierte Klimmzüge", eq:"Band", muscle:"Rücken", secondary:["Arme"], sets:3, reps:8, weight:0, unit:"kg", difficulty:1,
    note:"Band um Knie oder Fuß, reduziert Körpergewicht", alts:["Negative Klimmzüge","Latzug"] },

  { name:"Negative Klimmzüge", eq:"Stange", muscle:"Rücken", secondary:["Arme"], sets:3, reps:5, weight:0, unit:"kg", difficulty:2,
    note:"Oben starten, 5 Sek absenken, Kraft aufbauen", alts:["Assistierte Klimmzüge","Latzug"] },

  { name:"Inverted Row", eq:"Stange", muscle:"Rücken", secondary:["Arme","Core"], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Unter Stange hängen, Brust zur Stange ziehen, Körper gerade", alts:["Klimmzüge (weit)","Einarm Row","Latzug"] },

  { name:"Inverted Row Füße erhöht", eq:"Stange", muscle:"Rücken", secondary:["Arme","Core"], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"Füße auf Bank, schwieriger als Standard Inverted Row", alts:["Inverted Row","Klimmzüge (weit)"] },

  { name:"Latzug", eq:"Maschine", muscle:"Rücken", secondary:["Arme"], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Breiter Griff, Brust raus, Stange zur Brust", alts:["Klimmzüge (weit)","Einarm Latzug","Latzug Untergriff"] },

  { name:"Latzug Untergriff", eq:"Maschine", muscle:"Rücken", secondary:["Arme"], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Supinierter Griff, mehr Bizeps, zur Brust ziehen", alts:["Klimmzüge (Untergriff)","Latzug","Einarm Latzug"] },

  { name:"Einarm Latzug", eq:"Maschine", muscle:"Rücken", secondary:["Core"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Pro Seite, Rotation am Ende, voller Stretch", alts:["Latzug","Einarm Row"] },

  { name:"Pendlay Row", eq:"LH", muscle:"Rücken", secondary:["Arme"], sets:3, reps:5, weight:0, unit:"kg", difficulty:3,
    note:"Horizontaler Rücken, Stange liegt ab, explosiv hoch", alts:["Langhantelrudern","Einarm Row","T-Bar Row"] },

  { name:"Langhantelrudern", eq:"LH", muscle:"Rücken", secondary:["Arme"], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"Hüfte gebeugt, Stange zum Bauch, Ellbogen zurück", alts:["Pendlay Row","Einarm Row","T-Bar Row"] },

  { name:"Einarm Row", eq:"KH", muscle:"Rücken", secondary:["Arme"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Pro Seite, Knie auf Bank, KH zur Hüfte ziehen", alts:["Langhantelrudern","Pendlay Row","Sitzend Rudern"] },

  { name:"T-Bar Row", eq:"LH", muscle:"Rücken", secondary:["Arme"], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"Stange in Ecke, V-Griff oder breiter Griff", alts:["Langhantelrudern","Pendlay Row","Einarm Row"] },

  { name:"Sitzend Rudern", eq:"Maschine", muscle:"Rücken", secondary:["Arme"], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Brust an Pad, Griff zur Brust, Ellbogen zurück", alts:["Einarm Row","Langhantelrudern","Latzug"] },

  { name:"Kabelrudern", eq:"Maschine", muscle:"Rücken", secondary:["Arme"], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Sitzend am Kabel, V-Griff zur Brust, Schulterblätter", alts:["Sitzend Rudern","Einarm Row"] },

  { name:"Rückenstrecker", eq:"–", muscle:"Rücken", secondary:["Beine"], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Kontrolliert, keine Überstreckung, Körper gerade", alts:["Superman","Romanian Deadlift"] },

  { name:"Rückenstrecker KH", eq:"KH", muscle:"Rücken", secondary:["Beine"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"KH an Brust oder gestreckt, mehr Widerstand", alts:["Rückenstrecker","Superman"] },

  { name:"Superman", eq:"–", muscle:"Rücken", secondary:["Core"], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Bauchlage, Arme und Beine gleichzeitig heben", alts:["Rückenstrecker","Vogel-Hund"] },

  { name:"Superman Hold", eq:"–", muscle:"Rücken", secondary:["Core"], sets:3, reps:20, weight:0, unit:"sek", difficulty:1,
    note:"Position halten, isometrische Rückenarbeit", alts:["Superman","Rückenstrecker"] },

  { name:"Vogel-Hund", eq:"–", muscle:"Rücken", secondary:["Core"], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Vierfüßler, gegenüberliegende Arm-Bein-Streckung", alts:["Superman","Rückenstrecker","Plank"] },

  { name:"Good Morning", eq:"LH", muscle:"Rücken", secondary:["Beine"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Stange auf Schulter, Hüfte nach hinten schieben, Rücken gerade", alts:["Romanian Deadlift","Rückenstrecker"] },

  { name:"Face Pulls", eq:"Band", muscle:"Rücken", secondary:["Schulter"], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Schulterblätter zusammen, Ellbogen hoch, Rotator Cuff", alts:["Seitheben","Band Pull-Apart"] },

  { name:"Band Pull-Apart", eq:"Band", muscle:"Rücken", secondary:["Schulter"], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Band vor der Brust, auseinanderziehen, Schulterblätter", alts:["Face Pulls","Seitheben"] },

  { name:"Kabelface Pull", eq:"Maschine", muscle:"Rücken", secondary:["Schulter"], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Kabel auf Augenhöhe, Seil zum Gesicht, Außenrotation", alts:["Face Pulls","Band Pull-Apart"] },

  // ══ BRUST ══════════════════════════════════════════════════════════════════

  { name:"Bankdrücken", eq:"LH", muscle:"Brust", secondary:["Schulter","Arme"], sets:3, reps:5, weight:0, unit:"kg", difficulty:3,
    note:"Schulterblätter zusammenziehen, Pause 1s auf Brust", alts:["KH Bankdrücken","Schrägbankdrücken","Liegestütze"] },

  { name:"Schrägbankdrücken", eq:"KH", muscle:"Brust", secondary:["Schulter","Arme"], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"30–45° Winkel, obere Brust, Stretch am Tiefpunkt", alts:["Bankdrücken","KH Bankdrücken","Liegestütze mit Fußerhöhung"] },

  { name:"Schrägbankdrücken LH", eq:"LH", muscle:"Brust", secondary:["Schulter","Arme"], sets:3, reps:6, weight:0, unit:"kg", difficulty:3,
    note:"Obere Brust betont, 30° Neigung optimal", alts:["Schrägbankdrücken","KH Bankdrücken"] },

  { name:"KH Bankdrücken", eq:"KH", muscle:"Brust", secondary:["Schulter","Arme"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Neutrale oder Pronationsgriff, voller Stretch", alts:["Bankdrücken","Schrägbankdrücken","Liegestütze"] },

  { name:"Decline Bankdrücken", eq:"LH", muscle:"Brust", secondary:["Arme"], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"Negative Neigung, untere Brust, Kopf tiefer als Hüfte", alts:["Dips","Bankdrücken"] },

  { name:"Decline Bankdrücken KH", eq:"KH", muscle:"Brust", secondary:["Arme"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"KH-Variante, untere Brust, freiere Bewegungsbahn", alts:["Decline Bankdrücken","Dips"] },

  { name:"KH Flyes", eq:"KH", muscle:"Brust", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:2,
    note:"Weiter Bogen, Stretch am Tiefpunkt, keine gesperrten Ellbogen", alts:["Kabelflyes","Pec Deck","Liegestütze"] },

  { name:"Schräge KH Flyes", eq:"KH", muscle:"Brust", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:2,
    note:"Schrägbank, obere Brust, Stretch am Tiefpunkt", alts:["KH Flyes","Kabelflyes"] },

  { name:"Kabelflyes", eq:"Maschine", muscle:"Brust", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Konstante Spannung, Hände treffen sich vor der Brust", alts:["KH Flyes","Pec Deck"] },

  { name:"Kabelflyes hoch-tief", eq:"Maschine", muscle:"Brust", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Kabel oben: untere Brust; Kabel unten: obere Brust", alts:["Kabelflyes","KH Flyes"] },

  { name:"Pec Deck", eq:"Maschine", muscle:"Brust", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Rücken an Polster, Arme in Halbkreis zusammenbringen", alts:["KH Flyes","Kabelflyes"] },

  { name:"Liegestütze", eq:"–", muscle:"Brust", secondary:["Schulter","Arme"], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Körper gerade wie Brett, Ellbogen 45° zum Körper", alts:["KH Bankdrücken","Bankdrücken","Dips"] },

  { name:"Liegestütze weit", eq:"–", muscle:"Brust", secondary:["Schulter"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Breiter Griff, mehr Brust weniger Trizeps", alts:["Liegestütze","Liegestütze mit Fußerhöhung"] },

  { name:"Liegestütze eng", eq:"–", muscle:"Brust", secondary:["Arme"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Enger Griff, mehr Trizeps, Ellbogen nah am Körper", alts:["Liegestütze","Dips eng"] },

  { name:"Liegestütze mit Fußerhöhung", eq:"–", muscle:"Brust", secondary:["Schulter"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Füße erhöht = obere Brust, wie Schrägbank", alts:["Schrägbankdrücken","Liegestütze"] },

  { name:"Liegestütze Handerhöhung", eq:"–", muscle:"Brust", secondary:["Arme"], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Hände erhöht = untere Brust, leichter als Standard", alts:["Liegestütze","Dips"] },

  { name:"Archer Push-up", eq:"–", muscle:"Brust", secondary:["Arme"], sets:3, reps:6, weight:0, unit:"kg", difficulty:3,
    note:"Einarmig-ähnlich, Arm ausgestreckt, Bogenbewegung", alts:["Liegestütze weit","Pistol Squat"] },

  { name:"Explosive Liegestütze", eq:"–", muscle:"Brust", secondary:["Arme","Core"], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"Explosiv nach oben, Hände vom Boden abheben", alts:["Liegestütze","Burpees"] },

  { name:"Dips", eq:"Stange", muscle:"Brust", secondary:["Arme","Schulter"], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"Leicht vorgebeugt = Brustfokus, tief genug absenken", alts:["Liegestütze","Bankdrücken","Decline Bankdrücken"] },

  { name:"Dips am Stuhl", eq:"–", muscle:"Brust", secondary:["Arme"], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Hände auf Stuhl hinter dem Körper, Beine gestreckt", alts:["Dips","Dips eng","Liegestütze"] },

  // ══ SCHULTER ═══════════════════════════════════════════════════════════════

  { name:"Overhead Press", eq:"LH", muscle:"Schulter", secondary:["Arme","Core"], sets:3, reps:6, weight:0, unit:"kg", difficulty:3,
    note:"Kern anspannen, Stange über Kopf, Nacken neutral", alts:["Schulterdrücken KH","Arnold Press","Push Press"] },

  { name:"Schulterdrücken KH", eq:"KH", muscle:"Schulter", secondary:["Arme"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Stehend oder sitzend, pro Hand, kontrolliert", alts:["Overhead Press","Arnold Press","Einarm Schulterdrücken"] },

  { name:"Arnold Press", eq:"KH", muscle:"Schulter", secondary:["Arme"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Volle Rotation von innen nach außen, pro Hand", alts:["Schulterdrücken KH","Overhead Press","Seitheben"] },

  { name:"Push Press", eq:"LH", muscle:"Schulter", secondary:["Beine","Core"], sets:3, reps:5, weight:0, unit:"kg", difficulty:3,
    note:"Leichter Knieschub für Impuls, explosiv", alts:["Overhead Press","Schulterdrücken KH"] },

  { name:"Einarm Schulterdrücken", eq:"KH", muscle:"Schulter", secondary:["Core"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Pro Seite stehend, mehr Core-Stabilität nötig", alts:["Schulterdrücken KH","Arnold Press"] },

  { name:"Pike Push-up", eq:"–", muscle:"Schulter", secondary:["Arme"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Umgekehrtes V, Kopf zum Boden, Schultern betont", alts:["Handstand Push-up","Liegestütze","Schulterdrücken KH"] },

  { name:"Handstand Push-up", eq:"–", muscle:"Schulter", secondary:["Arme","Core"], sets:3, reps:5, weight:0, unit:"kg", difficulty:3,
    note:"An Wand, kopfüber drücken, volle Schulterarbeit", alts:["Pike Push-up","Overhead Press"] },

  { name:"Handstand Push-up Box", eq:"–", muscle:"Schulter", secondary:["Arme"], sets:3, reps:6, weight:0, unit:"kg", difficulty:3,
    note:"Füße auf Box, Hände auf Boden, erleichterte Variante", alts:["Handstand Push-up","Pike Push-up"] },

  { name:"Seitheben", eq:"KH", muscle:"Schulter", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Leichtes Gewicht, Daumen leicht runter, Kontrolle", alts:["Kabelseitheben","Seitheben Band","Face Pulls"] },

  { name:"Kabelseitheben", eq:"Maschine", muscle:"Schulter", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Konstante Spannung im Gegensatz zu KH-Variante", alts:["Seitheben","Seitheben Band"] },

  { name:"Seitheben Band", eq:"Band", muscle:"Schulter", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Band unter Fuß, konstante Zugspannung", alts:["Seitheben","Kabelseitheben"] },

  { name:"Vorgebeugtes Seitheben", eq:"KH", muscle:"Schulter", secondary:["Rücken"], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Hüfte gebeugt, hintere Schulter, Ellbogen weich", alts:["Face Pulls","Band Pull-Apart"] },

  { name:"Vorgebeugtes Seitheben Band", eq:"Band", muscle:"Schulter", secondary:["Rücken"], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Mit Band, konstante Spannung auf hintere Schulter", alts:["Vorgebeugtes Seitheben","Face Pulls"] },

  { name:"Shrugs", eq:"KH", muscle:"Schulter", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Schultern heben und kurz halten, Trapez", alts:["Shrugs LH","Face Pulls"] },

  { name:"Shrugs LH", eq:"LH", muscle:"Schulter", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Schwerer Widerstand, Trapez Isolation", alts:["Shrugs","Band Pull-Apart"] },

  { name:"Schulter Außenrotation", eq:"Band", muscle:"Schulter", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Ellbogen fixiert, Band nach außen drehen, Rotator Cuff", alts:["Face Pulls","Band Pull-Apart"] },

  { name:"YTW Raises", eq:"–", muscle:"Schulter", secondary:["Rücken"], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Bauchlage: Y T W Positionen, Schultergesundheit", alts:["Superman","Vogel-Hund","Face Pulls"] },

  // ══ ARME ═══════════════════════════════════════════════════════════════════

  { name:"Curl", eq:"KH", muscle:"Arme", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Supination oben, Ellbogen fixiert am Körper", alts:["Hammercurl","Konzentrationscurl","Schrägbankscurl"] },

  { name:"Hammercurl", eq:"KH", muscle:"Arme", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Neutralgriff, Unterarm und Bizeps langer Kopf", alts:["Curl","Zottmancurl"] },

  { name:"Konzentrationscurl", eq:"KH", muscle:"Arme", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Ellbogen auf Oberschenkel, volle Isolation", alts:["Curl","Schrägbankscurl"] },

  { name:"Schrägbankscurl", eq:"KH", muscle:"Arme", secondary:[], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Rücken an Schrägbank, langer Kopf betont", alts:["Curl","Konzentrationscurl"] },

  { name:"Kabelbizepscurl", eq:"Maschine", muscle:"Arme", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Konstante Spannung, SZ-Stange oder gerade Stange", alts:["Curl","Hammercurl"] },

  { name:"LH Curl", eq:"LH", muscle:"Arme", secondary:[], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Beide Arme gleichzeitig, stabiler als KH-Variante", alts:["Curl","Kabelbizepscurl"] },

  { name:"Zottmancurl", eq:"KH", muscle:"Arme", secondary:[], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Hoch supiniert, runter proniert — Bizeps + Brachialis", alts:["Hammercurl","Curl"] },

  { name:"Chin-up Curl", eq:"Stange", muscle:"Arme", secondary:["Rücken"], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"Untergriff Klimmzug, Bizeps stark involviert", alts:["Curl","Klimmzüge (Untergriff)"] },

  { name:"Towel Curl", eq:"–", muscle:"Arme", secondary:[], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Handtuch um festes Objekt, isometrischer Zug", alts:["Curl","Chin-up Curl"] },

  { name:"Trizeps Overhead", eq:"KH", muscle:"Arme", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:2,
    note:"Langer Kopf, KH über Kopf, Ellbogen fixiert", alts:["Trizeps Kickback","Schädeldrücken","Kabeltrizeps"] },

  { name:"Trizeps Overhead LH", eq:"LH", muscle:"Arme", secondary:[], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Beidhändig, SZ-Stange oder gerade Stange", alts:["Trizeps Overhead","Schädeldrücken"] },

  { name:"Trizeps Kickback", eq:"KH", muscle:"Arme", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Ellbogen am Körper fixiert, volle Extension", alts:["Trizeps Overhead","Kabeltrizeps"] },

  { name:"Schädeldrücken", eq:"LH", muscle:"Arme", secondary:[], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Liegend, SZ-Stange zur Stirn, Ellbogen fix", alts:["Trizeps Overhead","Kabeltrizeps","Dips"] },

  { name:"Kabeltrizeps", eq:"Maschine", muscle:"Arme", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Seil oder gerade Stange, Ellbogen an Körper", alts:["Trizeps Kickback","Trizeps Overhead"] },

  { name:"Dips eng", eq:"Stange", muscle:"Arme", secondary:["Schulter"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Enger Griff, aufrecht = mehr Trizeps", alts:["Kabeltrizeps","Schädeldrücken","Trizeps Overhead"] },

  { name:"Dips am Stuhl eng", eq:"–", muscle:"Arme", secondary:["Schulter"], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Hände eng hinter dem Körper, Trizeps-Fokus", alts:["Dips eng","Trizeps Kickback","Liegestütze eng"] },

  { name:"Diamond Push-up", eq:"–", muscle:"Arme", secondary:["Brust"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Hände zusammen unter Brust, Trizeps stark betont", alts:["Liegestütze eng","Dips am Stuhl eng","Kabeltrizeps"] },

  { name:"Trizeps Wanddrücken", eq:"–", muscle:"Arme", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Hände an Wand, Ellbogen beugen und strecken, Trizeps", alts:["Diamond Push-up","Dips am Stuhl eng"] },

  { name:"Unterarmcurl", eq:"LH", muscle:"Arme", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Handgelenk heben, Unterarme auf Bank", alts:["Reverse Curl","Zottmancurl"] },

  { name:"Reverse Curl", eq:"LH", muscle:"Arme", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:1,
    note:"Pronierter Griff, Unterarm und Brachialis", alts:["Unterarmcurl","Hammercurl"] },

  { name:"Griffkraft Hängen", eq:"Stange", muscle:"Arme", secondary:["Rücken"], sets:3, reps:30, weight:0, unit:"sek", difficulty:1,
    note:"An der Stange hängen, Griffkraft aufbauen", alts:["Klimmzüge (weit)","Inverted Row"] },

  // ══ CORE ═══════════════════════════════════════════════════════════════════

  { name:"Plank", eq:"–", muscle:"Core", secondary:["Schulter"], sets:3, reps:40, weight:0, unit:"sek", difficulty:1,
    note:"Gerade Linie, Kern anspannen, Hüfte nicht hängen", alts:["Seitstütz","RKC Plank","Plank mit Arm heben"] },

  { name:"RKC Plank", eq:"–", muscle:"Core", secondary:["Schulter"], sets:3, reps:20, weight:0, unit:"sek", difficulty:2,
    note:"Fäuste statt Unterarme, maximale Körperspannung", alts:["Plank","Plank mit Arm heben"] },

  { name:"Seitstütz", eq:"–", muscle:"Core", secondary:["Schulter"], sets:3, reps:30, weight:0, unit:"sek", difficulty:2,
    note:"Pro Seite, Hüfte hoch, Körper gerade", alts:["Plank","Seitstütz mit Beinerhöhung"] },

  { name:"Seitstütz mit Beinerhöhung", eq:"–", muscle:"Core", secondary:["Schulter","Beine"], sets:3, reps:10, weight:0, unit:"kg", difficulty:3,
    note:"Seitstütz + oberes Bein heben, mehr Abduktoren", alts:["Seitstütz","Plank"] },

  { name:"Plank mit Arm heben", eq:"–", muscle:"Core", secondary:["Schulter"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Abwechselnd Arm strecken, Hüfte stabil halten", alts:["Plank","Vogel-Hund","RKC Plank"] },

  { name:"Plank Shoulder Tap", eq:"–", muscle:"Core", secondary:["Schulter"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Schulter antippen ohne Hüftrotation, Stabilität", alts:["Plank mit Arm heben","Plank"] },

  { name:"Plank zu Liegestütz", eq:"–", muscle:"Core", secondary:["Schulter","Brust"], sets:3, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"Von Unterarm auf Handfläche wechseln, dynamisch", alts:["Plank","Liegestütze"] },

  { name:"Hanging Leg Raise", eq:"Stange", muscle:"Core", secondary:[], sets:3, reps:10, weight:0, unit:"kg", difficulty:3,
    note:"Gestreckte Beine heben, Becken kippen am Ende", alts:["Hängendes Knieheben","L-Sit","Toes to Bar"] },

  { name:"Hängendes Knieheben", eq:"Stange", muscle:"Core", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:2,
    note:"Becken kippen für maximale Aktivierung", alts:["Hanging Leg Raise","Knieheben liegend"] },

  { name:"Toes to Bar", eq:"Stange", muscle:"Core", secondary:["Rücken"], sets:3, reps:8, weight:0, unit:"kg", difficulty:3,
    note:"Gestreckte Beine bis zur Stange, Schulterblätter aktiv", alts:["Hanging Leg Raise","Hängendes Knieheben"] },

  { name:"L-Sit", eq:"Stange", muscle:"Core", secondary:["Arme"], sets:3, reps:10, weight:0, unit:"sek", difficulty:3,
    note:"Hängend oder auf Stangen, Beine gestreckt horizontal", alts:["Hanging Leg Raise","Hängendes Knieheben"] },

  { name:"Knieheben liegend", eq:"–", muscle:"Core", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Rücken auf Boden, Knie zur Brust ziehen", alts:["Hängendes Knieheben","Crunch"] },

  { name:"Beinsenken", eq:"–", muscle:"Core", secondary:[], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Beine gestreckt heben und langsam senken, unterer Bauch", alts:["Knieheben liegend","Hanging Leg Raise"] },

  { name:"Crunch", eq:"–", muscle:"Core", secondary:[], sets:3, reps:20, weight:0, unit:"kg", difficulty:1,
    note:"Schulterblätter heben, kurze Bewegung, Nacken entspannt", alts:["Sit-up","Fahrrad-Crunch"] },

  { name:"Reverse Crunch", eq:"–", muscle:"Core", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Hüfte vom Boden heben, Becken kippen", alts:["Crunch","Knieheben liegend","Beinsenken"] },

  { name:"Sit-up", eq:"–", muscle:"Core", secondary:[], sets:3, reps:15, weight:0, unit:"kg", difficulty:1,
    note:"Volle Bewegung, Schultern zum Knie, Füße fixiert", alts:["Crunch","Fahrrad-Crunch"] },

  { name:"Fahrrad-Crunch", eq:"–", muscle:"Core", secondary:[], sets:3, reps:20, weight:0, unit:"kg", difficulty:1,
    note:"Ellbogen zum gegenüberliegenden Knie, langsam", alts:["Crunch","Russischer Twist"] },

  { name:"Russischer Twist", eq:"KH", muscle:"Core", secondary:[], sets:3, reps:20, weight:0, unit:"kg", difficulty:2,
    note:"Oberkörper leicht zurück, Rotation, Füße heben optional", alts:["Fahrrad-Crunch","Pallof Press"] },

  { name:"Russischer Twist KG", eq:"–", muscle:"Core", secondary:[], sets:3, reps:20, weight:0, unit:"kg", difficulty:1,
    note:"Ohne Last, Arme gestreckt oder Hände zusammen", alts:["Fahrrad-Crunch","Crunch"] },

  { name:"Pallof Press", eq:"Band", muscle:"Core", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:2,
    note:"Pro Seite, Anti-Rotation, Spannung halten", alts:["Russischer Twist","Plank","Seitstütz"] },

  { name:"Woodchopper", eq:"KH", muscle:"Core", secondary:["Schulter"], sets:3, reps:12, weight:0, unit:"kg", difficulty:2,
    note:"Diagonal von oben nach unten, Rotation aus Core", alts:["Russischer Twist","Pallof Press"] },

  { name:"Ab Wheel Rollout", eq:"–", muscle:"Core", secondary:["Schulter","Rücken"], sets:3, reps:8, weight:0, unit:"kg", difficulty:3,
    note:"Knien oder stehend, langsam ausrollen, Kern maximal", alts:["Plank","RKC Plank","Hanging Leg Raise"] },

  { name:"Dragon Flag", eq:"–", muscle:"Core", secondary:["Rücken"], sets:3, reps:5, weight:0, unit:"kg", difficulty:3,
    note:"Bank greifen, gestreckter Körper absenken — fortgeschritten", alts:["Ab Wheel Rollout","Hanging Leg Raise"] },

  { name:"Dead Bug", eq:"–", muscle:"Core", secondary:["Rücken"], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Rücken auf Boden, gegenüberliegende Arm-Bein-Streckung", alts:["Vogel-Hund","Plank","Knieheben liegend"] },

  { name:"Mountain Climbers", eq:"–", muscle:"Core", secondary:["Schulter","Ausdauer"], sets:3, reps:20, weight:0, unit:"kg", difficulty:2,
    note:"Plank-Position, Knie abwechselnd zur Brust, schnell", alts:["Burpees","Plank","Knieheben liegend"] },

  { name:"V-Up", eq:"–", muscle:"Core", secondary:[], sets:3, reps:12, weight:0, unit:"kg", difficulty:2,
    note:"Arme und Beine gleichzeitig heben, V-Form bilden", alts:["Sit-up","Beinsenken","Crunch"] },

  // ══ AUSDAUER ═══════════════════════════════════════════════════════════════

  { name:"Laufen", eq:"–", muscle:"Ausdauer", secondary:["Beine"], sets:1, reps:1, weight:0, unit:"–", difficulty:2,
    note:"Distanz oder Zeit eintragen, aerob", alts:["Radfahren","Seilspringen","Rudern Ergometer"] },

  { name:"Intervall Laufen", eq:"–", muscle:"Ausdauer", secondary:["Beine"], sets:8, reps:1, weight:0, unit:"–", difficulty:3,
    note:"30 Sek sprint / 30 Sek gehen, HIIT", alts:["Laufen","Seilspringen","Burpees"] },

  { name:"Radfahren", eq:"–", muscle:"Ausdauer", secondary:["Beine"], sets:1, reps:1, weight:0, unit:"–", difficulty:1,
    note:"Distanz oder Zeit eintragen, gelenkschonend", alts:["Laufen","Ergometer","Rudern Ergometer"] },

  { name:"Seilspringen", eq:"–", muscle:"Ausdauer", secondary:["Beine","Core"], sets:5, reps:1, weight:0, unit:"–", difficulty:2,
    note:"Sets = Minuten oder Runden, hohe Intensität", alts:["Laufen","Burpees","Radfahren"] },

  { name:"Burpees", eq:"–", muscle:"Ausdauer", secondary:["Brust","Core","Beine"], sets:3, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Voller Körpereinsatz, Liegestütz + Sprung", alts:["Seilspringen","Mountain Climbers","Laufen"] },

  { name:"Burpees ohne Sprung", eq:"–", muscle:"Ausdauer", secondary:["Brust","Core","Beine"], sets:3, reps:10, weight:0, unit:"kg", difficulty:1,
    note:"Schonende Variante, ohne Sprung am Ende", alts:["Burpees","Mountain Climbers"] },

  { name:"Jump Squats", eq:"–", muscle:"Ausdauer", secondary:["Beine"], sets:4, reps:10, weight:0, unit:"kg", difficulty:2,
    note:"Sprung aus tiefer Kniebeuge, explosiv", alts:["Burpees","Seilspringen","Körpergewicht-Squat"] },

  { name:"Box Jumps", eq:"–", muscle:"Ausdauer", secondary:["Beine"], sets:4, reps:8, weight:0, unit:"kg", difficulty:2,
    note:"Auf Box springen, sanft landen, kontrolliert runter", alts:["Jump Squats","Burpees"] },

  { name:"Rudern Ergometer", eq:"Maschine", muscle:"Ausdauer", secondary:["Rücken","Beine"], sets:1, reps:1, weight:0, unit:"–", difficulty:2,
    note:"Zeit oder Meter eintragen, Ganzkörper-Ausdauer", alts:["Laufen","Radfahren","Seilspringen"] },

  { name:"Ergometer", eq:"Maschine", muscle:"Ausdauer", secondary:["Beine"], sets:1, reps:1, weight:0, unit:"–", difficulty:1,
    note:"Rad-Ergometer, Watt oder Zeit eintragen", alts:["Radfahren","Rudern Ergometer","Laufen"] },

  { name:"Laufband Incline", eq:"Maschine", muscle:"Ausdauer", secondary:["Beine"], sets:1, reps:1, weight:0, unit:"–", difficulty:2,
    note:"Steigung 8–15%, zügiges Gehen, Kalorien und Herz", alts:["Laufen","Ergometer"] },

  { name:"High Knees", eq:"–", muscle:"Ausdauer", secondary:["Core","Beine"], sets:3, reps:30, weight:0, unit:"sek", difficulty:1,
    note:"Knie hoch zur Hüfte, schnell, auf der Stelle laufen", alts:["Mountain Climbers","Burpees","Jump Squats"] },

  { name:"Jumping Jacks", eq:"–", muscle:"Ausdauer", secondary:["Schulter"], sets:3, reps:30, weight:0, unit:"sek", difficulty:1,
    note:"Klassisch, Aufwärmen oder Kondition", alts:["High Knees","Seilspringen"] },

  // ══ MOBILITÄT ══════════════════════════════════════════════════════════════

  { name:"Mobilität Hüfte", eq:"–", muscle:"Mobilität", secondary:["Beine"], sets:1, reps:1, weight:0, unit:"–", difficulty:1,
    note:"90/90 Position, Piriformis, Hip Flexor — 10–15 Min", alts:["Mobilität Thorax","Kniebeuge Mobilität"] },

  { name:"Mobilität Thorax", eq:"–", muscle:"Mobilität", secondary:["Rücken"], sets:1, reps:1, weight:0, unit:"–", difficulty:1,
    note:"Foam Roller T-Wirbel, Rotation, Öffnung — 10 Min", alts:["Mobilität Hüfte","Cat-Cow"] },

  { name:"Kniebeuge Mobilität", eq:"–", muscle:"Mobilität", secondary:["Beine","Core"], sets:1, reps:10, weight:0, unit:"–", difficulty:1,
    note:"Overhead Squat mit Stab, Knöchelmobilität — 5 Min", alts:["Mobilität Hüfte","Körpergewicht-Squat"] },

  { name:"Cat-Cow", eq:"–", muscle:"Mobilität", secondary:["Rücken","Core"], sets:3, reps:10, weight:0, unit:"–", difficulty:1,
    note:"Vierfüßler, Wirbelsäule mobilisieren, mit Atmung", alts:["Mobilität Thorax","Vogel-Hund"] },

  { name:"World's Greatest Stretch", eq:"–", muscle:"Mobilität", secondary:["Beine","Rücken"], sets:3, reps:5, weight:0, unit:"–", difficulty:1,
    note:"Ausfallschritt + Rotation + Hüftstreckung, pro Seite", alts:["Mobilität Hüfte","Kniebeuge Mobilität"] },

  { name:"Hip Flexor Stretch", eq:"–", muscle:"Mobilität", secondary:["Beine"], sets:3, reps:30, weight:0, unit:"sek", difficulty:1,
    note:"Knie auf Boden, Hüfte nach vorne schieben, Stretch", alts:["Mobilität Hüfte","World's Greatest Stretch"] },

  { name:"Schulter Mobilität", eq:"–", muscle:"Mobilität", secondary:["Schulter"], sets:1, reps:1, weight:0, unit:"–", difficulty:1,
    note:"Arm Circles, Cross-Body Stretch, Towel Dislocates — 5 Min", alts:["YTW Raises","Face Pulls"] },

];

console.log('EXERCISE_POOL v2 geladen:', EXERCISE_POOL.length, 'Übungen');
