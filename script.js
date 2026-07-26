// 1. الداتا الكاملة لكل جهاز (تمت إعادة الـ 12 عطل لكل جهاز + إضافة الخدمات الإضافية والأسئلة الشائعة)
const devicesData = {
  "washing-machine": {
    title: "صيانة غسالات لكل الماركات.. في بيتك وبضمان مكتوب",
    desc: "من الفوق أوتوماتيك لحد الإنفرتر والغسالات الصناعية – بنصلح، بنركب، بنعقم، وبنعمل صيانة دورية تمنع العطل قبل ما يحصل. كشف وسعر قبل الشغل، وفني متخصص غسالات مش فني عمومي.",
    faults: [
      "الغسالة مبتسحبش مية خالص أو بتسحب ببطء",
      "الغسالة مبتعصرش أو الهدوم بتطلع مبلولة",
      "صوت تخبيط عالي جداً أو اهتزاز وقت العصر",
      "تسريب مية من تحت الغسالة أو من الباب",
      "باب الغسالة معلق ومبيفتحش بعد الغسيل",
      "رعشة أو ماس كهربائي بيلمس في الغسالة",
      "الغسالة بتسحب مية وتطردها في نفس الوقت",
      "عطل في الكارتة أو لوحة التحكم (الزراير مبتستجبش)",
      "الغسالة مبتكملش البرنامج أو بتقف في النص",
      "عدم دوران الحلة نهائياً والموتور بيزن",
      "ريحة شياط أو حرق طالعة من الموتور",
      "ظهور رموز أعطال (Error Codes) على الشاشة"
    ],
    extraServices: [
      "خدمة التنظيف والتعقيم العميق للحلة الداخلية لإزالة الروائح الكريهة.",
      "تغيير رمان البلي وتصليح المساعدين لضمان ثبات الغسالة.",
      "تأسيس وتركيب الغسالات الجديدة وتوصيل خراطيم الصرف بطريقة صحيحة."
    ],
    faqs: [
      { q: "الغسالة بتتحرك وتهتز جداً وقت العصر، إيه الحل؟", a: "ده غالباً بسبب تلف المساعدين أو إن الغسالة مش موزونة على الأرض بشكل صحيح. الفني بيقدر يظبط توازنها أو يغير المساعدين وبترجع ثابتة تماماً." },
      { q: "ريحة الغسالة مكمكمة والهدوم ريحتها مش حلوة، أعمل إيه؟", a: "بنعملك دورة تعقيم عميق باستخدام مواد مخصصة، وبننظف الفلاتر وكاوتش الباب من أي رواسب متراكمة، وبنقولك على نصايح تحافظ بيها على ريحتها دايماً كويسة." },
      { q: "الغسالة بتسحب مية وتطردها في نفس الوقت؟", a: "المشكلة دي بتكون في مستوى خرطوم الصرف أو عطل في صمام الطرد، الفني بيحلها في أقل من نص ساعة." }
    ],
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop",
    whatsappMessage: "عايز أحجز صيانة غسالة"
  },
  "fridge": {
    title: "صيانة ثلاجات لكل الماركات.. تبريد يرجع زي الأول",
    desc: "صيانة فورية بالمنزل لجميع أنواع الثلاجات النوفروست والديفروست. بنعالج مشاكل ضعف التبريد وتسريب المياه، مع شحن الفريون بقطع غيار أصلية وضمان معتمد.",
    faults: [
      "التبريد ضعيف جداً في الكابينة أو الفريزر",
      "تراكم تلج كثيف (الثلاجة مبتعملش ديفروست)",
      "الموتور (الكباس) شغال متواصل ومبيفصلش",
      "صوت تكتكة أو زنة غريبة في الموتور",
      "تسريب مية جوه الثلاجة أو بتنزل على الأرض",
      "الكاوتش بتاع الباب مقطوع أو مبيقفلش كويس",
      "اللمبة بتنور بس الثلاجة مبتبردش نهائياً",
      "سخونة شديدة في الجوانب الخارجية للثلاجة",
      "تسريب شحنة الفريون أو وجود تنفيس",
      "عطل في ثرموستات الحرارة أو التايمر",
      "توقف مروحة التبريد الداخلية عن العمل",
      "الأكل بيبوظ بسرعة رغم إن الثلاجة شغالة"
    ],
    extraServices: [
      "شحن فريون أصلي لضمان أعلى كفاءة تبريد.",
      "تغيير كاوتش الأبواب بأعلى جودة لمنع تسريب التبريد.",
      "تغيير فلاتر تنقية المياه (للثلاجات المزودة بديسبنسر)."
    ],
    faqs: [
      { q: "الثلاجة بتعمل ثلج كتير في الفريزر ومبتبردش تحت؟", a: "ده عطل في نظام الـ Defrost (إذابة الثلج)، سواء التايمر، الهيتر، أو الثرموديسك. الفني بيفحص النظام ويغير القطعة التالفة والمشكلة بتتحل فوراً." },
      { q: "هل سخونة جوانب الثلاجة من بره خطر؟", a: "السخونة الخفيفة طبيعية جداً لأن مواسير المكثف بتكون في الجوانب، لكن لو السخونة شديدة جداً والموتور مبيفصلش، لازم فني يكشف عليها عشان مفيش حاجة تتحرق." },
      { q: "الموتور بيعمل صوت تكتكة ومبيشتغلش؟", a: "دي مشكلة في مجموعة الكهرباء الخاصة بالموتور (الريلاي والأوفرلود)، وغالباً بتتغير وبتشتغل الثلاجة تاني بدون الحاجة لتغيير الموتور كامل." }
    ],
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=2070&auto=format&fit=crop", 
    whatsappMessage: "عايز أحجز صيانة تلاجة"
  },
  "deep-freezer": {
    title: "صيانة ديب فريزر.. حماية كاملة لأكلك وتجميد مثالي",
    desc: "الديب فريزر هو خزانة البيت وأي عطل فيه خسارته كبيرة. فنيين متخصصين في صيانة الديب فريزر الأفقي والرأسي وحل مشاكل اللمبة الحمرا وتراكم الثلج فوراً.",
    faults: [
      "إضاءة اللمبة الحمرا (الإنذار) باستمرار",
      "ضعف التجميد أو الأكل بيفك ويسيح",
      "تكوين طبقات تلج بتمنع قفل الأدراج",
      "الموتور بيسخن جداً وصوته عالي",
      "تلف ثرموستات الحرارة أو كارتة التشغيل",
      "تسريب شحنة الفريون أو تنفيس في المواسير",
      "مروحة الفريزر النوفروست مبتلفش",
      "تراكم مياه في أرضية الفريزر من جوه",
      "الفريزر بيفصل كهرباء لوحده (بيعمل قفلة)",
      "كسر في مفصلات الباب أو تلف الكاوتش"
    ],
    extraServices: [
      "ضبط ومعايرة الثرموستات لتقليل استهلاك الكهرباء.",
      "تنظيف المكثف والمروحة لرفع كفاءة التجميد.",
      "معالجة البارومة والصدأ في الجسم الخارجي."
    ],
    faqs: [
      { q: "اللمبة الحمرا منورة على طول، ده معناه إيه؟", a: "اللمبة الحمرا إنذار إن درجة التبريد جوه الفريزر مش كافية للتجميد. ممكن يكون بسبب ترك الباب مفتوح، أو تسريب فريون، أو ضعف في الموتور." },
      { q: "الفريزر بيفصل لوحده الكهرباء عن البيت (بيعمل قفلة)؟", a: "ده بيكون ماس كهربائي إما في الموتور أو في هيتر إذابة الثلج، ولازم يتم فصله فوراً والاتصال بالفني حفاظاً على أمان البيت." }
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop", 
    whatsappMessage: "عايز أحجز صيانة ديب فريزر"
  },
  "cooker": {
    title: "صيانة بوتاجازات وأفران.. أمانك وسلامة بيتك رقم واحد",
    desc: "بنعالج كل مشاكل تسريب الغاز، ضعف النار، ومشاكل الإشعال الذاتي باحترافية وأمان تام، عشان نضمنلك تجربة طبخ آمنة وبدون قلق.",
    faults: [
      "عيون البوتاجاز بتهبب أو بتطلع نار حمرا",
      "نار العيون ضعيفة جداً أو مسدودة",
      "الإشعال الذاتي مش شغال أو بيعلق ويطقطق لوحده",
      "الفرن مبيسخنش كويس أو ناره بتفصل بسرعة",
      "وجود ريحة تسريب غاز (طوارئ)",
      "باب الفرن مبيقفلش كويس أو مفصلاته مكسورة",
      "زجاج الفرن الخارجي أو الداخلي مكسور",
      "الشواية مبتلفش أو الموتور بتاعها محروق",
      "مفاتيح الغاز تقيلة في اللف أو معلقة",
      "نار الفرن والشواية مابيشتغلوش مع بعض",
      "عطل في نظام الأمان (السنسور بيفصل النار)"
    ],
    extraServices: [
      "خدمة التنظيف وإزالة الدهون المستعصية للبوتاجاز والفرن.",
      "تغيير زجاج الفرن المكسور الحراري الأصلي.",
      "تعديل الفواني لتعمل على الغاز الطبيعي بدلاً من الأنبوبة."
    ],
    faqs: [
      { q: "النار بتهبب والحلل بتهبب من تحت، إيه السبب؟", a: "ده بيكون بسبب انسداد في الفواني أو عدم ضبط نسبة الهواء مع الغاز. الفني بينظف الفواني ويظبط الهواء والنار بترجع زرقا وقوية." },
      { q: "هل ممكن أركب غاز طبيعي بدل الأنبوبة؟", a: "أكيد، إحنا بنقوم بتغيير فواني البوتاجاز بالكامل عشان تتناسب مع ضغط الغاز الطبيعي ويكون آمن تماماً للاستخدام." },
      { q: "نار الفرن بتطفي لوحدها بعد ما أولعها؟", a: "دي غالباً مشكلة في حساس الأمان (الثرموكابل). لو الحساس بايظ بيقفل الغاز تلقائي. الفني بيغيره والفرن بيشتغل طبيعي." }
    ],
    // تم التحديث هنا للصورة الجديدة الخاصة بالبوتاجازات
    image: "image_8fc441.jpg",
    whatsappMessage: "عايز أحجز صيانة بوتاجاز"
  },
  "heater": {
    title: "صيانة سخانات غاز وكهرباء.. مياه سخنة بدون انقطاع",
    desc: "مفيش غنى عن السخان في البيت. بنحل كل مشاكل السخانات سواء فاصلة كهرباء، أو الغاز مش بيلقط، وبنضمنلك أمان كامل وعدم تسريب بعد الصيانة.",
    faults: [
      "السخان بينقط مية من تحت أو من المواسير",
      "المية بتنزل باردة أو تسخينها ضعيف جداً",
      "السخان الكهربائي بيعمل ماس أو بيكهرب المية",
      "سخان الغاز مبيولعش أو الشعلة بتطفي بسرعة",
      "صوت فرقعة عالي وقت تشغيل سخان الغاز",
      "تلف الساندوتش أو الهيتر (شمعة التسخين)",
      "جلدة الرداخ مقطوعة (في سخانات الغاز)",
      "السخان مبيفصلش نهائياً والمية بتغلي",
      "حساس الحرارة أو الثرموستات بايظ",
      "تلف كارتة الإشعال أو السويتش",
      "حجارة السخان بتخلص بسرعة جداً"
    ],
    extraServices: [
      "تغيير خراطيم ومحابس المياه والغاز المتهالكة.",
      "إزالة الأملاح والترسبات من خزان السخان الكهربائي.",
      "تعديل سخان الغاز للعمل بالشاحن (أدابتور) بدلاً من الحجارة."
    ],
    faqs: [
      { q: "سخان الغاز مش بيلقط شرز ومبيشتغلش؟", a: "المشكلة ممكن تكون في الحجارة ضعيفة، أو جلدة الرداخ مقطوعة ومبترفعش الإبرة، أو عطل في كارتة الإشعال. الفني بيفحص ويحدد العطل بدقة." },
      { q: "السخان الكهربائي بيكهرب المية، أعمل إيه؟", a: "دي حالة طوارئ! لازم تفصل الكهرباء عنه فوراً. ده بيكون بسبب تشقق في الهيتر الداخلي ووصول الكهرباء للمياه، ولازم يتغير فوراً." },
      { q: "المية بتنزل ضعيفة جداً من السخان؟", a: "ده نتيجة تراكم الأملاح والترسبات جوه السيربنتينة أو الخزان. بنعمل دورة غسيل بمواد مخصصة لتسليك المواسير وضغط المية بيرجع قوي." }
    ],
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=2070&auto=format&fit=crop",
    whatsappMessage: "عايز أحجز صيانة سخان"
  },
  "dishwasher": {
    title: "صيانة غسالات أطباق.. راحة إيدك بترجع تاني",
    desc: "بنحل مشاكل عدم سحب أو طرد المياه، والأصوات المزعجة، وضعف التنظيف. فنيين متخصصين عشان نضمن إن الأطباق تطلع بتلمع زي أول يوم.",
    faults: [
      "الأطباق بتطلع مش نظيفة، مجيرة أو عليها بواقي أكل",
      "الغسالة مبتطردش المية بعد نهاية الدورة",
      "رشاشات المية مسدودة أو مابتلفش",
      "صوت خبط عالي أو زنة غريبة وقت الغسيل",
      "الغسالة مابتسحبش مية خالص أو بتسحب ببطء",
      "ظهور لمبات الأعطال (Error Codes) منورة في الشاشة",
      "تسريب مية من باب الغسالة على الأرض",
      "درج المسحوق مبيفتحش أو مبيسحبش الزيت والملح",
      "الغسالة مبتسخنش المية",
      "الباب مبيقفلش أو السوستة بتاعته مقطوعة"
    ],
    extraServices: [
      "تطهير الفلاتر ومسارات الصرف لضمان عدم وجود روائح.",
      "ضبط وبرمجة دورات الغسيل لتقليل استهلاك مسحوق الغسيل.",
      "تغيير سوست ومفصلات الباب المكسورة."
    ],
    faqs: [
      { q: "الأطباق بتطلع مجيرة (عليها لون أبيض)؟", a: "ده غالباً بسبب نقص الملح أو زيت التلميع، أو إن الغسالة محتاجة تتظبط على درجة عسر المياه الخاصة بمنطقتك. كمان ممكن يكون رشاشات المية مسدودة." },
      { q: "الغسالة مابتسحبش المية خالص؟", a: "المشكلة بتكون إما في صمام دخول المياه (الصمام محروق)، أو إن فلتر الخرطوم مسدود برواسب، الفني بيطهر الفلتر أو يغير الصمام." }
    ],
    // تم التحديث هنا للصورة الجديدة الخاصة بغسالة الأطباق
    image: "image_8fc803.jpg",
    whatsappMessage: "عايز أحجز صيانة غسالة أطباق"
  }
};

// 2. ربط المتغيرات وإعداد نظام التوجيه (Routing) لتغيير الروابط
const linkHome = document.getElementById('link-home');
const linkServices = document.getElementById('link-services');
const linkBrands = document.getElementById('link-brands');
const linkAbout = document.getElementById('link-about');

const homeSection = document.getElementById('home-section');
const servicesSection = document.getElementById('services-section');
const brandsSection = document.getElementById('brands-section');
const brandDynamicPage = document.getElementById('brand-dynamic-page'); 
const aboutPageSection = document.getElementById('about-page-section');
const bookingSection = document.getElementById('booking-section');
const deviceDynamicPage = document.getElementById('device-dynamic-page'); 
const allNavLinks = document.querySelectorAll('.nav-links a:not(.nav-btn-book)');

function hideAllSections() {
  homeSection.style.display = 'none';
  servicesSection.style.display = 'none';
  if (brandsSection) brandsSection.style.display = 'none';
  if (brandDynamicPage) brandDynamicPage.style.display = 'none'; 
  aboutPageSection.style.display = 'none'; 
  bookingSection.style.display = 'none';
  deviceDynamicPage.style.display = 'none';
  
  allNavLinks.forEach(link => link.classList.remove('active'));

  if (document.getElementById('form-inputs-wrapper')) {
    document.getElementById('form-inputs-wrapper').style.display = 'block';
  }
  const oldSuccessMsg = document.getElementById('dynamic-success-box');
  if (oldSuccessMsg) {
    oldSuccessMsg.remove();
  }
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) {
    submitBtn.style.display = 'flex';
  }
}

