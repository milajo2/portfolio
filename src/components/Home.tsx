import { Link } from "react-router-dom";
import { getAssetPath } from '../utils/assets';

const Home = () => {
  return (
    <div className="flex flex-col gap-20 px-4">
      
      {/* Intro Section */}
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-serif">Hey, I'm Jamila Azad!</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm an aspiring designer that's intrigued in making digital designs that are accessible and easy to use. 
          Currently I'm working on personal projects displaying my end to end design from ideation to prototype.
        </p>
      </div>

      {/* Project 1 */}
      <section className="flex flex-col items-center gap-8">
        <div className="flex w-full gap-4 justify-center">
          <Link to="/book-recommendations" className="flex gap-4 group">
          <img src={getAssetPath("images/bookseeker/bookseeker-1.jpeg")} alt="Bookseeker" className="flex-1 w-1/3 h-auto rounded-lg shadow-sm object-cover" />
          <img src={getAssetPath("images/bookseeker/bookseeker-2.jpeg")} alt="Bookseeker" className="flex-1 w-1/3 h-auto rounded-lg shadow-sm object-cover" />
          <img src={getAssetPath("images/bookseeker/bookseeker-3.jpeg")} alt="Bookseeker" className="flex-1 w-1/3 h-auto rounded-lg shadow-sm object-cover" />
          </Link>
        </div>
        <Link to="/book-recommendations" className="group">
          <h2 className="text-2xl font-serif text-center group-hover:underline decoration-1 underline-offset-8">
            Book recommendation App
          </h2>
        </Link>
      </section>

      {/* Project 2 */}
      <section className="flex flex-col items-center gap-8">
        <div className="flex w-full gap-4 justify-center">
          <Link to="/notification-reminder" className="flex gap-4 group">
          <img src={getAssetPath("images/notifications/notifs-1.jpeg")} alt="Notifs" className="flex-1 w-1/3 h-auto rounded-lg shadow-sm object-cover" />
          <img src={getAssetPath("images/notifications/notifs-2.jpeg")} alt="Notifs" className="flex-1 w-1/3 h-auto rounded-lg shadow-sm object-cover" />
          <img src={getAssetPath("images/notifications/notifs-3.jpeg")} alt="Notifs" className="flex-1 w-1/3 h-auto rounded-lg shadow-sm object-cover" />
          </Link>
        </div>
        <Link to="/notification-reminder" className="group">
          <h2 className="text-2xl font-serif text-center group-hover:underline decoration-1 underline-offset-8">
            Notification priority
          </h2>
        </Link>
      </section>
    </div>
  );
};

export default Home;
