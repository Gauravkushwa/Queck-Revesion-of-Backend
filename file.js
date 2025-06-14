function selectedUsers(users, selectedDocuments){
    return users.filter(u => selectedDocuments.every(d => users.documents.includes(doc)));
}

let users = [

    {
  
        name: 'Arvind',
  
        age: 21,
  
        gender: 'MALE',
  
        documents: ['Adhar', '12_Marksheet']
  
    },
  
    {
  
        name: 'Sunil',
  
        age: 15,
  
        gender: 'MALE',
  
        documents: ['Pancard', 'Passport']
  
    },
  
    {
  
        name: 'Rahul',
  
        age: 18,
  
        gender: 'MALE',
  
        documents: ['10_Marksheet']
  
    },
  
    {
  
        name: 'Neha',
  
        age: 21,
  
        gender: 'FFMALE',
  
        documents: ['Adhar', '1O_Marksheet', 'Pancard']
  
    },
  
    {
  
        name: 'Tanu',
  
        age: 21,
  
        gender: 'FFMALE',
  
        documents: []
  
    }
]
let selectedDocuments = ['Adhar', '10_Marksheet'];
const filtedUser = filtedUserByDocuments(users, selectedDocuments);
console.log(filtedUser)