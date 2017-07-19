import { Injectable } from '@angular/core';
import { Dxcc } from '../../models/Dxcc';

@Injectable()
export class StaticDataService {
  public dxcc: Array<Dxcc> = [];
  constructor() { }

  initDxcc() {
    this.dxcc.push({
      prefix: null, entity: "Spratly Is", continent: "AS", ituZone: 50,
      cqZone: 26, entityCode: 247
    });
  }
  private addDx(prefix: string, country: string, cont: string, long: number,
    lat: number, misc: string, misc2: string, misc3: string) {

  }
  private parseDXCCFile() {

  }
}

