import { Section } from "./Section";

export const Photo = (props) => {
  return (
    <Section>
      <img
        className="rounded-full w-60"
        src="https://source.unsplash.com/200x200?person"
      />
    </Section>
  );
};
