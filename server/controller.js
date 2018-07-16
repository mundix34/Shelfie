module.exports = {
    getAll: (req, res) => {
        const dbSet = req.app.get('db');
        dbSet.get_inventory()
        .then ( (inventory)=> res.status(200).send(inventory)
        .catch(err =>{res.status(500).send({ errorMessage: 'Oops, encountered error' })
        console.log(err);
    }))


},
    

create: (req, res) => {
    const dbSet = req.app.get('db');
    const {name, price, imageurl} = req.body;
    dbSet.create_product([name, price, imageurl])
    .then(() => res.sendStatus(200))
    .catch(err => {res.status(500).send({errorMessage: 'Oops, an error occured'})
console.log(err);
})
}





}