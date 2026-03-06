//SQL
const connection=require('../config/db');
//Get all users
exports.getAllUsers=(req,res)=>{
    connection.query('SELECT * FROM userdata',(err,rows,fields)=>{
        if(err) throw err;
            res.json(rows);
    })
};


 exports.getUserById=(req,res)=>{
     const id=req.params.id;
     connection.query('SELECT * FROM userdata WHERE id=? OR first_name=?',[id,id],(err,rows,fields)=>{
         if(err) throw err;
         if(rows.length === 0) {
             return res.status(404).json({ message: "User not found" });
         }
        res.json(rows[0]);
     })
};

//Create a new user
exports.createUser=(req,res)=>{
    const {fname,lname,email,gender,ip_address,course}=req.body;
    connection.query('INSERT INTO userdata (first_name,last_name,email,gender) VALUES (?,?,?,?)',[fname,lname,email,gender],(err,result)=>{
        if(err) throw err;
        res.json({message:'User created successfully', userId: result.insertId});
    })

};

//Update a user
exports.updateUser=(req,res)=>{
    const id=req.params.id;
    const {fname,lname,email,gender,ip_address,course}=req.body;
    connection.query('UPDATE userdata SET first_name=?, last_name=?, email=?, gender=?, ip_address=?, course=? WHERE id=?',[fname,lname,email,gender,ip_address,course,id],(err,result)=>{
        if(err) throw err; 
        if(result.affectedRows > 0) {
            res.status(404).json({ message: "User not found" });
        }  
        res.json({message:'User updated successfully'});
    })
};

//Delete a user
exports.deleteUser=(req,res)=>{
    const id=req.params.id;
    connection.query('DELETE FROM userdata WHERE id=?',[id],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows > 0) {
            res.status(404).json({ message: "User not found" });
        }
        res.json({message:'User deleted successfully'});
    })
};