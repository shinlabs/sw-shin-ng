export class Personnage {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;

  constructor(name:string, birth_year:string, gender:string) {
    this.name = name;
    this.birth_year = birth_year;
    this.gender = gender;
  }
}
