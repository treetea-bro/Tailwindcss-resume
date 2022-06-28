import { Py_2 } from "./Py_2";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

export const InfoSection = (props) => {
  return (
    <Section>
      <SectionTitle>Info</SectionTitle>

      <Py_2>
        <div className="font-bold">Address</div>
        <div className="text-gray-400">
          <div>34 Gangnam Load</div>
          <div>Seoul, 12603, South Korea</div>
        </div>
      </Py_2>

      <Py_2>
        <div className="font-bold">Phone</div>
        <div className="text-gray-400">
          <div>(000) 000-0000</div>
        </div>
      </Py_2>

      <Py_2>
        <div className="font-bold">Email</div>
        <div className="text-gray-400">sorpwjdafh@naver.com</div>
      </Py_2>
    </Section>
  );
};
