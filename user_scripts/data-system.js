// thanks to dragonian for help

const enmap_db = new Enmap({
    name: "playerdata",
    autoFetch: true,
    fetchAll: false
});

function getPlayerData(p) {
    const key = `${p.userId}-data`
    let data = enmap_db.ensure(key, { score: 0 })
    return data.score
}

function updateData(p) {
    const key = `${p.userId}-data`
    enmap_db.inc(key, "score")
}

module.exports  = { getPlayerData, updateData }