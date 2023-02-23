const Types = () => {
  const name: string = "Guoda";
  const surname: string = "Arlauskaite";
  const age: number = 29;
  const married: boolean = false;
  const pets: null = null;
  const lifePurpose: undefined = undefined;

  const title: string = "Vermontas";
  const subTitle: string = "Kavinė - Baras";
  const peopleCount: number = 5;
  const maxPeopleCount: number = 26;
  const isOpen: boolean = true;
  const openTime: string = "12:00";
  const closeTime: string = "02:00";
  const security: null = null;

  const numbers: Array<number> = [2, 6, 33, 23];
  const numbers2: number[] = [2, 6, 33, 23]; //Naudosim sita buda
  const items: (number | string)[] = ["5", 4, 74, "9"];
  const item: number | string = 1; //Skaicius arba stringas

  const addNumbers = (num1: number, num2: number) => {
    return num1 + num2;
  };

  const addedNumbers = addNumbers(1, 3);

  const car1: {
    make: string;
    color: string;
  } = {
    make: "volvo",
    color: "",
  };

  const response = true;

  if (response) {
    car1.color = "yellow";
  }

  const car2: {
    make: string;
    model?: string;
  } = {
    make: "BMW",
  };

  if (response) {
    car2.model = "X5";
  }

  type PPerson = {
    //praktiskai tas pats kaip interface, tik neturi tam tikru galimybiu
    name: string;
    age: number;
    email?: string;
  };

  interface Superhero {
    power: string;
  }

  interface SuperPerson extends Superhero {
    //interface gali extendinti, o type negali
    name: string;
  }

  interface Person {
    name: string; //required laukas
    age: number; //required laukas
    email?: string; //optional laukas
  }

  const person1: Person = {
    name: "Guoda",
    age: 29,
  };

  const person2: Person = {
    name: "Jonas",
    age: 49,
    email: "jonas@ponas.com",
  };

  console.log(
    person1,
    person2,
    name,
    surname,
    age,
    married,
    pets,
    lifePurpose,
    title,
    subTitle,
    peopleCount,
    maxPeopleCount,
    isOpen,
    openTime,
    closeTime,
    security,
    numbers,
    numbers2,
    items,
    item
  );

  return <div>Types</div>;
};

export default Types;
