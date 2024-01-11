import { Favorite } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Box, Divider, Grid, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const jobitems = [
  {
    id: 3,
    tenCongViec:
      'I will design minimal logo with complete corporate brand identity',
    danhGia: 66,
    giaTien: 10,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv3.jpg',
    moTa: '\nHi There,\r\n\r\n\r\n\r\nHave You Been Looking for a Brand Logo with Complete Corporate Brand Identity?\r\n\r\n\r\n\r\nHi, I am Talha, a Passionate Professional Graphic Designer designing brand logos & brand Identity for many Years, I have successfully designed brand logos with the complete corporate brand identity for different brands around the world.\r\n\r\n\r\n\r\nI also would love to do demanded designs, Just leave your request, I will respond instantly.',
    maChiTietLoaiCongViec: 3,
    moTaNgan:
      'US$10\r\nSave up to 20% with Subscribe to Save\r\nBASIC CORPORATE BRAND IDENTITY Business Card + Letterhead + Compliment Design\r\n\r\n2 Days Delivery\r\nUnlimited Revisions\r\nIncludes logo design\r\nLogo usage guidelines\r\nColor palette\r\nTypography guidelines',
    saoCongViec: 4,
  },
  {
    id: 4,
    tenCongViec: 'I will do modern logo design with premium brand identity',
    danhGia: 422,
    giaTien: 35,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv4.jpg',
    moTa: '\nHi There,\r\n\r\n\r\n\r\nHave You Been Looking for a Brand Logo with Complete Corporate Brand Identity?\r\n\r\n\r\n\r\nHi, I am Talha, a Passionate Professional Graphic Designer designing brand logos & brand Identity for many Years, I have successfully designed brand logos with the complete corporate brand identity for different brands around the world.\r\n\r\n\r\n\r\nI also would love to do demanded designs, Just leave your request, I will respond instantly.',
    maChiTietLoaiCongViec: 3,
    moTaNgan:
      'US$10\r\nSave up to 20% with Subscribe to Save\r\nBASIC CORPORATE BRAND IDENTITY Business Card + Letterhead + Compliment Design\r\n\r\n2 Days Delivery\r\nUnlimited Revisions\r\nIncludes logo design\r\nLogo usage guidelines\r\nColor palette\r\nTypography guidelines',
    saoCongViec: 3,
  },
  {
    id: 5,
    tenCongViec: 'I will create an effective instagram hashtag growth strategy',
    danhGia: 522,
    giaTien: 20,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv5.jpg',
    moTa: '\r\nHi There,\r\n\r\n\r\n\r\nHave You Been Looking for a Brand Logo with Complete Corporate Brand Identity?\r\n\r\n\r\n\r\nHi, I am Talha, a Passionate Professional Graphic Designer designing brand logos & brand Identity for many Years, I have successfully designed brand logos with the complete corporate brand identity for different brands around the world.\r\n\r\n\r\n\r\nI also would love to do demanded designs, Just leave your request, I will respond instantly.',
    maChiTietLoaiCongViec: 5,
    moTaNgan:
      '#40 + organic growth strategy\r\nUS$20\r\n🎯 40# + Personalized Growth Strategy + Hashtag Guide + News List & Tools + Account Optimization\r\n\r\n3 Days Delivery\r\nPage/channel evaluation\r\nAction plan',
    saoCongViec: 5,
  },
  {
    id: 6,
    tenCongViec: 'I will design professional social media post',
    danhGia: 55,
    giaTien: 30,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv6.jpg',
    moTa: "\r\nWelcome to our Social Media Posts Design.\r\n\r\nWe understand the client's needs and assist through the whole process with professionalism.\r\n\r\nWe are experienced in creating social media graphic content for clients all over the world, for business, products, and personal brands.\r\n\r\nWe can assist you to improve the appearance of your social media presence.",
    maChiTietLoaiCongViec: 5,
    moTaNgan:
      'US$30\r\nSave up to 10% with Subscribe to Save\r\nBASIC 3 unique social media posts with the most attractive content that will transform your business.\r\n\r\n2 Days Delivery\r\n3 social posts created',
    saoCongViec: 2,
  },
  {
    id: 7,
    tenCongViec:
      'I will setup facebook and instagram ads campaign to boost your business',
    danhGia: 53,
    giaTien: 25,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv7.jpg',
    moTa: 'Do you need a marketer with EXTREMELY WIDE experience in facebook and instagram ads? Well, you have come to the right place!\r\n\r\n\r\n\r\nI would love to boost your sales and revenue and Ensure Your Business Growth with Expertise in facebook and instagram ads. I will help you to get targeted customers and generate more QUALIFIED TRAFFIC, Leads, Message To make more sales.\r\n\r\nI will provide you a target audience with interests, behaviors, demographics and keywords\r\n\r\n\r\n\r\nMy goal is to offer you the best service and deliver amazing work so please reach me out.\r\n\r\n\r\n\r\nIn this gig You Will Get',
    maChiTietLoaiCongViec: 6,
    moTaNgan:
      'Starting\r\nUS$25\r\n1 Campaign setup, multiple adsets and ads + Setup Marketing Goals+ Audience Research\r\n\r\n3 Days Delivery\r\nTarget audience research\r\nKeyword research\r\nAutomated feed ads (DPA)\r\nAd content creation\r\nAds analytical report\r\n3 days',
    saoCongViec: 2,
  },
  {
    id: 8,
    tenCongViec: 'I will do linkedin marketing and manage ads campaign',
    danhGia: 48,
    giaTien: 10,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv8.jpg',
    moTa: 'I am a professional social media marketing specialist.\r\n\r\nI have been working on LinkedIn Marketing, LinkedIn ads and provide quality services to my clients.\r\n\r\n\r\n\r\nLinkedin marketing is the way that provides you with an effective way to increase your business locally and globally.',
    maChiTietLoaiCongViec: 6,
    moTaNgan:
      'LinkedIn page\r\nUS$10\r\nLinkedIn business page create and setup\r\n\r\n3 Days Delivery\r\nTarget audience research\r\nAutomated feed ads (DPA)\r\nAds analytical report\r\n3 days',
    saoCongViec: 5,
  },
  {
    id: 9,
    tenCongViec: 'I will write simple and interesting content for your website',
    danhGia: 228,
    giaTien: 30,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv9.jpg',
    moTa: 'My name is Kristina; I am not only a freelance writer but a professional basketball player too. I am currently jumping around Europe taking on some fun contracts and absorbing a bit of life along the way. I have had a passion for writing since I was a child and have been diving deeper into that passion over the last five years. I really enjoy writing about the immense number of random subjects asked of me (anything from travel, food, women empowerment and health to insects, art, professions and current events) and bring a flair for simple reading and easily digestible knowledge. My biggest pet peeve is writers who are supposed to create content for the everyday person, but end up making articles so overly',
    maChiTietLoaiCongViec: 8,
    moTaNgan:
      '500 word article\r\nUS$30\r\nThis order includes a 500 word article based on your chosen topic.\r\n\r\n2 Days Delivery\r\n1 Revision\r\nUp to 500 words',
    saoCongViec: 5,
  },
  {
    id: 10,
    tenCongViec: 'I will write bulk SEO articles and blog post',
    danhGia: 91,
    giaTien: 5,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv10.jpg',
    moTa: 'MANDATORY REQUIREMENT: To ensure QUALITY is maintained, please send me a message BEFORE placing your order.\r\n\r\n\r\n\r\nI am providing my services at discounted rates to grow my account. You will never get top-rated service anywhere else!',
    maChiTietLoaiCongViec: 8,
    moTaNgan:
      '1000 Words\r\nUS$5\r\n2x500 words or 1x1000 Words articles\r\n\r\n1 Day Delivery\r\nUp to 1,000 words\r\nSEO keywords',
    saoCongViec: 2,
  },
  {
    id: 13,
    tenCongViec: 'I will do linkedin marketing and manage ads campaign',
    danhGia: 48,
    giaTien: 10,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv13.jpg',
    moTa: 'I am a professional social media marketing specialist.\r\n\r\nI have been working on LinkedIn Marketing, LinkedIn ads and provide quality services to my clients.\r\n\r\n\r\n\r\nLinkedin marketing is the way that provides you with an effective way to increase your business locally and globally.',
    maChiTietLoaiCongViec: 11,
    moTaNgan:
      'LinkedIn page\r\nUS$10\r\nLinkedIn business page create and setup\r\n\r\n3 Days Delivery\r\nTarget audience research\r\nAutomated feed ads (DPA)\r\nAds analytical report\r\n3 days',
    saoCongViec: 2,
  },
  {
    id: 14,
    tenCongViec:
      'I will setup facebook and instagram ads campaign to boost your business',
    danhGia: 53,
    giaTien: 25,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv14.jpg',
    moTa: 'Do you need a marketer with EXTREMELY WIDE experience in facebook and instagram ads? Well, you have come to the right place!\r\n\r\n\r\n\r\nI would love to boost your sales and revenue and Ensure Your Business Growth with Expertise in facebook and instagram ads. I will help you to get targeted customers and generate more QUALIFIED TRAFFIC, Leads, Message To make more sales.\r\n\r\nI will provide you a target audience with interests, behaviors, demographics and keywords',
    maChiTietLoaiCongViec: 11,
    moTaNgan:
      'Starting\r\nUS$25\r\n1 Campaign setup, multiple adsets and ads + Setup Marketing Goals+ Audience Research\r\n\r\n3 Days Delivery\r\nTarget audience research\r\nKeyword research\r\nAutomated feed ads (DPA)\r\nAd content creation\r\nAds analytical report\r\n3 days',
    saoCongViec: 4,
  },
  {
    id: 15,
    tenCongViec:
      'I will audit and optimize google ads adwords ppc campaign search',
    danhGia: 26,
    giaTien: 10,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv15.jpg',
    moTa: 'Do you want to get more profit from your Google Ads (Adwords) campaign? I will audit & optimize your Google Ads search campaign\r\n\r\n\r\n\r\n★ What you’ll get? ★\r\n\r\n \r\n\r\nMy report will include step-by-step optimization in Google Sheet & PDF Review. The report is 20-30 pages long with detailed recommendations for improvement.',
    maChiTietLoaiCongViec: 12,
    moTaNgan:
      'US$10\r\nSave up to 10% with Subscribe to Save\r\nMini-audit ⭐ 1 campaign, 1 ad - Audit 1 Ad group - PDF Review & Google Sheet - Optimize Keywords, Ads, Bid Strategy and other\r\n\r\n2 Days Delivery\r\nAccount audit\r\n1 audience targeting suggestion\r\n1 bidding & budget suggestion',
    saoCongViec: 1,
  },
  {
    id: 16,
    tenCongViec:
      'I will setup shopping ads and fix google merchant center suspension',
    danhGia: 33,
    giaTien: 10,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv16.jpg',
    moTa: 'Please explain your issue and discuss it before placing the order.\r\n\r\nYou Are Looking Google Merchant Center Suspension Expert? To Make More revenue And Products Listing With Google Shopping? I’m well experienced in this work, and I know all the techniques to approve your Google Merchant Center with all products. I have more than four years of experience in Fix google merchant center & Google shopping ads.Please explain your issue and discuss it before placing the order.\r\n\r\nYou Are Looking Google Merchant Center Suspension Expert? To Make More revenue And Products Listing With Google Shopping? I’m well experienced in this work, and I know all the techniques to approve your Google Merchant Center with all products. I have more than four years of experience in Fix google merchant center & Google shopping ads.',
    maChiTietLoaiCongViec: 12,
    moTaNgan:
      'Gold\r\nUS$10\r\nSetup Merchant account / Add 5 Products / Shopping Campaign Setup\r\n\r\n2 Days Delivery\r\nSetup merchant account\r\nMerchant & ad accounts connection',
    saoCongViec: 5,
  },
  {
    id: 17,
    tenCongViec: 'I will write bulk SEO articles and blog posts',
    danhGia: 91,
    giaTien: 5,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv17.jpg',
    moTa: 'MANDATORY REQUIREMENT: To ensure QUALITY is maintained, please send me a message BEFORE placing your order.\r\n\r\n\r\n\r\nI am providing my services at discounted rates to grow my account. You will never get top-rated service anywhere else!\r\n\r\n\r\n\r\nI am a professional Freelance Writer; I have written thousands of articles for clients who were amazed at the Value and Quality they received at this affordable price.',
    maChiTietLoaiCongViec: 14,
    moTaNgan:
      '1000 Words\r\nUS$5\r\n2x500 words or 1x1000 Words articles\r\n\r\n1 Day Delivery\r\nUp to 1,000 words\r\nSEO keywords',
    saoCongViec: 2,
  },
  {
    id: 18,
    tenCongViec:
      'I will write surfer SEO friendly article or blog post using jarvis jasper ai',
    danhGia: 217,
    giaTien: 15,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv18.jpg',
    moTa: "Say GOODBYE to terrible content and make your brand voice sound more natural with quality, engaging copy that ranks higher on Google SERPs.\r\n\r\n\r\n\r\nNow it's time to get your website content up to par. Content is a big part of SEO and it's important to get right. With this TOP-NOTCH SURFER SEO-friendly article writing service, you can say goodbye to lower search engine rankings and start seeing your website as an authority in your industry.",
    maChiTietLoaiCongViec: 14,
    moTaNgan:
      'US$15\r\nSave time and effort with a Subscription\r\n🥉300 WORDS(SEO optimized) Well researched, unique, and SEO Optimized article - 300 words -BOSSMODE & ZERO ERROR. Not Surfer.\r\n\r\n5 Days Delivery\r\nTopic research\r\nSEO keywords\r\nReferences & citations',
    saoCongViec: 4,
  },
  {
    id: 19,
    tenCongViec:
      'I will edit your common app or other college application essay',
    danhGia: 147,
    giaTien: 90,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv19.jpg',
    moTa: "I can help to elevate your Common App essay or any other college-related application materials, including supplemental essays and personal statements. While a former student at Vanderbilt University, I gained 3 years of experience working in the Undergraduate Admissions Office. I have a keen eye for the essays that will distinguish you and position you as the best applicant you can be! I'm passionate about increasing access to the college application process for everyone. Please let me know how I can help!",
    maChiTietLoaiCongViec: 15,
    moTaNgan:
      "Edit your drafted Common App essay\r\nUS$90\r\nI'll edit & proofread your drafted Common App essay (or any other college-related application).\r\n\r\n3 Days Delivery\r\nUnlimited Revisions\r\nStructural edit\r\nLine edit\r\nRewriting\r\nFeedback",
    saoCongViec: 4,
  },
  {
    id: 20,
    tenCongViec: 'I will edit and enhance your writing',
    danhGia: 736,
    giaTien: 20,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv20.jpg',
    moTa: "Worry no longer, exhausted writers! Your personal copy editor is here to make positive changes and bring new life into your work.\r\n\r\n\r\n\r\nMy name is Taylor! I am a 23-year-old UC Berkeley graduate w/ a bachelor's degree in English. Today, I am in the process of jump-starting my career as a copy editor. With my editing services, I have garnered over 600 5-star reviews and completed over 900 orders during my time on Fiverr. I am very passionate about your writing, and I am here to help you shine.",
    maChiTietLoaiCongViec: 15,
    moTaNgan:
      'Small Document\r\nUS$20\r\nI will proofread and edit up to 500 words.\r\n\r\n2 Days Delivery\r\nFeedback',
    saoCongViec: 5,
  },
  {
    id: 21,
    tenCongViec:
      'I will craft a compelling brand story, mission, and vision statements',
    danhGia: 57,
    giaTien: 10,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv21.jpg',
    moTa: 'About This Gig\r\n***Please leave a message before placing the order so that I can go through your requirements & provide you with genuine & peculiar content without any inconvenience***\r\n\r\n\r\n\r\nAre you struggling to create a compelling story for your brand?\r\n\r\n \r\n\r\nThere is no need to worry as I am here to help you craft a convincing brand story. Branding is indispensable as it enables you to communicate and establish an emotional connection with your customers. ',
    maChiTietLoaiCongViec: 17,
    moTaNgan:
      'SILVER\r\nUS$10\r\nCompelling mission and vision statements.\r\n\r\n1 Day Delivery\r\n2 Revisions\r\nMission & vision statement\r\nBrand narrative\r\nBusiness name & slogan',
    saoCongViec: 2,
  },
  {
    id: 22,
    tenCongViec:
      'I will be your brand story, about us, or biography content writer',
    danhGia: 69,
    giaTien: 10,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv22.jpg',
    moTa: 'Congratulations on putting the best foot forward for a perfect brand story and about us page.\r\n\r\n\r\n\r\nWhat makes a business stand out? You might wonder what impact does your brand story, bio, or about us page can bring to you for a perfect engagement with your clients.\r\n\r\n\r\n\r\nWhether it’s about product or service, your brand story along with a bio or about us page provides you the ideal platform to communicate your values to the clients.',
    maChiTietLoaiCongViec: 17,
    moTaNgan:
      'BASIC- up to 400 words\r\nUS$10\r\nUp to 400 words brand story / Bio / About Us / About Me page (DO NOT ORDER WITHOUT MESSAGING)\r\n\r\n4 Days Delivery\r\nUnlimited Revisions',
    saoCongViec: 3,
  },
  {
    id: 23,
    tenCongViec:
      'I will create 5 brand names or slogans in native spanish or english naming',
    danhGia: 128,
    giaTien: 35,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv23.jpg',
    moTa: 'Mi nombre es Alex, me dedico a dar vida y personalidad a marcas. Disfruto al involucrarme en cada proyecto en que participo y comprender las necesidades de cada cliente.\r\n\r\n\r\n\r\nDefinir el nombre y slogan es fundamental ya que son pilares que definen el norte de la marca.',
    maChiTietLoaiCongViec: 18,
    moTaNgan:
      'US$35\r\nSave time and effort with a Subscription\r\nSLOGAN Includes 5 Slogans\r\n\r\n7 Days Delivery\r\n5 business/product names\r\n5 slogans included',
    saoCongViec: 4,
  },
  {
    id: 24,
    tenCongViec:
      'I will help name your youtube, twitch, podcast, or anything else',
    danhGia: 79,
    giaTien: 10,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv24.jpg',
    moTa: "Can't come up with a name for your Youtube channel, Twitch stream, Gamertag, Instagram, Podcast, Company, or anything else? \r\n\r\n\r\n\r\nYou're in the right place!\r\n\r\n\r\n\r\nWhen choosing a name for anything, it's always a crucial step in your journey. You never want to settle for anything less than perfect as this name will be part of your identity for a long time. It is what people will associate with you and the name will be what sets you apart from the competition. With all this weight being put on the name, it is important that you get the best name possible.",
    maChiTietLoaiCongViec: 18,
    moTaNgan:
      '20 Names + 4 Revisions\r\nUS$10\r\nI will give you 20 names for your YouTube, Twitch, Podcast, or anything else with up to 4 revisions.\r\n\r\n1 Day Delivery\r\n4 Revisions\r\nSocial media handles\r\nDomain research',
    saoCongViec: 5,
  },
  {
    id: 25,
    tenCongViec: 'I will create shopify ,dropshipping, and facebook video ads',
    danhGia: 1155,
    giaTien: 10,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv25.jpg',
    moTa: "Are You a SHOPIFY, AMAZON, or WOOCOMMERCE Business Store Owner? \r\n\r\n\r\n\r\nI'm sure it is hard to get sales if you're driving traffic to your store with a low-quality video.\r\n\r\n\r\n\r\nI will create SHOPIFY and FACEBOOK video ads for your Dropshipping Store.\r\n\r\n\r\n\r\nI am good at video editing, this Gig works like this:",
    maChiTietLoaiCongViec: 20,
    moTaNgan:
      '1 AMAZING Video Ad for your Product\r\nUS$10\r\n1 Custom Ad (30 to 60 sec) + Unlimited Revisions + Free translation + Free thumbnail\r\n\r\n1 Day Delivery\r\nUnlimited Revisions\r\nVideo editing\r\nScript writing\r\n60 seconds running time',
    saoCongViec: 3,
  },
  {
    id: 26,
    tenCongViec:
      'I will create an animated marketing video for business and sales',
    danhGia: 966,
    giaTien: 40,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv26.jpg',
    moTa: 'Introduce your Product and Advance your Selling using the most creative way! \r\n\r\n\r\n\r\n"Animated Marketing Videos" \r\n\r\n\r\n\r\nWe will provide our best services for your product or anything you want to be publicized! We offer 3 different packages that can meet your need.',
    maChiTietLoaiCongViec: 20,
    moTaNgan:
      'US$40\r\nSave up to 10% with Subscribe to Save\r\nBasic ✔30 Seconds ✔Script Writing ✔Add Logo ✔HD1080p quality ✔Voice Over ✔Background Music\r\n\r\n7 Days Delivery\r\n1 Revision\r\nScript writing\r\n30 seconds running time',
    saoCongViec: 4,
  },
  {
    id: 27,
    tenCongViec: 'I will create a professional cash cow youtube channel',
    danhGia: 111,
    giaTien: 15,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv27.jpg',
    moTa: "How to build a $10K Per month cash cow channel?\r\n\r\n\r\n\r\nIt is pretty Easy Me and My team will first Pick a Niche, Then we will find a latest and trending topic. 70% trending topics and 30% evergreen topics. Evergreen topics are popular topics that don't become outdated, unlike seasonal trends.\r\n\r\n\r\n\r\nAfter that we will write a script with a great hook to increase the audience retention rate, then we will edit the videos with high quality stock footage and motion graphics\r\n\r\n\r\n\r\nThen we Will Create a scroll stopping thumbnail and catchy Video Title to Improve the CTR.\r\n\r\n",
    maChiTietLoaiCongViec: 21,
    moTaNgan:
      'US$15\r\nSave up to 15% with Subscribe to Save\r\nStandard 1 Video 3 Min Long+AI Voice Over+ Engaging Script+ Thumbnail+ Complete SEO\r\n\r\n2 Days Delivery\r\nUnlimited Revisions\r\n1 video\r\n180 seconds running time\r\n2 versions',
    saoCongViec: 1,
  },
  {
    id: 28,
    tenCongViec: 'I will repurpose your long video to short reels and tiktok',
    danhGia: 31,
    giaTien: 40,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv28.jpg',
    moTa: "Offer - Send us a Message to get First Video Edited for Absolutely Free.\r\n\r\n\r\n\r\nAre you on Making Content on Tiktok?\r\n\r\n\r\n\r\nor\r\n\r\n\r\n\r\nAre you adding your videos on Instagram reels?\r\n\r\n\r\n\r\nMost of the content creators feel stressed to create content for multiple platforms like Youtube, Facebook, Instagram, etc.\r\n\r\n\r\n\r\nI am here to help you make your short content creation journey stress-free.\r\n\r\n\r\n\r\nThis is how we work :\r\n\r\n\r\n\r\nYou send us any long-form video content or audio content, we take snippets of valuable points and trim the clip to 15 - 30 - 60 Second content. We edit the video with what's trending in the content space.",
    maChiTietLoaiCongViec: 21,
    moTaNgan:
      'Starter - 2 Video - 60 Sec\r\nUS$40\r\nYoutube / Zoom Meeting / Long Video To Reel or Tiktok\r\n\r\n3 Days Delivery\r\n1 Revision\r\n2 videos\r\n60 seconds running time\r\n1 version',
    saoCongViec: 2,
  },
  {
    id: 29,
    tenCongViec: 'I will do professional video editing',
    danhGia: 442,
    giaTien: 15,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv29.jpg',
    moTa: "Amazing Video Editing and Animations:\r\n\r\n\r\n\r\nHi! Awab here. My aim is to do amazing video editing for you within 24 hours\r\n\r\n\r\n\r\nI'm a professional Adobe guy! My aim is to provide you a great video using your random stock footages with unlimited revisions and extra fast delivery time\r\n\r\n",
    maChiTietLoaiCongViec: 23,
    moTaNgan:
      'US$15\r\nSave up to 10% with Subscribe to Save\r\nBASIC Minor editing and trimming videos . Please contact me to discuss price\r\n\r\n1 Day Delivery\r\nUnlimited Revisions\r\nUp to 15 minutes of footage provided\r\nUp to 5 minutes running time',
    saoCongViec: 5,
  },
  {
    id: 30,
    tenCongViec:
      'I will edit videos or make highlights from twitch and yt livestreams',
    danhGia: 229,
    giaTien: 40,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv30.jpg',
    moTa: 'Hello pretty humans!\r\n\r\n\r\n\r\nJust ended an awesome stream and want to upload the best parts on YouTube?! You are at the right place!\r\n\r\n\r\n\r\nI can edit videos ranging from travel videos, vlogs to even gaming videos/montages.\r\n\r\n\r\n\r\nI can edit both INTENSE or FUNNY videos full of MEMES depending on what you need!\r\n\r\n\r\n\r\nThe software that I use mainly is Adobe Premiere Pro.',
    maChiTietLoaiCongViec: 23,
    moTaNgan:
      'US$40\r\nSave up to 5% with Subscribe to Save\r\nStandard Edit made from 0-3 hours of footage which includes motion graphics, zooms, sound effects and memes\r\n\r\n3 Days Delivery\r\nUnlimited Revisions\r\nUp to 180 minutes of footage provided\r\nUp to 8 minutes running time\r\nColor grading',
    saoCongViec: 4,
  },
  {
    id: 31,
    tenCongViec: 'I will do premium color correction and color grading',
    danhGia: 316,
    giaTien: 50,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv31.jpg',
    moTa: "Please MESSAGE ME before placing any order.\r\n\r\n\r\n\r\nI'm Subhadip Mondal, a colorist from India.\r\n\r\n\r\n\r\nI’m looking forward to giving your short films, music videos, commercials and even feature films, the Hollywood Level cinematic look it deserves.\r\n\r\n\r\n\r\nI take all my clients and their projects seriously and I believe in providing them with smooth communication and complete peace of mind.",
    maChiTietLoaiCongViec: 24,
    moTaNgan:
      'S$50\r\nSave up to 10% with Subscribe to Save\r\nQUICK SERVICE One Single Shot, Talking Head Videos etc\r\n\r\n3 Days Delivery\r\n1 Revision\r\nColor balancing\r\nColor grading',
    saoCongViec: 3,
  },
  {
    id: 32,
    tenCongViec: 'I will create an original song for you',
    danhGia: 144,
    giaTien: 10,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv32.jpg',
    moTa: 'Are you searching for that producer to give you the best product and take your idea/song to the next level? Search no more\r\n\r\nIncludes live instrument performances\r\n\r\n100% Money Back Guarantee if you are not satisfied!\r\n\r\nThis deal includes a song in high quality audio using the best available equipment\r\n\r\nFor more music check here: https://soundcloud.com/cactiisemia/sets/personal-favs-favoritos\r\n\r\nThe things I offer to you:',
    maChiTietLoaiCongViec: 26,
    moTaNgan:
      'US$10\r\nSave up to 20% with Subscribe to Save\r\nConsultation 1.Consultation on how to improve songs 2.Custom classes in ableton, logic, garageband and FL\r\n\r\n2 Days Delivery\r\n3 instruments\r\nHQ audio file\r\nCommercial use',
    saoCongViec: 5,
  },
  {
    id: 33,
    tenCongViec: 'I will be your ghost songwriter and melody maker',
    danhGia: 114,
    giaTien: 30,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv33.jpg',
    moTa: "Hello,\r\n\r\n\r\n\r\nMy name is Joe and I am a Songwriter based in London. With this songwriting service, I will write a hit song according to your requirements. Whether you want Lyric and or melody writing, a catchy chorus hook, a section of a song written or a whole song writing, I have you covered! With this service I will be your ghost songwriter, meaning that after the order is completed you have full rights for the song.\r\n\r\n\r\n\r\nIf you have any questions regarding my songwriting services, don't hesitate to send me a message so we can further talk about your requirements and create a custom offer that perfectly suits your budget and needs!",
    maChiTietLoaiCongViec: 27,
    moTaNgan:
      'Chorus Writing\r\nUS$30\r\nGot writers block? Need a catchy chorus? This package has you covered!\r\n\r\n2 Days Delivery\r\n1 Revision\r\n0 Verses\r\nChorus\r\nHook',
    saoCongViec: 3,
  },
  {
    id: 34,
    tenCongViec:
      'I will do audio editing to remove background noise, wind, echo, repair and clean audio',
    danhGia: 185,
    giaTien: 20,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv34.jpg',
    moTa: 'If you have an audio issue diminishing the listening experience and are looking for a professional & experienced audio editor, your search has ended.\r\n\r\n\r\n\r\nI will remove background noise, echo, wind, hiss, hum, rustling, clicks, mouth clicks, repair, and clean your audio.\r\n\r\n\r\n\r\nAdditionally, I will balance the volume levels, apply compression, and equalize your audio to add warmth and body to your voice.',
    maChiTietLoaiCongViec: 29,
    moTaNgan:
      'US$20\r\nSave up to 10% with Subscribe to Save\r\nup to 3 minutes Remove noise, echo, wind, clicks and mouth clicks, rustle, clean and repair audio\r\n\r\n1 Day Delivery\r\n3 Revisions\r\n1 audio track',
    saoCongViec: 5,
  },
  {
    id: 35,
    tenCongViec: 'I will professionally edit and clean up your voiceover',
    danhGia: 277,
    giaTien: 5,
    nguoiTao: 1,
    hinhAnh: 'https://fiverrnew.cybersoft.edu.vn/images/cv35.jpg',
    moTa: 'I will:\r\n\r\n\r\n\r\n\r\n\r\n- Remove background noise\r\n\r\n\r\n\r\n- Remove breaths/clicks/pops\r\n\r\n\r\n\r\n- Enhance the clarity of speech\r\n\r\n\r\n\r\n- Compress the audio to fit within a certain time\r\n\r\n\r\n\r\n- Combine multiple takes/take out bad takes\r\n\r\n\r\n\r\n\r\n\r\nBasic package applies to tracks up to 5 minutes length. For longer tracks check out Standard and Premium packages, add extra minutes through the extras, or contact me to get the price.\r\n\r\n',
    maChiTietLoaiCongViec: 30,
    moTaNgan:
      'Silver\r\nUS$5\r\nFull editing of the file up to 5 minutes.\r\n\r\n2 Days Delivery\r\n3 Revisions\r\n1 audio track',
    saoCongViec: 3,
  },
];

