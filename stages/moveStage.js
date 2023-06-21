class MoveStage extends Tiny.Container {
  constructor() {
    super();
    this.initMoveToSprite();
    this.initMoveByAndBackSprite();
    this.initScaleToOrBySprite();
    this.initRotateToOrBySprite();
    this.initJumpToSprite();
    this.initBlinkSprite();
    this.initFadeInOrOutOrToSprite();
    this.eventsHandler();
    this.runSequenceSprite();
    this.initPauseOrResumeSprite();
    this.initEasingSprite();
  }
  initEasingSprite() {
    const texture = Tiny.TextureCache['ant'];
    const sprite = new Tiny.Sprite(texture);
    sprite.setScale(0.5);
    sprite.setPosition(0, 550);
    this.addChild(sprite);
  }
  initPauseOrResumeSprite() {
    const texture = Tiny.TextureCache['ant'];
    const sprite = new Tiny.Sprite(texture);
    sprite.setScale(0.5);
    sprite.setPosition(0, 500);
    const moveByAction = Tiny.MoveBy(1000, Tiny.point(100, 0));
    // 设置action延时
    moveByAction.setDelay(1000);
    sprite.runAction(Tiny.RepeatForever(Tiny.Back(moveByAction)));
    sprite.setEventEnabled(true);
    sprite.on('pointerdown', function() {
      if (moveByAction.isPlaying()) {
        moveByAction.pause();
      } else {
        moveByAction.resume();
      }
    });
    this.addChild(sprite);
  }
  runSequenceSprite() {
    const texture = Tiny.TextureCache['ant'];
    const sprite = new Tiny.Sprite(texture);
    sprite.setScale(0.5);
    sprite.setPosition(0, 450 + sprite.height / 2);
    sprite.setAnchor(0.5);
    const moveAction = Tiny.MoveBy(1000, Tiny.point(100, 0));
    const rotateAction = Tiny.RotateBy(1000, {rotation: Tiny.deg2radian(360)});
    // runSequenceAction是顺序执行
    // 如果换成runAction则是同时执行
    sprite.runSequenceAction(moveAction, rotateAction);
    this.addChild(sprite);
  }
  eventsHandler() {
    // onComplete
    const texture = Tiny.TextureCache['ant'];
    const sprite = new Tiny.Sprite(texture);
    sprite.setScale(0.5);
    sprite.setPosition(0, 350);
    const fadeInFunc = Tiny.FadeIn(1000);
    const fadeOutFunc = Tiny.FadeOut(1000);
    fadeOutFunc.onComplete = function() {
      sprite.runAction(fadeInFunc);
    };
    fadeInFunc.onComplete = function() {
      sprite.runAction(fadeOutFunc);
    };
    sprite.runAction(fadeOutFunc);
    this.addChild(sprite);

    // onUpdate
    const texture2 = Tiny.TextureCache['ant'];
    const texture3 = Tiny.TextureCache['einstein'];
    const sprite2 = new Tiny.Sprite(texture2);
    const sprite3 = new Tiny.Sprite(texture3);
    sprite2.setScale(0.5);
    sprite3.setScale(0.5);
    sprite2.setPosition(0, 400);
    sprite3.setPosition(200, 400);

    const scaleByFun = Tiny.ScaleBy(1000, Tiny.scale(2));
    scaleByFun.onUpdate = function(tween, object) {
      sprite3.setScale(tween.scaleX, tween.scaleY);
      // 是为了确保在执行自定义的 onUpdate 回调函数之后，仍然执行其他可能已定义的更新操作函数。这样可以保证其他更新操作函数（如果有的话）仍然能够执行，以维持整个动画的正确状态
      this._onUpdate.call(this, tween, object)
    };
    sprite2.runAction(scaleByFun);

    this.addChild(sprite2);
    this.addChild(sprite3);
  }
  initFadeInOrOutOrToSprite () {
    const texture = Tiny.TextureCache['ant'];
    const sprite = new Tiny.Sprite(texture);
    sprite.setScale(0.5);
    sprite.setPosition(0, 300);
    // 1000毫秒显示出来
    var action = Tiny.FadeIn(1000);
    // 先设置为透明
    sprite.setOpacity(0);
    sprite.runAction(action);
    setTimeout(() => {
      // 2000毫秒全部隐藏
      var action2 = Tiny.FadeOut(2000);
      sprite.runAction(action2);
    }, 1000);
    setTimeout(() => {
      // 1000毫秒变成0.5透明度
      var action3 = Tiny.FadeTo(1000, 0.5);
      sprite.runAction(action3);
    }, 3000)
    this.addChild(sprite);
  }
  initBlinkSprite() {
    const texture = Tiny.TextureCache['ant'];
    const sprite = new Tiny.Sprite(texture);
    sprite.setScale(0.5);
    sprite.setPosition(0, 250);
    // 隐藏100ms，显示1000ms
    var action = Tiny.Blink(100, 1000);
    sprite.runAction(Tiny.Repeat(3, action));
    this.addChild(sprite);
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
  initMoveByAndBackSprite() {
    const texture = Tiny.TextureCache['ant'];
    const sprite = new Tiny.Sprite(texture);
    sprite.setScale(0.5);
    sprite.setPosition(0, 50);
    // 基于原点移动多少
    const action = Tiny.MoveBy(3000, Tiny.point(120, 0));
    sprite.runAction(Tiny.Back(action));
    this.addChild(sprite);
  }
}

export default MoveStage;