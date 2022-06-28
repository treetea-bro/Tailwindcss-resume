import { Section } from "./Section";

export const EducationSection = (props) => {
  return (
    <Section>
      <div className="text-yellow-300 text-2xl pb-4">Education</div>

      <div>
        <div className="text-xl">O O Uiv, Physical education</div>
        <div className="flex">
          <div>Oct 2010 - Dec 2013</div>
          <div className="pl-6 text-gray-400">South Korea</div>
        </div>
        <div>
          <ul className="list-disc pl-10 text-sm text-gray-400 py-4">
            <li>Graduated at the top of my class.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};
