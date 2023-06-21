import displayObjectStage from '../stages/displayObject.js';
import moveStage from '../stages/moveStage.js';

const scenes = {
    'displayObjectStage': displayObjectStage,
    'moveStage': moveStage,
}




document.addEventListener('click', (event) => {
    if (event.target.role === 'button') {
        // var scroller = new Tiny.Scroll(function(left, top, zoom) {
        //     // apply coordinates/zooming
        //   // 滚动的状态同步给 container
        //   container.position.y = -top;
        // }, {
        //     // 只设置 Y 轴方向可滚动
        //   scrollingY: true,
        // });
        
        // // 设置滚动区域尺寸
        // scroller.setDimensions(Tiny.WIN_SIZE.width, Tiny.WIN_SIZE.height, Tiny.WIN_SIZE.width, Tiny.WIN_SIZE.height);

        const stage = new scenes[event.target.id]();
        // stage.interactive = true;
        // stage.hitArea = new Tiny.Rectangle(0, 0, Tiny.WIN_SIZE.width, Tiny.WIN_SIZE.height);
        // // 按下时的事件监听
        // stage.on('pointerdown', function (data) {
        //     var e = data.data.originalEvent;
        //     // 同步给 scroller，如果是移动端则使用 e.changedTouches，如果是 PC 上则使用 [e]
        //     scroller.doTouchStart(e.touches || [e], e.timeStamp);
        // });
        // // 移动时的事件监听
        // stage.on('pointermove', function (data) {
        //     var e = data.data.originalEvent;
        //     scroller.doTouchMove(e.touches || [e], e.timeStamp, e.scale);
        // });
        // // 抬起时的事件监听
        // stage.on('pointerup', function (data) {
        //     const e = data.data.originalEvent;
        //     scroller.doTouchEnd(e.timeStamp);
        // });
        // // 移出屏幕的事件监听
        // stage.on('pointerupoutside', function (data) {
        //     const e = data.data.originalEvent;
        //     scroller.doTouchEnd(e.timeStamp);
        // });
        Tiny.app.replaceScene(stage);
    }
})