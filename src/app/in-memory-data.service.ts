import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Flag } from './flag';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const flags = [
      { id: 0, name: 'Albania', path: '../../assets/images/europe/Albania.png' },
      { id: 1, name: 'Andorra', path: '../../assets/images/europe/Andorra.png' },
      { id: 2, name: 'Austria', path: '../assets/images/europe/Austria.png' },
      { id: 3, name: 'Belarus', path: '../assets/images/europe/Belarus.png' },
      { id: 4, name: 'Belgium', path: '../assets/images/europe/Belgium.png' },
      { id: 5, name: 'Bosnia and Herzegovina', path: '../assets/images/europe/BosniaAndHerzegovina.png' },
      { id: 6, name: 'Bulgaria', path: '../assets/images/europe/Bulgaria.png' },
      { id: 7, name: 'Croatia', path: '../assets/images/europe/Croatia.png' },
      { id: 8, name: 'Cyprus', path: '../assets/images/europe/Cyprus.png' },
      { id: 9, name: 'Czech Republic', path: '../assets/images/europe/CzechRepublic.png' },
      { id: 10, name: 'Denmark', path: '../assets/images/europe/Denmark.png' },
      { id: 11, name: 'England', path: '../assets/images/europe/England.png' },
      { id: 12, name: 'Estonia', path: '../assets/images/europe/Estonia.png' },
      { id: 13, name: 'Faroe Islands', path: '../assets/images/europe/FaroeIslands.png' },
      { id: 14, name: 'Finland', path: '../assets/images/europe/Finland.png' },
      { id: 15, name: 'France', path: '../assets/images/europe/France.png' },
      { id: 16, name: 'Germany', path: '../assets/images/europe/Germany.png' },
      { id: 17, name: 'Gibraltar', path: '../assets/images/europe/Gibraltar.png' },
      { id: 18, name: 'Greece', path: '../assets/images/europe/Greece.png' },
      { id: 19, name: 'Hungary', path: '../assets/images/europe/Hungary.png' },
      { id: 20, name: 'Iceland', path: '../assets/images/europe/Iceland.png' },
      { id: 21, name: 'Ireland', path: '../assets/images/europe/Ireland.png' },
      { id: 22, name: 'Italy', path: '../assets/images/europe/Italy.png' },
      { id: 23, name: 'Latvia', path: '../assets/images/europe/Latvia.png' },
      { id: 24, name: 'Liechtenstein', path: '../assets/images/europe/Liechtenstein.png' },
      { id: 25, name: 'Lithuania', path: '../assets/images/europe/Lithuania.png' },
      { id: 26, name: 'Luxembourg', path: '../assets/images/europe/Luxembourg.png' },
      { id: 27, name: 'Malta', path: '../assets/images/europe/Malta.png' },
      { id: 28, name: 'Moldova', path: '../assets/images/europe/Moldova.png' },
      { id: 29, name: 'Monaco', path: '../assets/images/europe/Monaco.png' },
      { id: 30, name: 'Montenegro', path: '../assets/images/europe/Montenegro.png' },
      { id: 31, name: 'Netherlands', path: '../assets/images/europe/Netherlands.png' },
      { id: 32, name: 'North Macedonia', path: '../assets/images/europe/NorthMacedonia.png' },
      { id: 33, name: 'Norway', path: '../assets/images/europe/Norway.png' },
      { id: 34, name: 'Poland', path: '../assets/images/europe/Poland.png' },
      { id: 35, name: 'Portugal', path: '../assets/images/europe/Portugal.png' },
      { id: 36, name: 'Romania', path: '../assets/images/europe/Romania.png' },
      { id: 37, name: 'Russia', path: '../assets/images/europe/Russia.png' },
      { id: 38, name: 'San Marino', path: '../assets/images/europe/SanMarino.png' },
      { id: 39, name: 'Scotland', path: '../assets/images/europe/Scotland.png' },
      { id: 40, name: 'Serbia', path: '../assets/images/europe/Serbia.png' },
      { id: 41, name: 'Slovakia', path: '../assets/images/europe/Slovakia.png' },
      { id: 42, name: 'Slovenia', path: '../assets/images/europe/Slovenia.png' },
      { id: 43, name: 'Spain', path: '../assets/images/europe/Spain.png' },
      { id: 44, name: 'Sweden', path: '../assets/images/europe/Sweden.png' },
      { id: 45, name: 'Switzerland', path: '../assets/images/europe/Switzerland.png' },
      { id: 46, name: 'Turkey', path: '../assets/images/europe/Turkey.png' },
      { id: 47, name: 'Ukraine', path: '../assets/images/europe/Ukraine.png' },
      { id: 48, name: 'United Kingdom', path: '../assets/images/europe/UnitedKingdom.png' },
      { id: 49, name: 'Vatican City', path: '../assets/images/europe/VaticanCity.png' },
      { id: 50, name: 'Wales', path: '../assets/images/europe/Wales.png' },
    ];
    return { flags };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(flags: Flag[]): number {
    return flags.length > 0 ? Math.max(...flags.map(flag => flag.id)) + 1 : 11;
  }
}
