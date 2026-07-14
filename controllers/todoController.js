const todos = [
    {
        "createdAt": "2026-06-18T22:52:46.591Z",
        "title": "Buy Groceries",
        "description": "Buy the following groceries\n- milk\n- vegetables",
        "isDone": false,
        "id": "7"
    },
    {
        "createdAt": "2026-06-19T01:58:20.928Z",
        "title": "Attend the New Site Config Meeting",
        "description": "Meeting today at 8.30PM IST",
        "isDone": true,
        "id": "8"
    },
    {
        "createdAt": "2026-06-19T04:17:59.186Z",
        "title": "Amount Transfer to Auditor",
        "description": "Do an amount transfer for GST taxes to Auditor",
        "isDone": false,
        "id": "9"
    },
    {
        "createdAt": "2026-07-07T02:51:02.219Z",
        "title": "Complete Task #543 before tomorrow 5pm",
        "description": "Task #543 has 3 features which needs to be completed as a quick development fix post production",
        "isDone": false,
        "id": "10"
    }
];

const todoController = {
    getAllTodos: async (request, response) => {
    try {response.status(200).json({message: "Get all todos"});
    } catch (error) {
        response.status(500).json({message: "Error occurred while fetching todos", error:e.message});
    }     
},  

    createTodo: async (request, response) => {
    try {

        console.log(request.body);
        
        response.status(200).json({message:"Create a todo"});
    } catch (error) {
        response.status(500).json({message: "Error occurred while creating todo", error});
    }
    },
   
    updateTodo: async (request, response) => {
    try {
        response.status(200).json({message:"Update a todo"});
    } catch (error) {
        response.status(500).json({message: "Error occurred while updating todo", error});
    }
    },

    deleteTodo: async (request, response) => {
    try {
        response.status(200).json({message:"DELETE a todo"});
    } catch (error) {
        response.status(500).json({message: "Error occurred while deleting todo", error});
    }
    }
 }

module.exports = todoController;