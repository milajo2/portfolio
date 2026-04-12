const About = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-4">
      <div className="max-w-4xl w-full flex flex-col gap-12">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-4xl font-serif leading-tight">
          I’m Jamila, an aspiring product designer and a keen illustrator based in London.
        </h1>

        {/* Info Sections */}
        <div className="flex flex-col gap-10 py-10">

          {/* Current Role */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
            <span className="font-medium">Current role</span>
            <p className="text-gray-800 leading-relaxed">
              Currently I work for <strong>Sainsburys Tech as a Data Engineer</strong>. I work with machine
              learning models translating the algorithms into production level code. The outputs
              of the model are decided by the front end, which the user inputs. Aiding in helping
              to develop a production level algorithm to generate yellow stickers for fresh food
              reductions, maintenance and improvement of the online groceries substitution
              production code.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
            <span className="font-medium">Skills</span>
            <p className="text-gray-800 leading-relaxed">
              User flows, user research, stakeholder management, colleague interviews,
              programming (Python and SQL) and data analysis
            </p>
          </div>

          {/* Profile */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
            <span className="font-medium">Profile</span>
            <div className="flex flex-col gap-4 text-gray-800 leading-relaxed">
              <p>
                I've been working in Tech for the past 4 years particularly in the data sphere, I usually
                take a liking towards the more visual aspects of back end design. As this still utilises
                my technical skills as well as problem solving, this also allows me to incorporate my
                creative skills in order to enhance user experience.
              </p>
              <p>
                An example of this was at the beginning of my career I developed an internal work
                station booking app, to help stream line the process within my team when booking
                contractors. This app was created using PowerApps.
              </p>
            </div>
          </div>

          {/* Resume */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
            <span className="font-medium">Resume</span>
            <a href="/path-to-your-resume.pdf" className="underline underline-offset-4">
              My resume attached
            </a>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
            <span className="font-medium">Contact</span>
            <a href="mailto:azadjamila123@gmail.com" className="underline underline-offset-4">
              Email - azadjamila123@gmail.com
            </a>
          </div>

        </div>
      </div>
    </div>
  )
};

export default About;
