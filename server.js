const express = require("express");
const app = express();
const PORT = 8000;

const friends = {
    'agbaj': {
        'age': 25,
        'name': "Agbaje AbdulQudus",
        'location': "Ile Ife, osun state",
    },
    'Dabiri': {
        'age': 24,
        'name': "Dabiri Babatunde",
        'location': "Island, Lagos State",
    },
    'Abdullah': {
        'age': 27,
        'name': "Salawu Abdullah",
        'location': "Ado-odo Ota, ogun state",
    }
 
};

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get("/api/:friendName", (request, response) => {
    const friendName = request.params.friendName
    if(friends[friendName]){
        response.json(friends[friendName])
    }else{
        response.json(friends['Abdullah'])
    }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`the server is running on ${PORT}`);
});
