const connection = require("./db");

const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 4000;



//login Authontication admin
app.post("/api/loginAdmin",(req,res)=>{
    const sql = "select * from principleAutho where email = ? and password = ?"
    const data = [req.body.email , req.body.password]
    try{
      connection.query(sql,data,(err,result)=>{
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ error: 'An error occurred while processing your request' });
      }
      if (result.length > 0) {
        res.json({ message: "User Found Successfully..." });
    } else {
        res.status(404).json({ message: "Record not found" });
    }
      })
    }catch(err){
      console.error("Exception:", err);
      res.status(500).json({ error: 'An error occurred while processing your request' });
    }
    
  })

//login Authontication admin
app.post("/api/loginTech",(req,res)=>{
    const sql = "select * from teacherList where email = ? and password = ?"
    const data = [req.body.email , req.body.password]
    try{
      connection.query(sql,data,(err,result)=>{
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ error: 'An error occurred while processing your request' });
      }
      if (result.length > 0) {
        res.json({ message: "User Found Successfully..." });
    } else {
        res.status(404).json({ message: "Record not found" });
    }
      })
    }catch(err){
      console.error("Exception:", err);
      res.status(500).json({ error: 'An error occurred while processing your request' });
    }
    
  })

  app.post("/api/loginStu",(req,res)=>{
    const sql = "select * from studentList where email = ? and password = ?"
    const data = [req.body.email , req.body.password]
    try{
      connection.query(sql,data,(err,result)=>{
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ error: 'An error occurred while processing your request' });
      }
      if (result.length > 0) {
        res.json({ message: "User Found Successfully..." });
    } else {
        res.status(404).json({ message: "Record not found" });
    }
      })
    }catch(err){
      console.error("Exception:", err);
      res.status(500).json({ error: 'An error occurred while processing your request' });
    }
    
  })




//post
app.post("/api/createTech", (req, res) => {
    const sql = "INSERT INTO teacherList SET ?";
    const data = {
        teacherId: req.body.teacherId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNumber: req.body.mobileNumber,
        standard : req.body.standard,
        email: req.body.email,
        password: req.body.password
    };

    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return;
            }
            res.json({ message: "Record added successfully." });
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});

app.post("/api/createStu", (req, res) => {
    const sql = "INSERT INTO studentList SET ?";
    const data = {
        studentId: req.body.studentId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        standard: req.body.standard,
        email: req.body.email,
        password: req.body.password
    };

    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return;
            }
            res.json({ message: "Record added successfully." });
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});

app.post("/api/createClass", (req, res) => {
    const sql = "INSERT INTO classList SET ?";
    const data = {
        classId: req.body.classId,
        className: req.body.className,
      
        standard: req.body.standard,
        mStartTime: req.body.mStartTime,
        mEndTime: req.body.mEndTime,
        sStartTime: req.body.sStartTime,
        sEndTime: req.body.sEndTime
    };

    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return;
            }
            res.json({ message: "Record added successfully." });
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});

app.post("/api/createTable", (req, res) => {
    const sql = "INSERT INTO tableList SET ?";
    const data = {
        tableId: req.body.tableId,
        standard: req.body.standard,
       
        mathStart : req.body.mathStart,
        mathEnd : req.body.mathEnd,
        sciStart : req.body.sciStart,
        sciEnd : req.body.sciEnd,
        engStart : req.body.engStart,
        engEnd : req.body.engEnd,
        hisStart : req.body.hisStart,
        hisEnd : req.body.hisEnd,

        sMathStart : req.body.sMathStart,
        sMathEnd : req.body.sMathEnd,
        sSciStart : req.body.sSciStart,
        sSciEnd : req.body.sSciEnd,
        sHisStart : req.body.sHisStart,
        sHisEnd : req.body.sHisEnd,
    };

    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return;
            }
            res.json({ message: "Record added successfully." });
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});



