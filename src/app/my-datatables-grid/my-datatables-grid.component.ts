import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'my-datatables-grid',
  templateUrl: './my-datatables-grid.component.html',
  styleUrls: ['./my-datatables-grid.component.css']
})
export class MyDatatablesGridComponent implements OnInit {

  Lista: any;

  constructor() { }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.Lista);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "Lista");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      console.log(data);
      FileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }

  ngOnInit(): void {
    this.Lista = [{ "id": 1, "first_name": "Em", "last_name": "Phillis", "email": "ephillis0@fastcompany.com", "gender": "Male", "ip_address": "136.168.141.118" },
    { "id": 2, "first_name": "Carolann", "last_name": "Thomton", "email": "cthomton1@ehow.com", "gender": "Female", "ip_address": "85.3.29.35" },
    { "id": 3, "first_name": "Addi", "last_name": "Hesey", "email": "ahesey2@nydailynews.com", "gender": "Female", "ip_address": "79.93.103.41" },
    { "id": 4, "first_name": "Justin", "last_name": "Kores", "email": "jkores3@yolasite.com", "gender": "Female", "ip_address": "239.143.102.180" },
    { "id": 5, "first_name": "Maddie", "last_name": "Phillpotts", "email": "mphillpotts4@cisco.com", "gender": "Female", "ip_address": "113.36.245.97" },
    { "id": 6, "first_name": "Seumas", "last_name": "Blemings", "email": "sblemings5@dailymail.co.uk", "gender": "Female", "ip_address": "117.189.175.116" },
    { "id": 7, "first_name": "Miriam", "last_name": "Ketch", "email": "mketch6@pen.io", "gender": "Male", "ip_address": "155.231.12.18" },
    { "id": 8, "first_name": "Brannon", "last_name": "Bernardez", "email": "bbernardez7@blog.com", "gender": "Male", "ip_address": "151.170.15.179" },
    { "id": 9, "first_name": "Ham", "last_name": "Gatenby", "email": "hgatenby8@amazon.de", "gender": "Male", "ip_address": "57.165.191.163" },
    { "id": 10, "first_name": "Bobine", "last_name": "Sambedge", "email": "bsambedge9@businesswire.com", "gender": "Female", "ip_address": "130.244.138.230" },
    { "id": 11, "first_name": "Pat", "last_name": "Exley", "email": "pexleya@jimdo.com", "gender": "Male", "ip_address": "41.216.117.236" },
    { "id": 12, "first_name": "Cristabel", "last_name": "McCool", "email": "cmccoolb@qq.com", "gender": "Genderqueer", "ip_address": "241.48.28.102" },
    { "id": 13, "first_name": "Gillie", "last_name": "Greeding", "email": "ggreedingc@xing.com", "gender": "Female", "ip_address": "147.100.88.107" },
    { "id": 14, "first_name": "Mei", "last_name": "Gleeson", "email": "mgleesond@e-recht24.de", "gender": "Male", "ip_address": "148.3.160.1" },
    { "id": 15, "first_name": "Erinna", "last_name": "Dugmore", "email": "edugmoree@123-reg.co.uk", "gender": "Female", "ip_address": "189.171.4.92" },
    { "id": 16, "first_name": "Hirsch", "last_name": "Lagden", "email": "hlagdenf@typepad.com", "gender": "Male", "ip_address": "216.146.212.134" },
    { "id": 17, "first_name": "Shellysheldon", "last_name": "Gullan", "email": "sgullang@nbcnews.com", "gender": "Female", "ip_address": "9.157.246.185" },
    { "id": 18, "first_name": "Barbaraanne", "last_name": "Tomkowicz", "email": "btomkowiczh@nature.com", "gender": "Female", "ip_address": "6.161.14.41" },
    { "id": 19, "first_name": "Correy", "last_name": "Forcade", "email": "cforcadei@biglobe.ne.jp", "gender": "Female", "ip_address": "38.245.201.125" },
    { "id": 20, "first_name": "Sigismondo", "last_name": "Wimbury", "email": "swimburyj@cnet.com", "gender": "Female", "ip_address": "98.248.221.196" },
    { "id": 21, "first_name": "Bradly", "last_name": "Di Filippo", "email": "bdifilippok@deliciousdays.com", "gender": "Male", "ip_address": "167.245.139.238" },
    { "id": 22, "first_name": "Becca", "last_name": "Paireman", "email": "bpairemanl@salon.com", "gender": "Female", "ip_address": "142.10.54.231" },
    { "id": 23, "first_name": "Kaylil", "last_name": "Dienes", "email": "kdienesm@wikimedia.org", "gender": "Female", "ip_address": "90.253.11.123" },
    { "id": 24, "first_name": "Torre", "last_name": "Scrooby", "email": "tscroobyn@hc360.com", "gender": "Female", "ip_address": "157.68.233.245" },
    { "id": 25, "first_name": "Leanna", "last_name": "Stile", "email": "lstileo@rakuten.co.jp", "gender": "Female", "ip_address": "106.145.14.14" },
    { "id": 26, "first_name": "Craggy", "last_name": "Roxby", "email": "croxbyp@gizmodo.com", "gender": "Female", "ip_address": "151.14.226.168" },
    { "id": 27, "first_name": "Devon", "last_name": "Halston", "email": "dhalstonq@ocn.ne.jp", "gender": "Male", "ip_address": "124.209.210.235" },
    { "id": 28, "first_name": "Robenia", "last_name": "Battleson", "email": "rbattlesonr@meetup.com", "gender": "Male", "ip_address": "252.31.63.107" },
    { "id": 29, "first_name": "Caroljean", "last_name": "Richardsson", "email": "crichardssons@msu.edu", "gender": "Male", "ip_address": "69.213.184.55" },
    { "id": 30, "first_name": "Parsifal", "last_name": "Lowre", "email": "plowret@netvibes.com", "gender": "Male", "ip_address": "127.124.247.123" },
    { "id": 31, "first_name": "Phillipe", "last_name": "Karlsen", "email": "pkarlsenu@imageshack.us", "gender": "Male", "ip_address": "85.159.37.219" },
    { "id": 32, "first_name": "Aaren", "last_name": "Meadus", "email": "ameadusv@mapquest.com", "gender": "Female", "ip_address": "128.9.84.157" },
    { "id": 33, "first_name": "Wendy", "last_name": "Smitham", "email": "wsmithamw@squarespace.com", "gender": "Non-binary", "ip_address": "79.46.142.116" },
    { "id": 34, "first_name": "Jinny", "last_name": "Flaherty", "email": "jflahertyx@amazon.co.uk", "gender": "Female", "ip_address": "24.176.58.24" },
    { "id": 35, "first_name": "Kacy", "last_name": "Lewins", "email": "klewinsy@macromedia.com", "gender": "Male", "ip_address": "183.160.43.165" },
    { "id": 36, "first_name": "Barbee", "last_name": "Swanson", "email": "bswansonz@businessinsider.com", "gender": "Female", "ip_address": "71.16.16.86" },
    { "id": 37, "first_name": "Edy", "last_name": "Vigne", "email": "evigne10@google.ru", "gender": "Female", "ip_address": "242.161.48.229" },
    { "id": 38, "first_name": "Owen", "last_name": "Fylan", "email": "ofylan11@fc2.com", "gender": "Female", "ip_address": "148.103.185.144" },
    { "id": 39, "first_name": "Reg", "last_name": "Dmitrovic", "email": "rdmitrovic12@t.co", "gender": "Male", "ip_address": "37.147.199.75" },
    { "id": 40, "first_name": "Vivien", "last_name": "McSwan", "email": "vmcswan13@huffingtonpost.com", "gender": "Female", "ip_address": "178.162.176.168" },
    { "id": 41, "first_name": "Tom", "last_name": "Caselli", "email": "tcaselli14@opera.com", "gender": "Female", "ip_address": "25.178.182.208" },
    { "id": 42, "first_name": "Tore", "last_name": "Dureden", "email": "tdureden15@furl.net", "gender": "Female", "ip_address": "189.39.177.32" },
    { "id": 43, "first_name": "Osbourn", "last_name": "Sallnow", "email": "osallnow16@mozilla.com", "gender": "Genderqueer", "ip_address": "115.157.213.230" },
    { "id": 44, "first_name": "Odetta", "last_name": "Lilbourne", "email": "olilbourne17@who.int", "gender": "Female", "ip_address": "5.200.74.130" },
    { "id": 45, "first_name": "Kinny", "last_name": "Fatharly", "email": "kfatharly18@mac.com", "gender": "Female", "ip_address": "205.36.70.202" },
    { "id": 46, "first_name": "Ginelle", "last_name": "Sellen", "email": "gsellen19@blogs.com", "gender": "Male", "ip_address": "179.103.106.161" },
    { "id": 47, "first_name": "Cordelia", "last_name": "Salasar", "email": "csalasar1a@prweb.com", "gender": "Female", "ip_address": "224.15.22.177" },
    { "id": 48, "first_name": "Parke", "last_name": "Beacon", "email": "pbeacon1b@pen.io", "gender": "Male", "ip_address": "23.243.255.228" },
    { "id": 49, "first_name": "Cordell", "last_name": "Drever", "email": "cdrever1c@umich.edu", "gender": "Male", "ip_address": "56.34.100.42" },
    { "id": 50, "first_name": "Rolland", "last_name": "Sibery", "email": "rsibery1d@bbc.co.uk", "gender": "Male", "ip_address": "63.80.115.33" },
    { "id": 51, "first_name": "Trixy", "last_name": "Ocklin", "email": "tocklin1e@sohu.com", "gender": "Female", "ip_address": "169.45.136.75" },
    { "id": 52, "first_name": "Augustina", "last_name": "Freemantle", "email": "afreemantle1f@unblog.fr", "gender": "Male", "ip_address": "44.164.200.69" },
    { "id": 53, "first_name": "Gustavus", "last_name": "Chiommienti", "email": "gchiommienti1g@bloglovin.com", "gender": "Female", "ip_address": "238.162.162.161" },
    { "id": 54, "first_name": "Ban", "last_name": "Tellenbach", "email": "btellenbach1h@tinypic.com", "gender": "Male", "ip_address": "5.138.115.148" },
    { "id": 55, "first_name": "Sarah", "last_name": "Larrington", "email": "slarrington1i@ox.ac.uk", "gender": "Male", "ip_address": "193.179.249.225" },
    { "id": 56, "first_name": "Vevay", "last_name": "MacDougal", "email": "vmacdougal1j@jalbum.net", "gender": "Polygender", "ip_address": "199.69.0.227" },
    { "id": 57, "first_name": "Lorraine", "last_name": "Tylor", "email": "ltylor1k@arizona.edu", "gender": "Male", "ip_address": "147.223.43.34" },
    { "id": 58, "first_name": "Henrie", "last_name": "Autie", "email": "hautie1l@globo.com", "gender": "Female", "ip_address": "250.136.46.94" },
    { "id": 59, "first_name": "Paulie", "last_name": "Wabey", "email": "pwabey1m@flickr.com", "gender": "Female", "ip_address": "131.102.37.67" },
    { "id": 60, "first_name": "Reynolds", "last_name": "Robins", "email": "rrobins1n@ft.com", "gender": "Male", "ip_address": "140.253.45.184" },
    { "id": 61, "first_name": "Alina", "last_name": "Probets", "email": "aprobets1o@jalbum.net", "gender": "Female", "ip_address": "66.173.7.249" },
    { "id": 62, "first_name": "Camella", "last_name": "Hagerty", "email": "chagerty1p@reference.com", "gender": "Male", "ip_address": "213.180.185.8" },
    { "id": 63, "first_name": "Rosanne", "last_name": "Pepye", "email": "rpepye1q@yandex.ru", "gender": "Male", "ip_address": "77.31.210.151" },
    { "id": 64, "first_name": "Cheri", "last_name": "Aizikovitz", "email": "caizikovitz1r@oracle.com", "gender": "Female", "ip_address": "245.93.219.90" },
    { "id": 65, "first_name": "Alicia", "last_name": "Layton", "email": "alayton1s@artisteer.com", "gender": "Bigender", "ip_address": "35.10.18.211" },
    { "id": 66, "first_name": "Dori", "last_name": "Ridde", "email": "dridde1t@sfgate.com", "gender": "Female", "ip_address": "65.111.211.186" },
    { "id": 67, "first_name": "Ashlan", "last_name": "Lowes", "email": "alowes1u@scientificamerican.com", "gender": "Female", "ip_address": "1.209.32.188" },
    { "id": 68, "first_name": "Arthur", "last_name": "Moult", "email": "amoult1v@ucoz.com", "gender": "Male", "ip_address": "84.54.143.205" },
    { "id": 69, "first_name": "Maddie", "last_name": "Berg", "email": "mberg1w@europa.eu", "gender": "Bigender", "ip_address": "242.205.182.157" },
    { "id": 70, "first_name": "Madalena", "last_name": "Hamal", "email": "mhamal1x@sitemeter.com", "gender": "Male", "ip_address": "218.134.15.177" },
    { "id": 71, "first_name": "Kyrstin", "last_name": "Toope", "email": "ktoope1y@elegantthemes.com", "gender": "Female", "ip_address": "220.87.182.181" },
    { "id": 72, "first_name": "Sandro", "last_name": "Tinline", "email": "stinline1z@yolasite.com", "gender": "Polygender", "ip_address": "209.200.213.201" },
    { "id": 73, "first_name": "Veriee", "last_name": "Lewens", "email": "vlewens20@friendfeed.com", "gender": "Female", "ip_address": "64.127.157.117" },
    { "id": 74, "first_name": "Shea", "last_name": "Ladewig", "email": "sladewig21@nsw.gov.au", "gender": "Female", "ip_address": "176.19.4.136" },
    { "id": 75, "first_name": "Sherwin", "last_name": "Jerger", "email": "sjerger22@xrea.com", "gender": "Male", "ip_address": "173.176.192.219" },
    { "id": 76, "first_name": "Paten", "last_name": "Quinnelly", "email": "pquinnelly23@jalbum.net", "gender": "Female", "ip_address": "181.166.165.126" },
    { "id": 77, "first_name": "Nikki", "last_name": "Poyzer", "email": "npoyzer24@deviantart.com", "gender": "Male", "ip_address": "10.211.241.216" },
    { "id": 78, "first_name": "Reinaldos", "last_name": "Rendall", "email": "rrendall25@topsy.com", "gender": "Female", "ip_address": "156.153.157.200" },
    { "id": 79, "first_name": "Andris", "last_name": "Lazarus", "email": "alazarus26@google.cn", "gender": "Female", "ip_address": "213.147.214.44" },
    { "id": 80, "first_name": "Bern", "last_name": "Traylen", "email": "btraylen27@taobao.com", "gender": "Male", "ip_address": "225.231.224.74" },
    { "id": 81, "first_name": "Vonny", "last_name": "McTavy", "email": "vmctavy28@webs.com", "gender": "Female", "ip_address": "243.103.87.145" },
    { "id": 82, "first_name": "Augustin", "last_name": "Myatt", "email": "amyatt29@bbc.co.uk", "gender": "Male", "ip_address": "81.167.209.243" },
    { "id": 83, "first_name": "Raine", "last_name": "Beverage", "email": "rbeverage2a@i2i.jp", "gender": "Bigender", "ip_address": "175.10.215.17" },
    { "id": 84, "first_name": "Clayton", "last_name": "Hebson", "email": "chebson2b@indiegogo.com", "gender": "Male", "ip_address": "143.205.3.80" },
    { "id": 85, "first_name": "Binni", "last_name": "Belhome", "email": "bbelhome2c@hc360.com", "gender": "Male", "ip_address": "36.141.240.68" },
    { "id": 86, "first_name": "Gregoire", "last_name": "Meas", "email": "gmeas2d@ehow.com", "gender": "Male", "ip_address": "171.30.128.255" },
    { "id": 87, "first_name": "Prent", "last_name": "Elcome", "email": "pelcome2e@sogou.com", "gender": "Female", "ip_address": "70.197.21.167" },
    { "id": 88, "first_name": "Dinnie", "last_name": "Sibson", "email": "dsibson2f@elpais.com", "gender": "Female", "ip_address": "121.54.160.219" },
    { "id": 89, "first_name": "Alix", "last_name": "MacAless", "email": "amacaless2g@springer.com", "gender": "Genderfluid", "ip_address": "97.203.252.221" },
    { "id": 90, "first_name": "Evie", "last_name": "Balcock", "email": "ebalcock2h@sbwire.com", "gender": "Female", "ip_address": "149.84.94.163" },
    { "id": 91, "first_name": "Donni", "last_name": "O'Siaghail", "email": "dosiaghail2i@imdb.com", "gender": "Female", "ip_address": "0.35.84.44" },
    { "id": 92, "first_name": "Maudie", "last_name": "Olpin", "email": "molpin2j@is.gd", "gender": "Female", "ip_address": "175.147.48.252" },
    { "id": 93, "first_name": "Ozzy", "last_name": "Matyatin", "email": "omatyatin2k@netvibes.com", "gender": "Male", "ip_address": "81.60.104.37" },
    { "id": 94, "first_name": "Cloe", "last_name": "Lille", "email": "clille2l@surveymonkey.com", "gender": "Male", "ip_address": "130.203.109.3" },
    { "id": 95, "first_name": "Saxe", "last_name": "Jellis", "email": "sjellis2m@dailymail.co.uk", "gender": "Male", "ip_address": "140.35.3.99" },
    { "id": 96, "first_name": "Cathyleen", "last_name": "Keenan", "email": "ckeenan2n@free.fr", "gender": "Male", "ip_address": "152.48.100.10" },
    { "id": 97, "first_name": "Gerianna", "last_name": "Lippitt", "email": "glippitt2o@webnode.com", "gender": "Male", "ip_address": "243.123.67.113" },
    { "id": 98, "first_name": "Bertina", "last_name": "Suerz", "email": "bsuerz2p@meetup.com", "gender": "Female", "ip_address": "119.106.218.95" },
    { "id": 99, "first_name": "Ingaborg", "last_name": "Yeardley", "email": "iyeardley2q@devhub.com", "gender": "Male", "ip_address": "10.65.40.183" },
    { "id": 100, "first_name": "Denise", "last_name": "Boulger", "email": "dboulger2r@angelfire.com", "gender": "Male", "ip_address": "167.15.90.156" }];
  }




}
