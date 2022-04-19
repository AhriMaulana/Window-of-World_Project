const { transaction, user } = require("../../models");

exports.addTransaction = async (req, res) => {
    try {
        const {transferProof, userId} = req.body

        const createTransaction = await transaction.create({
            transferProof: transferProof,
            transferProof: req.file.filename,
            userId: userId,
            remainingActive: 30,
            userStatus: "Active",
            paymentStatus: "Approved"
        })
        const id = req.body
        const find = await user.findOne({
            where: {
                id: id,
            }
        })

        res.send({
            status: 'success',
            data: {
                transaction: {
                    id: createTransaction.id,
                    user: id,
                },
                transferProof: createTransaction.transferProof,
                userStatus: createTransaction.userStatus,
                paymentStatus: createTransaction.paymentStatus
            }
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
        console.log(error)
    }
}


exports.getTransactions = async (req, res) => {
    try {
        let data = await transaction.findAll({
            include: [
                {
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password", "email", "role"],
                    },
                },
                
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt", ],
            },
        });

        res.send({
            status: "success...",
            data: {
                transaction : data
            }
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};


exports.getTransaction = async (req, res) => {
    try {
        const { id } = req.params
        let data = await transaction.findOne({
            where : {
                id : id
        },
            
            include: [
                {
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password", "email", "role"],
                    },
                },

            ],
            attributes: {
                exclude: ["createdAt", "updatedAt",],
            },
        });

        res.send({
            status: "success...",
            data: {
                transaction: data
            }
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};


exports.editTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const newData = req.body

        await transaction.update(newData, {
            where: {
                id,
            },
        });

        const update = await transaction.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })


        res.send({
            status: "success",
            data: {
                transaction: update
            }
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};