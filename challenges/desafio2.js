db.produtos.updateMany(
    {},
    {
        $set: {
            valorUnitario: NumberDecimal("0.00"),
        },
    },
);
db.produtos.find(
    { valorUnitario: NumberDecimal("0.00") },
    { valorUnitario: 1, nome: 1, _id: 0 },
);