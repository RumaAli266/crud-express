import StudentModel from "../models/Student.js"

class studentController{

    static createDoc = async(req, res) =>{
        // console.log('create document post method')
        // console.log(req.body)
        try {
            const {name, age, fees} = req.body
            // name age and fees are same as form 
            const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees
            })
            //saving document
            const result = await doc.save()
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
    }

    static editDoc = async(req, res) =>{
        try {
            const result = await StudentModel.findById(req.params.id)
            res.render("edit", {data: result})
        } catch (error) {
            console.log(error)
        }
    }

    static updateDocById = async(req, res) =>{
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
    }

    static deleteDocById = async(req, res) =>{
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
    }

    static getAllDoc = async(req, res) =>{
        try {
            const result = await StudentModel.find()
            // console.log('aaaass', result)
            res.render("index", {data: result})
        } catch (error) {
            console.log(error)
        }

    }
}


export default studentController