import { Section } from "./Section";
import { Py_2 } from "./Py_2";

export const SkillsSection = (props) => {
  return (
    <Section>
      <div className="text-yellow-300 text-2xl pb-4">Skills</div>
      <Py_2>
        <div className="font-bold">Front-end</div>
        <div>
          <div>★★★★☆</div>
        </div>
      </Py_2>

      <Py_2>
        <div className="font-bold">Back-end</div>
        <div>
          <div>★★★★★</div>
        </div>
      </Py_2>

      <Py_2>
        <div className="font-bold">Artificial Intelligence</div>
        <div>
          <div>★★★★☆</div>
        </div>
      </Py_2>

      <Py_2>
        <div className="font-bold">Block chain</div>
        <div>
          <div>★★★☆☆</div>
        </div>
      </Py_2>
    </Section>
  );
};
