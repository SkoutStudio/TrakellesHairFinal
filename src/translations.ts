import { Language } from './types';

export const translations: Record<Language, Record<string, string>> = {
  el: {
    navServices: 'Υπηρεσίες',
    navGallery: 'Gallery',
    navLocations: 'Καταστήματα',
    navSocial: 'Social',
    navContact: 'Επικοινωνία',
    navTeam: 'Η Ομάδα',
    
    heroEyebrow: 'Premium Hair Experience',
    heroText: 'Το στυλ που σου ταιριάζει. Ανδρικές και γυναικείες περιποιήσεις, σύγχρονο χρώμα, premium τεχνικές και προσωπική φροντίδα σε 3 καταστήματα στη Λέσβο.',
    bookBtn: 'Κλείσε Ραντεβού',
    galleryBtn: 'Δες Gallery',

    servicesTitle: 'Περιποιήσεις με premium χαρακτήρα',
    servicesText: 'Βρες την περιποίηση που σου ταιριάζει.',
    menCare: 'Περιποιήσεις Ανδρών',
    womenCare: 'Περιποιήσεις Γυναικών',

    // Men's Services
    men1: '✂️ Ανδρικό Κούρεμα',
    men2: '🧔 Περιποίηση Γενειάδας',
    men3: '🖤 Black Mask',
    men4: '👦 Παιδικό Κούρεμα',
    men5: '⚡ Hair Design / Σχέδια',
    men6: '👀 Βγάλσιμο / Σχηματισμός Φρυδιών',

    // Women's Services
    women1: '💇‍♀️ Γυναικείο Κούρεμα',
    women2: '🎨 Βαφές',
    women3: '✨ Permanent',
    women4: '🌟 Balayage',
    women5: '💁 Extensions',
    women11: '💍 Extensions Ring',
    women12: '🔗 Nano Ring Extensions',
    women13: '🪡 Τρέσες',
    women6: '🧪 Θεραπεία Olaplex',
    women7: '💎 Κερατίνες',
    women8: '💁‍♀️ Braids',
    women9: '👰 Χτένισμα Γάμου',
    women14: '💃 Χτενίσματα Κοινωνικών Εκδηλώσεων',
    women10: '👁️ Βγάλσιμο / Σχηματισμός Φρυδιών',

    teamTitle: 'Οι άνθρωποι πίσω από το στυλ σου',
    teamText: '',
    teamMembersTitle: 'Νίκος & Άννα',
    teamMembersText: 'Ο Νίκος και η Άννα αποτελούν την καρδιά του Trakelles Hair. Με εμπειρία, δημιουργικότητα και σύγχρονες τεχνικές, δημιουργούν looks που αναδεικνύουν το προσωπικό στυλ κάθε πελάτη. Στόχος τους είναι κάθε επίσκεψη να συνδυάζει επαγγελματισμό, φροντίδα και ένα αποτέλεσμα που ξεχωρίζει.',
    ratingSmall: 'Google Rating',
    reviewsSmall: 'Κριτικές',
    locationsSmall: 'Καταστήματα στη Λέσβο',

    galleryTitle: 'Video Gallery',
    galleryText: 'Δες κάτι από τη δουλειά μας.',

    locationsTitle: 'Τα καταστήματά μας',
    locationsText: 'Το Trakelles Hair εξυπηρετεί σε τρία σημεία στη Λέσβο.',

    reviewsTitle: 'Τι λένε οι πελάτες',
    review1: '«ΦΟΒΕΡΟΣ και λίγα λέω, επαγγελματίας με τα όλα του. Έχω μείνει ικανοποιημένη φουλ.»',
    review2: '«Ο άνθρωπος είναι επαγγελματίας και γρήγορος. Έχει άποψη και γνώση στον τομέα του.»',
    review3: '«Καταπληκτική δουλειά. Ήμουν πολύ ευχαριστημένη και δεν μου έφυγε καθόλου μήκος.»',

    socialTitle: 'Μην χάσεις συμβουλές & νέες δουλειές',
    socialText: 'Ακολούθησε το Trakelles Hair για συμβουλές περιποίησης, νέες τάσεις, πριν/μετά αποτελέσματα και στιγμές από τα καταστήματα.',

    contactTitle: 'Κλείσε το ραντεβού σου',
    contactText: 'Το ραντεβού γίνεται τηλεφωνικά. Κάλεσε για διαθεσιμότητα και πληροφορίες.',
    callNow: '📞 Κάλεσε Τώρα',
    
    // Appointment Modal
    appointmentModalTitle: 'Κλείσε το ραντεβού σου',
    appointmentModalSub: 'Το ραντεβού γίνεται τηλεφωνικά. Κάλεσε για διαθεσιμότητα και πληροφορίες:',
    mytileneAddress: 'Ζωοδόχου Πηγής 164Β, Μυτιλήνη 811 00',
    moriaAddress: 'Μόρια Λέσβου',
    polichnitosAddress: 'Πολιχνίτος Λέσβου',
    
    // Quick Form
    formName: 'Ονοματεπώνυμο',
    formPhone: 'Τηλέφωνο Επικοινωνίας',
    formService: 'Επιλογή Υπηρεσίας',
    formShop: 'Επιλογή Καταστήματος',
    formDate: 'Επιθυμητή Ημερομηνία',
    formNotes: 'Σημειώσεις / Σχόλια',
    formSubmit: 'Αποστολή Αιτήματος Ραντεβού',
    formSuccessTitle: 'Το αίτημα στάλθηκε!',
    formSuccessMsg: 'Θα επικοινωνήσουμε σύντομα μαζί σας για την επιβεβαίωση.',
    closeBtn: 'Κλείσιμο',

    // Education & Certifications
    educationTag: 'Συνεχής Εκπαίδευση & Σεμινάρια',
    educationTitle: 'Συνεχής Ενημέρωση & Διεθνείς Πιστοποιήσεις',
    educationText: '',
    cert1: '🎓 Διεθνή Hands-on Σεμινάρια',
    cert2: '📜 Schwarzkopf Professional Essential Looks',
    cert3: '✂️ Σύγχρονες Τεχνικές Κουρέματος & Χρώματος',
    barberSpotlightTitle: 'Master Barbering & Grooming',
    barberSpotlightText: 'Εξειδικευμένο ανδρικό κούρεμα, περιποίηση γενειάδας και μοντέρνο styling από τον Νίκο.',

    // Footer
    footerDesc: 'Υψηλή αισθητική, εξειδίκευση στο κούρεμα, τη χρωματολογία & το bridal styling με συνεχή ενημέρωση σε διεθνή σεμινάρια.',
    footerQuickLinks: 'Γρήγορη Πλοήγηση',
    footerShops: 'Τα Καταστήματά μας',
    footerHoursTitle: 'Ώρες Λειτουργίας',
    footerHoursText: 'Τρίτη - Σάββατο: 09:00 - 20:00\nΚυριακή - Δευτέρα: Κλειστά',
    footerBookCTA: 'Κλείστε το Ραντεβού σας',
    footerBookSub: 'Επικοινωνήστε μαζί μας για να διαμορφώσουμε μαζί το ξεχωριστό σας στυλ.',
    footerRights: 'Όλα τα δικαιώματα διατηρούνται.',
    footerDesignedBy: 'Σχεδιασμός & Ανάπτυξη'
  },
  en: {
    navServices: 'Services',
    navGallery: 'Gallery',
    navLocations: 'Locations',
    navSocial: 'Social',
    navContact: 'Contact',
    navTeam: 'Team',

    heroEyebrow: 'Premium Hair Experience',
    heroText: 'The style that fits you. Men’s and women’s hair services, modern color, premium techniques and personal care across 3 locations in Lesvos.',
    bookBtn: 'Book Appointment',
    galleryBtn: 'View Gallery',

    servicesTitle: 'Premium grooming & hair services',
    servicesText: 'Find the service that fits you.',
    menCare: 'Men’s Care',
    womenCare: 'Women’s Care',

    // Men's Services
    men1: '✂️ Men’s Haircut',
    men2: '🧔 Beard Grooming',
    men3: '🖤 Black Mask',
    men4: '👦 Kids Haircut',
    men5: '⚡ Hair Design',
    men6: '👀 Eyebrow Shaping',

    // Women's Services
    women1: '💇‍♀️ Women’s Haircut',
    women2: '🎨 Hair Color',
    women3: '✨ Perm',
    women4: '🌟 Balayage',
    women5: '💁 Extensions',
    women11: '💍 Ring Extensions',
    women12: '🔗 Nano Ring Extensions',
    women13: '🪡 Wefts',
    women6: '🧪 Olaplex Treatment',
    women7: '💎 Keratin Treatments',
    women8: '💁‍♀️ Braids',
    women9: '👰 Bridal Hairstyling',
    women14: '💃 Social Event Hairstyling',
    women10: '👁️ Eyebrow Shaping',

    teamTitle: 'The people behind your style',
    teamText: 'The Trakelles Hair team combines technique, experience and personal care.',
    teamMembersTitle: 'Nikos & Anna',
    teamMembersText: 'Nikos and Anna are the heart of Trakelles Hair. Combining experience, creativity and modern techniques, they create personalized looks that highlight each client’s individual style while offering a premium salon experience.',
    ratingSmall: 'Google Rating',
    reviewsSmall: 'Reviews',
    locationsSmall: 'Locations in Lesvos',

    galleryTitle: 'Video Gallery',
    galleryText: 'Take a look at some of our work.',

    locationsTitle: 'Our locations',
    locationsText: 'Trakelles Hair welcomes clients across three locations in Lesvos.',

    reviewsTitle: 'What clients say',
    review1: '“Amazing professional service. I was fully satisfied.”',
    review2: '“Professional, fast, with opinion and knowledge in his field.”',
    review3: '“Excellent work. I was very satisfied and kept my length.”',

    socialTitle: 'Don’t miss tips & new work',
    socialText: 'Follow Trakelles Hair for hair care tips, new trends, before/after results and moments from the salons.',

    contactTitle: 'Book your appointment',
    contactText: 'Appointments are booked by phone. Call for availability and information.',
    callNow: '📞 Call Now',

    // Appointment Modal
    appointmentModalTitle: 'Book Your Appointment',
    appointmentModalSub: 'Appointments are booked by phone. Call for availability and info:',
    mytileneAddress: 'Zoodochou Pigis 164B, Mytilene 811 00',
    moriaAddress: 'Moria, Lesvos',
    polichnitosAddress: 'Polichnitos, Lesvos',

    // Quick Form
    formName: 'Full Name',
    formPhone: 'Phone Number',
    formService: 'Select Service',
    formShop: 'Select Location',
    formDate: 'Preferred Date',
    formNotes: 'Notes / Comments',
    formSubmit: 'Send Appointment Request',
    formSuccessTitle: 'Request Sent!',
    formSuccessMsg: 'We will contact you shortly to confirm your booking.',
    closeBtn: 'Close',

    // Education & Certifications
    educationTag: 'Continuous Training & Seminars',
    educationTitle: 'International Certifications & Seminars',
    educationText: 'Nikos and Anna continuously invest in perfecting their craft by attending international hairdressing seminars and hands-on masterclasses (such as Schwarzkopf Professional Essential Looks). This allows them to bring the latest global trends and techniques to Lesvos.',
    cert1: '🎓 International Hands-On Seminars',
    cert2: '📜 Schwarzkopf Professional Certified',
    cert3: '✂️ Advanced Cutting & Color Techniques',
    barberSpotlightTitle: 'Master Barbering & Grooming',
    barberSpotlightText: 'Specialized men’s haircuts, beard grooming, and modern styling by Nikos.',

    // Footer
    footerDesc: 'High aesthetics, expertise in cutting, coloring & bridal styling with continuous training in international masterclasses.',
    footerQuickLinks: 'Quick Links',
    footerShops: 'Our Locations',
    footerHoursTitle: 'Opening Hours',
    footerHoursText: 'Tuesday - Saturday: 09:00 - 20:00\nSunday - Monday: Closed',
    footerBookCTA: 'Book Your Appointment',
    footerBookSub: 'Get in touch with us to craft your bespoke hair style.',
    footerRights: 'All rights reserved.',
    footerDesignedBy: 'Designed & Developed by'
  }
};
