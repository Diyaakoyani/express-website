const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/views/home.html')
})

app.get('/marksheet', (req, res) => {
  res.sendFile(__dirname + '/views/marksheet.html');
});


app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/views/about.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/views/contact.html')
})

app.get('/process-marksheet', (req, res) => {
  const marks = [
    parseInt(req.query.mark1),
    parseInt(req.query.mark2),
    parseInt(req.query.mark3),
    parseInt(req.query.mark4),
    parseInt(req.query.mark5)
  ];
  let result = '<table border="1">';
  result += '<tr><th>Subject</th><th>Marks</th></tr>';

  marks.forEach((mark, index) => {
    const color = mark < 60 ? 'red' : 'black';
    result += `<tr><td>Subject ${index + 1}</td><td style="color:${color}">${mark}</td></tr>`;
  });

  result += '</table>';

  res.send(result);
});

app.get('/process', (req, res) => {
  var no1 = parseInt(req.query.txt1);
  var no2 = parseInt(req.query.txt2);
  var c = no1 + no2
  var msg = ""
  if(c > 30)
  {
    msg = "C is > 30"
  }
  else{
    msg = "C is < 30"
  }
  var ans =`A value is ${no1}<br/> B value is ${no2}<br/> C value is ${c}<br/> ${msg}`
  res.send(ans);
  
});

app.get('/cake', (req, res) => {
  res.send('Hello Cake!')
})

app.get('/cake/ahmedabad', (req, res) => {
  res.send('Hello Ahmedabad Cake!')
})

app.get('/search/', (req, res) => {
  var myq = req.query.q;
  res.send('Search value ' + myq)
})

app.get('/edit/:id', (req, res) => {
  var myid = req.params.id;
  res.send('Edit Record id is ' + myid)
})

app.get('*', (req, res) => {
    res.send('<h1> 404 Not Found</h1>')
  })

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})