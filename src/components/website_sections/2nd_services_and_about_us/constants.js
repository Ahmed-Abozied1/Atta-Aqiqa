import starLogo from "./images/star-symbol.svg";
import clocksLogo from "./images/clock-symbol.svg";
import giftboxLogo from "./images/giftbox-symbol.svg";
import wifiLogo from "./images/wifi-symbol.svg";

export const serviceCards = [
        
    {   
        id: 1, title: " نــــذور", 
         brief: "، نذرت لله ؟ هنساعدك توفي بنذرك ونوصل الخير للي محتاجينه، بكل أمانة ", 
        // price: "Free",
        desc: [ "",
                "نساعدك في العثور على العقار المثالي سواء كان سكني أو استثماري، مع دعم كامل في كل خطوة حتى التملك" ]
    }, { 
        id: 2, title: "  أضــــاحى", 
        brief: " عيدك غير معانا! قدم أضحيتك بسهولة واحنا نوصلها للي يستحقها كاملة، وتاخذ  ألأجر بإذن الله" , 
        price: "Free",
        desc: [ "We will find you an partment that suits your demands",
                "Arranging a demonstrations of suitable apartments",
                "Assistance with preparing all the documents",
                "Checking the legal clearness of the transaction",
                "Assistance with getting the loan",
                "We will guide you through every step of the transaction" ]
    }, {  
        id: 3, title: " صدقـــــات ",
        brief: "لو نفسك تتصدق وتساعد محتاج، معانا تقدر توصل خيرك بكل سهولة وسرعة.. لا تتردد بالخير", 
        price: "Free",
        desc: [ "Checking the real estate objects and the documents",
                "Assistance with preparing all the documents required for the transaction",
                "*You get to keep a certificate of legal clearness of the estate" ]
    }, {  
        id: 4, title: " عقائــق ",
        brief: "عايز تحتفل بمولودك ؟ وفّرنا عليك وقتك ومجهودك لاننا بنوصل  العقيقة للي يستاهلها، وهنخلى فرحتك فرحة لناس كتير", 
        price: "Negotiable",
        desc: [ "Preparing the estate for selling",
                "Presentation and advertisment support",
                "Checking of the legal clearness of the second party",
                "Assistance with preparing all the documents and signing a contract",
                "We will guide you through every step of the transaction" ]
    }
];

export const values = [

    {   id: 1,  symbol: starLogo,   title: "الجوده",
        desc: ["هتم بكل التفاصيل لضمان تقديم خدمة مميزة وجودة عالية ترضيك وتفوق توقعاتك"]
    }, 
    
    {   id: 2,  symbol: clocksLogo, title: "السرعه",
        desc: ["لأن وقتك غالي، نوصل صدقتك بسرعة ودقة، وننفذ عقيقتك بأسرع وقت ممكن دون أي تأخير"]
    }, 
    
    {   id: 3,  symbol: giftboxLogo, title: "الثقة",
        desc: ["أكثر من 1000 عميل وضعوا ثقتهم بنا، والتزامنا بالشفافية والمصداقية هو أساس نجاحنا"]
    }, 
    
    {   id: 4,   symbol: wifiLogo,   title: "التنوع",
        desc: [" مهما كان طلبك في العقيقة أو النذر أو الصدقة، نقدم لك خدمة ميسرة ومتكاملة بكل تفاصيلها  "]
    }
];