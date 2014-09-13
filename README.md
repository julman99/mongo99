#mongo99

Script utilities for the [mongo shell](http://docs.mongodb.org/v2.2/mongo/).

## Using mongo99

To use mongo99 just open a mongo shell, and copy paste the [mongo99.js script](mongo99.js).

### Copy indexes from one server to another one

Sometimes you need to ensure that all the indexes on one DB map perfectly to the indexes of another DB.

**mongo99** allows you to do so:

- On the first DB, run:

```javascript
mongo99.createImportIndexCommand();
```

- Copy the full output of that command, and then paste it on the mongo shell of the DB you
want to ensure the indexes