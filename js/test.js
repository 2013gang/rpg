RPGJS.Materials = {
	"characters": {
		"1": "chara.png"
	},
	"tilesets": {
		"1": "tileset.png"
	}
};

RPGJS.Database = {
	"actors": {
		"1": {
			"graphic": "1"
		}
	},
	"map_infos": {
		"1": {
		"tileset_id": "1"
		}
	}
};

RPGJS.defines({
    canvas: "canvas_id",
    autoload: false
}).ready(function() {

    RPGJS.Player.init({
        actor: 1,
        start: {x: 10, y: 10, id: 1} // Here, map id doesn't exist
    });

    RPGJS.Scene.map();

});