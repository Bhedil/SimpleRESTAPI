import userData from "../data/users.data.js"

const get = (userID) => {
    
    const findUser = userData.find((user) => {
        if(user.id === userID){
            return user;
        }
        // return null;
    });
    return findUser;
};

const getAllUser = () => {
    return userData;
};

const insert = (details) => {
    //untuk iterasi elemen array dalam id
    const newUser = {id: userData.length + 1, ...details};
    userData.push(newUser);
    return newUser;
};

const update = (userID, newDetails) => {
    let existingUser = null;
    let userIndex;

    //Map buat perulangan untuk mencari indeks elemen dalam array berdasarkan id
    userData.map((user, index) => {
        if (user.id === userID) {
            existingUser = user;
            userIndex = index;
        }
    });

    if (!existingUser) {
        return false;
    }

    //update user dari existingUser dan newDetails
    const updatedUser = {
        ...existingUser,
        ...newDetails
    };

    //userIndex = cari elemen yg ingin diganti
    userData.splice(userIndex, 1, updatedUser);
    // console.log(updatedUser)
    return updatedUser;
    
};

const remove = (userID) => {
    const deleteuser = (user, index) => {
        if(user?.id === userID){
            //Hapus indeks elemen dari array berdasarkan id
            userData.splice(index, 1)
            // return true;
        }
        // return false;
    }
    return userData.find(deleteuser)
};

export default {
   get,
   insert,
   update,
   remove,
   getAllUser
}