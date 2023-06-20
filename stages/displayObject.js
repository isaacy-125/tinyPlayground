class DisplayObjectStage extends Tiny.Container {
    constructor() {
        super();
        this.initSprite();
        this.drawContainerBounds();
        this.onShow = function() {
            console.log('onShow');
        }
    }
    actionTask() {
        const action = Tiny.RepeatForever(Tiny.RotateBy(20000, {rotation: Tiny.deg2radian(360)}));
        action.setFPS(120);
        this.runAction(action);
    }
    drawContainerBounds() {
        // 使用实例化对象的方法 getLocalBounds 获取到 bound
        var bound = this.getBounds();
        // 为直观感受，给容器加上边框
        var rectangle = new Tiny.Graphics();
        rectangle.lineStyle(1, 0xFF3300, 1);
        rectangle.drawRect(bound.x, bound.y, bound.width, bound.height);
        rectangle.endFill();
        this.addChild(rectangle);
        this.setPivot(this.width / 2, this.height / 4);
        this.setPosition(Tiny.WIN_SIZE.width / 2, this.height)
        this.actionTask();
        // this.runAction(Tiny.RotateBy(2000, {rotation: Tiny.deg2radian(360)}));
    }
    initSprite() {
        const texture = Tiny.TextureCache['ant'];

        for (var i = 0; i < 4; i++) {
            var sprite = new Tiny.Sprite(texture);
            sprite.setAnchor(0.5);
            sprite.setScale(0.5);
            sprite.setPosition((i % 5) * 50, Math.floor(i / 5) * 50);
            this.addChild(sprite);
        }
    }
}

export default DisplayObjectStage;