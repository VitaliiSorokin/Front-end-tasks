
    //TODO: Find out why the amount of honey in the hive is not increasing.
    function Bee(capacity, hive) {
        this.capacity = capacity;
        this.hive = hive;
    }

    function Hive() {
        this.pollen = 100;
    }

    Hive.prototype.addPollen = function(pollen) {
        this.pollen += pollen;
    }

    Hive.prototype.getPollen = function() {
        return this.pollen;
    }

    Bee.prototype.unloadPollen = function() {
        hive.addPollen(this.capacity);
    }


var hive = new Hive;
var bee = new Bee(10, hive);
console.log(hive.getPollen());

bee.unloadPollen();
    console.log(hive.getPollen());
    bee.unloadPollen();
    console.log(hive.getPollen());



//noMoneyNoHoney();

