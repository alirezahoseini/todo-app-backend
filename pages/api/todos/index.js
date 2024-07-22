import connectToDB from "@/utils/db";
import todosModel from '@/models/todo'
import validatTodo from "@/validators/todo";

export default async function handler(req, res) {
    connectToDB()
    switch (req.method) {
      case 'GET':
        try {
            const allTodos = await todosModel.find({}, '-__v');
            return res.status(200).json(allTodos);        
        } catch (error) {
            console.log('Cannot Find all todos in /api/todos/index.js - ERORR =>', error);
            return res.status(500).json({message: 'Unknow server error :((('});
        }
      case 'POST':
        try {
            const validationStatus = await validatTodo(req.body);
            if(validationStatus !== true){
                console.log('validation falsed');
                return res.status(422).json(validationStatus);        
            }else{
                const {description, title} = req.body;
                const newTodo = await todosModel.create({description, title})
                return res.status(201).json({message: 'Todo created :)'});        
            }
        } catch (error) {
            console.log('Cannot Create new todo /api/todos/index.js - ERORR =>', error);
            return res.status(500).json({message: 'Unknow server error :((('});
        }
    
      default:
        res.status(200).json({ message: "UNHANDLED REQUEST !!!!!" });
        break;
    }
  }
  