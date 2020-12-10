# Rest API

## Service versioning
REST API service versioning follows well defined rules and conventions:
- Each version is composed by three digits : *x.y.z*
  - **X** : main service version. <br>
    It identifies a set of features implemented by service. When features change, main version will change.
  - **Y** : intermediate service version. <br>
    All features being equal, it identifies changes/updates about implementation aspects
  - **Z** : bug fixing service version. <br>
    It keep track of all changes need to fix bugs/aspects raised by customer or tests (manual or automatic)
- Base URL path of REST API contains full version identifier
- .