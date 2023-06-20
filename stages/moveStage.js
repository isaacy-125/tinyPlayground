class MoveStage extends Tiny.Container {
  constructor() {
    super();
    this.initMoveToSprite();
    this.initMoveBySprite();
    this.initScaleToOrBySprite();
    this.initRotateToOrBySprite();
    this.initJumpToSprite();
  }
  initJumpToSprite() {
    const texture = Tiny.TextureCache['ant'];
    const sprite = new Tiny.Sprite(texture);
    sprite.setScale(0.5);
    sprite.setPosition(0, 200);
    // 时间 最终位置 高度 跳跃次数
    var action = Tiny.JumpTo(1200, Tiny.point(Tiny.WIN_SIZE.width - 50, 200), 50, 10);
    sprite.runAction(action);
    this.addChild(sprite);
  }
  initRotateToOrBySprite() {
    const texture = Tiny.TextureCache['ant'];
    const sprite = new Tiny.Sprite(texture);
    sprite.setScale(0.5);
    sprite.setAnchor(0.5);
    sprite.setPosition(sprite.width / 2, 150);
    sprite.setRotation(Tiny.deg2radian(45));
    // RotateTo旋转到90度
    // RotateBy旋转了90度
    var action = Tiny.RotateBy(1000, { rotation: Tiny.deg2radian(-45) });
    sprite.runAction(action);
    this.addChild(sprite);
  }
  initScaleToOrBySprite() {
    const texture = Tiny.TextureCache['ant'];
    const sprite = new Tiny.Sprite(texture);
    sprite.setScale(0.5);
    sprite.setPosition(0, 100);
    this.addChild(sprite);
    // x、y方向分别缩放到2倍 测试下来scaleBy的倍数是原始的倍数
    // scaleTo的倍数是相对于原始的倍数
    const action = Tiny.ScaleBy(3000, Tiny.scale(0.5));
    sprite.runAction(action);
  }
  initMoveToSprite() {
    const texture = Tiny.TextureCache['ant'];
    const sprite = new Tiny.Sprite(texture);
    sprite.setScale(0.5);
    // 移动到
    const action = Tiny.MoveTo(3000, Tiny.point(120, 0));
    sprite.runAction(action);
    this.addChild(sprite);
  }
  initMoveBySprite() {
    const texture = Tiny.TextureCache['ant'];
    const sprite = new Tiny.Sprite(texture);
    sprite.setScale(0.5);
    sprite.setPosition(0, 50);
    // 基于原点移动多少
    const action = Tiny.MoveBy(3000, Tiny.point(120, 0));
    sprite.runAction(action);
    this.addChild(sprite);
  }
}

export default MoveStage;