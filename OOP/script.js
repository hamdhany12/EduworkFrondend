class Table {
  constructor(init) {
    this.init = init;
  }
  createHead(data) {
    let buka = '<thead><tr>';
    let tutup = '</tr></thead>';
    data.forEach((isi) => {
      buka += `<th>${isi}</th>`;
    });
    return buka + tutup;
  }
  creatTd(data) {
    let buka = '<tbody>';
    let tutup = '</tbody>';
    data.forEach((isi) => {
      buka += `<tr> 
        <td>${isi[0]}</td>
        <td>${isi[1]}</td>
        <td>${isi[2]}</td>
        </tr>`;
    });
    return buka + tutup;
  }
  render(element) {
    let table = "<table class='table table-hover table-striped table-bordered border-primary'>" + this.createHead(this.init.columns) + this.creatTd(this.init.data) + '</table>';
    element.innerHTML = table;
  }
}
const table = new Table({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com', '(01) 22 888 4444'],
    ['Eoin', 'eoin@gmail.com', '0097 22 654 00033'],
    ['Sarah', 'sarahcdd@gmail.com', '+322 876 1233'],
    ['Afshin', 'afshin@mail.com', '(353) 22 87 8356'],
    ['Dirk', 'dborkett0@com.com', '(646) 3432270'],
    ['Maryl', 'mchampkins1@dailymail.co.uk', '(980) 3335235'],
    ['Stefan', 'sbrawson2@smh.com.au', '(180) 3533257'],
    ['Stephanie', 'scouronne4@storify.com', '(904) 5358792'],
    ['Emeline', 'esooley5@cyberchimps.com', '(308) 6561908'],
    ['Gavra', 'gkrout9@foxnews.com', '(383) 4909639'],
    ['Roxi', 'rvillage1@businessweek.com', '(980) 3335235'],
    ['Jamey', 'jsheringham0@rakuten.co.jp', '(773) 5233571'],
    ['Maye', 'mambrosoni8@prweb.com', '(895) 9997017'],
  ],
});
const app = document.getElementById('app');
table.render(app);