// دالة الـ Routing
function handleRouting() {
  const hash = window.location.hash;
  hideAllSections();

  if (hash === '#services') {
    servicesSection.style.display = 'block';
    linkServices.classList.add('active');
  } 
  else if (hash === '#brands') {
    if (brandsSection) brandsSection.style.display = 'block';
    if (linkBrands) linkBrands.classList.add('active');
  }
  else if (hash.startsWith('#brand-')) {
    const brandName = decodeURIComponent(hash.replace('#brand-', ''));
    
    // وضع اسم الماركة في كل الأماكن داخل المقال الضخم
    document.querySelectorAll('.dyn-brand-name').forEach(el => {
      el.innerText = brandName;
    });
    
    // تجهيز رابط الواتساب بالماركة المطلوبة
    const dynBrandWhatsapp = document.getElementById('dyn-brand-whatsapp');
    if(dynBrandWhatsapp) {
      const whatsappBaseUrl = "https://wa.me/201100786152?text=";
      dynBrandWhatsapp.href = whatsappBaseUrl + encodeURIComponent(`عايز أحجز صيانة أجهزة ${brandName}`);
    }
    
    if (brandDynamicPage) brandDynamicPage.style.display = 'block'; 
  }
  else if (hash === '#about') {
    aboutPageSection.style.display = 'block';
    linkAbout.classList.add('active');
  } 
  else if (hash === '#booking') {
    bookingSection.style.display = 'flex';
  } 
  else if (hash.startsWith('#device-')) {
    const deviceKey = hash.replace('#device-', '');
    const selectedData = devicesData[deviceKey];

    if (selectedData) {
      document.getElementById('dyn-title').innerText = selectedData.title;
      document.getElementById('dyn-desc').innerText = selectedData.desc;
      document.getElementById('dyn-img').src = selectedData.image;
      
      const faultsList = document.getElementById('dyn-faults-list');
      faultsList.innerHTML = ''; 
      selectedData.faults.forEach(fault => {
        const li = document.createElement('li');
        li.innerText = fault;
        faultsList.appendChild(li);
      });

      const extrasContainer = document.getElementById('dyn-extras-container');
      const extrasList = document.getElementById('dyn-extras-list');
      if (extrasContainer && extrasList) {
        extrasList.innerHTML = '';
        if (selectedData.extraServices && selectedData.extraServices.length > 0) {
          selectedData.extraServices.forEach(ext => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fa-solid fa-check-double"></i> ${ext}`;
            extrasList.appendChild(li);
          });
          extrasContainer.style.display = 'block';
        } else {
          extrasContainer.style.display = 'none';
        }
      }

      const faqsContainer = document.getElementById('dyn-faqs-container');
      const faqsList = document.getElementById('dyn-faqs-list');
      if (faqsContainer && faqsList) {
        faqsList.innerHTML = '';
        if (selectedData.faqs && selectedData.faqs.length > 0) {
          selectedData.faqs.forEach(faq => {
            const faqDiv = document.createElement('div');
            faqDiv.className = 'dyn-faq-item';
            faqDiv.innerHTML = `
              <div class="dyn-faq-question">
                <h4>${faq.q}</h4>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div class="dyn-faq-answer">
                <p>${faq.a}</p>
              </div>
            `;
            faqsList.appendChild(faqDiv);
          });
          faqsContainer.style.display = 'block';

          const dynamicFaqQuestions = faqsList.querySelectorAll('.dyn-faq-question');
          dynamicFaqQuestions.forEach(question => {
            question.addEventListener('click', () => {
              const currentItem = question.parentElement;
              faqsList.querySelectorAll('.dyn-faq-item').forEach(item => {
                if(item !== currentItem) item.classList.remove('active');
              });
              currentItem.classList.toggle('active');
            });
          });
        } else {
          faqsContainer.style.display = 'none';
        }
      }
      
      const whatsappBaseUrl = "https://wa.me/201100786152?text=";
      const encodedMessage = encodeURIComponent(selectedData.whatsappMessage);
      document.getElementById('dyn-whatsapp').href = whatsappBaseUrl + encodedMessage;

      deviceDynamicPage.style.display = 'flex';
    } else {
      homeSection.style.display = 'block';
      linkHome.classList.add('active');
    }
  } 
  else {
    homeSection.style.display = 'block';
    linkHome.classList.add('active');
  }
  
  window.scrollTo(0, 0);
}

