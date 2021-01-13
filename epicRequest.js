const fetch = require('node-fetch');
var dateFormat = require('dateformat');
const e = require('express');

var today = new Date();
today.toLocaleString("en-US", {timeZone: "America/Los_Angeles"})
var startDate = encodeURIComponent(dateFormat(today,"m/d/yyyy"));
var endDate  = today.setDate(today + 7);
endDate = encodeURIComponent(dateFormat( endDate ,"m/d/yyyy"));
var notAvailableDates = "here" ;


// fetch("https://www.epicpass.com/api/LiftAccessApi/GetCapacityControlReservationInventory?resortCode=44&startDate="+startDate+"&endDate="+endDate+"&_=1610165804515", {
//   "headers": {
//     "__requestverificationtoken": "hcmhmOanBKOeHlbMs9npXN6FW7ViNqG3iLaORrG5QEnTqyUq5kn2Mt40g4jmkLLBQ2XMj28WpBtt5zHuCiU2CJfGWAY1:onJ7VRdAFIXmqdISXYLDaH875CHTCMVGuDue2_2TWvaGMu_urAP7WF87OM1cK3hXNYRZUXkEIhtSFtKX1ISJqUzrNvhAvnjbJtL5jVZbLAQPyvsG0",
//     "accept-language": "en-US,en;q=0.9",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-queueit-ajaxpageurl": "https%3A%2F%2Fwww.epicpass.com%2Fplan-your-trip%2Flift-access%2Freservations.aspx",
//     "x-requested-with": "XMLHttpRequest",
//     "cookie": "SC_ANALYTICS_GLOBAL_COOKIE=c258bad1559a4d05aeca3d5c3c25b3b6|False; _fbp=fb.1.1604540683359.627537921; LPVID=djZjFjOWJiYmRmOTUyMGMz; dDecID=100394258; dDrposID=34845727; s_pers=%20s_vnum%3D1607132683078%2526vn%253D4%7C1607132683078%3B%20s_fid%3D0C9CCAC25D9CFEC2-3A7966FA58CEDF51%7C1670011290067%3B%20s_invisit%3Dtrue%7C1606941090075%3B%20s_lv%3D1606939290079%7C1701547290079%3B%20s_lv_s%3DMore%2520than%25207%2520days%7C1606941090079%3B; bm_sz=ABEE59AFC2E26A4E712041CE924E7872~YAAQTXZiaAOVH+R2AQAAkaNX5QoVyhHexkPWq0VgJ/+YUIvqHJzBOFQ5RI/TzexW10u3fDfJyX9GU6dWZ9KkyNjZDzD9Yr4DjBnPX9MzoRb2KRypw1SqtfZ65noMYOOx/caXbfjpbczW2AgXHevzyJeyjlODavq0IqNO2i6sK4IAeq7tDSKZWE/WhtvTzDsrjw4=; AKA_A2=A; ASP.NET_SessionId=34x5vslbrumd2ae440v4aot0; __RequestVerificationToken=kC0ZxLqFueJaIc7uhVd2wzOosJf1S1o1Z7dc48nP3YnOYF3DAK1mKc0AlzmV41c4PuaQ-t9mSA2U1YSsVH5M2Cx60IU1; vr_product_reminder=true; AMCVS_974C370453295F9A0A490D44%40AdobeOrg=1; bm_mi=7EEBB615CAB44EEC5CDB8ED544F6E8D6~6fjGRyfJHJADr7MHey1DJs0jAAcffhzTlmDbw62HEf59TzAscTTpCK7vxg5eEsx3zFszXxHbzYrSfRRIxLH0BtkiHVoT5uhqTxY7XV4dwv/MLwisGV4Hm+D+3rR+zbv/WFFY3CaOrXeo+CDNIURn5woDyVfrfAZ41vmJAu7GliYTTUvomYUJgkJ7Ie20gs48Jr+q1Tuqj7l/XnJ+uofl8gFTxBcTsJ2Bt2ggzrWC+u9pAF5PQKZ+QWIyB/uJP8cjmOhuECvD5Jqpxda1fSE7GrybdZ3WRZZjvolgj1pcLIz07SXVgEMrShJ3TAzT2Ij1q+b48JiG4h0dDuLjcw/KAA==; check=true; ak_bmsc=30318A366962875728F231199E9496D16862764D88260000F62CF95FAE32F15E~plEF5h+oXP31AYY3T2F99IuggwK76PBPHNYo+ML8zdVnpDGvNUCZe0Se2QdddCNPK3IDqVajzfrYOX6vZb6LqEjhcHkWYoPY+V3+ASRrKt98+b20mxPyfuvy7I3RlpmGbI9gHi/W+7eLYt1Rxxh6ndFN+vOYp++ahWVxF6KiS3Dk72CbgUvbSVN+67d5IgVJzKo4/bp+n3YHSgfVC0h91jr9sb7DuEst1M5qYmcoe4YdsRmrn0yUsInGdLk8Y9iPbG; dDuserEmail=alinail13.ank@gmail.com; s_vnum=1612757499338%26vn%3D1; s_invisit=true; s_cc=true; s_lv_s=Less%20than%201%20day; rbuid=rbos-244cf5c2-5cfe-40f8-96b1-c8f2dd42a34f; AAMC_vailresorts_0=REGION%7C9; fltk=segID%3D17581230%2CsegID%3D17581206%2CsegID%3D18446707; aam_uuid=61652124277739547101747181622030817834; .ASPXAUTH=305D8F04AB9FE2CECF0C7F757C2848D87A809CD90F630EEF4108812994BFB76C15383134EF0C557A3C94EAAD4F090F741B1A0AC90D21B65A3892CC1704DEC01A1F17AC7D954C74D2A8F21EFED08C8756D7BE54EA7CCB7C9EEED03734CDF57AFCC2229DB5E132F224CBEA5FAD6AA71B0CF1EC097D801153F3E6A11D1A14AD4A00F868B8FE142D37621533FB2892190F307DE807B286019C1E45A7BF76E0FE6CBBFB67B68AFE1BB9E11CE48FE77BD0D93A0272C177ABCEF9238EAD846A29A03F94B82FAD680C9BEDCB7968C0C0D023619636696E9DF68EA67A4EB64918D9855DC346C05A5DDA85A99BE564E2C1084EAE10A70A4F5603AF2D0BDD6AE211EAEE680930E673652F385903C1A9FC67DAF1403BE4ED5886C64288F25D48A4670A271898385EFF11E5FD09BC44B869BF4E91779AFE2C38A37ADAA874AC9B7939AAB16011D336DCEDDB75B7DBADF7D4792E622D7B8ED7B605; vr3_authenticated=5a248a99-239b-4ee1-8f7a-d7eb7fd3c0e2; vr3_secure_auth=LcMx_7nhxLriBIV1Cgbc6g2=NYLgSNoJdyEDozUkNbA5Jg2&fKtZw7qa_sg1=OMROdzhWEENqd-h7EQVCoA2; VRILB=!zwhKxi+pbzcqmd/6ULPqw5FLMGj17Bevn6Fy/8qWQgDXv7IwqSRRTspWXg61bjABEvncIsc3INDGbjXRGaWjG3jyfIXrAdBS11mOjYQ71w==; gpv_pn=Epic%20Pass%3Aplan-your-trip%3Alift-access%3AReservations; LPSID-31842070=Y2uSzXfPR6iHbzabqxvq7g; _abck=AC99E48F76682892C01D30E72E8241E9~0~YAAQTXZiaPWfH+R2AQAAye9a5QVED3abxJv0NQPdnN0XXTjRlCMh1hD8JTw8dNkRYd/c/y1yvBVSClda4j8YaMuuO8Bb6iwWpNcwj3BNUSZLsI2xy6Zu2665FcyStfFveExP+6eCH1s36KgGnJQp6Kb3cyPcgiorp/nfc0C6kxMW5gUZklCIHpMGO8a3UuTbQhbC8HOu+IEEeldhIWX0dy0mAvBFcQF5cxMd8aj7bZJcAQvuJr3daGFSfAXQlvNc9saU9tKxP6HMap3/5RRP74rXi29Byh5fr+cKBrkcVJSAd9ToipT2DLc6yC14pVFjaVrJXWutS3WquCWryk6Ul5Xm95eS3hH4~-1~-1~-1; QueueITAccepted-SDFrts345E-V3_epicpasspriority1203=EventId%3Depicpasspriority1203%26QueueId%3D82699632-3232-441d-8d99-9bcd29ee138f%26RedirectType%3Dsafetynet%26IssueTime%3D1610165802%26Hash%3Def075541f61a6d8984048ddfb91a5a8faef1313bb00198f7e81b30941dba5ef9; TS019b45a2=01d73c084bc91bb0c6114796f5fdb2e92e793c896bd174035e222d5613aae70376d488e972b633f6332bee68b9e1c828735703b2aa; TS01746597=01d73c084bc91bb0c6114796f5fdb2e92e793c896bd174035e222d5613aae70376d488e972b633f6332bee68b9e1c828735703b2aa; mbox=session#57bbf691690047a68c0618eb19ebfbdd#1610167665; OptanonConsent=isIABGlobal=false&datestamp=Fri+Jan+08+2021+20%3A16%3A46+GMT-0800+(Pacific+Standard+Time)&version=5.13.0&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&hosts=&AwaitingReconsent=false; RT=\"z=1&dm=www.epicpass.com&si=d40237bf-d6fe-46bf-ba3e-f6f172fd48b0&ss=kjp6yn9r&sl=3&tt=dgl&bcn=%2F%2F173e2508.akstat.io%2F&ld=6p3w\"; s_tp=1700; AMCV_974C370453295F9A0A490D44%40AdobeOrg=1406116232%7CMCIDTS%7C18637%7CMCMID%7C66118042172343349361617311802345403492%7CMCAAMLH-1610770608%7C9%7CMCAAMB-1610770608%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1610172696s%7CNONE%7CMCAID%7CNONE%7CMCCIDH%7C-706979180%7CvVersion%7C2.5.0; adcloud={%22_les_v%22:%22y%2Cepicpass.com%2C1610167608%22}; s_ppv=Epic%2520Pass%253Aplan-your-trip%253Alift-access%253AReservations%2C71%2C20%2C1211; s_lv=1610165865229; s_nr=1610165865231-Repeat; s_sq=vriepicpass%252Cvailglobal%3D%2526c.%2526a.%2526activitymap.%2526page%253DEpic%252520Pass%25253Aplan-your-trip%25253Alift-access%25253AReservations%2526link%253DCHECK%252520AVAILABILITY%2526region%253DpassHolderReservations__wrapper%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253DEpic%252520Pass%25253Aplan-your-trip%25253Alift-access%25253AReservations%2526pidt%253D1%2526oid%253DfunctionBe%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DSUBMIT; bm_sv=17B62E212BC18286ACDDF7583FD327AC~weuuo4oXHjX7QracxTG6CHdyIH04CoRBebBIFfnYcHHh6r7trHYj9W6GPBCdpZt5VaqC9uiI11XpezSNuXT4yN+KiJL6EHK5T1BbX9YtPjFMQ6nqfDxSlb+LQpbxMW/yXJrWK4kvuie05RUDUXAqE7+7rsC1DIJVplXFFUv1Cag="
//   },
//   "referrer": "https://www.epicpass.com/plan-your-trip/lift-access/reservations.aspx",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors"
// }).then(res => res.json())
//     .then(json => {
//         console.log(json.NoInventoryDays)
//         if(json.NoInventoryDays.length == 0){
//             notAvailableDates = "All days are available";
//         }
//         else{
//              notAvailableDates = json.NoInventoryDays;
//         }
        
// })




