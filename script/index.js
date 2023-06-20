import { config } from '../config/config.js'
import { resources } from '../resources/index.js';
import DisplayObjectStage from '../stages/displayObject.js';

Tiny.app = new Tiny.Application({
    ...config,
});

Tiny.Loader.run({
    resources,
    onProgress: (per) => {
        console.log('percent:', per + '%');
      },
      // 单个资源加载完成后的回调
      onComplete: (resourceLoader, resource) => {
        console.log(resource.url);
      },
      // 所有资源加载完成后的回调
      onAllComplete: (resourceLoader, object) => {
        Tiny.Application.FPS = 120;
        const displayObjectStage = new DisplayObjectStage();
        Tiny.app.run(displayObjectStage);
      },
})