window.addEventListener('load', handleRouting);
window.addEventListener('hashchange', handleRouting);

linkHome.addEventListener('click', (e) => { e.preventDefault(); window.location.hash = '#home'; });
linkServices.addEventListener('click', (e) => { e.preventDefault(); window.location.hash = '#services'; });
if (linkBrands) { linkBrands.addEventListener('click', (e) => { e.preventDefault(); window.location.hash = '#brands'; }); }
linkAbout.addEventListener('click', (e) => { e.preventDefault(); window.location.hash = '#about'; });

const bookButtons = document.querySelectorAll('.trigger-booking');
bookButtons.forEach(btn => {
  btn.addEventListener('click', (e) => { e.preventDefault(); window.location.hash = '#booking'; });
});

const triggerDeviceButtons = document.querySelectorAll('.trigger-device');
triggerDeviceButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const deviceKey = this.getAttribute('data-device');
    window.location.hash = '#device-' + deviceKey;
  });
});

const triggerBrandButtons = document.querySelectorAll('.trigger-brand');
triggerBrandButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const brandName = this.getAttribute('data-brand');
    window.location.hash = '#brand-' + encodeURIComponent(brandName);
  });
});

const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const currentItem = question.parentElement;
    document.querySelectorAll('.faq-item').forEach(item => {
      if(item !== currentItem) {
        item.classList.remove('active');
      }
    });
    currentItem.classList.toggle('active');
  });
});

