import Image from "next/image"

const team = [
    { 
      name: "Mr.Hardik Dani", 
      role: "B.A.F., LL.B., ACS", 
      description: "He is a Company Secretary with more than 6 years of professional experience in the field of ROC and Secretarial compliances. He is having working experience in handling all listed companies Compliances as per LODR and SEBI Takeover.",
      img: "/assets/member-1.png" 
    },
    { 
      name: "Mr.Shivrika", 
      role: "Manager: Company Secretary", 
      description: "She have with more than 4 years of professional experience in H.R and Associates. She is having working experience in handing all listed companies Compliances as per LODR and SEBI Takeover Compliances.",
      img: "/assets/member-2.png" 
    },
    { 
      name: "Mr.Abhay", 
      role: "Manager: Company Secretary", 
      description: "She is an MBA with more than 5 years of professional experience in the field of Banking and Finance. She is having working experience in handling matters related to personal.",
      img: "/assets/member-3.png" 
    },
    { 
      name: "Kunal Doshi", 
      role: "Senior Partner", 
      description: "He is a Company Secretary with more than 8 years of professional experience in the field of ROC and Secretarial compliances. He is having working experience in handling all listed companies Compliances as per LODR and SEBI Takeover Compliances.",
      img: "/assets/member-4.png" 
    },
    { 
      name: "Pooja parmar", 
      role: "Senior Accountant", 
      description: "She have with more than 4 years of professional experience in ROC and Associates. She is having working experience in handling all listed companies Compliances as per LODR and SEBI Takeover Compliances.",
      img: "/assets/member-5.png" 
    },
    { 
      name: "Harshita", 
      role: "Associate company secretary", 
      description: "She is an MBA with more than 5 years of professional experience in the field of Banking and Finance. She is having working experience in handling matters related to Banking and Finance.",
      img: "/assets/member-6.png" 
    }
  ]
  
  export default function TeamMembers() {
    return (
      <div className="py-10 bg-gray-50">
        <div className="max-w-full mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Team Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-lg transition flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Image src={member.img} width={300} height={300} alt={member.name} className="w-44 h-44 object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-2">{member.description}</p>
                  <button className="text-blue-600 text-sm hover:underline">Read More...</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }