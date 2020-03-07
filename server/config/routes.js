controller= require('../controllers/controllers.js');

module.exports=(app)=>
{
    app.get('/pets', (req, res) => 
    {
        controller.getAll(req,res);
    });

    app.get('/pets/:id', (req, res) => 
    {
        controller.getOne(req,res);
    });

    app.post('/pet', (req, res) => 
    {
        controller.post(req,res);
    });

    app.put('/pets/:id', (req, res) => 
    {
        controller.update(req,res);
    });

    app.delete('/pets/:id', (req, res) => 
    {
        controller.delete(req,res);
    });

    app.get('/like/:id', (req, res) => 
    {
        controller.like(req,res);
    });

}