//get techaerInfo
app.get("/api/teacherInfo",(req,res)=>{
    const sql = "select * from teacherList"
    try{
        connection.query(sql,(err,result)=>{
            if(err){
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return; 
            }
            res.json(result);
        })
    }catch(err){
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
})


//get studentrInfo
app.get("/api/studentInfo",(req,res)=>{
    const sql = "select * from studentList"
    try{
        connection.query(sql,(err,result)=>{
            if(err){
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return; 
            }
            res.json(result);
        })
    }catch(err){
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
})


//get classInfo
app.get("/api/classInfo",(req,res)=>{
    const sql = "select * from classList"
    try{
        connection.query(sql,(err,result)=>{
            if(err){
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return; 
            }
            res.json(result);
        })
    }catch(err){
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
})


app.get("/api/tableInfo",(req,res)=>{
    const sql = "select * from tableList"
    try{
        connection.query(sql,(err,result)=>{
            if(err){
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return; 
            }
            res.json(result);
        })
    }catch(err){
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
})



app.post("/api/idStudentInfo", (req, res) => {
    const sql = "SELECT * FROM studentList WHERE standard = ?";
    const data = [req.body.standard]; // Use an array to correctly pass the parameter
    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return; 
            }
            res.json(result);
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});


app.post("/api/StaFindStudent", (req, res) => {
    const sql = "SELECT standard FROM studentList WHERE email = ? AND password = ?";
    const data = [req.body.email, req.body.password];

    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return;
            }
            if (result.length > 0) {
                res.json(result[0].standard); // Return the standard directly
            } else {
                res.status(404).json({ error: 'No student found with provided credentials' });
            }
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});

app.post("/api/StaFindTecher", (req, res) => {
    const sql = "SELECT standard FROM teacherList WHERE email = ? AND password = ?";
    const data = [req.body.email, req.body.password];

    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return;
            }
            if (result.length > 0) {
                res.json(result[0].standard); // Return the standard directly
            } else {
                res.status(404).json({ error: 'No student found with provided credentials' });
            }
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});


app.post("/api/idTeacherInfo", (req, res) => {
    const sql = "SELECT * FROM studentList WHERE standard = ?";
    const data = [req.body.standard]; // Use an array to correctly pass the parameter
    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return; 
            }
            res.json(result);
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});


// Delete Teacher (Principal)

app.post("/api/deleteTech", (req, res) => {
    const sql = "DELETE FROM teacherList WHERE teacherId = ?";
    const data = [req.body.teacherId]; // Get 'teacherId' from request body

    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return; 
            }

            // Check if any rows were affected (i.e., if a teacher was deleted)
            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'No teacher found with the provided ID' });
            } else {
                res.json({ message: 'Teacher successfully deleted' });
            }
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});

app.post("/api/deleteStu", (req, res) => {
    const sql = "DELETE FROM studentList WHERE studentId = ?";
    const data = [req.body.studentId]; // Get 'teacherId' from request body

    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return; 
            }

            // Check if any rows were affected (i.e., if a teacher was deleted)
            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'No teacher found with the provided ID' });
            } else {
                res.json({ message: 'Teacher successfully deleted' });
            }
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});

//Update
app.post("/api/updateStu", (req, res) => {
    const { studentId, firstName, lastName, standard, email, password } = req.body;

    const sql = `
        UPDATE studentList 
        SET firstName = ?, lastName = ?, standard = ?, email = ?, password = ? 
        WHERE studentId = ?
    `;

    const data = [firstName, lastName, standard, email, password, studentId];

    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return; 
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'No student found with the provided ID' });
            } else {
                res.json({ message: 'Student successfully updated' });
            }
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});

//Update
app.post("/api/updateTech", (req, res) => {
    const { teacherId, firstName, lastName,mobileNumber, standard, email, password } = req.body;

    const sql = `
        UPDATE teacherList 
        SET firstName = ?, lastName = ?, mobileNumber = ?,standard = ?, email = ?, password = ? 
        WHERE teacherId = ?
    `;

    const data = [firstName, lastName, mobileNumber,standard, email, password, teacherId];

    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return; 
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'No student found with the provided ID' });
            } else {
                res.json({ message: 'Student successfully updated' });
            }
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});


//Assign
app.post("/api/assign", (req, res) => {
    const { classId, teacherName} = req.body;

    const sql = `
        UPDATE classList 
        SET teacherName = ? 
        WHERE classId = ?
    `;

    const data = [teacherName, classId];

    try {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: 'An error occurred while processing your request' });
                return; 
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'No student found with the provided ID' });
            } else {
                res.json({ message: 'Student successfully updated' });
            }
        });
    } catch (err) {
        console.error("Exception:", err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });