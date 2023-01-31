var router = require('express').Router()
const gatete = new Map();

gatete.set("1", "Salchicha");
gatete.set("2", "Seto");
gatete.set("3", "Sicario");
gatete.set("4", "Solete");
gatete.set("5", "Sugatita");




router.get('/:id', function(req, res) {
var nombre =gatete.get(req.params.id);
if (nombre==null){
  res.json ({message: "No existe el gatete con id " + req.params.id});
}
else {res.json({message: nombre})}
  res.json({ message: gatete.get(req.params.id) })
})

router.get('/', function(req, res) {
    array = Array.from(gatete, ([name, value]) => ({ name, value }));
    console.log(array);
    res.json(array)
})

router.post('/', function(req, res) {
  res.json({ message: 'Vas a añadir un gatete' })
})

router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar el gatete con id ' + req.params.id })
})

router.delete('/:id', function(req, res) {
  res.json({ message: 'Vas a borrar el gatete con id ' + req.params.id})
})


module.exports = router