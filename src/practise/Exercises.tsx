const Exercises = () => {
  //1
  const getSentence = (name?: string) => {
    if (name) {
      return `One for ${name}, one for me`;
    } else {
      return `One for you, one for me`;
    }
  };
  console.log(getSentence());

  //2
  const ageInSeconds: number = 914544000;
  const age = ageInSeconds / 31536000;

  const planetYears: {
    earth: number;
    mercury: number;
    venus: number;
    mars: number;
    jupiter: number;
    saturn: number;
    uranus: number;
    neptune: number;
  } = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  const calculateAge = (planetYears: number) => {
    return Math.floor(age * planetYears);
  };

  //3
  const phrase: string = " Valstybine mokesciu inspekcija";

  const getAcronym = (phrase: string) => {
    return phrase
      .split(/\s/)
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  //4

  return (
    <div>
      <div>
        <h2>Exercise 1:</h2>
        <p>{getSentence("Liucija")}</p>
      </div>
      <div>
        <h2>Exercise 2:</h2>
        <p>Your age in Earth years is {calculateAge(planetYears.earth)}</p>
        <p>Your age in Mercury years is {calculateAge(planetYears.mercury)}</p>
        <p>Your age in Mars years is {calculateAge(planetYears.mars)}</p>
        <p>Your age in Venus years is {calculateAge(planetYears.venus)}</p>
        <p>Your age in Jupiter years is {calculateAge(planetYears.jupiter)}</p>
        <p>Your age in Saturn years is {calculateAge(planetYears.saturn)}</p>
        <p>Your age in Uranus years is {calculateAge(planetYears.uranus)}</p>
        <p>Your age in Neptune years is {calculateAge(planetYears.neptune)}</p>
      </div>
      <h2>Exercise 3:</h2>
      <p>
        {getAcronym(phrase)} means {phrase}
      </p>
    </div>
  );
};

export default Exercises;
