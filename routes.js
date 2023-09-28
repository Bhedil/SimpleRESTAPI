import express from "express";
import { StatusCodes } from "http-status-codes";
import { expressYupMiddleware } from 'express-yup-middleware';
import {addUser, updateUser, getUser, deleteUser} from "./user.schema.js";
import userController from "./Controllers/user.controller.js";

const router = express.Router();

//buat readable aja
router.get('/ping', (req, res) => {
    res.status(StatusCodes.OK);
    res.send("Hello, galactic overlord");
});

router.get('/list', userController.getAllUser);

router.get('/read/:id', 
            expressYupMiddleware({
                schemaValidator: getUser,
                expectedStatusCode: StatusCodes.BAD_REQUEST
            }),
            userController.getUser
);

router.post('/create',
             expressYupMiddleware({
                schemaValidator: addUser, 
                expectedStatusCode: StatusCodes.BAD_REQUEST
            }), 
            userController.addUser
);

router.put('/update/:id', 
            expressYupMiddleware({
            schemaValidator: updateUser, 
            expectedStatusCode: StatusCodes.BAD_REQUEST
        }), 
        userController.updateUser
);

router.delete('/remove/:id', 
            expressYupMiddleware({
                schemaValidator: deleteUser,
                expectedStatusCode: StatusCodes.BAD_REQUEST
            }), 
            userController.deleteUser);

export default router;