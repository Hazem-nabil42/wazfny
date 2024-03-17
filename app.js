const express = require('express')
const app = express();

// Serve HTML file
app.set('view engine', 'ejs');
app.use( '/public', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/commonQ', (req, res) => {
  res.render('commonQ');
});
app.get('/whyus', (req, res) => {
  res.render('whyus');
});
app.get('/dudues', (req, res) => {
  res.render('dudues');
});
app.get('/how', (req, res) => {
  res.render('how');
});
app.get('/politics', (req, res) => {
  res.render('politics');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});