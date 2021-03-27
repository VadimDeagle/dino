mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
tiles.set_tilemap(tilemap("""
    level1
"""))
mySprite.ay = 200

def on_forever():
    controller.move_sprite(mySprite)
forever(on_forever)
