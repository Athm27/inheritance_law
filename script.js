// JavaScript code for multilingual support and other features

// Change text to a different language (example function for demo)
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const langKey = element.getAttribute('data-lang');
        element.textContent = translations[lang][langKey];
    });

    // Update the title in header as well
    document.getElementById('title').textContent = translations[lang]['title'];
    document.getElementById('introText').textContent = translations[lang]['introText'];
}

// Example translation data (Add more translations as needed)
const translations = {
    en: {
        title: "Welcome to Inheritance Law in India",
        aboutText: "This website is designed to help people understand inheritance laws in India and explore relevant cases.",
        casesText: "Find related legal cases here.",
        introText: "Learn more about inheritance laws and related cases in India."
    },
    ja: {
        title: "インディアの相続法へようこそ",
        aboutText: "このウェブサイトは、インディアの相続法を理解し、関連するケースを探るのに役立ちます。",
        casesText: "ここで関連する法的事例を見つけてください。",
        introText: "インディアの相続法と関連するケースについてもっと学んでください。"
    },
    ur: {
        title: "انڈیا میں وراثت کے قوانین میں خوش آمدید",
        aboutText: "یہ ویب سائٹ انڈیا میں وراثت کے قوانین کو سمجھنے اور متعلقہ مقدمات کی تلاش میں مدد فراہم کرتی ہے۔",
        casesText: "یہاں متعلقہ قانونی مقدمات تلاش کریں۔",
        introText: "انڈیا میں وراثت کے قوانین اور متعلقہ مقدمات کے بارے میں مزید جانیں۔"
    },
    te: {
        title: "భారతదేశంలోని వారసత్వ చట్టాలకు స్వాగతం",
        aboutText: "ఈ వెబ్సైట్ భారతదేశంలో వారసత్వ చట్టాలను అర్థం చేసుకోవడంలో మరియు సంబంధిత కేసులను అన్వేషించడంలో సహాయపడుతుంది.",
        casesText: "ఇక్కడ సంబంధిత చట్టపరమైన కేసులను కనుగొనండి.",
        introText: "భారతదేశంలో వారసత్వ చట్టాలు మరియు సంబంధిత కేసులు గురించి మరింత తెలుసుకోండి."
    },
    ta: {
        title: "இந்தியாவிலுள்ள உரிமை சட்டத்திற்கு வரவேற்கின்றேன்",
        aboutText: "இந்த இணையதளம் இந்தியாவில் உள்ள உரிமை சட்டங்களை புரிந்து கொள்ளவும், தொடர்புடைய வழக்குகளை ஆராய்வதற்கான உதவிகரமானது.",
        casesText: "இங்கே தொடர்புடைய சட்ட வழக்குகளை காணவும்.",
        introText: "இந்தியாவில் உள்ள உரிமை சட்டங்களை மற்றும் தொடர்புடைய வழக்குகளைப் பற்றி மேலும் அறிக."
    }
};

// Default language on page load
changeLanguage('en');
