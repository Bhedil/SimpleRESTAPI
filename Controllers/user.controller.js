import userService from "../Services/user.service";
import { StatusCodes } from "http-status-codes";

const STATUS = {
    success: "OK",
    failure: "NO"
};

const getAllUser = (req, res) => {
    const allUsers = userService.getAllUser();
    
    if(allUsers.length){
        return res.status(StatusCodes.OK).send(allUsers);
    };
    return res.status(StatusCodes.NOT_FOUND).send({
        status: StatusCodes.failure,
        message: "Tidak ada user sama sekali"
    });
};

const getUser = (req, res) => {
    const id = parseInt(req.params.id, 10)
    const user = userService.getUser(id);
    if(user){
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            dataKeluarga: user
        });
    }
    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: "Tidak ada users yang ditemukan"
    });
};

const addUser =  (req, res) => {
    // const data = [];
    // data.push(req.body);
    const {body: user} = req; 
    const createUser = userService.addUser(user);
    return res.status(StatusCodes.CREATED).send({
            status: STATUS.success,
            message: "Berhasil dibuat",
            result: createUser
    });
};

const updateUser = (req, res) => {
    // const data = [];
    // data.push(req.body);
    const {body: user} = req;
    const id = parseInt(req.params.id, 10)
    
    const updatedUser = userService.updateUser(id, user);
    if(updatedUser) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            user: updatedUser  
        });
    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure, 
            message: `User ${id} tidak berhasil ditemukan`
        });
    }
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const getUser = userService.getUser(id);
    const removeUser = userService.removeUser(id)

    if (getUser){
        removeUser
        return res.status(StatusCodes.OK).send({
            status: StatusCodes.success,
            message: `User ${id} berhasil dihapus`
        })
    } 
        return res.status(StatusCodes.NOT_FOUND).send({
            status: StatusCodes.failure,
            message: `User ${id} tidak ditemukan`
        });
};

export default {
    getUser,
    getAllUser,
    updateUser,
    addUser,
    deleteUser
}