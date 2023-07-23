import React, { useState } from "react";
import '../index.css';
import Editemployee from './editemployee'; 


const TeamSection = () => {
    const [teamMember, setTeamMembers] = useState([
        {
            id: 1,
            name: "Diana Zale",
            role: "CEO",
            image: "https://media.istockphoto.com/id/997661938/photo/close-up-portrait-of-smiling-pretty-girl-in-yellow-sweater-isolated-on-gray-background.jpg?s=612x612&w=0&k=20&c=ziL4OdLh1I5VlqRwoPJwrCid0gYjjGfnmtUUhalEQMk=",
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Manager",
            image: "https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg",
        },
        {
            id: 3,
            name: "Adam Copeland",
            role: "Database Administrator",
            image: "https://media.istockphoto.com/id/1095898284/photo/portrait-of-thinking-young-man-looking-away.jpg?s=612x612&w=0&k=20&c=5Gq1OY470MHxs8c1J-spmJYg1Iwp4ABEzsaG2tUmG1Q=",
        },
        {
            id: 4,
            name: "Mathew Jacob",
            role: "Director of Operations",
            image: "https://thumbs.dreamstime.com/b/young-man-smiling-beard-wearing-green-shirt-isolated-white-background-92802989.jpg",
        },
        {
            id: 5,
            name: "Pamela Rose",
            role: "Backend Developer",
            image: "https://wrestlingnews.co/.image/t_share/MTkwMDM0MTMyNzMxNTY5MjQ1/bayley.jpg",
        },
    ]);

    function update(id, newName, newRole) {
        // Find the team member with the provided id and update its name and role
        const updatedMembers = teamMember.map((member) =>
            member.id === id ? { ...member, name: newName, role: newRole } : member
        );
    
        setTeamMembers(updatedMembers);
    
        // Save the updated data in local storage
        localStorage.setItem('teamMembers', JSON.stringify(updatedMembers));
    }


    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamMember.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-70 object-cover rounded-lg mb-4 "
                            />
                            <div className="flex justify-center items-center">
                                <div className="p-6 rounded-lg text-center">
                                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{member.name}</h3>
                                    <p className="text-gray-500 text-lg animate-bounce">{member.role}</p>
                                    <Editemployee member={member} update={update} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
