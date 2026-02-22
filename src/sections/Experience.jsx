import { Timeline } from "./components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section id="work" className="c-space my-10">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;