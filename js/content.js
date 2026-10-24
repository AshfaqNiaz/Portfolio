/* Image paths: replace a file in /images with a new one of the same name, or edit the list. */
const IMG={
 "p": [
  "images/profile/pro-01.jpg",
  "images/profile/pro-02.jpg",
  "images/profile/pro-03.jpg",
  "images/profile/pro-04.jpg",
  "images/profile/pro-05.jpg"
 ],
 "b": [
  "images/books/boo-01.jpg",
  "images/books/boo-02.jpg",
  "images/books/boo-03.jpg",
  "images/books/boo-04.jpg",
  "images/books/boo-05.jpg",
  "images/books/boo-06.jpg",
  "images/books/boo-07.jpg",
  "images/books/boo-08.jpg",
  "images/books/boo-09.jpg",
  "images/books/boo-10.jpg",
  "images/books/boo-11.jpg",
  "images/books/boo-12.jpg"
 ],
 "m": [
  "images/media/med-01.jpg",
  "images/media/med-02.jpg",
  "images/media/med-03.jpg",
  "images/media/med-04.jpg",
  "images/media/med-05.jpg",
  "images/media/med-06.jpg",
  "images/media/med-07.jpg",
  "images/media/med-08.jpg",
  "images/media/med-09.jpg",
  "images/media/med-10.jpg",
  "images/media/med-11.jpg",
  "images/media/med-12.jpg",
  "images/media/med-13.jpg",
  "images/media/med-14.jpg",
  "images/media/med-15.jpg",
  "images/media/med-16.jpg"
 ],
 "g": [
  "images/magazines/mag-01.jpg",
  "images/magazines/mag-02.jpg",
  "images/magazines/mag-03.jpg",
  "images/magazines/mag-04.jpg",
  "images/magazines/mag-05.jpg",
  "images/magazines/mag-06.jpg",
  "images/magazines/mag-07.jpg",
  "images/magazines/mag-08.jpg",
  "images/magazines/mag-09.jpg",
  "images/magazines/mag-10.jpg",
  "images/magazines/mag-11.jpg",
  "images/magazines/mag-12.jpg",
  "images/magazines/mag-13.jpg",
  "images/magazines/mag-14.jpg",
  "images/magazines/mag-15.jpg",
  "images/magazines/mag-16.jpg",
  "images/magazines/mag-17.jpg",
  "images/magazines/mag-18.jpg",
  "images/magazines/mag-19.jpg",
  "images/magazines/mag-20.jpg",
  "images/magazines/mag-21.jpg",
  "images/magazines/mag-22.jpg"
 ]
};
/* ===== EASY CUSTOMISATION: edit text below. Every item has an en (English) and ur (Urdu) version. ===== */
const SITE={
 name:{en:"Ashfaq Niaz",ur:"اشفاق نیاز"},
 roles:{en:"Urdu Educator · Author · Journalist · Historian of Sialkot",ur:"معلّم اردو • مصنف • صحافی • مؤرخِ سیالکوٹ"},
 badge:{en:"Author of Tareekh-e-Sialkot (Gold Medalist, Sitara-e-Pakistan)",ur:"مؤلف تاریخِ سیالکوٹ (گولڈ میڈلسٹ، ستارہ پاکستان)"},
 tagline:{en:"Serving Sialkot and the Urdu language through history, poetry and journalism.",ur:"تاریخ، شاعری اور صحافت کے ذریعے سیالکوٹ اور اردو زبان کی خدمت۔"},
 slogan:{en:"Pakistan Zindabad",ur:"پاکستان زندہ باد"},
 intro:[
  {en:"Ashfaq Niaz (real name Ashfaq Ahmad) is a Sialkot-based Urdu teacher, author and journalist. He holds an M.Phil in Urdu from the University of Sialkot and an M.A. in Urdu.",ur:"اشفاق نیاز (اصل نام: اشفاق احمد) سیالکوٹ سے تعلق رکھنے والے اردو کے معلّم، مصنف اور صحافی ہیں۔ انہوں نے یونیورسٹی آف سیالکوٹ سے ایم فل اردو اور ایم اے اردو کی ڈگریاں حاصل کیں۔"},
  {en:"His monumental Tareekh-e-Sialkot runs to 1,000 pages — the first voluminous historical book on the city in half a century — and is approved by the Higher Education Wing, Education Department, Government of Punjab.",ur:"ان کی ضخیم کتاب «تاریخِ سیالکوٹ» ایک ہزار صفحات پر مشتمل ہے، جو نصف صدی میں شہر کی پہلی ضخیم تاریخی کتاب ہے اور ایجوکیشن ڈیپارٹمنٹ ہائر ایجوکیشن ونگ حکومتِ پنجاب سے منظور شدہ ہے۔"},
  {en:"Beyond history, his pen reaches naat, ghazal, the saints of Sialkot, and journalistic essays and columns. He also served as Special Representative of Radio Pakistan 101 FM Sialkot.",ur:"تاریخ کے علاوہ ان کا قلم نعت، غزل، اولیائے سیالکوٹ اور صحافتی مضامین و کالموں تک پھیلا ہوا ہے۔ وہ ریڈیو پاکستان 101 FM سیالکوٹ کے نمائندہ خصوصی بھی رہ چکے ہیں۔"}],
 stats:[[ "1000","pages","Tareekh-e-Sialkot","صفحات","تاریخِ سیالکوٹ"],["14","works","Books & reports","تصانیف","کتب و رپورٹس"],["M.Phil","Urdu","Univ. of Sialkot","ایم فل","اردو"],["101 FM","Radio","Pakistan, Sialkot","ریڈیو","پاکستان سیالکوٹ"]],
 facts:[[ "Pen name","قلمی نام","Ashfaq Niaz","اشفاق نیاز"],["Real name","اصل نام","Ashfaq Ahmad","اشفاق احمد"],["Father","ولدیت","Chaudhry Muhammad Ashraf","چوہدری محمد اشرف"],["Education","تعلیم","M.Phil Urdu, M.A. Urdu","ایم فل اردو، ایم اے اردو"],["City","شہر","Sialkot, Pakistan","سیالکوٹ، پاکستان"]],
 present:{en:"Vice Principal, Aspire Group of Colleges (Ghousia Campus), Eminabad Road, Sialkot",ur:"وائس پرنسپل ایسپائر گروپ آف کالجز (غوثیہ کیمپس)، ایمن آباد روڈ، سیالکوٹ"},
 career:[
  ["2013 – 2015",{en:"Lecturer Urdu (CTI), Government Murray College Sialkot",ur:"لیکچرار اردو (CTI)، گورنمنٹ مرے کالج سیالکوٹ"}],
  ["Oct 2015 – 2017",{en:"Lecturer Urdu, Shadab Girls College Sialkot",ur:"لیکچرار اردو، شاداب گرلز کالج سیالکوٹ"}],
  ["Aug 2017 – Aug 2020",{en:"Urdu Department, Punjab College Pasrur",ur:"شعبہ اردو، پنجاب کالج پسرور"}],
  ["Aug 2020 – May 2023",{en:"Head of Urdu Department, Punjab College Kobay Chak Campus",ur:"صدر شعبہ اردو، پنجاب کالج کوبے چک کیمپس"}],
  ["2023 – 30 Jun 2026",{en:"Head of Urdu Department (HOD), Punjab College City Housing Campus, Sialkot",ur:"صدر شعبہ اردو (HOD)، پنجاب کالج سٹی ہاؤسنگ کیمپس سیالکوٹ"}],
  ["Past",{en:"Special Representative, Radio Pakistan 101 FM Sialkot",ur:"سابق نمائندہ خصوصی، ریڈیو پاکستان 101 FM سیالکوٹ"}]],
 /* i = index into IMG.b (book covers) */
 books:[
  {i:1,y:"2004",c:["History","تاریخ"],en:"Tareekh-e-Sialkot",ur:"تاریخِ سیالکوٹ",d:{en:"1,000 pages; the first voluminous history of the city in half a century, approved by the Higher Education Wing, Govt. of Punjab.",ur:"ایک ہزار صفحات؛ نصف صدی میں شہر کی پہلی ضخیم تاریخی کتاب، ہائر ایجوکیشن ونگ حکومتِ پنجاب سے منظور شدہ۔"}},
  {i:0,y:"",c:["History","تاریخ"],en:"Tareekh-e-Sialkot (alternate cover)",ur:"تاریخِ سیالکوٹ (دوسرا سرورق)",d:{en:"Another cover of the history of Sialkot.",ur:"تاریخِ سیالکوٹ کا دوسرا سرورق۔"}},
  {i:11,y:"2023",c:["Biography","شخصیت"],en:"Professor Asghar Saudai — National Hero",ur:"پروفیسر اصغر سودائی۔ قومی ہیرو",d:{en:"The first book published in Sialkot's 80-year history on Professor Asghar Saudai, creator of the slogan \"Pakistan ka matlab kya, La ilaha illallah\". 600 pages, four-colour cover. Published by Niaz Academy Sialkot. Price: Rs. 2,500.",ur:"سیالکوٹ کی 80 سالہ تاریخ میں پروفیسر اصغر سودائی (خالقِ نعرۂ پاکستان) پر شائع ہونے والی پہلی کتاب۔ 600 صفحات، فور کلر ٹائٹل۔ ناشر: نیاز اکیڈمی سیالکوٹ۔ قیمت: 2500 روپے۔"}},
  {i:10,y:"",c:["Saints","اولیاء"],en:"Auliya-e-Sialkot",ur:"اولیائے سیالکوٹ",d:{en:"On the saints (Auliya-e-Kiram) of Sialkot.",ur:"اولیائے کرام کے بارے میں۔"}},
  {i:9,y:"",c:["Saints","اولیاء"],en:"Roshan Minar",ur:"روشن مینار",d:{en:"On the saints (Auliya-e-Kiram).",ur:"اولیائے کرام کے بارے میں۔"}},
  {i:3,y:"2001",c:["Naat","نعت"],en:"Aqeedat",ur:"عقیدت",d:{en:"A collection of naat.",ur:"نعتیہ کلام۔"}},
  {i:7,y:"",c:["Naat","نعت"],en:"Chiragh-e-Haram",ur:"چراغِ حرم",d:{en:"A collection of naat.",ur:"نعتیہ کلام۔"}},
  {i:5,y:"2006",c:["Ghazal","غزل"],en:"Zakhm-e-Wafa",ur:"زخمِ وفا",d:{en:"A collection of ghazals.",ur:"غزلیات۔"}},
  {i:4,y:"1999",c:["Ghazal","غزل"],en:"Jaan-e-Ada",ur:"جانِ ادا",d:{en:"A collection of ghazals.",ur:"غزلیات۔"}},
  {i:2,y:"2000",c:["Ghazal","غزل"],en:"Gulab Gulab",ur:"گلاب گلاب",d:{en:"A collection of ghazals.",ur:"غزلیات۔"}},
  {i:6,y:"2001",c:["Journalism","صحافت"],en:"Uran",ur:"اُڑان",d:{en:"Journalistic essays and columns.",ur:"صحافتی مضامین و کالم۔"}},
  {i:8,y:"",c:["Journalism","صحافت"],en:"Zarb-e-Qalam",ur:"ضربِ قلم",d:{en:"The silver jubilee of journalism.",ur:"صحافت کی سلور جوبلی۔"}}],
 otherBooks:[
  {en:"Apni Pehchan (biography)",ur:"اپنی پہچان (بائیو گرافی)"},
  {en:"District Government's three-year performance review report, 2004",ur:"ڈسٹرکٹ گورنمنٹ کی تین سالہ کارکردگی… جائزہ رپورٹ 2004ء"},
  {en:"Population Welfare Department performance review report, 2007",ur:"محکمہ بہبودِ آبادی کی کارکردگی… جائزہ رپورٹ 2007ء"}],
 /* captions: index into IMG.g (magazines) / IMG.m (media). Photos without captions are simply shown. */
 gcap:{12:{en:"Daily Jang Lahore, Sunday Magazine — special article on Sialkot Fort, 23 June 2019",ur:"روزنامہ جنگ لاہور سنڈے میگزین — سیالکوٹ قلعہ کے حوالے سے خصوصی مضمون، 23 جون 2019"}},
 mcap:{6:{en:"Broadcasting reporter, Radio Pakistan Sialkot (outdoor)",ur:"براڈکاسٹنگ رپورٹر، ریڈیو پاکستان سیالکوٹ (آؤٹ ڈور)"},14:{en:"Recording for Sama TV at a historical site of Sialkot",ur:"سیالکوٹ کے تاریخی مقام پر سما چینل کے لیے ریکارڈنگ"},15:{en:"Interview at Radio Pakistan FM 101 Sialkot",ur:"ریڈیو پاکستان ایف ایم 101 سیالکوٹ میں انٹرویو"}},
 videos:[
  {u:"https://www.facebook.com/share/p/19rVHBr7Vs/",img:"images/videos/vid-01.jpg",t:{en:"Speech at Professor Asghar Saudai's 17th Death Anniversary",ur:"پروفیسر اصغر سودائی کی 17ویں برسی پر خطاب"},d:{en:"At the Sialkot Chamber of Commerce, in an event by Pakistan Literary Society for the 17th death anniversary of Professor Asghar Saudai, creator of the slogan «Pakistan ka matlab kya, La ilaha illallah», author Ashfaq Niaz, central president of Pakistan Literary Society, speaks about his book «Professor Asghar Saudai — National Hero», the first book written on Asghar Saudai across Pakistan.",ur:"پاکستان لٹریری سوسائٹی کے زیر اہتمام خالق نعرہ پاکستان پروفیسر اصغر سودائی کی 17ویں برسی کے موقع پر سیالکوٹ چیمبر آف کامرس میں منعقدہ تقریب میں مصنف اشفاق نیاز، مرکزی صدر پاکستان لٹریری سوسائٹی، پروفیسر اصغر سودائی پر پاکستان بھر میں لکھی گئی پہلی کتاب «پروفیسر اصغر سودائی قومی ہیرو» پر اظہار خیال کرتے ہوئے۔"}},
  {u:"https://www.facebook.com/share/v/1EDe9mYjhX/",img:"images/videos/vid-02.jpg",t:{en:"Poem on Asghar Saudai — 17th Death Anniversary",ur:"اصغر سودائی کی برسی پر نظم"},d:{en:"At the same event at the Sialkot Chamber of Commerce, Ashfaq Niaz presents a poem he wrote on Professor Asghar Saudai, from the book «Professor Asghar Saudai — National Hero».",ur:"اسی تقریب میں سیالکوٹ چیمبر آف کامرس میں اشفاق نیاز کتاب «پروفیسر اصغر سودائی قومی ہیرو» سے پروفیسر اصغر سودائی پر لکھی ہوئی اپنی ایک نظم پیش کرتے ہوئے۔"}},
  {u:"https://www.facebook.com/share/v/1CQcN4FxCJ/",img:"images/videos/vid-03.jpg",t:{en:"Video: Professor Asghar Saudai — National Hero",ur:"ویڈیو: پروفیسر اصغر سودائی۔ قومی ہیرو"},d:{en:"A video about the book «Professor Asghar Saudai — National Hero» by Ashfaq Niaz, published by Niaz Academy Sialkot.",ur:"اشفاق نیاز کی کتاب «پروفیسر اصغر سودائی قومی ہیرو» کے حوالے سے ویڈیو، شائع کردہ نیاز اکیڈمی سیالکوٹ۔"}},
  {u:"https://www.facebook.com/share/v/19XesGVtXD/",img:"images/videos/vid-04.jpg",t:{en:"Special Interview on Sialkot Plus Channel",ur:"سیالکوٹ پلس چینل پر خصوصی انٹرویو"},d:{en:"The renowned author and researcher of the City of Iqbal, Ashfaq Niaz, on his great achievement «Professor Asghar Saudai — National Hero», the first research book in the last 80 years across Pakistan on the creator of the slogan of Pakistan.",ur:"شہر اقبال کے نامور مصنف و محقق اشفاق نیاز کا عظیم کارنامہ «پروفیسر اصغر سودائی۔ قومی ہیرو»، گزشتہ 80 سال میں پاکستان بھر میں خالق نعرہ پاکستان پر لکھی گئی پہلی تحقیقی کتاب۔ سیالکوٹ پلس چینل پر خصوصی انٹرویو۔"}},
  {u:"https://www.facebook.com/share/v/19VmoihMfP/",img:"images/videos/vid-05.jpg",t:{en:"Book Launch: Poem on Asghar Saudai",ur:"تقریبِ رونمائی: اصغر سودائی پر نظم"},d:{en:"At the launch of «Professor Asghar Saudai — National Hero», the first book on him in Sialkot's 80-year history, Ashfaq Niaz recites his poem at the Sialkot Chamber of Commerce and Industry hall, in the presence of Chamber President Malik Abdul Ghafoor, Capt. (retd) Atta Muhammad Khan (Provincial Ombudsman, Sialkot Region), industrialist Dr. Khurram Anwar Khawaja, Dr. Suhail Asghar Appal (son of Professor Asghar Saudai), Khalid Latif (Chief Editor, City Mag Sialkot) and the audience.",ur:"سیالکوٹ کی 80 سالہ تاریخ میں اصغر سودائی پر لکھی گئی پہلی کتاب «پروفیسر اصغر سودائی۔ قومی ہیرو» کی تقریب رونمائی میں مصنف اشفاق نیاز اپنی نظم سیالکوٹ چیمبر آف کامرس اینڈ انڈسٹری کے ہال میں صدر چیمبر ملک عبدالغفور، کیپٹن ریٹائرڈ عطا محمد خان صوبائی محتسب ریجن سیالکوٹ، ڈاکٹر خرم انور خواجہ، ڈاکٹر سہیل اصغر اپل، خالد لطیف چیف ایڈیٹر سٹی میگ سیالکوٹ اور حاضرین کی موجودگی میں پیش کرتے ہوئے۔"}}],
 contact:{fb:"https://www.facebook.com/p/Ashfaq-Niaz-100063651260007/",phone:"03054940422",email:"ashfaqniazskt@gmail.com",addr:{en:"Chaudhry House, Rehmanpura, Pervaiz Mahal Cinema Street, Mianapura, Sialkot",ur:"چوہدری ہاؤس، رحمان پورہ، گلی پرویز محل سنیما، میانہ پورہ، سیالکوٹ"}}
};
const SUPA={url:"https://rqfoztctsjrtiqdnhoki.supabase.co",key:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZm96dGN0c2pydGlxZG5ob2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4MzcwMjcsImV4cCI6MjEwODQxMzAyN30.Yxg5BpgRftdeaTSqobx9um95DNxD1Kz9ic0lhAMCdEs",email:"ashfaqniazskt@gmail.com"}; /* DATABASE: paste your Supabase Project URL, anon key and the admin e-mail here (see README). Empty = old no-database mode. */
const MAXALL=2500; /* most items kept in the whole database; when full, the oldest are deleted automatically */
const MAXPER=500; /* most pictures kept per tab (added from Admin). Oldest are removed beyond this. */
IMG.s=[];IMG.h=[];SITE.scap={};SITE.hcap={};
const UI={
 tabs:[["home","Home","ہوم"],["bio","Biography","تعارف"],["books","Books","کتب"],["mags","Magazines & Newspapers","رسائل و اخبارات"],["media","Media","میڈیا"],["videos","Videos","ویڈیوز"],["self","Self Photo","ذاتی تصاویر"],["hist","Historical Pictures","تاریخی تصاویر"],["contact","Contact","رابطہ"],["admin","Admin","ایڈمن"]],
 h:{bio:["Biography","تعارف"],books:["Books","کتب"],mags:["Magazines & Newspapers","رسائل و اخبارات"],media:["Media Gallery","میڈیا گیلری"],videos:["Videos","ویڈیوز"],self:["Self Photo","ذاتی تصاویر"],hist:["Historical Pictures","تاریخی تصاویر"],admin:["Admin","ایڈمن"],contact:["Contact","رابطہ"],career:["Career","پیشہ ورانہ سفر"],explore:["Explore","مزید دیکھیں"],other:["Other works","دیگر تصانیف"],now:["Current position","موجودہ حیثیت"]},
 sub:{books:["Works of history, poetry, spirituality and journalism","تاریخ، شاعری، روحانیت اور صحافت کی تصانیف"],mags:["Newspaper and magazine features about his work","اخبارات و رسائل میں شائع ہونے والی تحریریں اور انٹرویوز"],media:["Radio, television and public engagements","ریڈیو، ٹیلی ویژن اور تقریبات"],bio:["",""],videos:["Book launch, speeches and interviews","رونمائی، خطابات اور انٹرویوز"],self:["Personal photographs of Ashfaq Niaz","اشفاق نیاز کی ذاتی تصاویر"],hist:["Rare and historical pictures","نایاب اور تاریخی تصاویر"],admin:["For Professor Ashfaq Niaz only","صرف پروفیسر اشفاق نیاز کے لیے"],contact:["Reach out to the author","مصنف سے رابطہ کریں"]},
 empty:["Pictures will be added here soon","تصاویر جلد یہاں شامل کی جائیں گی"],adm:{user:["Username","صارف نام"],pass:["Password","پاس ورڈ"],login:["Login","لاگ اِن"],bad:["Wrong username or password","صارف نام یا پاس ورڈ غلط ہے"],welcome:["Welcome, Ashfaq Niaz","خوش آمدید، اشفاق نیاز"],logout:["Logout","لاگ آؤٹ"],type:["What do you want to add?","کیا شامل کرنا چاہتے ہیں؟"],tBook:["Book","کتاب"],tMag:["Magazine / Newspaper","رسالہ / اخبار"],tMedia:["Media photo","میڈیا تصویر"],tVid:["Video","ویڈیو"],tSelf:["Self Photo","ذاتی تصویر"],tHist:["Historical Picture","تاریخی تصویر"],ten:["Title (English)","عنوان (انگریزی)"],tur:["Title (Urdu)","عنوان (اردو)"],den:["Description (English)","تفصیل (انگریزی)"],dur:["Description (Urdu)","تفصیل (اردو)"],year:["Year","سال"],cat:["Category","زمرہ"],link:["Facebook / video link","فیس بک / ویڈیو لنک"],img:["Picture (book cover / photo / video preview)","تصویر (سرورق / فوٹو / ویڈیو پریویو)"],add:["Add","شامل کریں"],added:["Added successfully","کامیابی سے شامل ہو گیا"],need:["Please enter a title and choose the picture (video: a link starting with https://)","براہ کرم عنوان لکھیں اور تصویر منتخب کریں (ویڈیو: https:// سے شروع ہونے والا لنک)"],list:["Items you added","آپ کی شامل کردہ اشیاء"],del:["Delete","حذف کریں"],exp:["Download update zip","اپ ڈیٹ زپ ڈاؤن لوڈ کریں"],dberr:["Could not save. Please log in again and try once more.","محفوظ نہیں ہو سکا۔ دوبارہ لاگ اِن کر کے کوشش کریں۔"],dbhelp:["Everything you add is saved permanently online and shows on the website for everyone straight away.","آپ جو کچھ شامل کریں گے وہ مستقل طور پر آن لائن محفوظ ہو جائے گا اور فوراً سب کو ویب سائٹ پر نظر آئے گا۔"],pruned:["Oldest items beyond the limit were removed from the site","حد سے زیادہ پرانی اشیاء ویب سائٹ سے ہٹا دی گئیں"],zerr:["Could not create the zip. Check your internet connection and try again.","زپ نہیں بن سکی۔ انٹرنیٹ چیک کر کے دوبارہ کوشش کریں۔"],help:["New items are shown on this browser straight away. To show them to everyone: download the update zip, unzip it, and upload its images and data folders to the GitHub repository (they merge with the existing folders).","نئی اشیاء اسی براؤزر میں فوراً نظر آتی ہیں۔ سب کو دکھانے کے لیے اپ ڈیٹ زپ ڈاؤن لوڈ کریں، اسے کھولیں، اور اس کے images اور data فولڈر GitHub ریپازٹری میں اپ لوڈ کر دیں (وہ پرانے فولڈروں میں شامل ہو جائیں گے)۔"]},
 btn:{read:["Read biography","تعارف پڑھیں"],books:["View books","کتب دیکھیں"],email:["Email","ای میل"],call:["Call","فون"],wa:["WhatsApp","واٹس ایپ"],fb:["Facebook","فیس بک"],watch:["Watch on Facebook","فیس بک پر دیکھیں"],addr:["Address","پتہ"]}
};
