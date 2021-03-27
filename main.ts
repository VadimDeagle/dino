controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.setLife(3)
mySprite = sprites.create(img`
    . . c c c c c c c c c c c c . . 
    . c c 6 6 6 6 7 7 7 7 7 7 7 c . 
    c e c 6 6 6 6 6 7 7 6 6 6 7 c . 
    c e c 6 1 c 1 6 7 c 7 7 7 c c . 
    c c c 6 1 c 1 6 7 7 7 7 7 7 c . 
    . c e c 1 1 1 6 7 7 7 7 7 7 c . 
    . c e c 6 6 6 6 7 7 7 7 7 7 c . 
    . c c c 6 6 6 6 6 7 c c c c c . 
    . . . c c 6 6 7 7 7 7 c . . . . 
    . . . . c 6 d d d d d c . . . . 
    . . . . c 6 d d d d d c . . . . 
    . . c c 7 6 d d d d d c . . . . 
    . . c 7 6 6 7 c d d 7 c c . . . 
    . . c c c 6 6 c 7 7 7 7 c . . . 
    . . . . c c c c c c 6 7 c . . . 
    . . . . . . . . . c c c . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . c c c c c c c c c c c c . . 
    . c c 6 6 6 6 7 7 7 7 7 7 7 c . 
    c e c 6 6 6 6 6 7 7 6 6 6 7 c . 
    c e c 6 1 c 1 6 7 c 7 7 7 c c . 
    c c c 6 1 c 1 6 7 7 7 7 7 7 c . 
    . c e c 1 1 1 6 7 7 7 7 7 7 c . 
    . c e c 6 6 6 6 7 7 7 7 7 7 c . 
    . c c c 6 6 6 6 6 7 c c c c c . 
    . . . c c 6 6 7 7 7 7 c . . . . 
    . . . . c 6 d d d d d c . . . . 
    . . . . c 6 d d d d d c . . . . 
    . . c c 7 6 d d d d d c . . . . 
    . . c 7 6 6 7 c d d 7 c c . . . 
    . . c c c 6 6 c 7 7 7 7 c . . . 
    . . . . c c c c c c 6 7 c . . . 
    . . . . . . . . . c c c . . . . 
    `,img`
    . . c c c c c c c c c c c c . . 
    . c c 6 6 6 6 7 7 7 7 7 7 7 c . 
    c e c 6 6 6 6 6 7 7 6 6 6 7 c . 
    c e c 6 1 c 1 6 7 c 7 7 7 c c . 
    c c c 6 1 c 1 6 7 7 7 7 7 7 c . 
    . c e c 1 1 1 6 7 7 7 7 7 7 c . 
    . c e c 6 6 6 6 7 7 7 7 7 7 c . 
    . c c c 6 6 6 6 6 7 c c c c c . 
    . . . c c 6 6 7 7 7 7 c . . . . 
    . . . . c 6 d d d d d c . . . . 
    . . . . c 6 d d d d d c . . . . 
    . . c c 7 6 d d d d d c . . . . 
    . . c 7 6 6 7 c d d 7 c c . . . 
    . . c c c 6 6 c 7 7 7 7 c . . . 
    . . . c c c c c c c c c c . . . 
    . . . c c c . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
true
)
tiles.setTilemap(tilemap`level1`)
mySprite.ay = 150
mySprite.x = 30
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(50)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 6 6 6 6 . . 
            . . . . . 6 c 6 6 6 6 6 6 9 6 . 
            . . . . 6 c c 6 6 6 6 6 6 9 c 6 
            . . d 6 9 c c 6 9 9 9 9 9 9 c c 
            . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
            . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
            . 6 6 6 6 6 8 b b b b 8 b b b 8 
            . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
            . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
            . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
            . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
            . 8 8 8 8 f f f 8 8 8 8 f f f f 
            . . . 8 f f f f f 8 8 f f f f f 
            . . . . f f f f . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        mySprite2.ay = 500
        mySprite2.x = 160
        mySprite2.vx = -80
        mySprite2.lifespan = 2000
    }
})
