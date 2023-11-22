const employees = [
    {
        name: "Emily Johnson",
        email: "emp1@email.com",
        photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        role: "655dfff92fc61a5f54421bd9",
    },
    {
        name: "John Smith",
        email: "emp2@email.com",
        photo: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        role: "655e00a0319542c3681645d8",
    },
    {
        name: "Alex Martinez",
        email: "emp3@email.com",
        photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        role: "655e00a0319542c3681645d8",
    },
    {
        name: "Rachel Lee",
        email: "emp4@email.com",
        photo: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        role: "655e0170a0c85740a106b982",
    },
];
const roles = [
    {
        _id: "655dfff92fc61a5f54421bd9",
        name: "IT Help Desk",
        ref: "ihd",
    },
    {
        _id: "655e00a0319542c3681645d8",
        name: "Software Engineer",
        ref: "se",
    },
    {
        _id: "655e0170a0c85740a106b982",
        name: "UI/UX Designer",
        ref: "ud",
    },
];
const clients = [
    {
        _id: "655e0172a0c85740a106b984",
        name: "Alex Morggan",
        ref: "clfd01",
        email: "fd@mail.com",
    }
    ];
const qualities = [
    {
        name: "Communication",
        description: "Communication",
        role: "655dfff92fc61a5f54421bd9",
    },
    {
        name: "Customer Satisfaction",
        description: "Customer Satisfaction",
        role: "655dfff92fc61a5f54421bd9",
    },
    {
        name: "Documentation",
        description: "Documentation",
        role: "655dfff92fc61a5f54421bd9",
    },
    {
        name: "Timeliness",
        description: "Timeliness",
        role: "655dfff92fc61a5f54421bd9",
    },
    {
        name: "Problem-Solving",
        description: "Problem-Solving",
        role: "655e00a0319542c3681645d8",
    },
    {
        name: "Collaboration",
        description: "Collaboration",
        role: "655e00a0319542c3681645d8",
    },
    {
        name: "Meeting Deadlines",
        description: "Meeting Deadlines",
        role: "655e00a0319542c3681645d8",
    },
    {
        name: "Creativity",
        description: "Creativity",
        role: "655e0170a0c85740a106b982",
    },
    {
        name: "Collaboration",
        description: "Collaboration",
        role: "655e0170a0c85740a106b982",
    },
    {
        name: "Meeting Design Requirements",
        description: "Meeting Design Requirements",
        role: "655e0170a0c85740a106b982",
    },
];
const projects = [
    {
        name: "Manage budget",
        description: "",
        client: "655e0172a0c85740a106b984",
    }
];

module.exports = {
    employees,
    projects,
    roles,
    qualities,
    clients
};