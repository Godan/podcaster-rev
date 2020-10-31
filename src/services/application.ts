import PodcastStationManager from '@/models/PodcastStationManager';
import { dialog, ipcMain } from 'electron';

ipcMain.handle('testDialog', async (event, data) => {
  const podcastStation: PodcastStationManager = new PodcastStationManager();
  podcastStation.setPodcastFromUrl(data.podcastName, data.rssUrl);
  console.log(podcastStation.geAll());

  dialog.showMessageBox({
    title: 'podcastStation.name',
    message: 'data'
  });
});
