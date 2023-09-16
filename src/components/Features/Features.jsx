import Title from "../Layouts/Title";
import Card from "./Card";

import { featuresData } from "../../constants";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title
        title="Features"
        description="What I Do"
      />
      <div className="grid grid-cols-3 gap-20">
        {featuresData.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            icon={data.icon}
            description={data.des}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
