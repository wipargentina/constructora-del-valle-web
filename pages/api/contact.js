server.post('/api/contact', (req, res) => {
  const { fname, lname, email, phone, message } = req.body;
  console.log(req.body);
  res.send('success');
});
