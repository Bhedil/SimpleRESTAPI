import userDAO from "../Models/Persistence/user.dao.js"

const getUser = (userID) => {
    return userDAO.get(userID);
};

const getAllUser = () => {
    return userDAO.getAllUser();
};

const addUser = (details) => {
    return userDAO.insert(details);
};

const updateUser = (userID, details) => {
    return userDAO.update(userID, details);
};

const removeUser = (userID) => {
    return userDAO.remove(userID);
};

export default{
    addUser,
    getUser,
    updateUser,
    removeUser,
    getAllUser
}