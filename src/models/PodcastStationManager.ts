import BaseModel from './BaseModel';
import PodcastStation from './PodcastStation';

export default class PodcastStationManager extends BaseModel {
  constructor() {
    super();
  }

  /**
   * geAll
   *
   */
  public geAll() {
    console.log('aa');
    let returnArray = [];
    try {
      const jsonString = this.store.get('podcastList') as string;
      const jsonData = JSON.parse(jsonString);

      console.log(jsonData);
      for (const idx in jsonData) {
        returnArray.push(PodcastStation.fromDictionary(jsonData[idx]));
      }
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
    return returnArray;
  }

  public saveStore(list: PodcastStation[]) {
    let saveDic = [];
    for (const idx in list) {
      saveDic.push(list[idx].toDictionary());
    }
    console.log(saveDic);

    this.store.set('podcastList', JSON.stringify(saveDic));
  }

  public setPodcastFromUrl(name: string, rssUrl: string) {
    let list = this.geAll();
    list.push(new PodcastStation(name, rssUrl));
    console.log(list);
    this.saveStore(list);
    console.log(this.geAll());
  }
}
