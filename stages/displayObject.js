class DisplayObjectStage extends Tiny.Container {
    constructor() {
        super();
        this.initSprite();
        this.drawContainerBounds();
    }
    drawContainerBounds() {
        // 使用实例化对象的方法 getLocalBounds 获取到 bound
        var bound = this.getLocalBounds();
        // 为直观感受，给容器加上边框
        var rectangle = new Tiny.Graphics();
        rectangle.lineStyle(1, 0xFF3300, 1);
        rectangle.drawRect(bound.x, bound.y, bound.width, bound.height);
        rectangle.endFill();
        this.addChild(rectangle);
    }
    initSprite() {
        const texture = Tiny.TextureCache['ant'];

        for (var i = 0; i < 25; i++) {
            var sprite = new Tiny.Sprite(texture);
            sprite.setAnchor(0.5);
            sprite.setScale(0.3);
            sprite.setPosition((i % 5) * 50 + 200, Math.floor(i / 5) * 50 + 100);
            this.addChild(sprite);
        }
        this.setPivot(Tiny.WIN_SIZE.width / 2, Tiny.WIN_SIZE.height / 2);
        var action = Tiny.RotateTo(2000, {rotation: Tiny.deg2radian(360)});
        // 执行 action RepeatForever
        this.runAction(Tiny.RepeatForever(action));
    }
}

export default DisplayObjectStage;