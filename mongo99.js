mongo99 = (function() {
    function exportIndexes(){
        var collections = db.getCollectionNames();
        var indexes = {};
        for(c in collections){
            var collectionName = collections[c];
            var indexOfCollection = db[collectionName].getIndexes();
            indexes[collectionName] = indexOfCollection;
        }
        return indexes;
    }

    function createExportedIndexes(indexes){
        for(collection in indexes) {
            var indexesOfColl = indexes[collection];
            for(idx in indexesOfColl){
                var indexDefinition = indexesOfColl[idx];
                var isUnique = indexDefinition.unique == true;
                db[collection].ensureIndex(indexDefinition.key, {unique: isUnique});
            }
        }
    }

    function createImportIndexCommand(){
        var exported = exportIndexes();

        print(
        "//Copy the following text and paste it on the destination server\n" +
        "//Remember to include mongo-utils first and select the apropiate DB \n" +    
        "mongo99.importIndexes(\n" +
        tojsononeline(exported) + "\n" +
        ")\n" +
        "//End of command\n" 
        );
    }
    
    return {
        exportIndexes: createImportIndexCommand,
        importIndexes: createExportedIndexes
    }
})();