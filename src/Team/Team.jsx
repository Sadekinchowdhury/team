import { FaUniversity } from "react-icons/fa";

const Team = () => {
  const University = [
    {
      name: "Cambridge University",
      image: <FaUniversity size={30} color="blue" />,
    },
    {
      name: "Cambridge University",
      image: <FaUniversity size={30} color="blue" />,
    },
    {
      name: "University of California,",
      image: <FaUniversity size={30} color="blue" />,
    },
    {
      name: "Harvard University ,",
      image: <FaUniversity size={30} color="blue" />,
    },
    {
      name: "Cambridge University",
      image: <FaUniversity size={30} color="blue" />,
    },
    {
      name: "University of California,",
      image: <FaUniversity size={30} color="blue" />,
    },
    {
      name: "Harvard University ,",
      image: <FaUniversity size={30} color="blue" />,
    },
    {
      name: "Cambridge University",
      image: <FaUniversity size={30} color="blue" />,
    },
  ];
  const Mentor = [
    {
      University_name: "Cambridge University",
      name:"Stephen Hawking",
      title:" Ph.D. in Theoretical Physics from University of Cambridge",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UHascoacm1Xa-q9qirC_8cke5STMkrScDw&usqp=CAU",
    },
    {
      University_name: "Cambridge University",
      name:"Yamin",
      title:"Social activist, scholar of critical theory, feminism, and Marxism, advocate for racial justice and prison abolition.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UHascoacm1Xa-q9qirC_8cke5STMkrScDw&usqp=CAU",
    },
    {
      University_name: "Cambridge University",
      name:"Jaks",
      title:"Philosopher, political activist, and public intellectual focusing on race, class, and democracy, author of ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UHascoacm1Xa-q9qirC_8cke5STMkrScDw&usqp=CAU",
    },
    {
      University_name: "Cambridge University",
      name:"Stephen Hawking",
      title:" Ph.D. in Theoretical Physics from University of Cambridge",
      button:<> <button className="py-2 px-3 bg-black hover:bg-slate-600 transition duration-300 flex items-center justify-center mt-3 text-white mx-auto rounded-md ">Message him now</button>
      </>,

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UHascoacm1Xa-q9qirC_8cke5STMkrScDw&usqp=CAU",
    },
    {
      University_name: "Cambridge University",
      name:"Jaks",
      title:"Philosopher, political activist, and public intellectual focusing on race, class, and democracy, author of ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UHascoacm1Xa-q9qirC_8cke5STMkrScDw&usqp=CAU",
    },
    {
      University_name: "Cambridge University",
      name:"Stephen Hawking",
      title:" Ph.D. in Theoretical Physics from University of Cambridge",
      button:<> <button className="py-2 px-3 bg-black hover:bg-slate-600 transition duration-300 flex items-center justify-center mt-3 text-white mx-auto rounded-md ">Message him now</button>
      </>,

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UHascoacm1Xa-q9qirC_8cke5STMkrScDw&usqp=CAU",
    },
    {
      University_name: "Cambridge University",
      name:"Jaks",
      title:"Philosopher, political activist, and public intellectual focusing on race, class, and democracy, author of ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UHascoacm1Xa-q9qirC_8cke5STMkrScDw&usqp=CAU",
    },
    {
      University_name: "Cambridge University",
      name:"Stephen Hawking",
      title:" Ph.D. in Theoretical Physics from University of Cambridge",
      button:<> <button className="py-2 px-3 bg-black hover:bg-slate-600 transition duration-300 flex items-center justify-center mt-3 text-white mx-auto rounded-md ">Message him now</button>
      </>,

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UHascoacm1Xa-q9qirC_8cke5STMkrScDw&usqp=CAU",
    },
    
  ];
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-4">Team</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 m-3">
        {University.map((versity) => (
          <div key={versity.id} className="bg-indigo-300 border px-2 py-3">
            <p className="flex items-center justify-center mb-3">
              {versity.image}
            </p>
            <p className="flex items-center justify-center text-xl font-semibold">
              {versity.name}
            </p>
          </div>
        ))}
      </div>
      <div className="py-6">
        <h1 className="text-3xl font-semibold text-center py-4">Meet Your Mentor</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 m-3">
          {Mentor.map((mentor) => (
            <div key={mentor.id} className="  px-4 py-6">
              <div className="flex items-center justify-center">
                <img
                  src={mentor.image}
                  className="h-20 w-20 rounded-full mb-3"
                  alt=""
                />
              </div>

              <p className="text-center text-xl font-semibold">
                {mentor.name}
              </p>
              <p className="py-2 text-center">{mentor.title}</p>
              {
                mentor.button
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
