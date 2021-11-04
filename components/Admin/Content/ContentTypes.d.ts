type TechType = {
  name: string;
  value: string;
};

type DevTypes = {
  description: string;
  technologies: TechType[];
  title: string;
};

type ContentType = {
  about: string;
  backEnd: DevTypes;
  frontEnd: DevTypes;
  email: string;
  id: string;
  backEndTech: TechType[];
  frontEndTech: TechType[];
};
