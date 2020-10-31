export default class PodcastStation {
  rssUrl: string;
  name: string;

  constructor(name: string, rssUrl: string) {
    this.name = name;
    this.rssUrl = rssUrl;
  }

  /**
   *to_json
   */
  public toDictionary() {
    return { name: this.name, rssUrl: this.rssUrl };
  }

  static fromDictionary(dic: { name: string; rssUrl: string }) {
    return new PodcastStation(dic.name, dic.rssUrl);
  }
}
