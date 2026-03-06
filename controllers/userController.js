//SQL
const connection=require('../config/db');
//get all users
exports.getAllUsers=(req,res)=>{
    connection.query('SELECT * FROM product_info', (err, rows, fields)=>{
        if(err) throw err;
            res.json(rows);
    });
};

// Search a user by id
// CRUD - Report
exports.getUserById=(req,res)=>{
    const id=req.params.id;
    connection.query('SELECT * FROM product_info WHERE id=?', [id], (err, rows, fields)=>{
        if(err) throw err;
        if(rows.length>0)
            res.json(rows);
        else
            res.status(404).json({message: "User not found"});
    });
}

//Create a new user
//CRUD - Create
exports.createUser=(req,res)=>{
    const {itemName, unitPrice, quantity, supplier}=req.body;
    connection.query('INSERT INTO product_info (itemName, unitPrice, quantity, supplier) VALUES (?, ?, ?, ?)', [itemName, unitPrice, quantity, supplier], (err, result)=>{
        if(err) throw err;
        res.json({message: 'User created successfully', userId: result.insertId});
    })
}

//Edit a user
//CRUD - Update

exports.updateUser=(req,res)=>{
    const {id, itemName, unitPrice, quantity, supplier}=req.body;
    connection.query('UPDATE product_info SET itemName=?, unitPrice=?, quantity=?, supplier=? WHERE id=?', [itemName, unitPrice, quantity, supplier, id], (err, result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message: 'User updated successfully'});
        else
            res.status(404).json({message: 'User not found'});
        })
    }

//Delete a user
//CRUD - Delete
exports.deleteUser=(req,res)=>{
    const id=req.body.id;
    connection.query('DELETE FROM product_info WHERE id=?', [id], (err, result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message: 'User deleted successfully'});
        else
            res.status(404).json({message: 'User not found'});
    })
}