function ListJob() {
  return (
    <Box sx={{ mt: 20, mx: 10 }}>
      <Grid container spacing={3}>
        {jobitems.map((item) => (
          <Grid key={item.id} item xs={12} md={3}>
            <Card sx={{ flexGrow: 1 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={item.hinhAnh}
                title="green iguana"
              />
              <CardContent>
                <Box
                  display={'flex'}
                  justifyContent={'left'}
                  alignItems={'center'}
                  gap={2}
                >
                  <Box>
                    <Avatar alt={item.nguoiTao} src={item.hinhAnh} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" component="div">
                      {item.nguoiTao}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary">
                  {item.tenCongViec}
                </Typography>

                <Box display={'flex'}>
                  <StarIcon style={{ color: '#ffbe5b' }} />
                  <Typography>
                    <span style={{ color: '#ffbe5b', fontWeight: 'bold' }}>
                      {item.saoCongViec}
                    </span>
                    <span> ({item.danhGia})</span>
                  </Typography>
                </Box>
              </CardContent>
              <Divider />
              <CardActions
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <IconButton
                  aria-label="add to favorites"
                  sx={{ ':hover': { color: 'red ' } }}
                >
                  <Favorite />
                </IconButton>
                <Box display={'inline-block'}>
                  <Typography variant="body1">
                    Starting At
                    <strong> US${item.giaTien}</strong>
                  </Typography>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ListJob;
