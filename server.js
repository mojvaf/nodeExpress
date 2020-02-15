const express = require('express');
const app = express();

app.get('/api/customers', (req, res) => {

    const customers = [
        { id: 1, first: "susan", last: "jackson" },
        { id: 2, first: "tom", last: "smite" },
        { is: 3, first: "mike", last: "lee" }


    ]

    res.json(customers)

})


const port = 4001
app.listen(port, () => console.log(`server runs at this port ${port}`))