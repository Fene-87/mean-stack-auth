import Role from "../models/Role.js";

export const createRole = async (req, res, next) => {
    try {
        if(req.body.role && req.body.role !== '') {
            const newRole = new Role(req.body);
            await newRole.save();
            return res.send('New Role Created');
        } else {
            return res.status(400).send('Bad Request');
        }
    } catch (error) {
        return res.status(500).send('Internal Server Error!')
    }
};

export const updateRole = async (req, res, next) => {
    try {
        const role = await Role.findById({_id: req.params.id});
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
};
