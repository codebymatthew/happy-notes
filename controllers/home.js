const Notes = require('../models/Notes')

module.exports = {
    getIndex: (req, res)=> {
        res.render('index.ejs')
    },
    getNotes: async(req, res)=> {
        try {
            const notes = await Notes.find()
            res.render('index.ejs', {notes: notes})
            console.log(notes)
        } catch (err) {
            console.log(err)
        }
    },
    submitNote: async (req, res)=> {
        try {
            await Notes.create({noteName: req.body.noteName, noteColor: req.body.noteColor, noteInfo: req.body.noteInfo})
            res.redirect('/')
        } catch (err) {
            
        }
    },
    deleteNote: async (req, res)=> {
        try {
            await Notes.findOneAndDelete({_id:req.body.itemFromJs})
            console.log(req.body)
            console.log(`deleted note!`)
            res.json(`deleted note!!`)
        } catch (err) {
            console.log(err)
        }
    }
}