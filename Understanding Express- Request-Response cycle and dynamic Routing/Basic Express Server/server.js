const express = require("express");

const server = express();
server.use(express.json());

const dummyContacts = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      subject: "Inquiry about services",
      message: "Hi, I would like to know more about your services. Can you provide details?",
      date: "2024-05-01"
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "9876543210",
      subject: "Feedback",
      message: "Your website is great, but I faced an issue with the checkout page.",
      date: "2024-05-02"
    },
    {
      name: "Robert Johnson",
      email: "robert.j@example.com",
      phone: "5551234567",
      subject: "Support needed",
      message: "I need help with my account login. It's not working.",
      date: "2024-05-03"
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "4445556666",
      subject: "Partnership request",
      message: "I represent XYZ Corp and would like to discuss collaboration opportunities.",
      date: "2024-05-04"
    },
    {
      name: "Michael Brown",
      email: "michael.b@example.com",
      phone: "7778889999",
      subject: "Complaint",
      message: "The product I received was damaged. Please assist with a replacement.",
      date: "2024-05-05"
    }
  ];

server.get("/home", (req, res) =>{
    res.status(200).send(`<h1>Welcome to Home Page</h1>`)
});

server.get("/aboutes", (req, res) =>{
    res.status(200).json({"message": "Welcome to About Us"})
});

server.get("/contacus", (req, res) =>{
    res.status(200).json({
        success: true,
        message: "Contact us data fetched successfully!",
        data: dummyContacts
      });
})

server.listen(3000, () =>{
    console.log(`server is running on port http://localhost:3000`)
});