const bookingForm = document.getElementById('booking-form');
const submitBtn = document.getElementById('submit-btn');
const formInputsWrapper = document.getElementById('form-inputs-wrapper');

const scriptURL = 'https://script.google.com/macros/s/AKfycbwHk1c_1_y79eVfdtectYfrsjVeRTJJSW3XzzapCLUNYIKnf9crVWR4x0ekYDwoYJ8/exec';

bookingForm.addEventListener('submit', function(e) {
  e.preventDefault(); 
  
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.innerHTML = 'جاري إرسال الطلب... <i class="fa-solid fa-spinner fa-spin"></i>';
  submitBtn.style.opacity = '0.7';
  submitBtn.style.pointerEvents = 'none';

  const formData = new FormData(bookingForm);

  fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
    .then(() => {
      formInputsWrapper.style.display = 'none';
      submitBtn.style.display = 'none';
      submitBtn.innerHTML = originalBtnText;
      submitBtn.style.opacity = '1';
      submitBtn.style.pointerEvents = 'auto';

      if (!document.getElementById('dynamic-success-box')) {
        const successBox = document.createElement('div');
        successBox.id = 'dynamic-success-box';
        successBox.style.cssText = 'text-align: center; margin-top: 20px;';

        const successMsg = document.createElement('div');
        successMsg.innerHTML = '<i class="fa-solid fa-circle-check"></i> تم استلام طلبك بنجاح! هنتواصل معاك فوراً.';
        successMsg.style.cssText = 'background-color: #10b981; color: white; padding: 15px; border-radius: 8px; font-size: 18px; font-weight: 800; margin-bottom: 15px; display: flex; justify-content: center; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);';
        
        const callBtn = document.createElement('a');
        callBtn.href = 'tel:01100786152';
        callBtn.innerHTML = '<i class="fa-solid fa-phone"></i> اتصل الآن للتأكيد: 01100786152';
        callBtn.style.cssText = 'background-color: #1e293b; color: white; text-decoration: none; display: flex; justify-content: center; align-items: center; padding: 15px; border-radius: 8px; font-size: 18px; font-weight: 800; margin-bottom: 15px; gap: 10px; box-shadow: 0 4px 15px rgba(30, 41, 59, 0.2);';
        
        const whatsappBtn = document.createElement('a');
        whatsappBtn.href = 'https://wa.me/201100786152?text=السلام عليكم، قمت بإرسال طلب صيانة من الموقع وأريد التأكيد.';
        whatsappBtn.target = '_blank';
        whatsappBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> تواصل معنا واتساب';
        whatsappBtn.style.cssText = 'background-color: #25d366; color: white; text-decoration: none; display: flex; justify-content: center; align-items: center; padding: 15px; border-radius: 8px; font-size: 18px; font-weight: 800; gap: 10px; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.2);';

        successBox.appendChild(successMsg);
        successBox.appendChild(callBtn);
        successBox.appendChild(whatsappBtn);
        
        bookingForm.appendChild(successBox);
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      submitBtn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> حدث خطأ، حاول مرة أخرى';
      submitBtn.style.background = "#ef4444";
      submitBtn.style.opacity = '1';
      submitBtn.style.pointerEvents = 'auto';
      
      setTimeout(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.style.background = "#009688";
      }, 3000);
    });
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    navbar.style.padding = '10px 5%';
    navbar.style.transition = 'all 0.3s ease';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    navbar.style.padding = '15px 5%';
  }
});

const footerLinks = document.querySelectorAll('.footer-nav-link');
footerLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('data-target');
    if (target === 'services') {
      window.location.hash = '#services';
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  const animatedElements = document.querySelectorAll('.feat-card, .service-card-lg, .service-card-sm, .detailed-card, .team-card, .faq-item, .about-text, .about-image, .warranty-banner, .brand-card');
  
  animatedElements.forEach((el, index) => {
    el.classList.add('reveal-hidden');
    if(index % 3 === 1) el.classList.add('delay-1');
    if(index % 3 === 2) el.classList.add('delay-2');
  });

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-show');
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => scrollObserver.observe(el));
});