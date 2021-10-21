import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getPlayers(){
    return [
      {
        "id": "1",
        "name": "شينع دونغ هيوك",
        "city": "---",
        "imglink": "imges/personage/squid-game-per-001.png",
        "inifo": "لاعب مسن  و مريض   ",
      },
      {
        "id": "67",
        "name": "ساي بوك",
        "city": "كوريا الشمالية",
        "imglink": "imges/personage/squid-game-per-067.png",
        "inifo": "#",
      },
      {
        "id": "101",
        "name": "دكو سو",
        "city": "---",
        "imglink": "imges/personage/squid-game-per-101.png",
        "inifo": " رجل العصابات و لديه ديون ضخمة لدفعها  ",
      },
      {
        "id": "199",
        "name": "علي",
        "city": "---",
        "imglink": "imges/personage/squid-game-per-199.png",
        "inifo": "عامل اجنبي / باكستاني",
      },
      {
        "id": "212",
        "name": "غير معروف",
        "city": "----",
        "imglink": "imges/personage/squid-game-per-212.png",
        "inifo": "#",
      },
      {
        "id": "218",
        "name": " سانغ وو",
        "city": "----",
        "imglink": "imges/personage/squid-game-per-218.png",
        "inifo": "رئيس فريق الاستثمار في شركة أوراق مالية. كان صغيرًا في Ki-hoon ، وهو طالب موهوب في الحي دخل جامعة سيول الوطنية.",
      },
      {
        "id": "240",
        "name": "جي يونغ",
        "city": "----",
        "imglink": "imges/personage/squid-game-per-240.png",
        "inifo": "لاعبة انضمت إلى اللعبة بعد إطلاق سراحها من السجن لقتلها والدها الذي يسيء معاملتها.",
      },
  
      {
        "id": "465",
        "name": "كي هون",
        "city": "----",
        "imglink": "imges/personage/squid-game-per-465.png",
        "inifo": "يشارك في اللعبة بعد معاناته من فشل العمل والطلاق والديون والمقامرة",
      },
  
    ];
  };
  getTeams(){
    return [
      {
        "name": "شين دونغ هيوك",
        "role": "الكاتب",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Shin_Dong-Hyuk.jpg/280px-Shin_Dong-Hyuk.jpg",
        "instagram": "not yet",
        "youtube": "not yet",
        "twitter": "not yet",
        "facebook": "not yet",
        //you can add instagram && facebook && twitter && instagram or just addin one of them 
      },
      {
        "name": "هيونع جونغ",
        "role": "ممتلة",
        "img": "https://i.mdel.net/i/db/2017/9/757525/757525-500w.jpg",
        "instagram": "https://www.instagram.com/hoooooyeony/",
        "youtube": "not yet",
        "twitter": "not yet",
        "facebook": "not yet",
      },
      {
        "name": " بارك ها سو ",
        "role": "ممتل",
        "img": "https://kdramastars1.files.wordpress.com/2018/12/44513-0000692584_002_20181130101035576.jpg",
        "instagram": "https://www.instagram.com/haesoopark_official/",
        "youtube": "not yet",
        "twitter": "not yet",
        "facebook": "not yet",
      },
      {
        "name": "لي جونغ جا",
        "role": "ممتل",
        "img": "https://i.mydramalist.com/2zEwW_5_c.jpg",
        "instagram": "https://www.instagram.com/from_jjlee/",
        "youtube": "not yet",
        "twitter": "not yet",
        "facebook": "not yet",
      },
      {
        "name": "هيو سونغ تاي  ",
        "role": "ممتل",
        "img": "https://photos.hancinema.net/photos/photo1210115.jpg",
        "instagram": "https://www.instagram.com/heosungtae/",
        "youtube": "not yet",
        "twitter": "not yet",
        "facebook": "not yet",
      },
      {
        "name": "لي يومي ",
        "role": "ممتلة",
        "img": "https://1.bp.blogspot.com/-jekA-MurMws/YUrmSpgszEI/AAAAAAAAXuA/aVlB1aJ0sWgeK46vIlMt_zPRA48Rb9wqACLcBGAsYHQ/w426-h640/1.jpg",
        "instagram": "https://www.instagram.com/leeyoum262/",
        "youtube": "not yet",
        "twitter": "not yet",
        "facebook": "not yet",
      },
      {
        "name": "اوهيونغ سو",
        "role": "ممتل",
        "img": "https://i.mydramalist.com/wn4rNf.jpg",
        "instagram": "https://www.instagram.com/ohyoung_soo/",
        "youtube": "not yet",
        "twitter": "not yet",
        "facebook": "not yet",
      },
      {
        "name": "وي هان جونغ",
        "role": "ممتل",
        "img": "https://i.mydramalist.com/xzdP0_5_c.jpg",
        "instagram": "https://www.instagram.com/wi__wi__wi/",
        "youtube": "not yet",
        "twitter": "not yet",
        "facebook": "not yet",
      },
      {
        "name": "جو ريونغ كيم",
        "role": "ممتلة",
        "img": "https://6.vikiplatform.com/image/897dbe2eeeb14158a53faeb4bafe8197.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1",
        "instagram": "https://www.instagram.com/kimjooryoung/",
        "youtube": "not yet",
        "twitter": "not yet",
        "facebook": "not yet",
      },
      {
        "name": "جونغ يو",
        "role": "ممتل",
        "img": "https://6.viki.io/image/ebc3348fa69a4608a19dab8eac920967.png?x=b&s=843x474&q=h&cb=1",
        "instagram": "https://www.instagram.com/gongyoo7010/",
        "youtube": "not yet",
        "twitter": "not yet",
        "facebook": "not yet",
      },
  
    ]
  }
  getInfoWow(){
    return {
      secOne : {
        title: '1- شكل الهدية يشبه الصندوق',
        img: "assets/imges/BUUUUM.jpg",
        text: "في الحلقة الأولى عندنا قدم سيونغ جي هون الهدية إلى ابنته ، كان شكل الهدية يشبه الصندوق الذي يتم به نقل الاعبين الميــتين ، وكان بداخله المســدس والذي من خلاله يتم قتــل الاعبين ، والمســدس كان عبارة عن لعبة تشعل النار ، وهذه نفس الطريقة التي يتم بها إحــراق الاعبين عندما يموتون"
      },
      secTwo : {
        title: '2- مقتل الشخصيات الرئيسية',
        img: "assets/imges/death.jpg",
        text: "لم تأت وفاة إحدى الشخصيات الرئيسية وهو 'سانج ووه' مفاجئة حيث كان هناك إنذارا بحدوث الأمر، فمثلما قتل 'ووه' نفسه في نهاية المسابقة كان على وشك القيام بالشيء ذاته في الحلقة الثانية قبل أن يتم استدعائه مرة أخرى إلى اللعبة. وانتهت حياة 'سايبوك' بذبحها قبل اللعبة الأخيرة بنفس الطريقة التي حاولت بها ذبح شريكا الذي قام بخداعها، كما توفي 'جانج ديوك سو' بعد سقوطه في لعبة الجسر الزجاجي وهي الطريقة التي هرب بها ممن طاردوه في الحلقة الثانية. كما توفي 'علي' الشاب الباكستاني بعد أن سرق'سانج ووه' كراته مثلما سرق هو المال من رئيسه في العمل قبل العودة إلى اللعبة خلال أحداث الحلقة الثانية"
      },
      secTr : {
        title: '3- رقم حساب البنك اللي ظهر في المسلسل',
        img: "assets/imges/ribb.jpg",
        text: "في لقاء مع مخرج مسلسل 'Squid Game' كشف إن ناس كتير بعتت فلوس لرقم حساب البنك اللي ظهر في المسلسل وده طبعًا عشان يعرفوا هو حقيقي ولا لأ، وقال إنه يخص واحد من المنتجين واتفقوا معاه إنهم يستخدموه في المسلسل وعشان كدة قرروا إنهم يقفلوا الحساب تجنبًا لأي مشاكل مستقبلية.."
      },
      btn : { link: "https://www.netflix.com/ma-fr/title/81040344", type: "rounded", text: "مشاهدة المسلسل" } //caree or rounded
    }
  }
  getHomeContent(){
    return{
    secOne : {
      img: "https://www.youtube.com/embed/oqxAJKy0ii4",
      text: "لعبة الحبار (بالكورية: 오징어 게임 ؛ رر: Ojing-eo Geim) هو مسلسل نجاه وإثارة كوري جنوبي، كتبه وأخرجه هوانغ دونغ هيوك، تم عرضه على نتفلكس في 17 سبتمبر 2021. أصبح المسلسل أول دراما كورية تتصدر قائمة أفضل 10 عروض تلفزيونية أسبوعية على نتفليكس وأكثرها مشاهدة على مستوى العالم، وصلت إلى رقم 1 في 90 دولة، بما في ذلك الولايات المتحدة والمملكة المتحدة.   تدور أحداث المسلسل حول لعبة البقاء على قيد الحياة والتي تبدأ بـ 456 متسابقًا وجائزة قدرها 45.6 مليار وون (حوالي 38.7$ مليون دولار أمريكي)"
    },
    secTwo : {
      img: "assets/imges/ffff.png",
      text: "تدور أحداث مسلسل لعبة الحبار في 9 حلقات في إطار درامي تشويقي، حول مجموعة من الأشخاص الذين يشاركون في سلسلة من الألعاب الغامضة للفوز بجوائز مالية ضخمة تبلغ قيمتها 45.6 مليار وون «38.5 مليون دولار أمريكي»، كما يسلط الضوء على المجتمعات غير العادلة، كما يبرز فكرة انتشار العنف والخداع في المجتمع. ويحكي المسلسل قصة البطل الذي يعاني من الفقر وهو في الـ40 من عمره، ويحاول ربح المال بأي طريقة لعدم حصوله على وظيفة محددة، وبسبب فقره تهجره زوجته، ثم يقرر البطل الدخول في ألعاب غامضة لكسب المال، وعندها يجد نفسه في مكان غريب مع الكثير من الأشخاص يمارسون لعبة مكونة من 6 مستويات."
    },
    secTr : {
      img: "https://asianwiki.com/images/a/a0/Hwang_Dong-Hyuk-p1.jpg",
      text: "وتصدر مسلسل لعبة الحبّار قائمة الدراما الكورية، ليصبح بذلك المسلسل الكوري الأول الذي يحظى بتصدر قائمة أفضل 10 برامج تلفزيونية على شبكة نتفيلكس في الولايات المتحدة، وفقًا للإحصاءات فإن مسلسل «Squid Game» سيصبح أكثر المسلسلات مشاهدة في تاريخ Netflix، متجاوزًا الرقم القياسي الحالي لمسلسل «Bridgerton»، كما يحتل المسلسل حاليًا المرتبة الأولى في أكثر من 90 دولة حول العالم. مسلسل لعبة الحبار بطولة كل من وبارك هاي سو، لي جونغ جاي، وواي هاي جون، أوه يونغ سو، ومن إنتاج شركة سيرن بيكتشرز، ومن تأليف وإخراج هوانج دونج هيوك."
    },
    btn : { link: "https://www.netflix.com/ma-fr/title/81040344", type: "rounded", text: "مشاهدة المسلسل" } //caree or rounded
    }
  }
  getEps(){
    return {
      text : "تدور أحداث مسلسل لعبة الحبار في 9 حلقات في إطار درامي تشويقي، حول مجموعة من الأشخاص الذين يشاركون في سلسلة من الألعاب الغامضة للفوز بجوائز مالية ضخمة تبلغ قيمتها 45.6 مليار وون «38.5 مليون دولار أمريكي»، كما يسلط الضوء على المجتمعات غير العادلة، كما يبرز فكرة انتشار العنف والخداع في المجتمع. ويحكي المسلسل قصة البطل الذي يعاني من الفقر وهو في الـ40 من عمره، ويحاول ربح المال بأي طريقة لعدم حصوله على وظيفة محددة، وبسبب فقره تهجره زوجته، ثم يقرر البطل الدخول في ألعاب غامضة لكسب المال، وعندها يجد نفسه في مكان غريب مع الكثير من الأشخاص يمارسون لعبة مكونة من 6 مستويات.",
      eps : [
        {
          type: "caree",
          text: "الحلقة الاولى",
          link: "https://shahed4u.land/%d9%85%d8%b3%d9%84%d8%b3%d9%84-%d9%84%d8%b9%d8%a8%d8%a9-%d8%a7%d9%84%d8%ad%d8%a8%d8%a7%d8%b1-squid-game-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-1-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/",
        },
        {
          type: "caree",
          text: "الحلقة التانية",
          link: "https://shahed4u.land/%d9%85%d8%b3%d9%84%d8%b3%d9%84-%d9%84%d8%b9%d8%a8%d8%a9-%d8%a7%d9%84%d8%ad%d8%a8%d8%a7%d8%b1-squid-game-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-2-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/",
        },
        {
          type: "caree",
          text: "الحلقة التالتة",
          link: "https://shahed4u.land/%d9%85%d8%b3%d9%84%d8%b3%d9%84-%d9%84%d8%b9%d8%a8%d8%a9-%d8%a7%d9%84%d8%ad%d8%a8%d8%a7%d8%b1-squid-game-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-3-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/",
        },
        {
          type: "caree",
          text: "الحلقة الرابعة",
          link: "https://shahed4u.land/%d9%85%d8%b3%d9%84%d8%b3%d9%84-%d9%84%d8%b9%d8%a8%d8%a9-%d8%a7%d9%84%d8%ad%d8%a8%d8%a7%d8%b1-squid-game-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-4-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/",
        },
        {
          type: "caree",
          text: "الحلقة الخامسة",
          link: "https://shahed4u.land/%d9%85%d8%b3%d9%84%d8%b3%d9%84-%d9%84%d8%b9%d8%a8%d8%a9-%d8%a7%d9%84%d8%ad%d8%a8%d8%a7%d8%b1-squid-game-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-5-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/",
        },
        {
          type: "caree",
          text: "الحلقة السادسة",
          link: "https://shahed4u.land/%d9%85%d8%b3%d9%84%d8%b3%d9%84-%d9%84%d8%b9%d8%a8%d8%a9-%d8%a7%d9%84%d8%ad%d8%a8%d8%a7%d8%b1-squid-game-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-6-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/",
        },
        {
          type: "caree",
          text: "الحلقة السابعة",
          link: "https://shahed4u.land/%d9%85%d8%b3%d9%84%d8%b3%d9%84-%d9%84%d8%b9%d8%a8%d8%a9-%d8%a7%d9%84%d8%ad%d8%a8%d8%a7%d8%b1-squid-game-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-7-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/",
        },
        {
          type: "caree",
          text: " الحلقة التامنة",
          link: "https://shahed4u.land/%d9%85%d8%b3%d9%84%d8%b3%d9%84-%d9%84%d8%b9%d8%a8%d8%a9-%d8%a7%d9%84%d8%ad%d8%a8%d8%a7%d8%b1-squid-game-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-8-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/",
        },
        {
          type: "caree",
          text: "الحلقة التاسعة",
          link: "https://shahed4u.land/%d9%85%d8%b3%d9%84%d8%b3%d9%84-%d9%84%d8%b9%d8%a8%d8%a9-%d8%a7%d9%84%d8%ad%d8%a8%d8%a7%d8%b1-squid-game-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-9-%d9%88%d8%a7%d9%84%d8%a7%d8%ae%d9%8a%d8%b1%d8%a9-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/",
        },
      ]
    }
  }
  getReviews(){
    return [ 
      "https://www.youtube.com/embed/q7E1Y-gijLE",
      "https://www.youtube.com/embed/Eu18Xl_hXNQ",
      "https://www.youtube.com/embed/67lnbEYYvTI",
      "https://www.youtube.com/embed/r5mYJagrFrw"
    ]}
  constructor() {
   
   }
}
