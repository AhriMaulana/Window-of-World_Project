const { user } = require('../../models')

exports.addUser = async (req, res) => {
    
    try {
        const data = req.body
        const createdData = await user.create(data)

        res.send({
            status: "success",
            data: createdData
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "Failed",
            message: "Server error"
        })
    }
}


exports.getUsers = async (req, res) => {
   
    try {
        const users = await user.findAll({
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt', 'role']
            }
        })

        res.send({
            status: 'success',
            data: {
                users
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}


exports.getUser = async (req, res) => {
    
    try {
        const { id } = req.params

        const data = await user.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            data: {
                data
            }
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}


exports.deleteUser = async (req, res) => {
   
    try {
        const { id } = req.params

        await user.destroy({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            data: {
                id : id
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}